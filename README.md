# Chris Tech

Marketing website and platform for **Chris Tech** — a Nairobi-based software studio building
web platforms, custom software, and AI-powered products for Kenyan businesses.

This is a pnpm monorepo containing the public marketing site, the API server, and shared
internal libraries.

## Repo structure

```
.
├── artifacts/
│   ├── chris-tech/        # Public marketing site (React + Vite + Tailwind)
│   ├── api-server/        # Express API server
│   └── mockup-sandbox/    # Internal component/mockup preview sandbox
├── lib/
│   ├── db/                # Drizzle ORM schema + Postgres client
│   ├── api-spec/          # OpenAPI spec (source of truth for the API contract)
│   ├── api-client-react/  # Generated React Query hooks (from api-spec via Orval)
│   └── api-zod/           # Generated Zod schemas (from api-spec via Orval)
├── scripts/                # One-off / maintenance scripts
└── pnpm-workspace.yaml
```

## Tech stack

| Layer      | Tech |
|------------|------|
| Frontend   | React, Vite, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion, Wouter |
| Backend    | Node.js, Express 5 |
| Database   | PostgreSQL + Drizzle ORM |
| Validation | Zod |
| API codegen| Orval (OpenAPI → React Query hooks + Zod schemas) |
| Tooling    | pnpm workspaces, TypeScript project references, esbuild |

## Getting started

**Prerequisites:** Node.js 24+, [pnpm](https://pnpm.io/), a PostgreSQL database.

```bash
# Install dependencies (pnpm only — npm/yarn are blocked)
pnpm install

# Copy env template and fill in secrets
cp .env.example .env

# Run the marketing site in dev mode
pnpm --filter @workspace/chris-tech run dev

# Run the API server in dev mode
pnpm --filter @workspace/api-server run dev

# Typecheck everything
pnpm run typecheck

# Build everything
pnpm run build
```

### Database

```bash
# Push schema changes to your dev database
pnpm --filter @workspace/db run push
```

Required environment variable: `DATABASE_URL` — a PostgreSQL connection string.

### Regenerating the API client

The React Query hooks in `lib/api-client-react` and the Zod schemas in `lib/api-zod` are
generated from `lib/api-spec/openapi.yaml`. After editing the OpenAPI spec, run:

```bash
pnpm --filter @workspace/api-spec run codegen
```

## Deployment

The marketing site (`artifacts/chris-tech`) is a static Vite build deployed to **Cloudflare
Pages**, connected directly to this GitHub repo (auto-deploys on push to `main`).

**Cloudflare Pages project settings:**

| Setting | Value |
|---|---|
| Framework preset | None (Vite, custom monorepo) |
| Build command | `pnpm install --frozen-lockfile=false && pnpm --filter @workspace/chris-tech run build` |
| Build output directory | `artifacts/chris-tech/dist/public` |
| Root directory | `/` (repo root — required so pnpm can resolve workspace packages) |

No environment variables are required for the build — `PORT` and `BASE_PATH` are only used by
the local dev/preview server and default sensibly (`BASE_PATH` → `/`) for production builds.

A `public/_redirects` file (`/* /index.html 200`) is included so client-side routes (e.g.
`/services`, `/pricing`) don't 404 on direct navigation or refresh.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for setup details, coding conventions, and how to
submit changes.

## License

This project is licensed under the [MIT License](./LICENSE).
