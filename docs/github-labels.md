## GitHub labels and board

Create once in the repo (via UI or `gh` CLI):

- Type: `type:bug`, `type:feature`, `type:task`
- Status: `todo`, `in-progress`, `in-review`, `done`
- Scope tags: `@ui`, `@api` (optional)

Project board columns (matching status labels): `Todo`, `In Progress`, `In Review`, `Done`.

### gh CLI quick-setup (optional)

```bash
gh label create "type:bug" --color FF5555 --description "Bug"
gh label create "type:feature" --color 5E9BFF --description "Feature"
gh label create "type:task" --color B28DFF --description "Task"
gh label create "todo" --color C0C0C0 --description "Not started"
gh label create "in-progress" --color F2C744 --description "In progress"
gh label create "in-review" --color 8FD3FF --description "Review/verification"
gh label create "done" --color 2ECC71 --description "Completed"
gh label create "@ui" --color 34495E --description "UI scope"
gh label create "@api" --color 1ABC9C --description "API scope"
```

Use Project columns with the same names as status labels to keep automation simple.

### PowerShell helper (in repo)

If `gh` CLI kurulu ve repo içinde çalışıyorsan:

```powershell
pwsh scripts/setup-labels.ps1
```

Bu script yukarıdaki label setini oluşturur veya günceller.
