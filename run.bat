@echo off
title EcoFinance SL

echo ===========================================
echo Starting EcoFinance SL
echo ===========================================

echo.
echo Starting Flask Backend...
start "Backend" cmd /k "cd /d backend && venv\Scripts\python.exe app.py"

timeout /t 3 > nul

echo.
echo Starting Frontend...
start "Frontend" cmd /k "cd /d frontend && ..\backend\venv\Scripts\python.exe -m http.server 5500"

timeout /t 2 > nul

echo.
echo Opening application...
start "" http://localhost:5500/login.html

echo.
echo ===========================================
echo Backend  : http://127.0.0.1:5000
echo Frontend : http://localhost:5500/login.html
echo ===========================================

pause