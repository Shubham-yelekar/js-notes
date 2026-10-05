# Breadth — Full-stack

Goal is **coverage with proof**, not mastery of every item. Proof = it runs in one of the projects in [../projects/README.md](../projects/README.md).

Build mode applies here: AI may scaffold boilerplate, but for anything you keep you must be able to say **what it does, why it's there, and what breaks without it**. If you can't, delete it and write it again.

Stack choices are fixed so you don't lose days comparing tools. Deviate only with a reason you can state.

| Layer | Pick |
| --- | --- |
| Language | TypeScript |
| Frontend | React 19 + Next.js (App Router) |
| Styling | Tailwind + shadcn/ui |
| Forms / validation | React Hook Form + Zod |
| Server state | TanStack Query |
| Client state | Zustand |
| Node API | Express (week 4), then Hono / route handlers |
| Databases | MongoDB (week 4), PostgreSQL (weeks 5–12) |
| Data access | Mongoose, then Prisma or Drizzle |
| Auth | Supabase Auth, or Auth.js + JWT/sessions |
| Cache / queue | Redis + BullMQ |
| Tests | Vitest + React Testing Library + Playwright |
| Infra | Docker, GitHub Actions, Vercel + Fly.io/Railway |
| Observability | pino, Sentry, OpenTelemetry basics |

---

## React

- [ ] Render → reconcile → commit; what triggers each
- [ ] Reconciliation and keys; the cost of an unstable key
- [ ] Fiber as a mental model (not as trivia)
- [ ] State: batching, stale closures, updater functions, `useReducer`
- [ ] Props and composition over configuration
- [ ] Context: what it solves, what it costs, when it re-renders
- [ ] Effects: dependency arrays, cleanup, double-invoke in dev, effects you shouldn't write
- [ ] Refs: DOM access, imperative handles, refs vs state
- [ ] `memo`, `useMemo`, `useCallback` — and when they make things worse
- [ ] Controlled vs uncontrolled inputs
- [ ] Custom hooks: extraction rules, testability
- [ ] Error boundaries · Suspense · `lazy` and code splitting
- [ ] `useTransition`, `useOptimistic`, `useDeferredValue`
- [ ] Component architecture for a large app: feature folders, boundaries, barrels

## State & data fetching

- [ ] TanStack Query: keys, staleness, cache, invalidation, mutations, optimistic updates
- [ ] Zustand: store shape, selectors, slices, middleware
- [ ] Redux Toolkit at concept level — know when it's still the right answer
- [ ] Decide: server state vs client state vs URL state vs form state
- [ ] Write the decision rule down in your own words in [../learning/concepts.md](../learning/concepts.md)

## Testing

- [ ] Vitest: unit tests, mocks, fake timers
- [ ] RTL: query by role, user-event, async assertions, what *not* to test
- [ ] Integration test over a whole feature (form → API → list update)
- [ ] One Playwright E2E happy path per project
- [ ] Tests run in CI on every push

## Node & Express

- [ ] Node runtime: event loop in Node, `libuv`, blocking vs non-blocking
- [ ] Modules, `package.json` exports, scripts
- [ ] Streams and buffers; stream a large file
- [ ] HTTP by hand with `node:http` once, before using a framework
- [ ] Express: routing, middleware order, error middleware, async error handling
- [ ] Request validation with Zod at the boundary
- [ ] Auth: password hashing (argon2/bcrypt), sessions vs JWT, refresh tokens, httpOnly cookies, CSRF
- [ ] Authorization: roles, ownership checks, where they belong
- [ ] Logging with pino, request ids, correlation ids
- [ ] Rate limiting, CORS, helmet, input size limits
- [ ] Graceful shutdown and health checks
- [ ] File upload: multipart, signed URLs, direct-to-storage

## MongoDB

- [ ] Documents, collections, BSON types
- [ ] Modeling: embed vs reference, and the read pattern that decides it
- [ ] Indexes: single, compound, order matters; `explain()`
- [ ] Aggregation pipeline: `$match`, `$group`, `$lookup`, `$unwind`, `$facet`
- [ ] Transactions and when you actually need them
- [ ] Mongoose: schemas, validation, hooks, `lean()`, population
- [ ] Pagination: skip/limit vs cursor, and why skip hurts

## Next.js

- [ ] App Router: layouts, templates, route groups, parallel and intercepting routes
- [ ] Server Components vs Client Components — the boundary and what crosses it
- [ ] Server Actions: forms, validation, revalidation, errors
- [ ] Route handlers for real APIs and webhooks
- [ ] Middleware: auth gating, redirects, what it can't do
- [ ] Caching: request memo, data cache, full route cache, router cache; `revalidateTag`/`revalidatePath`
- [ ] Streaming and `loading.tsx` / Suspense boundaries
- [ ] `generateMetadata`, OG images, sitemap, robots
- [ ] Images, fonts, bundle analysis, Core Web Vitals
- [ ] Auth end to end with protected routes and server-side session reads

## Supabase / BaaS

- [ ] Auth: email, OAuth, sessions on the server
- [ ] Postgres through Supabase: tables, policies, functions
- [ ] Row Level Security — write a policy, then try to break it
- [ ] Storage: buckets, policies, signed URLs
- [ ] Realtime: subscriptions and when polling is better
- [ ] Appwrite / Firebase at concept level only — know the tradeoff, don't rebuild in both

## PostgreSQL

- [ ] Tables, types, constraints, defaults, generated columns
- [ ] Relationships and joins: inner, left, self, many-to-many
- [ ] Normalization and when to denormalize on purpose
- [ ] Indexes: B-tree, partial, composite, covering; GIN for JSONB and full-text
- [ ] Transactions, isolation levels, deadlocks, `SELECT ... FOR UPDATE`
- [ ] `EXPLAIN ANALYZE` — read a plan and name the fix
- [ ] Window functions, CTEs, `JSONB` operators
- [ ] Full-text search with `tsvector` (you'll reuse this for hybrid RAG search)
- [ ] `pgvector` extension (sets up week 9)
- [ ] Connection pooling: pgbouncer, serverless pitfalls

## ORM & data access

- [ ] Prisma or Drizzle: schema, migrations, relations, transactions
- [ ] Generated types end to end to the frontend
- [ ] Migration discipline: forward, backward, zero-downtime shape changes
- [ ] N+1 queries: cause, detection, fix
- [ ] When to drop to raw SQL

## Production

- [ ] Docker: image, multi-stage build, compose for app + db + redis
- [ ] Env config and secrets; never one `.env` for all environments
- [ ] CI/CD: typecheck → lint → test → build → deploy
- [ ] Structured logging, error monitoring (Sentry), tracing basics
- [ ] Redis: cache-aside, TTL, invalidation, locks
- [ ] Background jobs with BullMQ: retries, dead-letter, idempotency
- [ ] Deploy: Vercel for the app, Fly.io/Railway for workers
- [ ] Backups, migrations on deploy, rollback plan
- [ ] Perf budget: payload size, TTFB, DB query time, p95 latency
- [ ] Security pass: OWASP top 10 against your own app
