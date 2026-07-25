@echo off

echo Starting Flask Backend...
start cmd /k "cd backend && venv\Scripts\activate && python app.py"

timeout /t 2 > nul

echo Starting Frontend Server...
start cmd /k "cd frontend && python -m http.server 5500"

timeout /t 2 > nul

start http://localhost:5500

echo Project started.