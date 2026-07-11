# Third-Party Notices

This project is built on top of open-source software. This file lists the major third-party
libraries used across the workspace and their licenses. Full license text for each package is
included in its own repository / npm package, and (after `pnpm install`) locally under
`node_modules/<package>/LICENSE`.

Every package listed below is distributed under a permissive open-source license (MIT, or ISC/
Apache-2.0 where noted) that permits commercial use, modification, and redistribution, provided
the original copyright and license notice is preserved.

## Frontend (`artifacts/chris-tech`, `artifacts/mockup-sandbox`)

| Package | License |
|---|---|
| React / React DOM | MIT |
| Vite | MIT |
| TypeScript | Apache-2.0 |
| Tailwind CSS | MIT |
| Radix UI (`@radix-ui/*`) | MIT |
| shadcn/ui (component patterns, not an npm dependency) | MIT |
| Framer Motion | MIT |
| Lucide React (icons) | ISC |
| React Hook Form | MIT |
| Zod | MIT |
| TanStack React Query | MIT |
| Wouter (routing) | ISC |
| Recharts | MIT |
| Embla Carousel | MIT |
| Sonner | MIT |
| cmdk | MIT |
| date-fns | MIT |
| class-variance-authority / clsx / tailwind-merge | MIT / Apache-2.0 |

## Backend (`artifacts/api-server`)

| Package | License |
|---|---|
| Express | MIT |
| esbuild | MIT |

## Shared libraries (`lib/*`)

| Package | License |
|---|---|
| Drizzle ORM | Apache-2.0 |
| Zod | MIT |
| Orval (dev-time codegen only) | MIT |

## Fonts

| Font | Source | License |
|---|---|---|
| Inter | Google Fonts | SIL Open Font License 1.1 |
| Poppins | Google Fonts | SIL Open Font License 1.1 |

## Tooling

| Tool | License |
|---|---|
| pnpm | MIT |
| Prettier | MIT |

---

If you believe a dependency or its license is missing or listed incorrectly, please open an
issue or PR — see [CONTRIBUTING.md](./CONTRIBUTING.md).
