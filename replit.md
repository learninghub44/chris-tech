# Chris Tech

Public marketing website and platform for Chris Tech, a Nairobi-based software studio offering
web development, custom software, and AI-powered solutions to Kenyan businesses.

## Run & Operate

- `pnpm --filter @workspace/chris-tech run dev` — run the marketing site (Vite dev server)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string (see `.env.example`)

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React, Vite, Tailwind CSS, shadcn/ui (Radix primitives), Framer Motion, Wouter
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/chris-tech` — the public marketing site (pages, components, theme)
- `artifacts/api-server` — Express API server
- `artifacts/mockup-sandbox` — internal component/mockup preview environment
- `lib/db/src/schema` — source of truth for the database schema (Drizzle)
- `lib/api-spec/openapi.yaml` — source of truth for the API contract
- `lib/api-client-react` / `lib/api-zod` — generated from the OpenAPI spec, don't hand-edit
- `artifacts/chris-tech/src/index.css` — theme tokens (colors, fonts, radius, shadows)

## Architecture decisions

- Monorepo via pnpm workspaces so the marketing site, API, and shared DB/API-contract code can
  evolve together without duplicating types.
- API contract is defined once in OpenAPI (`lib/api-spec`) and codegen'd into typed React Query
  hooks and Zod schemas, so frontend and backend can't drift out of sync silently.
- Theme is centralized in CSS custom properties (`index.css`) rather than scattered Tailwind
  color classes, so a rebrand only touches one file.

## Product

Marketing site sections: home, services, portfolio, pricing, academy, about, blog, FAQ, and
contact. Card-based, icon-led service presentation with a stats/progress section and numbered
"why choose us" section, styled after a clean IT-services template reference.

## User preferences

- Prefers card-based, icon-led layouts over glassmorphism-heavy designs.
- Pricing is quoted in KSh (Kenyan Shillings).

## Gotchas

- Always use `pnpm`, not `npm`/`yarn` — the `preinstall` script blocks other package managers.
- Never hand-edit files in `lib/api-client-react/src/generated` or `lib/api-zod/src/generated` —
  regenerate them via `pnpm --filter @workspace/api-spec run codegen`.
- Rotate any GitHub Personal Access Token immediately after using it locally — don't leave it
  in shell history or commit it.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
