---
name: test-issue-manager
description: Manage Playwright (TypeScript) testing work through GitHub Issues/Projects; use for creating/updating test cases, bugs, and moving items across todo/in-progress/review/done while sharing Playwright run results between Test Manager and Automation agents.
---

# Test Issue Manager

Use when coordinating test work for this Playwright repo via GitHub Issues and Projects.

## Tools and labels
- Tracker: GitHub Issues + Project board columns `Todo`, `In Progress`, `In Review`, `Done`.
- Labels: types `type:bug | type:feature | type:task`; status `todo | in-progress | in-review | done`; scope tags `@ui`, `@api` where relevant.
- Scripts: `npm test`, `npm run test:ui`, `npm run test:api`, `npm run test:report`.
- CI: `.github/workflows/playwright.yml` runs on push/PR; manual dispatch supports `issue_number` to auto-comment results to an issue.

## Workflows

### New issue (Test Manager Agent)
1) Title: concise outcome (e.g., `UI login smoke`, `API orders create bug`).  
2) Body template:
   - Context
   - Acceptance criteria
   - Steps/test data
   - Scope tags: `@ui`/`@api`
   - Links (design, API docs)  
3) Labels: pick one type + `todo` + scope tags.  
4) Add to Project column `Todo`.

### Start work (Automation Agent)
1) Move to `In Progress`, swap status label to `in-progress`; assign self.  
2) Optional branch/PR naming: `test/<issue-number>-<slug>`.  
3) Run Playwright with relevant tag/command.

### Report results (Automation Agent)
Comment on the issue with:
- Summary: pass/fail + projects run (chromium/firefox/webkit as applicable).
- Command(s): e.g., ``npx playwright test --grep @ui``.
- Result counts: `pass X / fail Y`; mention retries if used.
- Artifacts: Playwright HTML report or CI artifact/trace/screenshot link.
- Next steps: blockers or follow-up items.
If failures remain, keep `in-review`, attach traces, and link any new bug issues.

### Close
- When acceptance criteria met and tests green, move to `Done`, swap status label to `done`, close issue. If merged via PR, link PR in the closing comment.

### Bug intake (from failing runs)
- If an existing issue: update with failure context + artifacts and set `in-review`.
- If new: open bug issue with `type:bug`, `todo`, scope tags; include failing command, environment, observed vs expected.

## Reference
- For full agent roles/process, see `docs/agent-workflow.md`.
- For GitHub label setup, see `docs/github-labels.md` or run `pwsh scripts/setup-labels.ps1`.
