$ErrorActionPreference = "Stop"
$node = "C:\Users\LEGION\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
$env:Path = "C:\Users\LEGION\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin;$env:Path"
& $node "node_modules\next\dist\bin\next" build --webpack
