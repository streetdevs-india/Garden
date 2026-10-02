"""Push prepared _mcp_push_*.json payloads (same shape as user-github push_files)."""
import json
import os
import subprocess
import urllib.error
import urllib.request

OWNER, REPO, BRANCH = "streetdevs-india", "Garden", "main"
API = "https://api.github.com"
BASE = os.path.dirname(os.path.abspath(__file__))


def token() -> str:
    t = os.environ.get("GITHUB_TOKEN") or os.environ.get("GH_TOKEN")
    if t:
        return t.strip()
    out = subprocess.run(["gh", "auth", "token"], capture_output=True, text=True, check=True)
    return out.stdout.strip()


def gh(method: str, path: str, data=None, tok: str = ""):
    req = urllib.request.Request(
        f"{API}{path}",
        data=json.dumps(data).encode() if data is not None else None,
        method=method,
        headers={
            "Authorization": f"Bearer {tok}",
            "Accept": "application/vnd.github+json",
            "X-GitHub-Api-Version": "2022-11-28",
            "User-Agent": "garden-live-batch-push",
        },
    )
    try:
        with urllib.request.urlopen(req) as resp:
            body = resp.read().decode()
            return json.loads(body) if body else {}
    except urllib.error.HTTPError as e:
        err = e.read().decode()
        raise RuntimeError(f"{method} {path} -> {e.code}: {err[:800]}") from e


def push_files_payload(payload: dict, tok: str) -> str:
    ref_path = f"/repos/{OWNER}/{REPO}/git/ref/heads/{BRANCH}"
    ref = gh("GET", ref_path, tok=tok)
    base_sha = ref["object"]["sha"]
    base_commit = gh("GET", f"/repos/{OWNER}/{REPO}/git/commits/{base_sha}", tok=tok)
    base_tree = base_commit["tree"]["sha"]

    tree_entries = []
    for f in payload["files"]:
        path = f["path"]
        content = f["content"]
        low = path.lower()
        is_binary = low.endswith((".png", ".pdf", ".jpg", ".jpeg", ".webp", ".ico", ".gif"))
        blob = gh(
            "POST",
            f"/repos/{OWNER}/{REPO}/git/blobs",
            {"content": content, "encoding": "base64" if is_binary else "utf-8"},
            tok=tok,
        )
        tree_entries.append(
            {"path": path, "mode": "100644", "type": "blob", "sha": blob["sha"]}
        )

    new_tree = gh(
        "POST",
        f"/repos/{OWNER}/{REPO}/git/trees",
        {"base_tree": base_tree, "tree": tree_entries},
        tok=tok,
    )
    new_commit = gh(
        "POST",
        f"/repos/{OWNER}/{REPO}/git/commits",
        {
            "message": payload["message"],
            "tree": new_tree["sha"],
            "parents": [base_sha],
        },
        tok=tok,
    )
    gh("PATCH", ref_path, {"sha": new_commit["sha"], "force": False}, tok=tok)
    return new_commit["sha"]


def main():
    tok = token()
    results = []
    for n in range(1, 10):
        path = os.path.join(BASE, f"_mcp_push_{n}.json")
        with open(path, encoding="utf-8") as f:
            payload = json.load(f)
        try:
            sha = push_files_payload(payload, tok)
            results.append(
                {
                    "batch": n,
                    "ok": True,
                    "commit": sha,
                    "files": len(payload["files"]),
                    "message": payload["message"],
                }
            )
            print(f"OK batch-{n} commit={sha} files={len(payload['files'])}")
        except Exception as e:
            results.append({"batch": n, "ok": False, "error": str(e)})
            print(f"FAIL batch-{n}: {e}")
            break

    out = os.path.join(BASE, "_push_results.json")
    with open(out, "w", encoding="utf-8") as f:
        json.dump(results, f, indent=2)
    return 0 if all(r.get("ok") for r in results) else 1


if __name__ == "__main__":
    raise SystemExit(main())
