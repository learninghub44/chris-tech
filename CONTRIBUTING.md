# Contributing to Chris Tech

Thanks for your interest in contributing! This document covers how to get set up, coding
conventions, and how to submit changes.

## Getting set up

1. Fork the repo and clone your fork.
2. Install [pnpm](https://pnpm.io/installation) if you don't already have it.
3. Install dependencies:
   ```bash
   pnpm install
   ```
4. Copy `.env.example` to `.env` and fill in the required values (see [README.md](./README.md)).

## Project conventions

- **Package manager:** pnpm only. The `preinstall` script blocks npm/yarn.
- **TypeScript:** strict mode is on across the workspace. Run `pnpm run typecheck` before
  opening a PR.
- **Formatting:** Prettier is configured at the workspace root — run `pnpm exec prettier --write .`
  before committing.
- **Commits:** use clear, present-tense messages (e.g. `Fix mobile nav overflow on Services page`).
- **API changes:** the OpenAPI spec in `lib/api-spec/openapi.yaml` is the source of truth for
  the API contract. Edit it first, then run `pnpm --filter @workspace/api-spec run codegen`
  to regenerate the client hooks and Zod schemas — don't hand-edit generated files.
- **Database changes:** edit the Drizzle schema in `lib/db/src/schema`, then run
  `pnpm --filter @workspace/db run push` against a dev database.

## Submitting changes

1. Create a branch off `main`: `git checkout -b your-feature-name`.
2. Make your changes, keeping commits focused and scoped.
3. Run `pnpm run typecheck` and `pnpm run build` to confirm everything passes.
4. Open a pull request describing what changed and why. Screenshots are appreciated for any
   UI changes.

## Reporting issues

Please open a GitHub issue with:
- A clear description of the bug or feature request
- Steps to reproduce (for bugs)
- Expected vs. actual behavior

## Security

Please do not open public issues for security vulnerabilities. See [SECURITY.md](./SECURITY.md).

## Code of conduct

This project follows the [Code of Conduct](./CODE_OF_CONDUCT.md). By participating, you agree
to uphold it.
