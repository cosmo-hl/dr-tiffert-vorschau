"""Erzeugt responsive Bildgrößen aus originals/ nach public/bilder/.
Metadaten (EXIF, GPS) werden dabei entfernt; Farbprofil bleibt erhalten."""
from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "originals"
OUT = ROOT / "public" / "bilder"
WIDTHS = [640, 1024, 1600, 2200]

OUT.mkdir(parents=True, exist_ok=True)
for src in sorted(SRC.glob("*.jpg")):
    im = ImageOps.exif_transpose(Image.open(src)).convert("RGB")
    icc = im.info.get("icc_profile")
    stem = src.stem
    widths = [w for w in WIDTHS if w <= im.width]
    if im.width < WIDTHS[-1] and im.width not in widths:
        widths.append(im.width)
    for w in widths:
        h = round(im.height * w / im.width)
        r = im.resize((w, h), Image.LANCZOS)
        r.save(OUT / f"{stem}-{w}.jpg", "JPEG", quality=82, optimize=True, progressive=True, icc_profile=icc)
        r.save(OUT / f"{stem}-{w}.webp", "WEBP", quality=80, method=6, icc_profile=icc)
    print(stem, im.size)
