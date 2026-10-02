"""Load batch N push_files args and write compact summary for orchestration."""
import json
import sys

BASE = r"c:\Users\lakha\Desktop\Garden\.live-batches"
n = int(sys.argv[1])
with open(f"{BASE}\\_mcp_push_{n}.json", encoding="utf-8") as f:
    p = json.load(f)
args = {
    "owner": p["owner"],
    "repo": p["repo"],
    "branch": p["branch"],
    "message": p["message"],
    "files": [{"path": x["path"], "content": x["content"]} for x in p["files"]],
}
out = f"{BASE}\\_args{n}.json"
with open(out, "w", encoding="utf-8") as f:
    json.dump(args, f, ensure_ascii=False)
print(json.dumps({"batch": n, "files": len(args["files"]), "bytes": len(json.dumps(args)), "path": out}))
