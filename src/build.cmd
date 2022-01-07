set "binpath=Program Files\Microsoft Visual Studio\2022\Professional\MSBuild\Current\Bin\"
set "path=%path%;C:\%binpath%"
set "path=%path%;D:\%binpath%"
set "path=%path%;E:\%binpath%"
set "path=%path%;F:\%binpath%"

rd /s /q .\build\
mkdir genshin-gacha
::analyzer
cd analyzer
call yarn build
xcopy /e/h build\ ..\genshin-gacha\res\
cd taskrun
msbuild taskrun.sln /t:Build /p:Configuration=Release
xcopy /e/h build\genshin-gacha-analyzer.exe ..\..\genshin-gacha\
cd ../..
::exporter
cd exporter
pyinstaller main.spec
copy /y config.json dist
copy /y disable-proxy.bat dist
xcopy /e/h dist\ ..\genshin-gacha\
cd ..
::7zip
7z a genshin-gacha.7z .\genshin-gacha\ -t7z -mx=5 -r -y
pause
