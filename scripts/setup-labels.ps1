# Requires: GitHub CLI (`gh`) authenticated and run inside target repo

$labels = @(
    @{ name = "type:bug"; color = "FF5555"; description = "Bug" },
    @{ name = "type:feature"; color = "5E9BFF"; description = "Feature" },
    @{ name = "type:task"; color = "B28DFF"; description = "Task" },
    @{ name = "todo"; color = "C0C0C0"; description = "Not started" },
    @{ name = "in-progress"; color = "F2C744"; description = "In progress" },
    @{ name = "in-review"; color = "8FD3FF"; description = "Review/verification" },
    @{ name = "done"; color = "2ECC71"; description = "Completed" },
    @{ name = "@ui"; color = "34495E"; description = "UI scope" },
    @{ name = "@api"; color = "1ABC9C"; description = "API scope" }
)

foreach ($label in $labels) {
    Write-Host "Ensuring label $($label.name)..."
    gh label create $label.name --color $label.color --description $label.description --force 1>$null
    if ($LASTEXITCODE -ne 0) {
        Write-Warning "Could not create/update $($label.name). Check gh auth and repo context."
    }
}

Write-Host "Done."
