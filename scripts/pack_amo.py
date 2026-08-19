"""Build a Firefox AMO .xpi with POSIX (forward-slash) paths."""
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def add(zf: zipfile.ZipFile, path: Path, arcname: str) -> None:
    info = zipfile.ZipInfo(arcname.replace("\\", "/"))
    info.compress_type = zipfile.ZIP_DEFLATED
    info.create_system = 3  # Unix
    info.external_attr = 0o644 << 16
    info.date_time = path.stat().st_mtime_ns and path.stat().st_mtime_ns
    import time

    mtime = time.localtime(path.stat().st_mtime)
    info.date_time = mtime[:6]
    zf.writestr(info, path.read_bytes())


def main() -> None:
    version = __import__("json").loads((ROOT / "manifest.json").read_text(encoding="utf-8"))[
        "version"
    ]
    out = ROOT / "packages" / f"de-slopify-{version}-firefox-amo.xpi"
    out.parent.mkdir(exist_ok=True)

    files = [
        "manifest.json",
        "content.js",
        "content.css",
        "popup.html",
        "popup.css",
        "popup.js",
        "LICENSE",
        "PRIVACY.md",
    ]

    with zipfile.ZipFile(out, "w") as zf:
        for name in files:
            add(zf, ROOT / name, name)
        for icon in sorted((ROOT / "icons").iterdir()):
            if icon.is_file():
                add(zf, icon, f"icons/{icon.name}")

    print("wrote", out)
    with zipfile.ZipFile(out) as zf:
        for info in zf.infolist():
            if "\\" in info.filename:
                raise SystemExit(f"backslash in archive: {info.filename!r}")
            print(" ", info.filename)


if __name__ == "__main__":
    main()
