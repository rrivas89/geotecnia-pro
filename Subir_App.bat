@echo off
title Actualizando Geotecnia Pro (Vue.js)...
color 0A

echo ===================================================
echo   1. Compilando y optimizando el codigo Vue...
echo ===================================================
call npm run build

echo.
echo ===================================================
echo   2. Subiendo la App a Firebase Hosting...
echo ===================================================
call firebase deploy

echo.
echo ===================================================
echo   Proceso finalizado. Puedes cerrar esta ventana.
echo ===================================================
pause