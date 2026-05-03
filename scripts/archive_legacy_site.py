#!/usr/bin/env python3
from __future__ import annotations

import json
from html.parser import HTMLParser
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.parse import urljoin, urlparse
from urllib.request import Request, urlopen
import xml.etree.ElementTree as ET

BASE_URL = "https://ziebud-expert.pl/"
USER_AGENT = "Mozilla/5.0 (compatible; CodexArchiveBot/1.0)"


class PageParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.images: set[str] = set()
        self._in_title = False
        self._in_h1 = False
        self.title_parts: list[str] = []
        self.h1_parts: list[str] = []
        self.meta_description = ""

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        attr_map = dict(attrs)
        if tag == "img" and attr_map.get("src"):
            self.images.add(attr_map["src"] or "")
        if tag in {"img", "source"} and attr_map.get("srcset"):
            for part in (attr_map["srcset"] or "").split(","):
                candidate = part.strip().split(" ")[0]
                if candidate:
                    self.images.add(candidate)
        if tag == "link" and attr_map.get("rel") and "icon" in (attr_map.get("rel") or "") and attr_map.get("href"):
            self.images.add(attr_map["href"] or "")
        if tag == "meta" and (attr_map.get("name") or "").lower() == "description":
            self.meta_description = attr_map.get("content") or ""
        if tag == "title":
            self._in_title = True
        if tag == "h1":
            self._in_h1 = True

    def handle_endtag(self, tag: str) -> None:
        if tag == "title":
            self._in_title = False
        if tag == "h1":
            self._in_h1 = False

    def handle_data(self, data: str) -> None:
        if self._in_title:
            self.title_parts.append(data.strip())
        if self._in_h1:
            self.h1_parts.append(data.strip())


def fetch(url: str) -> tuple[bytes, str]:
    req = Request(url, headers={"User-Agent": USER_AGENT})
    with urlopen(req, timeout=20) as response:
        body = response.read()
        content_type = response.headers.get("Content-Type", "")
    return body, content_type


def get_sitemap_urls() -> list[str]:
    body, _ = fetch(urljoin(BASE_URL, "sitemap.xml"))
    root = ET.fromstring(body)
    ns = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    urls = []
    for loc in root.findall(".//sm:loc", ns):
        if loc.text:
            urls.append(loc.text.strip())
    if BASE_URL not in urls:
        urls.insert(0, BASE_URL)
    return urls


def ensure_parent(path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)


def page_path(root: Path, url: str) -> Path:
    parsed = urlparse(url)
    rel = parsed.path.lstrip("/")
    if not rel:
        rel = "index"
    if rel.endswith("/"):
        rel = rel + "index"
    return root / f"{rel}.html"


def image_path(root: Path, url: str) -> Path:
    parsed = urlparse(url)
    rel = parsed.path.lstrip("/")
    if not rel:
        rel = "image"
    return root / rel


def main() -> int:
    project_root = Path.cwd()
    archive_root = project_root / "reference" / "legacy-site"
    raw_root = archive_root / "raw"
    images_root = archive_root / "images"
    raw_root.mkdir(parents=True, exist_ok=True)
    images_root.mkdir(parents=True, exist_ok=True)

    urls = get_sitemap_urls()[:140]
    image_seen: set[str] = set()
    pages: list[dict] = []
    images: list[dict] = []

    for index, url in enumerate(urls, start=1):
        try:
            body, content_type = fetch(url)
        except (HTTPError, URLError, TimeoutError) as exc:
            pages.append({"url": url, "error": str(exc)})
            continue

        if "text/html" not in content_type:
            continue

        target = page_path(raw_root, url)
        ensure_parent(target)
        target.write_bytes(body)

        parser = PageParser()
        html = body.decode("utf-8", errors="replace")
        parser.feed(html)

        pages.append(
            {
                "url": url,
                "path": str(target.relative_to(project_root)),
                "title": " ".join(x for x in parser.title_parts if x).strip(),
                "h1": " ".join(x for x in parser.h1_parts if x).strip(),
                "meta_description": parser.meta_description,
            }
        )

        for img in parser.images:
            absolute = urljoin(url, img)
            parsed = urlparse(absolute)
            if parsed.netloc and parsed.netloc not in {"ziebud-expert.pl", "www.ziebud-expert.pl"}:
                continue
            normalized = f"{parsed.scheme}://{parsed.netloc}{parsed.path}"
            if normalized in image_seen:
                continue
            image_seen.add(normalized)
            try:
                img_body, img_content_type = fetch(normalized)
            except (HTTPError, URLError, TimeoutError):
                continue
            if not img_content_type.startswith("image/"):
                continue
            img_target = image_path(images_root, normalized)
            ensure_parent(img_target)
            img_target.write_bytes(img_body)
            images.append(
                {
                    "url": normalized,
                    "path": str(img_target.relative_to(project_root)),
                    "content_type": img_content_type,
                    "bytes": len(img_body),
                }
            )
            if len(images) >= 600:
                break

        print(f"[{index}/{len(urls)}] {url}")

    (archive_root / "manifest.json").write_text(
        json.dumps({"pages": pages, "images": images}, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )

    lines = [
        "# Archiwum starej strony ziebud-expert.pl",
        "",
        f"- Stron HTML: {len([p for p in pages if p.get('path')])}",
        f"- Obrazów: {len(images)}",
        "",
        "## Adresy zgrane do archiwum",
        "",
    ]
    for page in pages:
        if page.get("path"):
            lines.append(f"- `{page['url']}` — {page.get('title') or 'bez tytułu'}")
    (archive_root / "summary.md").write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(json.dumps({"pages": len(pages), "images": len(images), "archive_root": str(archive_root)}, ensure_ascii=False))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
