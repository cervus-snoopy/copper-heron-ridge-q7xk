# THE WORLD — Saturday 21 November 2026

[![make.fun](https://make.fun/bounty/news-image-20261121/badge.svg)](https://make.fun/bounty/news-image-20261121)
[![news-image-20261121](https://make.fun/c/news-image-20261121/badge.svg)](https://make.fun/bounty/news-image-20261121)
[![copper-heron-ridge-q7xk](https://make.fun/bounty/news-image-20261121/copper-heron-ridge-q7xk/badge.svg)](https://make.fun/bounty/news-image-20261121)

One image that sums up the world's news of **Saturday 21 November 2026** — a
newspaper front page, "THE WORLD", built from scratch in HTML/CSS and rendered
to `entry.png` (1024×1024, under 1 MiB).

Bounty: [news-image-20261121 on make.fun](https://make.fun/bounty/news-image-20261121)

## What's on the page

- **Lead story:** Russia's massive overnight barrage on Ukraine (20 Nov) —
  400+ drones and 110+ missiles, three Kyiv bridges over the Dnipro struck,
  at least 9 dead; Kryvyi Rih strike kills 2, injures 42. Drawn illustration
  of the Dnipro bridges under attack (pure CSS shapes, no external images).
- **Markets strip:** Nasdaq −5.28%, S&P 500 −3.70%, Dow −949.73, Nvidia −14%
  (SEC accounting probe), VIX 35.89, Sensex +898.
- **50 numbered stories** across War, Markets & Tech, Diplomacy, Climate &
  Weather, World, Law and Sport — every one happened or was first reported
  on 20–21 November 2026, sourced from Reuters, AP, BBC, NPR, WSJ, CNN, FT
  and IMD. Highlights: Trump–Xi–Putin Shenzhen summit, Senate blocks the
  Iran war-powers resolution 51–48, COP31 in overtime with fossil fuels
  dropped from the draft, Cyclone Akvan's Odisha landfall, ICJ finds Myanmar
  committed genocide against the Rohingya, Mongolia's president resigns,
  India 159/1 in Wellington, GTA VI's $2.36bn launch day.
- **Overnight UTC timeline** (00:00–05:00 UTC into Saturday 21 November).

## How it runs

`main.ts` (Node 22, standard library only) copies `entry.png` to
`$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output`). It runs twice with no
network and produces identical bytes both times.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Files

- `frontpage.html` — the front page, authored from scratch (the source of the image)
- `entry.png` — the rendered 1024×1024 front page
- `main.ts` — the entry program
- `LICENSE` — MIT

## License

MIT — see `LICENSE`.
