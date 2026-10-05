# Projects

**Six serious projects, not fifteen toys.** Each one is the proof for a track. A project is done when a stranger can clone it, run it, and use it — and when you can explain every file in it.

Each project lives in its own repo. Link it here when you start it.

| # | Project | Weeks | Proves | Repo |
| --- | --- | --- | --- | --- |
| P0 | Utility library + typed API client | 1–2 | JS/TS depth | |
| P1 | Full-stack SaaS | 4 | Node + Mongo + auth | |
| P2 | Next.js SaaS, deployed | 5–6 | Next + Postgres + production | |
| P3 | Notification system | 7 | Queues, workers, system design | |
| P4 | RAG document / repo Q&A | 8–9 | LLM + embeddings + retrieval | |
| P5 | Coding agent, deployed | 10–11 | Agents, tools, MCP, production AI | |
| P6 | Realtime voice agent | 12 | Streaming, latency, evals | |

**Definition of done for every project**

- [ ] README: what it does, how to run it, architecture diagram, tradeoffs you chose
- [ ] Typecheck + lint + tests pass in CI
- [ ] Deployed somewhere a stranger can reach (except P0)
- [ ] One paragraph in [../learning/concepts.md](../learning/concepts.md): the hardest thing in it and why
- [ ] A 2-minute demo video or GIF in the README

---

## P0 — Utility library & typed API client

*Weeks 1–2. Depth mode: no AI-written code.* Lab: `00-labs/depth/`

**Part A — utilities.** `myCall`, `myApply`, `myBind`, `myNew`, `myInstanceof`, `deepClone` (cycles, `Date`, `Map`, `Set`), `deepEqual`, `deepFreeze`, `groupBy`, `pick`/`omit`, `get`/`set` by path, `once`, `memoize`, `curry`, `compose`, `pipe`, `debounce`, `throttle`, `EventEmitter`, `LRUCache`.

**Part B — async core.** `MyPromise` with `then`, chaining, thenable assimilation, plus `all`/`allSettled`/`any`/`race`. Then `sleep`, `withTimeout`, `retry` with backoff + jitter, `runWithLimit`.

**Part C — typed API client.**

```ts
const api = createClient({ baseURL: "/api", retries: 3, timeout: 5000 });
const user = await api.get<User>("/users/1");
```

- [ ] `get`/`post`/`put`/`patch`/`delete`, typed request and response
- [ ] Retries with backoff, only on retryable statuses
- [ ] Cancellation via `AbortController`, propagated through retries
- [ ] Timeout per request, normalized error type, request/response interceptors
- [ ] Concurrency limit shared across calls
- [ ] Zero `any`. Tests written before each feature.

---

## P1 — Full-stack SaaS

*Week 4. React + Express + MongoDB.*

Pick a domain you'd actually use (habit tracker, invoice tool, reading list). Scope is fixed; the domain is yours.

- [ ] Email/password auth with httpOnly cookies, hashing, refresh
- [ ] Roles: owner vs member, enforced server-side
- [ ] Full CRUD on the main resource with Zod validation at the boundary
- [ ] Cursor pagination, search, filtering
- [ ] File upload to object storage via signed URL
- [ ] Aggregation-backed stats endpoint
- [ ] Indexes justified by `explain()` output in the README
- [ ] Error middleware, structured logs with request ids, rate limiting
- [ ] Tests: unit for business logic, integration for the auth flow

---

## P2 — Next.js SaaS

*Weeks 5–6. Next App Router + Supabase (wk 5) → PostgreSQL + Prisma/Drizzle (wk 6).*

Week 5 ships it on Supabase; week 6 hardens it for production.

- [ ] Auth with server-side sessions and protected routes via middleware
- [ ] Server Components for reads, Server Actions for writes
- [ ] Dashboard, user profile, settings
- [ ] CRUD + search + pagination + filtering, all URL-driven
- [ ] File upload with storage policies
- [ ] RLS policies — include a test that proves a forged request is blocked
- [ ] Caching: tags, `revalidateTag`, a documented cache strategy
- [ ] Week 6: Postgres schema with migrations, Redis cache-aside on the hot read
- [ ] Week 6: Docker compose, GitHub Actions CI, Sentry, deployed
- [ ] Week 6: `EXPLAIN ANALYZE` on the three slowest queries, with the fixes

---

## P3 — Notification system

*Week 7. The system-design project.*

```
Client → API → Queue → Worker → [ Email | Push | In-app ]
                 ↓
            Status store
```

- [ ] `POST /notifications` accepts and returns immediately (202 + id)
- [ ] BullMQ queue; workers per channel
- [ ] Idempotency keys — the same request twice sends once
- [ ] Retries with backoff, dead-letter queue, replay from DLQ
- [ ] User preferences and quiet hours honored
- [ ] Templating with variables
- [ ] In-app delivery over WebSocket/SSE with unread counts
- [ ] Status timeline per notification: queued → sent → delivered → failed
- [ ] Rate limiting per user and per channel
- [ ] README: the design doc — estimates, data model, scaling plan, failure modes
- [ ] A load test, with p95 numbers in the README

---

## P4 — RAG document / repo Q&A

*Weeks 8–9. The portfolio centerpiece.*

```
Source → chunk → embed → pgvector → hybrid retrieve → rerank → LLM → answer + citations
```

- [ ] Ingest PDF, Markdown, and source code; structure-aware chunking per type
- [ ] Metadata: source, path, line range, updated-at
- [ ] `pgvector` store with an index you chose deliberately
- [ ] Hybrid search: `tsvector` + vector, fused (RRF)
- [ ] Reranking pass
- [ ] Context builder with a token budget and dedup
- [ ] Streamed answers with citations that link to exact lines
- [ ] "I don't know" when retrieval is weak — tested
- [ ] Incremental re-indexing on change and delete
- [ ] A 30-question eval set: retrieval recall@k, groundedness, answer quality
- [ ] Cost and latency per question in the README

---

## P5 — Coding agent

*Weeks 10–11. Week 10 local, week 11 deployed.*

```
Task → Agent loop → tool choice → execute (sandbox) → observe → … → result
```

- [ ] Hand-rolled agent loop — no framework in v1
- [ ] Tools: read file, write file, list, search, run command, git ops
- [ ] Tool schemas with narrow inputs and useful error returns
- [ ] Permission model: allowlist, confirmation gate, dry-run
- [ ] Context management: compaction, file-content budgeting
- [ ] One MCP server you wrote, consumed by the agent
- [ ] Human-in-the-loop: interrupt and steer mid-run
- [ ] Week 11: queue + worker, run state persisted and resumable after a crash
- [ ] Week 11: sandboxed execution (container, timeouts, fs/network limits)
- [ ] Week 11: tracing per run, token/cost attribution, budget cap
- [ ] Week 11: prompt-injection threat model in the README
- [ ] Benchmark: 10 real tasks, pass rate recorded

---

## P6 — Realtime voice agent

*Week 12.*

```
Mic → WebRTC → STT → LLM + tools → TTS → audio out
```

- [ ] Streaming STT with partial transcripts
- [ ] LLM with at least two real tools
- [ ] Streaming TTS, measured first-byte latency
- [ ] Barge-in: user interrupts, agent stops immediately
- [ ] Latency budget in the README with measured p50/p95 mouth-to-ear
- [ ] Graceful degradation on a dropped connection
- [ ] Eval suite: task completion, tool accuracy, hallucination rate, failure rate
- [ ] The same eval suite wired into CI for P4 and P5
