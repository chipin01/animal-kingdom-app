@echo off
cls
echo =======================================================
echo   THE ANIMAL KINGDOM APP - GITHUB UPLOADER
echo =======================================================
echo.
echo NOTE: If Git shows a one-time code (like ABCD-1234):
echo 1. Open your browser to: https://github.com/login/device
echo 2. Enter that code and click "Continue / Authorize"
echo.
echo =======================================================
echo Uploading all 9 commits to GitHub (origin main)...
echo =======================================================
git push origin main
if %ERRORLEVEL% equ 0 (
    echo.
    echo =======================================================
    echo SUCCESS: All changes successfully pushed to GitHub!
    echo Visit your live site:
    echo https://chipin01.github.io/animal-kingdom-app/
    echo =======================================================
) else (
    echo.
    echo If it showed a code above, please enter it at:
    echo https://github.com/login/device
)
pause
