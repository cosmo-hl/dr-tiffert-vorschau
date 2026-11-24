# dr-tiffert.de · Entwurf 3.1 (Vorschau)

Klickbare Vorschau des Website-Entwurfs nach dem Website-Konzept v3.1 vom 24.11.2026.
**Nicht zur Veröffentlichung freigegeben.** Jede Seite trägt `<meta name="robots" content="noindex">`;
`robots.txt` erlaubt das Crawlen ausdrücklich, damit Suchmaschinen diese Anweisung lesen können.

- Vorschau: https://cosmo-hl.github.io/dr-tiffert-vorschau/
- Technik: [Astro](https://astro.build) (statisch), npm, selbst gehostete Schriften (Cormorant Garamond, Inter), keine externen Requests, kein Tracking.

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
| `/` | Startseite: Claim und Einstieg, Schwerpunkt-Absatz, drei Gesprächsanlässe, sechs Felder, Einladung mit Kontakt |
| `/organisationsentwicklung/` | Einstieg, `#nachfolge` mit IHK-Fallbox, `#executive-coaching` |
| `/supervision/` | Supervision für Organisationsberatungen |
| `/fotografie/` | Künstlerische Fotografie, Bildnotiz, kleine Auswahl, Link zum Portfolio |
| `/lehre/` | Lehre |
| `/publikationen/` | Fachbücher, Fotobücher, Whitepaper (getrennt) |
| `/kontakt/` | Kontaktwege (kein Formular) |

## Gestaltung

Dunkelgrün (#1F3832 / Markengrün #30534A), Sand (#C8BB9E) und Papier (#F6F4EF) aus dem Logo C3 „Bildformat“; Cormorant Garamond für Überschriften, Inter für Text (beide selbst gehostet). Aufbau und Rhythmus orientieren sich an osb international: Bildbühne, zentrierter Einstieg, nummerierte Abschnitte, kräftige Farbkacheln, Stimmen. Bewegung nur beim Scrollen und Überfahren, abgeschaltet bei `prefers-reduced-motion`.

## Bildliste

Originale liegen nicht im Repository (`originals/` ist ausgeschlossen); `scripts/prepare_images.py` erzeugt responsive Größen (JPEG + WebP, Metadaten entfernt). Quelle der Originale: Marketing-Ordner von Alexander (Serien Albert Raven 2017 und 2019). Alle Website-Fotos sind **Kandidaten**, Nutzungsfreigabe offen.

Bildlogik der Unterseiten: Überschrift und Einstieg zuerst, dann das Bild in voller Inhaltsbreite an der linken Textkante, Desktop 2:1, mobil 4:3 mit eigenem Ausschnitt (`pos` / `posM` in `PageFigure`). Ausnahmen: Werkbilder der Fotografie (ungeschnitten 3:2) und Buchcover.

| Datei (Original) | Seite | Zuschnitt |
| --- | --- | --- |
| `site-terrasse` (Alexander-1357.jpg, 3543 px) | Startseite | Desktop vollflächig hinter dem Einstieg, Fokus rechts; mobil eigener 4:3-Ausschnitt `site-terrasse-mobil` nach Claim und Button |
| `site-sessel-sw` (Alex_9327_sw.jpg) | Organisationsentwicklung | 2:1, Fokus 50 % / 22 %; mobil 4:3 |
| `site-spiegelung` (Alex_9163.jpg) | Supervision | 2:1, Fokus oben, beide Figuren mit Kopf vollständig; mobil 4:3 |
| `site-lehre` (Alexander-1626.jpg) | Lehre | 2:1, Fokus unten (Pult und Projektionsfläche); mobil 4:3 |
| `site-kontakt` (Alex_8864.jpg) | Kontakt | Hochformat 4:5 rechts; mobil 1:1 |
| `buch-cx`, `buch-coaching`, `buch-vertrieb` (AT-Buch-*.png) | Publikationen | Cover unbeschnitten, gleiche Höhe und Abstände |
| `7Y5A3906-2` | Fotografie | Werkbild, ungeschnitten, gleiche linke Kante, mit Bildnotiz |
| `7Y5A0358`, `7Y5A4542`, `7Y5A2602` | Fotografie | Auswahl im versetzten Raster |

Vorher/Nachher der ersten Bildschirmansicht (1440, 390, 320 px) liegt im Projektordner unter `website-vorschau/`.

## Offene Freigaben

- Nutzungsrechte der Fotos von Albert Raven (2017, 2019) für die neue Seite; Aktualität der Porträts.
- Kurztexte der sechs Felder auf der Startseite: Organisationsentwicklung, Executive Coaching, Lehre und Publikationen sind aus freigegebenen Sätzen abgeleitet und brauchen eine Freigabe; ebenso die Abschnittsüberschrift „Zugänge zu meiner Arbeit“ (vorher „Drei Zugänge …“).
- Kundenstimmen: je eine auf Organisationsentwicklung (Nachfolge) und Lehre, von dr-tiffert.de übernommen; Freigabe prüfen.
- Porträt mit Kamera für die Fotografie-Seite: kein passendes Original gefunden.
- Verlagslinks „Zum Buch“ und Link „Zur Übersicht meiner Fotobücher“ noch nicht verifiziert, daher nicht verlinkt.
- Portfolio-Adresse bestätigen (Vorschau nutzt `https://www.alextiffert.com/portfolio`).
- Impressum und Datenschutz vor Veröffentlichung freigeben.
- Bildrechte der Straßenfotografien (abgebildete Personen) prüfen.
- Kurstermine, Whitepaper-Downloads und Druckstatus von *Spuren der Suche* werden nicht als bestätigt ausgegeben.
