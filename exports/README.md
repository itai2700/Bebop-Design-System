# Bebop · Logo exports

Generated from the locked brand system. The wordmark is **Bebop.** in Archivo Black; the accent dot is always a circle.

## Folder map

```
exports/
├── favicon.ico                 ← multi-res icon (16/32/48/64/128/256) — drop in a site root
├── svg/                        ← VECTOR masters (scale to any size)
│   ├── bebop-primary.svg          Ink wordmark · Lime dot
│   ├── bebop-reversed.svg         Paper wordmark · Magenta dot (for dark bg)
│   ├── bebop-mono-black.svg        all black
│   ├── bebop-mono-white.svg        all white (for dark bg)
│   ├── bebop-favicon-primary.svg   Ink tile · Paper B · Lime dot
│   └── bebop-favicon-lime.svg      Lime tile · Ink B · Magenta dot
└── png/                        ← RASTER, transparent background
    ├── wordmark/   bebop-{primary,reversed,mono-black,mono-white}-{2000,1200,800,400}w.png
    ├── favicon/    favicon-{primary,lime,mono}-{512,256,180,128,64,48,32,16}.png
    ├── lockup/     lockup-{primary-on-paper,reversed-on-ink}-{1600,800}w.png
    └── social/     avatar-{ink,lime}-{1024,512}.png   (square profile pictures)
```

## Which file do I use?

| Need | Use |
| --- | --- |
| Website logo (light header) | `svg/bebop-primary.svg` or `png/wordmark/bebop-primary-800w.png` |
| Website logo (dark header) | `svg/bebop-reversed.svg` or `png/wordmark/bebop-reversed-800w.png` |
| Browser tab / favicon | `favicon.ico` (+ `favicon/favicon-primary-180.png` for Apple touch) |
| Social profile picture | `social/avatar-ink-512.png` or `avatar-lime-512.png` |
| Slide / hero / print | the SVG, or `lockup/*-1600w.png` |
| One-color / fax / stamp | `svg/bebop-mono-black.svg` |

## Notes

- **PNGs** have a transparent background and use the real Archivo Black — ready to drop anywhere. `mono-white` is white-on-transparent, so it looks blank on a white preview but shows on dark surfaces.
- **SVGs** reference the **Archivo Black** font by name. They render perfectly in a browser (the file pulls the font from Google Fonts) and in any design tool **where Archivo Black is installed**. If you need a fully self-contained vector with no font dependency, ask and I'll outline the letters to paths.
- **favicon.ico** embeds PNGs at six sizes — modern browsers pick the best one.
- The dot is **always a circle**. Lime is the identity color; Magenta is the dark-surface pop.
