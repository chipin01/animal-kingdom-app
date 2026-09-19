@echo off
setlocal
cd /d "%~dp0"
echo ========================================================
echo   Starting Animal Kingdom Local Server on port 3000...
echo ========================================================

:: Check if node is available in PATH
where node >nul 2>&1
if %ERRORLEVEL% EQU 0 (
    echo Using system node:
    node -v
    node server.js
    goto :eof
)

:: Fallback to local Playwright Node runtime
if exist "%LOCALAPPDATA%\ms-playwright-go\1.57.0\node.exe" (
    echo Using Node runtime at %LOCALAPPDATA%\ms-playwright-go\1.57.0\node.exe
    "%LOCALAPPDATA%\ms-playwright-go\1.57.0\node.exe" server.js
    goto :eof
)

if exist "%LOCALAPPDATA%\ms-playwright-go\1.50.1\node.exe" (
    echo Using Node runtime at %LOCALAPPDATA%\ms-playwright-go\1.50.1\node.exe
    "%LOCALAPPDATA%\ms-playwright-go\1.50.1\node.exe" server.js
    goto :eof
)

echo [ERROR] No Node.js runtime found.
pause
