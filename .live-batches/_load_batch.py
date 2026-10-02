import json
import sys

n = int(sys.argv[1])
path = rf"c:\Users\lakha\Desktop\Garden\.live-batches\_mcp_push_{n}.json"
with open(path, encoding="utf-8") as f:
    json.dump(json.load(f), sys.stdout, ensure_ascii=False)
