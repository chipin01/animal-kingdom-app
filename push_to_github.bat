@echo off
setlocal
title Animal Kingdom - GitHub Uploader

echo =======================================================
echo   THE ANIMAL KINGDOM APP - GITHUB UPLOADER
echo =======================================================
echo.
echo Uploading to GitHub repository (origin/main)...
echo (Your web browser may open to authorize GitHub)
echo.

git push origin main
set PUSH_RESULT=%ERRORLEVEL%

echo.
if %PUSH_RESULT% equ 0 (
    echo =======================================================
    echo  SUCCESS: All changes are now live on GitHub!
    echo =======================================================
    echo.
    echo Live site: https://chipin01.github.io/animal-kingdom-app/
    echo.
) else (
    echo =======================================================
    echo  Push not completed yet (Code: %PUSH_RESULT%).
    echo =======================================================
    echo.
    echo If your browser opened, click "Authorize".
    echo If it showed a code, enter it at: https://github.com/login/device
    echo.
)

echo.
echo =======================================================
echo This window will stay open so you can read everything.
echo =======================================================
set /p DUMMY="Press Enter to close this window: "
