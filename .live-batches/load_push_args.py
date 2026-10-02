"""Load _mcp_push_N.json and print push_files args JSON to stdout."""
import json
import sys

n = int(sys.argv[1])
path = rf"c:\Users\lakha\Desktop\Garden\.live-batches\_mcp_push_{n}.json"
with open(path, encoding="utf-8") as f:
    p = json.load(f)
out = {
    "owner": p["owner"],
    "repo": p["repo"],
    "branch": p["branch"],
    "message": p["message"],
    "files": [{"path": x["path"], "content": x["content"]} for x in p["files"]],
}
sys.stdout.reconfigure(encoding="utf-8")
json.dump(out, sys.stdout, ensure_ascii=False)
