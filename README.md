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
| `/` | Startseite: Claim, Porträt, Einstiegstext mit Gruß, drei Gesprächsanlässe, drei Zugänge, Lehre & Publikationen |
| `/organisationsentwicklung/` | Einstieg, `#executive-coaching`, `#nachfolge` mit IHK-Fallbox |
| `/supervision/` | Supervision für Organisationsberatungen |
| `/fotografie/` | Künstlerische Fotografie, Bildnotiz, kleine Auswahl, Link zum Portfolio |
| `/lehre/` | Lehre |
| `/publikationen/` | Fachbücher, Fotobücher, Whitepaper (getrennt) |
| `/kontakt/` | Kontaktwege (kein Formular) |

## Gestaltung

Dunkelgrün (#1F3832 / Markengrün #30534A), Sand (#C8BB9E) und Papier (#F6F4EF) aus dem Logo C3 „Bildformat“; Cormorant Garamond für Überschriften, Inter für Text (beide selbst gehostet). Aufbau und Rhythmus orientieren sich an osb international: Bildbühne, zentrierter Einstieg, nummerierte Abschnitte, kräftige Farbkacheln, Stimmen. Bewegung nur beim Scrollen und Überfahren, abgeschaltet bei `prefers-reduced-motion`.

## Bildliste

Originale liegen nicht im Repository; `scripts/prepare_images.py` erzeugt aus `originals/` responsive Größen (JPEG + WebP, Metadaten entfernt).

| Datei | Seite | Einsatz |
| --- | --- | --- |
| `site-terrasse` (dr-tiffert.de, Alexander-1357) | Startseite | Hero, vollflächig, Fokus rechts |
| `site-workshop` | Organisationsentwicklung | Bildband unter dem Seitenkopf |
| `site-spiegelung` | Supervision | Bild, das in den Seitenkopf ragt |
| `site-portraet-sw` | Kontakt | Hochformat rechts |
| `buch-cx`, `buch-coaching`, `buch-vertrieb` | Publikationen | Buchcover |
| `7Y5A3906-2` | Fotografie | Einzelbild groß, ungeschnitten, mit Bildnotiz |
| `7Y5A0358`, `7Y5A4542`, `7Y5A2602` | Fotografie | Auswahl im versetzten Raster |
| `7Y5A4474-Enhanced-NR` | – | Reserve, nicht verwendet |

Die Fotos von dr-tiffert.de stammen vorerst aus dem Design-PDF (max. 1600 px); Fotografie laut Impressum: Albert Raven.

## Offene Freigaben

- Website-Fotos in voller Auflösung nachliefern (Hero wirkt auf großen Monitoren sonst weich); Nutzungsrechte Albert Raven für die neue Seite klären.
- Kundenstimmen und Auftraggeberliste von dr-tiffert.de übernommen (`src/lib/stimmen.ts`, Seiten); Freigabe der Zitierten für die neue Positionierung prüfen.
- Telefonnummer: Briefing nennt 0172 7235888, die Live-Seite +49 451 305 00 71-80.
- Verlagslinks „Zum Buch“ und Link „Zur Übersicht meiner Fotobücher“ noch nicht verifiziert, daher nicht verlinkt.
- Portfolio-Adresse bestätigen (Vorschau nutzt `https://www.alextiffert.com/portfolio`).
- Impressum und Datenschutz vor Veröffentlichung freigeben.
- Bildrechte der Straßenfotografien (abgebildete Personen) prüfen.
- Kurstermine, Whitepaper-Downloads und Druckstatus von *Spuren der Suche* werden nicht als bestätigt ausgegeben.
