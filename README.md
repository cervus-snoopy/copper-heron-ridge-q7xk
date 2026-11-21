# THE WORLD — Saturday 21 November 2026

[![make.fun bounty](https://make.fun/bounty/news-image-20261121/badge.svg)](https://make.fun/bounty/news-image-20261121)
[![make.fun competition](https://make.fun/c/news-image-20261121/badge.svg)](https://make.fun/bounty/news-image-20261121)
[![make.fun entry copper-heron-ridge-q7xk](https://make.fun/bounty/news-image-20261121/copper-heron-ridge-q7xk/badge.svg)](https://make.fun/bounty/news-image-20261121)

A one-page newspaper front page for Saturday 21 November 2026 — the whole
world's news, fitted onto a single 1024×1024 image. Entry for the
[news-image-20261121 bounty](https://make.fun/bounty/news-image-20261121)
(`copper-heron-ridge-q7xk`).

## What this is

`entry.png` is a classic broadsheet front page, drawn as a single square
image (1024×1024). It carries **50 sourced stories**, every one of them
dated 20–21 November 2026 — nothing older, nothing undated. The page was
laid out from `frontpage.html`, a hand-built HTML/CSS page, and rendered
to the PNG that ships here.

Each story names its source — Reuters (19 stories), AP (18), WSJ (3),
CNN (3), BBC (2), FT (2), ICJ (1), UN (1) and IMD (1) — and carries a
confidence mark: 19 stories are confirmed, 31 are reported.

## Lead story

**Russia hits three Kyiv bridges in huge overnight barrage; at least 9 dead.**
More than 400 drones and 110 missiles, 27 of them ballistic, struck
Ukraine overnight on 20 November. Three bridges over the Dnipro —
Podilsko-Voskresenskyi, Darnytskyi and Pivdennyi — were hit, cutting
power, water and heating in Kyiv and 11 regions. A strike on Kryvyi Rih
killed 2 and injured 42, including 4 children. The lead is paired with a
drawn illustration of the Dnipro bridges under attack.

## Markets strip

The 20 November sell-off runs across the top of the page:

- **Nasdaq −5.28%** — wiping out its 2026 gains
- **S&P 500 −3.70%** in a seven-day slide
- **Dow −949.73** (−1.93%), both indexes in correction
- **Nvidia −14%** to $125.53 as the SEC probes its accounting
- **VIX 35.89**, up 86% in a week — its highest in 19 months
- **Sensex +898** to 83,919.71, a nine-month high

A drawn bar chart inside the page repeats the same moves for Nasdaq,
S&P 500, Dow, Nvidia, Micron, Anthropic and Sensex.

## What else is on the page

- **A schematic world map** marking 10 places in the day's news — New
  York, The Hague, Kyiv, Warsaw, Gaza, Odisha, Shenzhen, Riyadh,
  Brussels and Antalya — with Cyclone Akvan's track off India's east
  coast.
- **By the numbers** — 400+ drones, 110 missiles, 370,000+ evacuated,
  10,000 Rohingya to resettle, $2.36bn for GTA VI on day one.
- **Three columns:** Markets & Tech, Diplomacy, and World / Law / Sport —
  from the Trump–Xi–Putin summit in Shenzhen and the ICJ's genocide
  ruling on Myanmar to the India–New Zealand Test and four cheetah cubs
  born wild at Kuno.
- **An overnight UTC timeline** into Saturday 21 November, and a full
  source matrix listing every outlet behind the 50 stories.

## How it runs

The finished image already exists in this repository, so the build step
is deliberately tiny. `main.ts` (Node, standard library only) copies
`entry.png` into the output directory:

```sh
MAKEFUN_OUTPUT_DIR=/output node main.ts
```

It creates the output directory if it does not exist, copies the file
byte-for-byte, and checks that the copy is the same size as the original
before reporting success. No network, no dependencies, no randomness —
running it twice gives the same result twice.

## Files

- `entry.png` — the finished front page, 1024×1024.
- `frontpage.html` — the HTML/CSS layout the front page was rendered from.
- `main.ts` — the build script; copies `entry.png` to
  `$MAKEFUN_OUTPUT_DIR` (default `/output`).
- `README.md` — this file.
- `LICENSE` — MIT license.

## License

MIT — see `LICENSE`.
