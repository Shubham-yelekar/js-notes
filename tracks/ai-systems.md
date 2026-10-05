# AI Engineering, System Design, ML

Build mode. The bar: you can draw the system on a whiteboard, name every failure mode, and state what it costs per request.

Default model provider is the Claude API; port one feature to a second provider so you learn the shape of the abstraction, not one vendor's SDK.

---

## LLM engineering

*Weeks 1–3 touch this lightly (one hour/day). Week 8 is the deep pass.*

- [ ] Raw HTTP call to a model API before touching any SDK
- [ ] Messages, system prompt, roles, multi-turn state — you own the conversation array
- [ ] Tokens: counting, cost, why token ≠ word
- [ ] Context windows: budgeting, truncation strategy, what to drop first
- [ ] Sampling: temperature, `top_p`, stop sequences, `max_tokens`
- [ ] Structured output: JSON schema, forced schema, repair on invalid output
- [ ] Streaming: SSE parsing, partial JSON, abort mid-stream
- [ ] Tool / function calling: schema design, the loop, parallel calls, tool errors
- [ ] Prompt engineering that matters: examples, output format, decomposition — not tricks
- [ ] Prompt caching and why prompt *order* affects cost
- [ ] Model selection: capability vs latency vs price; the cheap-model-first pattern
- [ ] Retries, timeouts, rate-limit backoff, provider outages
- [ ] Measure: tokens, latency p50/p95, cost per request — logged, not guessed
- [ ] Safety: input validation, output validation, refusal handling

## Embeddings & RAG

- [ ] Embeddings: what a vector is, cosine vs dot vs euclidean
- [ ] Vector storage: `pgvector` first, a dedicated vector DB second
- [ ] Indexes: flat vs HNSW vs IVF — recall/latency/memory tradeoff
- [ ] Chunking: fixed, recursive, semantic, structure-aware (headings, functions)
- [ ] Chunk metadata: source, path, lines, timestamps, permissions
- [ ] Similarity search, then filtered search (metadata + vector)
- [ ] Hybrid search: BM25 / `tsvector` + vector, with fusion (RRF)
- [ ] Reranking with a cross-encoder or an LLM
- [ ] Context construction: ordering, dedup, token budget, citation anchors
- [ ] Query transformation: rewriting, multi-query, HyDE
- [ ] Citations that point to real lines, verifiable by the user
- [ ] RAG evaluation: retrieval recall@k, groundedness, answer quality
- [ ] Freshness: incremental indexing, deletes, re-embedding on change

## Agents

- [ ] The agent loop: model → tool choice → execute → observe → repeat
- [ ] Tool schema design: names, descriptions, narrow inputs, useful errors
- [ ] Planning: explicit plans vs emergent; when a plan step is worth it
- [ ] Context management across many turns; compaction and summarization
- [ ] Memory: scratchpad, episodic, long-term; what to persist and where
- [ ] State machines for agents: resumable, inspectable runs
- [ ] Permissions: allowlists, confirmation gates, dry-run mode
- [ ] Human-in-the-loop: approval points, interruption, steering mid-run
- [ ] Subagents: when delegation beats one long context
- [ ] MCP: servers, tools, resources — consume one, then write one
- [ ] Frameworks (LangGraph, Agent SDK) *after* you've hand-rolled the loop
- [ ] Failure modes: loops, flailing, tool thrash, silent wrong answers

## Production AI

- [ ] Long-running work: queues, workers, durable execution
- [ ] Agent run state: persisted, resumable after a crash
- [ ] Sandboxing and isolated execution for tool calls (containers, timeouts, fs/network limits)
- [ ] Observability: trace per run, span per tool call, token and cost attribution
- [ ] Streaming to the client through a queue, with reconnect
- [ ] Rate limits and quotas: per user, per tenant, global
- [ ] Cost control: caps, budget guards, cheap-model routing, caching
- [ ] Failure handling: retry vs fail vs ask the human
- [ ] Prompt injection and tool abuse — threat model your own agent
- [ ] Multi-tenancy: data isolation, per-tenant keys and limits
- [ ] Versioning prompts and models; shipping a prompt change safely

## Evals

- [ ] Build a dataset from real traffic and real failures
- [ ] Define expected behavior precisely enough to grade
- [ ] Graders: exact, fuzzy, schema, assertion, LLM-as-judge (and its bias)
- [ ] Per-case scoring and aggregate metrics you trust
- [ ] Regression suite in CI; block a merge on a drop
- [ ] A/B a prompt or model change with numbers
- [ ] Answer out loud: "is my AI system actually getting better?"

## Voice AI

- [ ] WebRTC basics: signaling, ICE, media tracks
- [ ] Microphone capture, VAD, chunking
- [ ] Speech-to-text streaming, partial transcripts
- [ ] LLM in the loop with tools
- [ ] Text-to-speech streaming, first-byte latency
- [ ] Interruptions / barge-in and turn taking
- [ ] Latency budget: mouth-to-ear target and where it goes
- [ ] Realtime speech-to-speech APIs vs a stitched pipeline

---

## Backend system design

- [ ] Scalability: vertical vs horizontal, stateless services
- [ ] Availability, SLOs, redundancy, failover
- [ ] Consistency models, CAP, eventual consistency in practice
- [ ] Caching layers: browser, CDN, app, DB; invalidation strategies
- [ ] Load balancing: L4 vs L7, health checks, sticky sessions
- [ ] CDN and edge: what belongs there
- [ ] Database scaling: read replicas, partitioning, sharding, hotspots
- [ ] Queues and pub/sub: at-least-once, idempotency, ordering, DLQ
- [ ] Rate limiting: token bucket, sliding window, distributed counters
- [ ] Auth architecture: sessions, JWT, OAuth2/OIDC, service-to-service
- [ ] WebSockets vs SSE vs polling — pick by requirement
- [ ] File storage, signed URLs, large uploads
- [ ] Observability: logs, metrics, traces, alerts that mean something
- [ ] Back-of-envelope estimation: QPS, storage, bandwidth

### API & HTTP design

- [ ] HTTP methods, status codes, headers that matter
- [ ] REST resource modeling; when RPC or GraphQL is better
- [ ] Idempotency keys for unsafe operations
- [ ] Pagination (cursor), filtering, sorting conventions
- [ ] Versioning and deprecation
- [ ] Error shape: machine-readable codes, not prose
- [ ] Caching headers, ETags, conditional requests
- [ ] Webhooks: signatures, retries, replay protection

### Frontend system design

- [ ] Design system and token layer
- [ ] Component library boundaries and API design
- [ ] Data-fetching architecture: where fetches live, who owns cache
- [ ] State architecture for a large app
- [ ] Routing and code splitting strategy
- [ ] Performance: bundle budget, LCP/INP/CLS, virtualization, image strategy
- [ ] Offline and optimistic UX
- [ ] Accessibility baseline you actually test
- [ ] Monorepo structure; micro-frontends and their real cost
- [ ] Error handling, retry, and degraded-mode UX

### Design practice

Two per week from week 7 on. 20 minutes, out loud, requirements → estimates → API → data model → scaling → failures.

- [ ] URL shortener · [ ] News feed · [ ] Chat · [ ] Notification system
- [ ] Rate limiter · [ ] File storage · [ ] Collaborative editor
- [ ] RAG service for 10k tenants · [ ] Agent platform with sandboxes

---

## ML foundations

Small, honest scope: enough to reason about models, read a paper's claims, and train something real. Python + numpy + scikit-learn; don't force this into JS.

### Weeks 4–6 — basics

- [ ] Supervised vs unsupervised vs reinforcement learning
- [ ] Features, labels, train/validation/test split, leakage
- [ ] Linear regression by hand (gradient descent in a loop you wrote)
- [ ] Logistic regression and decision boundaries
- [ ] Loss functions, learning rate, convergence
- [ ] Bias/variance, overfitting, regularization
- [ ] Metrics: accuracy, precision, recall, F1, ROC-AUC — and when accuracy lies
- [ ] Confusion matrix on a real imbalanced dataset
- [ ] Cross-validation
- [ ] scikit-learn end to end: load → split → fit → evaluate → inspect
- [ ] Trees and gradient boosting (XGBoost/LightGBM) as the tabular default

### Weeks 8–10 — representation

- [ ] Vectors, dot product, cosine similarity by hand
- [ ] Embeddings: what training objective produces them
- [ ] Clustering with k-means on your own embeddings
- [ ] Dimensionality reduction: PCA, then UMAP to *look* at your data
- [ ] Neural network from scratch: forward, loss, backprop, one hidden layer
- [ ] Transformer at concept level: attention, heads, positional information
- [ ] Why next-token prediction produces the behavior you see in an LLM

### Weeks 10–11 — applied

- [ ] Prompting vs RAG vs fine-tuning — a decision rule you can defend
- [ ] Fine-tuning concepts: SFT, LoRA/PEFT, dataset size and quality
- [ ] Quantization and the quality/latency tradeoff
- [ ] Serving: latency vs throughput, batching, KV cache
- [ ] Run a small open model locally (Ollama) and measure it
- [ ] One small trained model shipped inside a project
