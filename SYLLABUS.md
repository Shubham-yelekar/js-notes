# Winter Arc — 12 Weeks

> **Window:** 2026-10-05 → 2026-12-27 · 4–5 h/day · ~350h
> **Objective:** go from "frontend dev who knows React" to "engineer who deeply understands JS, ships production full-stack systems, and architects AI products."
>
> Cadence and rules: [FRAMEWORK.md](FRAMEWORK.md) · Checklists live in [tracks/](tracks/) · Project specs in [projects/](projects/README.md)

## Four tracks, every day

| Track | Share | Mode | Checklist |
| --- | ---: | --- | --- |
| 🟨 **Depth** — JS/TS internals, logic, DSA | 35% | Depth (no AI code) | [tracks/depth.md](tracks/depth.md) |
| 🧱 **Breadth** — backend, frameworks, DBs, production | 30% | Build | [tracks/breadth.md](tracks/breadth.md) |
| 🤖 **AI + Systems** — LLM eng, RAG, agents, system design | 25% | Build | [tracks/ai-systems.md](tracks/ai-systems.md) |
| 📈 **ML** — foundations, enough to reason about models | 10% | Build | [tracks/ai-systems.md#ml-foundations](tracks/ai-systems.md#ml-foundations) |

Depth is the one track that is **never** AI-assisted. Breadth is allowed to move fast — see [Two modes](FRAMEWORK.md#two-modes).

## Roadmap

| Wk  | Dates         | Theme                            | Build                 | Status    |
| --- | ------------- | -------------------------------- | --------------------- | --------- |
| 1   | 10-05 → 10-11 | JS core semantics                | Utility library       | ▶ current |
| 2   | 10-12 → 10-18 | Async JS + TypeScript            | Typed API client      |           |
| 3   | 10-19 → 10-25 | React + TSX                      | React dashboard       |           |
| 4   | 10-26 → 11-01 | Node + Express + MongoDB         | **P1** SaaS           |           |
| 5   | 11-02 → 11-08 | Next.js + Supabase               | **P2** Next SaaS      |           |
| 6   | 11-09 → 11-15 | PostgreSQL + Prisma + production | **P2** deployed       |           |
| 7   | 11-16 → 11-22 | System design (back + front)     | **P3** Notifications  |           |
| 8   | 11-23 → 11-29 | LLM engineering                  | **P4** start          |           |
| 9   | 11-30 → 12-06 | Embeddings + RAG                 | **P4** RAG Q&A        |           |
| 10  | 12-07 → 12-13 | AI agents + MCP                  | **P5** Coding agent   |           |
| 11  | 12-14 → 12-20 | Production AI                    | **P5** deployed       |           |
| 12  | 12-21 → 12-27 | Evals + voice + portfolio        | **P6** Voice agent    |           |

**Carried in from before:** functions/invocation/`this` built but mastery was ~50%. The retest in [learning/review.md](learning/review.md) is **overdue** — take it on day 1 of week 1.

---

## Week 1 — JS core semantics

- **Depth:** [Execution & scope](tracks/depth.md#execution--scope), [`this` & invocation](tracks/depth.md#this--invocation), [Objects & prototypes](tracks/depth.md#objects--prototypes), [Coercion & equality](tracks/depth.md#coercion--equality)
- **DSA:** [Arrays, strings, objects, Map, Set](tracks/depth.md#tier-1--core-data) — know the complexity of every operation you use
- **Build:** utility library — `myCall`/`myApply`/`myBind`/`myNew`, `deepClone`, `deepEqual`, `once`, `curry`, `compose`, `pipe`, `memoize`, `debounce`, `throttle`, `groupBy`. Lab: `00-labs/depth/`
- **AI:** [LLM API mechanics](tracks/ai-systems.md#llm-engineering) — first raw API call, messages, system prompt, tokens, temperature, streaming
- **Exit:** pass the `this` retest at 80%+ · explain the prototype chain and `new` from memory · every utility has tests you wrote first

## Week 2 — Async JS + TypeScript

- **Depth:** [Event loop & async](tracks/depth.md#event-loop--async), [TypeScript](tracks/depth.md#typescript)
- **DSA:** [Tier 2 patterns](tracks/depth.md#tier-2--patterns) — two pointers, sliding window, frequency map, prefix sum, binary search
- **Build:** typed API client — `createClient({ baseURL })` with retries + backoff, cancellation via `AbortController`, concurrency limit, typed responses, normalized errors. Plus `MyPromise` from scratch with all combinators.
- **AI:** [Structured outputs](tracks/ai-systems.md#llm-engineering) — JSON schema, forced schema, first tool call
- **Exit:** `MyPromise` passes your combinator tests · client has zero `any` · you can order any mixed sync/micro/macrotask snippet correctly

## Week 3 — React + TSX

- **Depth:** [Recursion & trees](tracks/depth.md#recursion--trees) (fiber and the DOM are trees), TS generics applied to components
- **Breadth:** [React](tracks/breadth.md#react), [State & data](tracks/breadth.md#state--data-fetching), [Testing](tracks/breadth.md#testing)
- **Build:** React dashboard — auth UI, forms (React Hook Form + Zod), optimistic updates, pagination, filter, search, loading/error/empty states, 10+ tests. Plus a streaming chat UI against the LLM API.
- **AI:** streaming responses into a UI, abort mid-stream, token cost display
- **Exit:** for any re-render, explain *why* it happened before profiling · dashboard tests pass from a clean clone

## Week 4 — Node + Express + MongoDB

- **Breadth:** [Node & Express](tracks/breadth.md#node--express), [MongoDB](tracks/breadth.md#mongodb)
- **DSA:** [Tier 3 structures](tracks/depth.md#tier-3--structures) — linked list, stack, queue
- **Build:** **[P1 — Full-stack SaaS](projects/README.md#p1--full-stack-saas)**
- **Systems:** [HTTP & API design](tracks/ai-systems.md#api--http-design) — status codes, idempotency, pagination, cache headers
- **ML:** [start the strand](tracks/ai-systems.md#ml-foundations) — supervised vs unsupervised, train/test split, linear regression implemented by hand
- **Exit:** P1 deployed with real auth · you can explain every middleware in your own stack

## Week 5 — Next.js + Supabase

- **Breadth:** [Next.js](tracks/breadth.md#nextjs), [Supabase](tracks/breadth.md#supabase--baas)
- **DSA:** hash-map design — LRU cache, rate-limiter counters
- **Build:** **[P2 — Next.js SaaS](projects/README.md#p2--nextjs-saas)**
- **ML:** features, accuracy/precision/recall, overfitting; first scikit-learn model end to end
- **Exit:** state which of your components are server vs client and why · RLS policies that actually block a forged request

## Week 6 — PostgreSQL + Prisma + production

- **Breadth:** [PostgreSQL](tracks/breadth.md#postgresql), [ORM](tracks/breadth.md#orm--data-access), [Production](tracks/breadth.md#production)
- **DSA:** sorting internals, binary search variants (first/last/insertion point)
- **Build:** P2 → Postgres + Redis cache + Docker + CI + monitoring, deployed
- **ML:** validation vs test, cross-validation, classification + confusion matrix
- **Exit:** read an `EXPLAIN ANALYZE` and name the fix · one migration rolled forward and back safely

## Week 7 — System design

- **Systems:** [Backend system design](tracks/ai-systems.md#backend-system-design), [Frontend system design](tracks/ai-systems.md#frontend-system-design)
- **DSA:** BST, heap/priority queue (just enough for schedulers and rate limiters)
- **Build:** **[P3 — Notification System](projects/README.md#p3--notification-system)** — API → queue → worker → email/push/in-app, with retries and idempotency
- **Exit:** whiteboard two systems in 20 min each, out loud, including failure modes

## Week 8 — LLM engineering

- **AI:** [LLM engineering](tracks/ai-systems.md#llm-engineering) in full — context windows, structured output, tool calling, prompt caching, model selection, cost/latency
- **Depth:** string parsing and tokenization-adjacent work (you need it for chunking)
- **Build:** **[P4 start](projects/README.md#p4--rag-document--repo-qa)** — LLM → structured output → database
- **ML:** embeddings intuition — vectors, cosine similarity, dimensionality
- **Exit:** a tool-calling loop you wrote yourself, no framework · cost per request measured, not guessed

## Week 9 — Embeddings + RAG

- **AI:** [Embeddings & RAG](tracks/ai-systems.md#embeddings--rag) — chunking, metadata, hybrid search, reranking, context construction, citations, eval
- **Build:** **[P4 — RAG Q&A](projects/README.md#p4--rag-document--repo-qa)** over PDFs, Markdown, and code, with citations
- **ML:** k-means and PCA/UMAP on your *own* embeddings — look at your data
- **Systems:** vector index tradeoffs (HNSW vs IVF), pgvector in production
- **Exit:** retrieval quality measured on a 30-question set, not vibes

## Week 10 — AI agents + MCP

- **AI:** [Agents](tracks/ai-systems.md#agents) — agent loop, tool schemas, planning, memory, state, permissions, human-in-the-loop, MCP
- **Build:** **[P5 — Coding agent](projects/README.md#p5--coding-agent)** with file, search, terminal, and git tools + one MCP server
- **DSA:** tree walking on real trees — file trees, then an AST
- **ML:** prompting vs RAG vs fine-tuning — when each wins; LoRA at concept level
- **Exit:** the agent completes a multi-step task without you steering it mid-run

## Week 11 — Production AI

- **AI:** [Production AI](tracks/ai-systems.md#production-ai) — queues, durable state, sandboxing, tracing, streaming, rate limits, cost control, failure recovery, prompt injection
- **Build:** P5 → deployed cloud agent that recovers from its own errors
- **ML:** serving basics — latency vs throughput, batching, quantization at concept level
- **Systems:** multi-tenant AI architecture, per-tenant quotas
- **Exit:** kill a worker mid-task and the job still completes

## Week 12 — Evals + voice + portfolio

- **AI:** [Evals](tracks/ai-systems.md#evals), [Voice AI](tracks/ai-systems.md#voice-ai)
- **Build:** **[P6 — Voice agent](projects/README.md#p6--realtime-voice-agent)** + an eval suite in CI for P4 and P5
- **Close:** README + demo for each project, portfolio pass, 12-week retro in [learning/progress.md](learning/progress.md)
- **Exit:** you can answer "is my AI system getting better?" with numbers

---

## Deliberately out of scope

Graphs, dynamic programming, tries, bit manipulation, competitive programming, number theory. Crypto. Broad tutorial-following. Revisit DSA Tier 4+ only when prepping for interviews.
