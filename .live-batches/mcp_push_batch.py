"""Write push_files arguments JSON for batch N."""
import json
import sys

n = int(sys.argv[1])
out_path = sys.argv[2] if len(sys.argv) > 2 else None
path = rf"c:\Users\lakha\Desktop\Garden\.live-batches\_mcp_push_{n}.json"
with open(path, encoding="utf-8") as f:
    payload = json.load(f)
out = {
    "owner": payload["owner"],
    "repo": payload["repo"],
    "branch": payload["branch"],
    "message": payload["message"],
    "files": [{"path": x["path"], "content": x["content"]} for x in payload["files"]],
}
if out_path:
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(out, f, ensure_ascii=False)
else:
    sys.stdout.reconfigure(encoding="utf-8")
    json.dump(out, sys.stdout, ensure_ascii=False)
