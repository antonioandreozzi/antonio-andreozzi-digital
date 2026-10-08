@echo off
cd /d "C:\Users\SDB\Desktop\antonio-andreozzi-digital"

:: Impedisci sleep durante la ricerca
powershell -Command "Add-Type -TypeDefinition 'using System.Runtime.InteropServices; public class P { [DllImport(\"kernel32.dll\")] public static extern uint SetThreadExecutionState(uint f); }'; [P]::SetThreadExecutionState(0x80000003)" > nul 2>&1

:: Log e report
set LOGFILE=C:\Users\SDB\Desktop\competitor-research.log
set REPORT=C:\Users\SDB\Desktop\competitor-research-report.md
set PATH=%PATH%;C:\Users\SDB\AppData\Roaming\npm;C:\Program Files\nodejs

echo. >> %LOGFILE%
echo ======================================== >> %LOGFILE%
echo AVVIO COMPETITOR RESEARCH: %DATE% %TIME% >> %LOGFILE%
echo ======================================== >> %LOGFILE%

:: Esegui ricerca con Claude
"C:\Users\SDB\AppData\Roaming\npm\claude.cmd" -p "Sei un esperto di ricerca competitiva e content intelligence. Il tuo compito è trovare i migliori contenuti pubblicati questa settimana nei settori in cui opera Antonio Andreozzi (consulente brand, AI per PMI, chatbot AI, short video/reels, personal brand, posizionamento, e-commerce, marketing digitale locale). Fai ricerche su Google e sui principali siti italiani e internazionali. CERCA: 1) I 5 articoli/contenuti più performanti in Italia su brand, personal brand, AI per PMI, chatbot, short video (ultimi 7 giorni) 2) I 3 creator/consulenti italiani che stanno crescendo di più su questi temi (analizza cosa pubblicano) 3) I 5 articoli/contenuti più performanti a livello internazionale (USA/UK) sugli stessi temi 4) Trend emergenti: argomenti che stanno esplodendo e che Antonio potrebbe coprire prima degli altri 5) Opportunità SEO: keyword che i competitor non stanno ancora coprendo bene in Campania/Sud Italia. Scrivi il report completo in italiano, in formato Markdown, con sezioni chiare. Salva il report nel file C:\\Users\\SDB\\Desktop\\competitor-research-report.md usando il tool Write o Bash. Il report deve essere dettagliato, con URL delle fonti, analisi del perché funzionano e raccomandazioni concrete per Antonio." --allowedTools "Bash,Read,Write,WebSearch,WebFetch" > %LOGFILE% 2>&1

echo RICERCA COMPLETATA: %DATE% %TIME% >> %LOGFILE%
