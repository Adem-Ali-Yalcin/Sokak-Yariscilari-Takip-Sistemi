@echo off

where node >nul 2>&1
if %errorlevel% neq 0 (
    echo NodeJS bulunamadç. NodeJS kurulumunu onarmayç ya da yeniden yÅklemeyi deneyin.
    echo Program sonlandçrçldç. Äçkçü yapmak iáin herhangi bir tuüa basçnçz.
    pause >nul
    exit /b 1
)

where script.js >nul 2>&1
if %errorlevel% neq 0 (
    echo Localhostu baülatmasç gereken script.js dosyasç bulunamadç.
    echo Program sonlandçrçldç. Äçkçü yapmak iáin herhangi bir tuüa basçnçz.
    pause >nul
    exit /b 1
)

echo Yerel sunucu ve program baülatçlçyor... Aáçlan tarayçcç penceresini kontrol edin.
echo Herhangi bir tarayçcç penceresi aáçlmadçysa "http://localhost:3000" adresini kendi tarayçcçnçz Åzerinden aáabilirsiniz.
echo.
echo -----------------------------------------------------------------------------
echo.
set url=http://localhost:3000

start "" %url%
node script.js