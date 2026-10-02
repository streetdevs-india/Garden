"""Load each _mcp_push_N.json and print batch summary (for MCP push_files orchestration)."""
import json
import os

BASE = os.path.dirname(os.path.abspath(__file__))
for n in range(1, 10):
    with open(os.path.join(BASE, f"_mcp_push_{n}.json"), encoding="utf-8") as f:
        p = json.load(f)
    print(n, p["message"], len(p["files"]), sum(len(x["content"]) for x in p["files"]))
