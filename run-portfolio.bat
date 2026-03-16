@echo off
echo ========================================
echo    Akash Hegde - Portfolio Setup
echo ========================================
echo.

echo Checking if dependencies are installed...
if not exist "node_modules" (
    echo Installing dependencies...
    npm install
    echo.
    echo Dependencies installed successfully!
    echo.
) else (
    echo Dependencies already installed.
    echo.
)

echo Starting development server...
echo.
echo Your portfolio will open at: http://localhost:3000
echo.
echo Press Ctrl+C to stop the server
echo ========================================
echo.

npm run dev
