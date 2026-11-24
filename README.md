# dr-tiffert.de · Entwurf 3.1 (Vorschau)

Klickbare Vorschau des Website-Entwurfs nach dem Website-Konzept v3.1 vom 24.11.2026.
**Nicht zur Veröffentlichung freigegeben.** Jede Seite trägt `<meta name="robots" content="noindex">`;
`robots.txt` erlaubt das Crawlen ausdrücklich, damit Suchmaschinen diese Anweisung lesen können.

- Vorschau: https://cosmo-hl.github.io/dr-tiffert-vorschau/
- Technik: [Astro](https://astro.build) (statisch), npm, selbst gehostete Schriften (Source Serif 4, Source Sans 3), keine externen Requests, kein Tracking.

## Entwickeln

```sh
npm ci
npm run dev      # lokale Entwicklung
npm run build    # Produktionsbuild nach dist/ inkl. Prüfung (noindex, eine H1, lang="de")
```

Deployment: Inhalt von `dist/` liegt im Branch `gh-pages` (GitHub Pages, Quelle `gh-pages` / root).

## Seiten

| URL | Inhalt |
| --- | --- |
| `/` | Startseite: Claim, Porträt, Einstiegstext mit Gruß, drei Gesprächsanlässe, drei Zugänge, Lehre & Publikationen |
| `/organisationsentwicklung/` | Einstieg, `#executive-coaching`, `#nachfolge` mit IHK-Fallbox |
| `/supervision/` | Supervision für Organisationsberatungen |
| `/fotografie/` | Künstlerische Fotografie, Bildnotiz, kleine Auswahl, Link zum Portfolio |
| `/lehre/` | Lehre |
| `/publikationen/` | Fachbücher, Fotobücher, Whitepaper (getrennt) |
| `/kontakt/` | Kontaktwege (kein Formular) |

## Bildliste

Originale liegen nicht im Repository; `scripts/prepare_images.py` erzeugt aus `originals/` die Größen 640/1024/1600/2200 px (JPEG + WebP, Metadaten entfernt, Farbprofil erhalten).

| Datei | Seite | Zuschnitt / Einsatz |
| --- | --- | --- |
| Porträt (fehlt) | Startseite, Hero rechts | neutraler Platzhalter 4:5, nur in der Vorschau |
| `7Y5A3906-2.jpg` (im Briefing `7Y5A3906(5).jpg`) | Fotografie | Einzelbild groß, Querformat 3:2 ungeschnitten, darunter Bildnotiz |
| `7Y5A0358.jpg` | Fotografie | Auswahl, 3:2, 8 von 12 Spalten links |
| `7Y5A4542.jpg` | Fotografie | Auswahl, 3:2, 6 von 12 Spalten rechts |
| `7Y5A2602.jpg` | Fotografie | Auswahl, 3:2, 7 von 12 Spalten eingerückt |
| `7Y5A4474-Enhanced-NR.jpg` | – | geliefert, nicht verwendet (Reserve) |
| `7Y5A9819-3.jpg` | – | im Briefing als optionale zweite Arbeit genannt, nicht geliefert |

## Offene Freigaben

- Porträt (Original vom bestehenden Webauftritt) und Bildmarke als Originaldatei fehlen; Wortmarke derzeit nur als Text.
- Verlagslinks „Zum Buch“ für die drei Fachbücher und Link „Zur Übersicht meiner Fotobücher“ sind noch nicht verifiziert und daher nicht verlinkt.
- Endgültige Schreibweise der Portfolio-Adresse bestätigen (Vorschau nutzt `https://www.alextiffert.com/portfolio`).
- Impressum und Datenschutz vor Veröffentlichung freigeben.
- Bildrechte und eventuelle Einschränkungen der Fotografien (abgebildete Personen) vor Veröffentlichung prüfen.
- Kurstermine, Whitepaper-Downloads und Druckstatus von *Spuren der Suche* werden nicht als bestätigt ausgegeben.
