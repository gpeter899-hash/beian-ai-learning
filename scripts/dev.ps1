$ErrorActionPreference = "Stop"
$projectRoot = "C:\Users\LEGION\Documents\Codex\2026-05-19\ai-ai-114-1-2-3"
$node = "C:\Users\LEGION\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
$env:Path = "C:\Users\LEGION\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin;$env:Path"
Set-Location $projectRoot
& $node "node_modules\next\dist\bin\next" dev --webpack
