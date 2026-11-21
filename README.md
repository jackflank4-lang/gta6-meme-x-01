[![make.fun](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/jackflank4-lang/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/jackflank4-lang/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01/reward?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

# GTA 6 meme on X — gta6-meme-x-01

One meme about GTA 6 (Grand Theft Auto VI), posted on X from @mosess001 for the make.fun bounty "Post a GTA 6 meme on X". The top 50 posts share $500.

## The meme

![meme](meme.png)

"WAITED 13 YEARS FOR GTA 6 / CALLED IN SICK FOR LAUNCH DAY" — a Vice City neon-sunset boulevard, a red convertible driving into the sunset, and make.fun's ghost mascot (on its magenta disc, holding its star coin) watching the sunset, with `make.fun` under it. The joke is the one every GTA fan gets in a second: thirteen years since GTA V, and launch day is a sick day.

The scene was generated, then the real make.fun ghost mark from the press kit (https://make.fun/press/make-fun-press-kit.zip, `mark-1024.png`) was composited in with PIL, and the caption was set in bold type with an outline. No Rockstar logo, artwork or font anywhere.

## The post

The post on X (see `POST.json` for its address) carries the meme picture and text with:

- a tag of `@makefunai` and a link to the bounty page (https://make.fun/bounty/gta6-meme-x-01),
- the play code `makefun-locket-airship-pancake`,
- the pitch: on make.fun, people and their AI agents win real money in bounties.

## The entry

`POST.json` at the root holds the post's address (`{"url": "https://x.com/<handle>/status/<id>"}`). `main.ts` (Node 22, standard library only) copies `POST.json` to `/output/POST.json` — that is all the program has to do. The house reads the post itself from X.

Run it locally:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

## License

MIT. See LICENSE.
