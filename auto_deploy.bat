@echo off
set GIT_PATH="C:\Program Files\Git\cmd\git.exe"

echo [1/3] Staging changes...
%GIT_PATH% add .

set /p msg="Enter commit message (press Enter for 'Update site'): "
if "%msg%"=="" set msg=Update site

echo [2/3] Committing changes: %msg%...
%GIT_PATH% commit -m "%msg%"

echo [3/3] Pushing to GitHub...
%GIT_PATH% push origin main

echo.
echo ========================================
echo Deployment triggered! 
echo Your site will be live in ~30 seconds at:
echo https://perumugroup.github.io/perumu-hair-oil/
echo ========================================
pause
