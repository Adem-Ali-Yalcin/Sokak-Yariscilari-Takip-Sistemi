@echo off

where node >nul 2>&1
if %errorlevel% neq 0 (
    echo NodeJS bulunamad�. NodeJS kurulumunu onarmay� ya da yeniden y�klemeyi deneyin.
    echo Program sonland�r�ld�. ��k�� yapmak i�in herhangi bir tu�a bas�n�z.
    pause >nul
    exit /b 1
)

where script.js >nul 2>&1
if %errorlevel% neq 0 (
    echo Localhostu ba�latmas� gereken script.js dosyas� bulunamad�.
    echo Program sonland�r�ld�. ��k�� yapmak i�in herhangi bir tu�a bas�n�z.
    pause >nul
    exit /b 1
)

echo Yerel sunucu ve program ba�lat�l�yor... A��lan taray�c� penceresini kontrol edin.
echo Herhangi bir taray�c� penceresi a��lmad�ysa "http://localhost:3000" adresini kendi taray�c�n�z �zerinden a�abilirsiniz.
echo.
echo -----------------------------------------------------------------------------
echo.
set url=http://localhost:3000

start "" %url%
node script.js