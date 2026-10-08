# -*- coding: utf-8 -*-
import os
from reportlab.lib.pagesizes import A4
from reportlab.lib.colors import HexColor, white
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    PageBreak, HRFlowable
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.pdfgen import canvas
from pypdf import PdfReader, PdfWriter

GOLD  = HexColor('#C8913A')
BLACK = HexColor('#0a0a0a')
GREY  = HexColor('#555555')
LIGHT_GREY = HexColor('#888888')

PAGE_W, PAGE_H = A4
os.makedirs("out_resources", exist_ok=True)


# ============================================================
# PARTE 1 — contenuto con Platypus (cover + intro + 7 segnali)
# ============================================================

def draw_cover(c, doc):
    c.saveState()
    c.setFillColor(BLACK)
    c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)

    c.setStrokeColor(GOLD)
    c.setLineWidth(1)
    c.line(60, PAGE_H - 110, 140, PAGE_H - 110)

    c.setFillColor(GOLD)
    c.setFont('Helvetica', 9)
    c.drawString(60, PAGE_H - 130, "G U I D A   G R A T U I T A")

    c.setFillColor(white)
    c.setFont('Helvetica-Bold', 30)
    c.drawString(58, PAGE_H - 230, "I 7 segnali")
    c.drawString(58, PAGE_H - 270, "che il tuo brand")
    c.setFillColor(GOLD)
    c.drawString(58, PAGE_H - 310, "non comunica")
    c.setFillColor(white)
    c.drawString(58, PAGE_H - 350, "quanto vali.")

    c.setFillColor(HexColor('#cccccc'))
    c.setFont('Helvetica', 11)
    c.drawString(60, PAGE_H - 390, "Una guida pratica per imprenditori e professionisti")
    c.drawString(60, PAGE_H - 408, "che sentono di valere più di quanto il mercato percepisca.")

    c.setStrokeColor(GOLD)
    c.line(60, 90, PAGE_W - 60, 90)
    c.setFillColor(white)
    c.setFont('Helvetica-Bold', 12)
    c.drawString(60, 65, "We Move Markets")
    c.setFillColor(LIGHT_GREY)
    c.setFont('Helvetica', 9)
    c.drawString(60, 48, "Antonio Andreozzi — Brand Strategy & Marketing")
    c.drawString(60, 34, "antonioandreozzidigital.com")
    c.restoreState()


def draw_footer(c, doc):
    c.saveState()
    c.setStrokeColor(HexColor('#dddddd'))
    c.setLineWidth(0.5)
    c.line(50, 40, PAGE_W - 50, 40)
    c.setFillColor(LIGHT_GREY)
    c.setFont('Helvetica', 8)
    c.drawString(50, 28, "We Move Markets — Antonio Andreozzi")
    c.drawRightString(PAGE_W - 50, 28, f"Pagina {doc.page - 1}")
    c.restoreState()


def on_page(c, doc):
    if doc.page == 1:
        draw_cover(c, doc)
    else:
        draw_footer(c, doc)


styles = getSampleStyleSheet()

style_h1 = ParagraphStyle('h1', parent=styles['Heading1'], fontName='Helvetica-Bold',
                           fontSize=18, leading=22, textColor=BLACK)
style_number = ParagraphStyle('number', parent=styles['Normal'], fontName='Helvetica-Bold',
                               fontSize=34, leading=34, textColor=GOLD)
style_body = ParagraphStyle('body', parent=styles['Normal'], fontName='Helvetica',
                             fontSize=10.5, leading=16, textColor=HexColor('#333333'), spaceAfter=10)
style_question = ParagraphStyle('question', parent=styles['Normal'], fontName='Helvetica-Oblique',
                                 fontSize=10, leading=15, textColor=GREY)
style_intro = ParagraphStyle('intro', parent=styles['Normal'], fontName='Helvetica',
                              fontSize=11.5, leading=18, textColor=HexColor('#222222'), spaceAfter=14)
style_section_title = ParagraphStyle('section_title', parent=styles['Heading1'], fontName='Helvetica-Bold',
                                      fontSize=22, leading=26, textColor=BLACK, spaceAfter=18)

signals = [
    ("I clienti chiedono sempre lo sconto",
     "Se ogni trattativa finisce con una richiesta di ribasso, il problema raramente "
     "è il prezzo: è la percezione di valore. Quando un brand comunica con chiarezza "
     "perché vale quella cifra, lo sconto smette di essere la prima domanda.",
     "Quante delle tue ultime 10 trattative sono finite con uno sconto richiesto dal cliente?"),
    ("Competitor più piccoli sembrano più autorevoli",
     "Hai più esperienza, più risultati, più storia — ma online o di persona, un "
     "competitor più piccolo sembra \"più professionale\" di te. Questo accade quando "
     "il brand non riflette il livello reale del lavoro che fai.",
     "Se un cliente confrontasse il tuo sito con quello di un competitor minore, chi sembrerebbe più solido?"),
    ("Il passaparola non basta più",
     "Il passaparola ha funzionato per anni, ma da solo non scala. Senza un brand "
     "riconoscibile, ogni nuovo cliente parte da zero: non trova conferme online, "
     "non riconosce uno stile, non percepisce continuità.",
     "Se oggi un potenziale cliente ti cercasse online dopo un consiglio, cosa troverebbe?"),
    ("Devi spiegare troppo quando ti presenti",
     "Se ogni volta che ti presenti devi fare un discorso lungo per far capire cosa fai "
     "e perché sei diverso, il posizionamento non è ancora chiaro — né a te, né al mercato.",
     "Riesci a spiegare cosa fai e perché sei diverso in una sola frase?"),
    ("Sito e social non rispecchiano la qualità del tuo lavoro",
     "Capita spesso: il lavoro è di alto livello, ma la vetrina online racconta "
     "un'altra storia. Il primo contatto con un brand è quasi sempre digitale — "
     "e se non regge il confronto, il cliente se ne va prima ancora di conoscerti.",
     "Il tuo sito comunica lo stesso livello del tuo lavoro reale, o uno inferiore?"),
    ("Non hai un messaggio chiaro e ripetibile",
     "Un brand forte si riconosce anche da come ne parlano gli altri. Se i tuoi clienti "
     "non sanno descrivere in due parole cosa ti rende diverso, il messaggio non è "
     "ancora abbastanza chiaro da essere ripetuto.",
     "Se chiedessi a tre clienti di descriverti in una frase, direbbero tutti la stessa cosa?"),
    ("Cresci, ma il brand non cresce con te",
     "L'attività si è evoluta — più esperienza, clienti più importanti, prezzi più alti — "
     "ma l'immagine è rimasta quella di anni fa. Il brand racconta ancora chi eri, "
     "non chi sei diventato.",
     "Il modo in cui ti presenti oggi rispecchia il livello che hai raggiunto, o quello di 3 anni fa?"),
]

elements = [Spacer(1, 0), PageBreak()]

elements.append(Paragraph("Prima di iniziare", style_section_title))
elements.append(HRFlowable(width="100%", thickness=1, color=GOLD, spaceAfter=16))
elements.append(Paragraph(
    "Questa guida nasce da una domanda che mi sento ripetere spesso da imprenditori e "
    "professionisti: <i>\"Lavoro bene, ho clienti soddisfatti, ma sento che il mercato non "
    "mi percepisce per quello che valgo davvero.\"</i>", style_intro))
elements.append(Paragraph(
    "Nella maggior parte dei casi non è un problema di competenza, né di prodotto. "
    "È un problema di brand: il modo in cui la tua attività si presenta al mondo non "
    "rispecchia il valore reale che porta.", style_intro))
elements.append(Paragraph(
    "Ecco 7 segnali concreti per capire se anche tu ti trovi in questa situazione — "
    "e una domanda per ognuno, da farti onestamente.", style_intro))
elements.append(PageBreak())

for i, (title, body, question) in enumerate(signals, start=1):
    t = Table([[Paragraph(f"{i:02d}", style_number), Paragraph(title, style_h1)]], colWidths=[60, 420])
    t.setStyle(TableStyle([
        ('VALIGN', (0, 0), (-1, -1), 'TOP'),
        ('LEFTPADDING', (0, 0), (-1, -1), 0), ('RIGHTPADDING', (0, 0), (-1, -1), 0),
        ('TOPPADDING', (0, 0), (-1, -1), 0), ('BOTTOMPADDING', (0, 0), (-1, -1), 0),
    ]))
    elements.append(t)
    elements.append(Spacer(1, 14))
    elements.append(Paragraph(body, style_body))
    elements.append(Spacer(1, 6))

    q_table = Table([[Paragraph(f"<b>Domanda:</b> {question}", style_question)]], colWidths=[480])
    q_table.setStyle(TableStyle([
        ('BACKGROUND', (0, 0), (-1, -1), HexColor('#f7f3ec')),
        ('LEFTPADDING', (0, 0), (-1, -1), 14), ('RIGHTPADDING', (0, 0), (-1, -1), 14),
        ('TOPPADDING', (0, 0), (-1, -1), 12), ('BOTTOMPADDING', (0, 0), (-1, -1), 12),
        ('LINEBEFORE', (0, 0), (0, -1), 3, GOLD),
    ]))
    elements.append(q_table)

    if i < len(signals):
        elements.append(Spacer(1, 28))
        elements.append(HRFlowable(width="100%", thickness=0.5, color=HexColor('#dddddd'), spaceAfter=28))

content_path = "out_resources/_content.pdf"
doc = SimpleDocTemplate(content_path, pagesize=A4, topMargin=70, bottomMargin=60, leftMargin=55, rightMargin=55)
doc.build(elements, onFirstPage=on_page, onLaterPages=on_page)

# ============================================================
# PARTE 2 — pagina finale CTA, canvas puro (sfondo nero garantito)
# ============================================================

cta_path = "out_resources/_cta.pdf"
c = canvas.Canvas(cta_path, pagesize=A4)
c.setFillColor(BLACK)
c.rect(0, 0, PAGE_W, PAGE_H, fill=1, stroke=0)

c.setFillColor(white)
c.setFont('Helvetica-Bold', 22)
y = PAGE_H - 220
c.drawString(55, y, "Hai ritrovato almeno 3")
c.drawString(55, y - 30, "di questi segnali?")

c.setFillColor(HexColor('#dddddd'))
c.setFont('Helvetica', 11)

def wrap_text(c, text, x, y, max_width, font='Helvetica', size=11, leading=16):
    from reportlab.pdfbase.pdfmetrics import stringWidth
    words = text.split()
    line = ""
    for word in words:
        test = (line + " " + word).strip()
        if stringWidth(test, font, size) <= max_width:
            line = test
        else:
            c.drawString(x, y, line)
            y -= leading
            line = word
    if line:
        c.drawString(x, y, line)
        y -= leading
    return y

y -= 70
y = wrap_text(c,
    "Significa che il tuo brand non sta ancora comunicando il valore reale della tua "
    "attività — e che c'è margine concreto di crescita senza cambiare ciò che fai, ma "
    "come lo comunichi.", 55, y, 480)

y -= 14
y = wrap_text(c,
    "Il punto di ingresso più semplice è la Diagnosi: 3 ore di lavoro insieme, uno a uno, "
    "per capire esattamente cosa non funziona nel tuo posizionamento e ricevere un piano "
    "scritto di priorità da seguire subito.", 55, y, 480)

y -= 30
c.setFillColor(GOLD)
c.setFont('Helvetica-Bold', 14)
c.drawString(55, y, "antonioandreozzidigital.com/diagnosi")

y -= 26
c.setFont('Helvetica', 12)
c.drawString(55, y, "WhatsApp: +39 333 434 2510")

c.setStrokeColor(HexColor('#444444'))
c.setLineWidth(0.5)
c.line(50, 40, PAGE_W - 50, 40)
c.setFillColor(HexColor('#888888'))
c.setFont('Helvetica', 8)
c.drawString(50, 28, "We Move Markets — Antonio Andreozzi")

c.save()

# ============================================================
# PARTE 3 — merge finale
# ============================================================

writer = PdfWriter()
for path in [content_path, cta_path]:
    reader = PdfReader(path)
    for page in reader.pages:
        writer.add_page(page)

final_path = "out_resources/guida-7-segnali-brand.pdf"
with open(final_path, "wb") as f:
    writer.write(f)

os.remove(content_path)
os.remove(cta_path)

print(f"PDF generato: {final_path}")
print(f"Pagine totali: {len(PdfReader(final_path).pages)}")
