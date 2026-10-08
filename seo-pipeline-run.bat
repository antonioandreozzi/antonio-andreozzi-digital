@echo off
cd /d "C:\Users\SDB\Desktop\antonio-andreozzi-digital"

:: Impedisci sleep durante il pipeline
powershell -Command "Add-Type -TypeDefinition 'using System.Runtime.InteropServices; public class P { [DllImport(\"kernel32.dll\")] public static extern uint SetThreadExecutionState(uint f); }'; [P]::SetThreadExecutionState(0x80000003)" > nul 2>&1

set LOGFILE=C:\Users\SDB\Desktop\seo-pipeline.log
set CLAUDELOG=C:\Users\SDB\Desktop\seo-claude-output.log
set PATH=%PATH%;C:\Users\SDB\AppData\Roaming\npm;C:\Program Files\nodejs

echo. >> %LOGFILE%
echo ======================================== >> %LOGFILE%
echo AVVIO PIPELINE: %DATE% %TIME% >> %LOGFILE%
echo ======================================== >> %LOGFILE%

:: Step 1: Claude scrive articolo (max 30 turni per evitare blocchi)
echo [1/3] Avvio claude pipeline... >> %LOGFILE%
"C:\Users\SDB\AppData\Roaming\npm\claude.cmd" -p "Esegui il SEO pipeline completo seguendo le istruzioni in .claude/skills/seo-pipeline.md. Leggi .claude/topics.json, prendi il primo topic con status pending, esegui tutte le 9 fasi (keyword research, market research, SERP analysis, decisione, scrittura articolo 1500+ parole, ottimizzazione, creazione file .tsx, aggiornamento topics.json, aggiornamento blog listing). Target: Provincia di Caserta e Napoli. Tono: Antonio Andreozzi." --allowedTools "Bash,Read,Write,Edit,Glob,Grep,WebSearch,WebFetch" --max-turns 30 > %CLAUDELOG% 2>&1
echo [1/3] Claude terminato con codice: %ERRORLEVEL% >> %LOGFILE%

:: Step 2: Build
echo [2/3] Avvio npm build... >> %LOGFILE%
call "C:\Program Files\nodejs\npm.cmd" run build >> %LOGFILE% 2>&1
echo [2/3] Build terminato con codice: %ERRORLEVEL% >> %LOGFILE%

:: Step 3: Deploy (usa npx per trovare wrangler in qualsiasi configurazione)
echo [3/3] Avvio wrangler deploy... >> %LOGFILE%
call "C:\Program Files\nodejs\npm.cmd" exec -- wrangler deploy >> %LOGFILE% 2>&1
echo [3/3] Deploy terminato con codice: %ERRORLEVEL% >> %LOGFILE%

echo PIPELINE COMPLETATO: %DATE% %TIME% >> %LOGFILE%
