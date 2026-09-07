#!/usr/bin/env python3
"""
Generates the placeholder images in public/images.

These stand in for photography so the layout can be judged before a shoot.
Each one is a soft earth-tone field with grain, sized to the aspect ratio the
slot expects. Replace them with real pictures at the same paths (a .jpg is
fine — update the path in src/data/site.js) and delete this script.

Run:  python3 tools/make-placeholders.py
"""

import pathlib

OUT = pathlib.Path(__file__).resolve().parent.parent / "public" / "images"
OUT.mkdir(parents=True, exist_ok=True)

# Earth-tone pairs pulled from the site palette, warm to cool.
PALETTES = {
    "linen": ("#E4DED1", "#C8BFAC", "#A79C86"),
    "clay": ("#D8C6B4", "#B9987C", "#8E6B52"),
    "moss": ("#CBCBB9", "#98A187", "#5B6650"),
    "stone": ("#D3CEC2", "#AFA795", "#7C7669"),
    "shade": ("#C2BBAB", "#93897A", "#4E4A41"),
    "sun": ("#EDE4D4", "#D6C4A8", "#AE9773"),
}

# name: (width, height, palette, light angle)
IMAGES = {
    "hero-studio": (1800, 1100, "linen", 20),
    "hero-counter": (1800, 1100, "clay", 65),
    "hero-table": (1800, 1100, "stone", 40),
    "hero-garden": (1800, 1100, "moss", 78),
    "half-studio": (1100, 1320, "sun", 30),
    "half-cafe": (1100, 1320, "clay", 55),
    "wide-room": (1800, 790, "shade", 45),
    "place-01": (1000, 1330, "linen", 25),
    "place-02": (1200, 800, "stone", 60),
    "place-03": (1200, 800, "clay", 35),
    "place-04": (1800, 690, "moss", 70),
    "social-01": (900, 900, "clay", 30),
    "social-02": (900, 900, "shade", 50),
    "social-03": (900, 900, "sun", 20),
    "social-04": (900, 900, "linen", 70),
    "social-05": (900, 900, "stone", 45),
    "social-06": (900, 900, "moss", 60),
}

TEMPLATE = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" width="{w}" height="{h}" role="img">
  <defs>
    <linearGradient id="field" x1="0" y1="0" x2="1" y2="1"
      gradientTransform="rotate({angle} 0.5 0.5)">
      <stop offset="0%" stop-color="{c1}"/>
      <stop offset="52%" stop-color="{c2}"/>
      <stop offset="100%" stop-color="{c3}"/>
    </linearGradient>
    <radialGradient id="light" cx="{lx}%" cy="{ly}%" r="70%">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.34"/>
      <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0"/>
    </radialGradient>
    <filter id="grain">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" seed="{seed}"/>
      <feColorMatrix type="saturate" values="0"/>
    </filter>
    <filter id="soften">
      <feGaussianBlur stdDeviation="{blur}"/>
    </filter>
  </defs>

  <rect width="{w}" height="{h}" fill="url(#field)"/>

  <!-- Two soft shapes so the field is not flat: a broad horizon and a pool of light. -->
  <g filter="url(#soften)" opacity="0.55">
    <ellipse cx="{ex1}" cy="{ey1}" rx="{rx1}" ry="{ry1}" fill="{c1}" opacity="0.7"/>
    <ellipse cx="{ex2}" cy="{ey2}" rx="{rx2}" ry="{ry2}" fill="{c3}" opacity="0.5"/>
  </g>

  <rect width="{w}" height="{h}" fill="url(#light)"/>

  <!-- Grain, so it reads as a surface rather than a gradient. -->
  <rect width="{w}" height="{h}" filter="url(#grain)" opacity="0.14"/>
</svg>
"""


def build(name, width, height, palette, angle, index):
    c1, c2, c3 = PALETTES[palette]
    svg = TEMPLATE.format(
        w=width,
        h=height,
        angle=angle,
        c1=c1,
        c2=c2,
        c3=c3,
        lx=28 + (index * 7) % 45,
        ly=18 + (index * 11) % 40,
        seed=index * 13 + 3,
        blur=max(width, height) / 22,
        ex1=width * 0.32,
        ey1=height * 0.28,
        rx1=width * 0.42,
        ry1=height * 0.3,
        ex2=width * 0.74,
        ey2=height * 0.78,
        rx2=width * 0.46,
        ry2=height * 0.34,
    )
    (OUT / f"{name}.svg").write_text(svg)


for i, (name, (w, h, palette, angle)) in enumerate(IMAGES.items()):
    build(name, w, h, palette, angle, i)

# Favicon: a ring, drawn the same way as the breathing ring on the home page.
(OUT / "mark.svg").write_text(
    """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <rect width="64" height="64" fill="#DED8CC"/>
  <circle cx="32" cy="32" r="18" fill="none" stroke="#2C312A" stroke-width="2"/>
  <line x1="32" y1="14" x2="32" y2="50" stroke="#DED8CC" stroke-width="6"/>
  <line x1="24" y1="32" x2="40" y2="32" stroke="#2C312A" stroke-width="2"/>
</svg>
"""
)

print(f"wrote {len(IMAGES) + 1} files to {OUT}")
