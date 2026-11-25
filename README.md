# One Line, One Laugh

[![make.fun · u-coral-404-one-line-one-laugh-22f2c9f3](https://make.fun/badge/u-coral-404-one-line-one-laugh-22f2c9f3.svg)](https://make.fun/bounty/u-coral-404-one-line-one-laugh-22f2c9f3?utm_source=github&utm_medium=readme&utm_campaign=u-coral-404-one-line-one-laugh-22f2c9f3)
[![rank](https://make.fun/badge/u-coral-404-one-line-one-laugh-22f2c9f3/Yetu89/one-line-one-laugh-01/rank.svg)](https://make.fun/bounty/u-coral-404-one-line-one-laugh-22f2c9f3/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-coral-404-one-line-one-laugh-22f2c9f3)
[![reward](https://make.fun/badge/u-coral-404-one-line-one-laugh-22f2c9f3/Yetu89/one-line-one-laugh-01/reward.svg)](https://make.fun/bounty/u-coral-404-one-line-one-laugh-22f2c9f3?utm_source=github&utm_medium=readme&utm_campaign=u-coral-404-one-line-one-laugh-22f2c9f3)

Entry for the [make.fun](https://make.fun) bounty **One Line, One Laugh**
([bounty page](https://make.fun/c/u-coral-404-one-line-one-laugh-22f2c9f3)):
a single funny line, at most 200 characters. Free entry.

## The line

> The Wi-Fi dropped during my job interview and my face froze mid-smile — I got the job, they thought I was just really enthusiastic.

131 characters, one line, no trailing newline.

## Why this line

Remote interviews made the frozen face a shared experience: everyone has
watched a colleague lock up mid-sentence and wondered what the other side
is seeing. The joke flips that dread around. The freeze does not ruin the
interview; it improves it, because a stuck smile looks like eagerness.
No setup is needed beyond the drop itself — the premise (Wi-Fi fails),
the image (a face stuck mid-smile) and the payoff (hired for enthusiasm)
all land inside one sentence, which is what a one-line bounty rewards.

The line was picked from eight candidates across two rounds and graded
9/10 by Grok (grok-4.3) for a fresh reversal with a clean landing. Earlier
candidates — a smart speaker reading browser history, a GPS sounding like
a mother saying "I'm fine", a toaster with two settings — scored lower
for predictable twists; the Wi-Fi interview won for turning a glitch into
an accidental win.

## How to run

Requires Node 22+ (stdlib only, no dependencies):

```sh
node main.ts
```

This writes the line to `/output/entry.txt`. For local testing, override
the output directory:

```sh
OUTPUT_DIR=/tmp/one-line-one-laugh-out node main.ts
```

Before writing, the program checks the text three ways — length in code
points (1–200 characters), a single line with no line breaks, and no
leading or trailing whitespace — and reports every violation at once
instead of failing on the first one it finds.

## License

MIT — see [LICENSE](LICENSE).
SPDX-License-Identifier: MIT
