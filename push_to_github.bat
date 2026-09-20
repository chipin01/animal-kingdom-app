@echo off
echo =======================================================
echo Pushing Animal Kingdom App changes to GitHub...
echo =======================================================
git push origin main
if %ERRORLEVEL% equ 0 (
    echo.
    echo =======================================================
    echo SUCCESS: All changes successfully pushed to GitHub!
    echo Check GitHub Actions or visit your site:
    echo https://chipin01.github.io/animal-kingdom-app/
    echo =======================================================
) else (
    echo.
    echo Please authenticate using your GitHub account when prompted.
)
pause
