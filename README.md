# dr-tiffert.de

Website von Dr. Alexander Tiffert nach dem Website-Konzept v3.1. Am 24.11.2026 auf Wunsch von Alexander live geschaltet, weil das Squarespace-Abo der alten Seite an diesem Tag endete.

- Live: https://www.dr-tiffert.de/ (GitHub Pages mit eigener Domain, `public/CNAME`; die frühere Vorschau-Adresse leitet dorthin weiter)
- Domain und E-Mail liegen bei STRATO. DNS: `dr-tiffert.de` A-Record auf GitHub Pages (185.199.108.153 bis 185.199.111.153), `www` CNAME auf `cosmo-hl.github.io`. MX bleibt bei STRATO.
- Öffentliche Seiten haben ein Canonical auf www.dr-tiffert.de und kein noindex; `sitemap.xml` und `robots.txt` werden mitgebaut. Weiterleitungen von Adressen der alten Squarespace-Seite (`/home`, `/kontakt-3`, `/familienberatung` usw.) liegen in `src/pages/[alt].astro`, dazu eine 404-Seite.
- Technik: [Astro](https://astro.build) (statisch), npm, selbst gehostete Schriften (Cormorant Garamond, Inter), keine externen Requests, kein Tracking.

## Entwickeln

```sh
npm ci
npm run dev      # lokale Entwicklung
npm run build    # Produktionsbuild nach dist/ inkl. Prüfung (kein noindex auf öffentlichen Seiten, Canonical, eine H1, lang="de", CNAME, Sitemap)
```

Deployment: Inhalt von `dist/` liegt im Branch `gh-pages` (GitHub Pages, Quelle `gh-pages` / root).

## Seiten

| URL | Inhalt |
| --- | --- |
| `/` | Startseite: Claim und Einstieg, Schwerpunkt-Text in drei Absätzen mit Kontaktangebot daneben, drei Gesprächsanlässe, sechs Felder |
| `/organisationsentwicklung/` | Einstieg, `#nachfolge` (gekürzt) mit Fall aus der Praxis ohne Quellenzeile, `#executive-coaching` |
| `/supervision/` | Supervision für Organisationsberatungen |
| `/fotografie/` | Künstlerische Fotografie als Galerie auf dunklem Grund (ein Bild pro Bildschirm), Bildnotiz, Link zum Portfolio |
| `/lehre/` | Lehre |
| `/publikationen/` | Fachbücher, Fotobücher, Whitepaper (getrennt) |
| `/kontakt/` | Kontaktwege (kein Formular) |
| `/impressum/` | Impressum nach § 5 DDG, übernommen aus der alten Seite (Stand 19.08.2026) und angepasst |
| `/datenschutz/` | Datenschutzerklärung für GitHub Pages, ohne Cookies, Tracking oder Inhalte Dritter |

## Gestaltung

Dunkelgrün (#1F3832 / Markengrün #30534A), Sand (#C8BB9E) und Papier (#F6F4EF) aus dem Logo C3 „Bildformat“; Cormorant Garamond für Überschriften, Inter für Text (beide selbst gehostet). Aufbau und Rhythmus orientieren sich an osb international: Bildbühne, zentrierter Einstieg, nummerierte Abschnitte, kräftige Farbkacheln, Stimmen. Bewegung nur beim Scrollen und Überfahren, abgeschaltet bei `prefers-reduced-motion`. Seit der Rückmeldung vom 24.11.2026 gibt es keinen wiederholten Schlussblock „Über Ihre Situation sprechen“ mehr; die Fußzeile ist auf Logo, Claim, Kontaktzeile und Rechtliches reduziert.

## Bildliste

Originale liegen nicht im Repository (`originals/` ist ausgeschlossen); `scripts/prepare_images.py` erzeugt responsive Größen (JPEG + WebP, Metadaten entfernt). Quelle der Originale: Marketing-Ordner von Alexander (Serien Albert Raven 2017 und 2019). Alexander hat am 24.11.2026 bestätigt, dass er die Rechte an allen verwendeten Bildern hat.

Bildlogik der Unterseiten: Überschrift und Einstieg zuerst, dann das Bild in voller Inhaltsbreite an der linken Textkante, Desktop 2:1, mobil 4:3 mit eigenem Ausschnitt (`pos` / `posM` in `PageFigure`). Ausnahmen: Werkbilder der Fotografie (ungeschnitten 3:2) und Buchcover.

| Datei (Original) | Seite | Zuschnitt |
| --- | --- | --- |
| `site-terrasse` (Alexander-1357.jpg, 3543 px) | Startseite | Desktop vollflächig hinter dem Einstieg, Fokus rechts; mobil eigener 4:3-Ausschnitt `site-terrasse-mobil` nach Claim und Button |
| `site-sessel` (Alex_9327.jpg, Farbe) | Organisationsentwicklung | 2:1, Fokus 50 % / 22 %; mobil 4:3 |
| `site-gespraech` (Alexander-1975.jpg) | Supervision | Gesprächsrunde von der Seite; 2:1, Fokus 50 % / 30 %; mobil 4:3 mittig. |
| `site-lehre` (Alexander-1626.jpg) | Lehre | 2:1, Fokus unten (Pult und Projektionsfläche); mobil 4:3 |
| `site-kontakt` (Alex_8864.jpg) | Kontakt | Hochformat 4:5 rechts; mobil 1:1 |
| `buch-cx`, `buch-coaching`, `buch-vertrieb` (AT-Buch-*.png) | Publikationen | Cover unbeschnitten, gleiche Höhe und Abstände |
| `7Y5A3906-2` | Fotografie | Werkbild, ungeschnitten, gleiche linke Kante, mit Bildnotiz |
| `7Y5A0358`, `7Y5A4542`, `7Y5A2602` | Fotografie | Galerie, ungeschnitten, höchstens 86 % der Bildschirmhöhe |
| `fotobuch-lettera`, `fotobuch-dance`, `fotobuch-listen` (7Y5A6918, 7Y5A6910, 7Y5A6897) | Publikationen | Fotobuch-Aufnahmen 3:2, verlinkt auf die Buchseiten von alextiffert.com; *Urban Silence* noch ohne Foto |

Portfolio 2026 „Who Owns Reality?“ als PDF unter `public/downloads/`. Je Seite steht vor der Fußzeile ein Kundenzitat von der alten Seite (`src/lib/stimmen.ts`, `Stimme.astro`); Fotografie, Publikationen und Kontakt haben keins.

Vorher/Nachher der ersten Bildschirmansicht (1440, 390, 320 px) liegt im Projektordner unter `website-vorschau/`.

## Offene Freigaben

- Kurztexte der sechs Felder auf der Startseite: Organisationsentwicklung, Executive Coaching, Lehre und Publikationen sind aus freigegebenen Sätzen abgeleitet und brauchen eine Freigabe; ebenso die Abschnittsüberschrift „Zugänge zu meiner Arbeit“ (vorher „Drei Zugänge …“).
- Kundenstimmen: je eine auf Organisationsentwicklung (Nachfolge) und Lehre, von dr-tiffert.de übernommen; Freigabe prüfen.
- Porträt mit Kamera für die Fotografie-Seite: kein passendes Original gefunden.
- Verlagslinks zu den Fachbüchern fehlen noch.
- Foto für das Fotobuch *Urban Silence*.
- „Enforce HTTPS“ in den Pages-Einstellungen einschalten, sobald GitHub das Zertifikat ausgestellt hat.
- Kurstermine, Whitepaper-Downloads und Druckstatus von *Spuren der Suche* werden nicht als bestätigt ausgegeben.
