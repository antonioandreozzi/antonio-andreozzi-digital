@echo off
cd /d "C:\Users\SDB\Desktop\antonio-andreozzi-digital"

:: Impedisci sleep durante l'elaborazione
powershell -Command "Add-Type -TypeDefinition 'using System.Runtime.InteropServices; public class P { [DllImport(\"kernel32.dll\")] public static extern uint SetThreadExecutionState(uint f); }'; [P]::SetThreadExecutionState(0x80000003)" > nul 2>&1

set LOGFILE=C:\Users\SDB\Desktop\content-strategy.log
set REPORT=C:\Users\SDB\Desktop\content-strategy-report.md
set PATH=%PATH%;C:\Users\SDB\AppData\Roaming\npm;C:\Program Files\nodejs

echo. >> %LOGFILE%
echo ======================================== >> %LOGFILE%
echo AVVIO CONTENT STRATEGY: %DATE% %TIME% >> %LOGFILE%
echo ======================================== >> %LOGFILE%

"C:\Users\SDB\AppData\Roaming\npm\claude.cmd" -p "Sei il content strategist di Antonio Andreozzi, consulente di brand, AI, chatbot e short video per PMI di Caserta e Napoli. Il tuo compito e' costruire la strategia dei contenuti per la settimana successiva. LEGGI prima questi file per avere tutto il contesto: 1) C:\Users\SDB\Desktop\competitor-research-report.md (ricerca competitor della settimana, se esiste) 2) .claude\topics.json (articoli gia' pubblicati e quelli in programma) 3) app\blog\page.tsx (lista blog attuale). POI CREA una strategia completa in formato Markdown con queste sezioni: ## ANALISI DELLA SETTIMANA - Cosa ha funzionato nei competitor - Gap di contenuto che Antonio puo' sfruttare - Trend emergenti da cavalcare subito ## PIANO BLOG DELLA SETTIMANA - Suggerimento per il prossimo articolo SEO (keyword, titolo, angolo unico, struttura H2) - Perche' questa keyword in questo momento ## PIANO SOCIAL (Instagram + TikTok + LinkedIn) - 5 idee di Reel/TikTok con hook completo per ognuno - 3 idee di post carosello - 2 idee di post testo/citazione ## PIANO EMAIL/NEWSLETTER (se applicabile) - 1 idea di email per la lista contatti ## OPPORTUNITA' URGENTI - Trend che scade: cosa pubblicare entro 48 ore per cavalcare l'onda - Keyword o topic che nessun competitor italiano ha ancora coperto bene Salva il report completo in C:\Users\SDB\Desktop\content-strategy-report.md usando il tool Bash o Write. Sii specifico, concreto e orientato all'azione — non scrivere generalita'." --allowedTools "Bash,Read,Write,Glob,Grep,WebSearch,WebFetch" >> %LOGFILE% 2>&1

echo CONTENT STRATEGY COMPLETATA: %DATE% %TIME% >> %LOGFILE%
