@echo off
cd /d C:\Users\LEGION\Documents\Codex\2026-05-19\ai-ai-114-1-2-3
echo Pushing Beian AI Learning project to GitHub...
echo.
"C:\Program Files\Git\cmd\git.exe" --git-dir "..\beian-ai-git-store" --work-tree . remote set-url origin https://github.com/gpeter899-hash/beian-ai-learning.git
"C:\Program Files\Git\cmd\git.exe" --git-dir "..\beian-ai-git-store" --work-tree . push -u origin main
echo.
echo If GitHub sign-in appeared, finish it in your browser and then check the result above.
echo Press any key to close.
pause >nul
