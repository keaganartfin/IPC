# AGENTS.md

## Review guidelines
- Treat spelling/typos in user-facing strings, docs, and comments as P1 (flag in PR review).
- Flag unused imports/variables, unused exports, unreachable/dead code, and duplicate logic.
- Look for Angular/RxJS issues: missed unsubscriptions, nested subscribes, race conditions, missing error handling.
- Look for template risks: async pipe misuse, missing trackBy, expensive getters in templates, accessibility regressions.
- Prefer minimal, surgical fixes; do not refactor unrelated code.

## When asked to run checks, use these commands
- npm ci
- npm run lint
- npm run test:ci
- npm run build:prod
- npm run spell
- npm run dup
- npm run deadcode
