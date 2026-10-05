# Framework

How this repo runs. What to learn is in [SYLLABUS.md](SYLLABUS.md).

**One rule above all the others:** move. A week ends on its date whether or not the checklist is finished. Depth gets fixed by spaced retrieval, breadth gets fixed by the next project. Nothing gets fixed by sitting on week 3 until it feels perfect.

## Two modes

The repo has one job for each track, and they need opposite behavior from AI.

|  | 🔬 **Depth mode** | 🏗️ **Build mode** |
| --- | --- | --- |
| Tracks | JS/TS internals, logic, DSA | Full-stack, AI engineering, systems, ML |
| Goal | You can produce it from a blank file | You can ship it and explain it |
| AI may | ask, hint, review, test you, debug *with* you | scaffold, boilerplate, config, unfamiliar API shapes |
| AI may not | write your solution, autocomplete the idea, explain before you predict | write anything you can't then explain |
| Intervention ladder | Question → Direction → Hint → Strategy → Pseudocode → Code | Direct answer is fine |
| Proof | mastery gate, from memory, no notes | it runs in a project, and you can defend every file |

Build mode is not permission to copy-paste. The test is: **what does this do, why is it here, what breaks without it?** If you can't answer for a chunk of code, delete it and write it again.

Say "ship this" or "just give me the code" for anything outside both modes — tooling, configs, this repo itself.

## Time budget

4–5 focused hours a day. Across a day:

| Slot | Minutes | Mode |
| --- | ---: | --- |
| Retrieval warm-up | 10 | Depth |
| Depth — read one topic, write 3 lines | 30 | Depth |
| Depth — code from a blank file | 60 | Depth |
| Build — the week's project | 80 | Build |
| AI / Systems | 60 | Build |
| ML strand *(from week 4)* | 25 | Build |
| Log | 10 | — |

That's ~4h25. On a 5h day, the extra 35 minutes go to the project. Don't split every day rigidly — in weeks 4–7 the project eats more, in weeks 8–12 the AI slot does. Keep the **depth slot untouchable**; it's the one that compounds.

## Week = one module

| Day | Focus |
| --- | --- |
| Mon–Tue | New topics. Read, predict, implement the core. |
| Wed–Thu | Build. The project absorbs the week's topics. |
| Fri | Hardest thing of the week, from blank. Tests. Code review. |
| Sat | Project push — finish, deploy, write the README. |
| Sun | 1h mastery gate or retrieval · 30 min retro · 30 min plan next week. Then stop. |

## Daily loop

1. **Warm-up (10 min):** `/retrieve` — 2–3 questions from [learning/](learning/), mixing this week and older material.
2. **Depth (90 min):** predict → read one source → implement from blank → test → explain in one line. Stuck > 25 min → write down where, use `/hint`, move on.
3. **Build (80 min + 60 min):** smallest vertical slice that works end to end. Breadth, then AI/systems.
4. **Log (10 min):** tick the track files, add hours to [learning/progress.md](learning/progress.md), and log a mistake or concept **only if it was non-obvious**.

## Week exit

- **Mastery gate** (depth weeks): 3–5 unseen questions, predict + explain, no notes, no running code. Score in `progress.md`.
  - ≥ 80% → tick it, move on.
  - < 80% → **move on anyway.** Add a dated retest to [learning/review.md](learning/review.md), 3–4 days out.
- **Project checkpoint** (build weeks): does the slice run? Is it deployed? Can you explain every file?
- **Behind?** Cut scope inside the week. Never extend a week. Unfinished items go to the *Parked* list of their track file, not into next week's schedule.
- **Overdue retests come first** at the start of a session, before anything new.

## Where things live

| Path | Purpose |
| --- | --- |
| [SYLLABUS.md](SYLLABUS.md) | The 12-week schedule. The file you open daily. |
| [tracks/depth.md](tracks/depth.md) | JS/TS internals, logic drills, DSA. Depth mode. |
| [tracks/breadth.md](tracks/breadth.md) | Backend, frameworks, DBs, production. Build mode. |
| [tracks/ai-systems.md](tracks/ai-systems.md) | LLM eng, RAG, agents, system design, ML. Build mode. |
| [projects/README.md](projects/README.md) | The six project specs and their done criteria. |
| `00-labs/depth/` | Concept experiments and the utility library |
| `00-labs/logic/` | Logic drills, one file per problem |
| `00-labs/dsa/` | Patterns and data structures |
| `00-labs/ml/` | Python/notebook work for the ML strand |
| [learning/progress.md](learning/progress.md) | Hours per week, gate scores, project status |
| [learning/mistakes.md](learning/mistakes.md) | Misconceptions, with the reasoning that caused them |
| [learning/concepts.md](learning/concepts.md) | Durable understanding in your own words |
| [learning/questions.md](learning/questions.md) | Open questions |
| [learning/review.md](learning/review.md) | Retests and due dates |

## Slash commands

Depth mode leans on `/hint`, `/debug`, `/explain`, `/retrieve`, `/code-review`, `/autopsy`, `/test`, `/read`.
Build mode leans on `/arch`, `/api`, `/explore`, `/code-review`.
Full list in [README.md](README.md).
