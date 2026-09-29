# Learning Framework

A reusable cadence for learning any topic with only Markdown context: this file, [CLAUDE.md](CLAUDE.md), a `SYLLABUS.md`, and the [learning/](learning/) logs. To start a new subject (React, backend, system design…), copy the repo, replace `SYLLABUS.md`, and clear the logs.

## Time budget

| | Per week | Per 2-week module | Per 4h day |
|---|---|---|---|
| **Total** | 28h | 56h | 4h |
| **Theory 25%** | 7h | 14h | 60 min |
| **Coding 70%** | 19.6h | 39h | 168 min |
| **AI 5%** | 1.4h | 3h | 12 min |

- **Theory** = reading docs/specs/books (MDN, javascript.info, source code), writing notes in your own words. Not AI chat.
- **Coding** = labs, implementations from blank, prediction experiments, tests, debugging on your own.
- **AI** = every Claude session: hints, reviews, mastery tests, retrieval. 3h per module is small, so use it for feedback, not for explanations you could read.

## Module = 2 weeks

| | Week 1 — learn & build | Week 2 — deepen & prove |
|---|---|---|
| Theory | 9h: read every topic once, predict before reading answers | 5h: re-read weak spots, docs for edge cases |
| Coding | 18h: core implementations and prediction snippets | 21h: rebuild from blank, combine into one small real problem |
| AI | 1h: `/hint`, `/debug` when stuck > 30 min | 2h: `/code-review`, mastery test, `/retrieve` |

## Session loop (one 4h day)

1. **Warm-up (5 min, counts as AI):** `/retrieve` 2–3 questions from past modules.
2. **Theory (60 min):** read one topic. Write 3–5 lines in your own words.
3. **Coding (~2h45):** predict → implement → test → explain. Stuck > 30 min → `/hint` or `/debug`.
4. **Log (5 min):** tick `SYLLABUS.md`, add hours to [learning/progress.md](learning/progress.md), add a mistake or concept only if it's meaningful.

## Module exit

- **Day 13–14:** mastery test (3–5 questions, predict + explain, no notes, no running code). Record the score in `progress.md`.
- **≥ 80%:** tick the mastery items.
- **< 80%:** still move on. Add each missed idea to [learning/review.md](learning/review.md) with a retest 3–4 days later. Weak spots get fixed by spaced retrieval, not by staying on the topic.
- **Behind schedule:** cut scope inside the module (skip optional items), never extend it past 2 weeks without deciding to.

## Where things live

| File | Purpose |
|---|---|
| `SYLLABUS.md` | What to learn, split into 2-week modules |
| `00-labs/<topic>/` | Your code for that topic |
| [learning/progress.md](learning/progress.md) | Hours per module and mastery scores |
| [learning/mistakes.md](learning/mistakes.md) | Misconceptions with the original reasoning |
| [learning/concepts.md](learning/concepts.md) | Durable understanding in your own words |
| [learning/questions.md](learning/questions.md) | Open questions |
| [learning/review.md](learning/review.md) | Retests and their due dates |
