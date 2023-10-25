# Lebenslauf erstellen mit HTML und CSS - Projekt

## HTML - Erklärung:
HTML steht für *HyperText Markup Language* und ist verantwortlich für die **Struktur** einer Website. In HTML werden sogenannte *Elemente* benutzt um dem Browser zu erklären ob der Teil des Inhalts zum Beispiel eine Überschrift oder ein Paragraph oder sogar ein Bild ist.

Hier ist der Code der dem Web-browser sagt, dass es sich um eine Überschrift handelt:

```html
<h1>Hallo Welt! Dies ist eine Überschrift!</h1>
```

Das in den eckigen Klammern gesetzte `h1` steht für "Heading 1" (Die größte Überschrift die es in HTML gibt). 
Alles zwischen der Eröffnung dieses Elements und der Schließung (gekennzeichnet durch `</h1>`) wird vom Browser als Überschrift gesehen. Wenn man dieses kleine Beispiel in [CodePen](https://codepen.io/pen/) eingibt, wird die Überschrift auch direkt sehr groß und fett-gedruckt angezeigt.

Hier eine Tabelle mit einigen der wichtigsten Elemente in HTML:

Element | Erklärung
--- | ---
`<h1> bis <h6>` | Die bereits erwähnten Überschriften, wobei h1 die "wichtigste" darstellt und h6 die "unwichtigste"
`<p>` | Kennzeichnet einen regulären Textabschnitt/Paragraphen.
`<a>` | Hiermit können Links zu anderen Seiten erstellt werden.
`<img>` | Steht für "Image", und kann wie der Name bereits sagt Bilder auf der Website anzeigen 


### Struktur eines HTML Dokuments:
Es folgt das Grundgerüst eines jeden HTML Dokuments:

```html
<!DOCTYPE html>
<html>
    <head>
        <!-- Hier werden informationen über das Dokument wie zum Beispiel der Titel definiert -->
        <title>Website Titel</title>
    </head>
    <body>
        <!-- Hier kommt der eigentliche Inhalt der Seite hin -->
    </body>
</html>
```