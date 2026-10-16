#!/usr/bin/env python3
"""Generate the WebP project screenshots in public/img from the originals in public/.

Run after adding or replacing a screenshot referenced in src/assets/projects.json:
    python3 scripts/optimize-images.py
Requires Pillow. Desktop shots get a 1200px and a 640px wide version, phone shots 400px.
"""
import json
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
PUBLIC = ROOT / "public"
OUT = PUBLIC / "img"
PROJECTS = ROOT / "src" / "assets" / "projects.json"

DESKTOP_WIDTHS = (1200, 640)
MOBILE_WIDTHS = (400,)


def save(src: Path, stem: str, widths):
    img = Image.open(src)
    img = img.convert("RGBA" if img.mode in ("RGBA", "LA", "P") else "RGB")
    for i, width in enumerate(widths):
        resized = img
        if img.width > width:
            height = round(img.height * width / img.width)
            resized = img.resize((width, height), Image.LANCZOS)
        name = f"{stem}.webp" if i == 0 else f"{stem}-{width}.webp"
        resized.save(OUT / name, "WEBP", quality=72, method=6)


def main():
    OUT.mkdir(exist_ok=True)
    projects = json.loads(PROJECTS.read_text())
    for project in projects:
        for key, widths in (("deskimg", DESKTOP_WIDTHS), ("mobileimg", MOBILE_WIDTHS)):
            src = project.get(key)
            if not src:
                continue
            src_path = PUBLIC / Path(src).name
            if not src_path.exists():
                # already pointing at an optimized file; regenerate from the original if present
                continue
            stem = src_path.stem
            save(src_path, stem, widths)
            project[key] = f"/img/{stem}.webp"
    PROJECTS.write_bytes((json.dumps(projects, indent=2, ensure_ascii=False) + "\n").replace("\n", "\r\n").encode())


if __name__ == "__main__":
    main()
