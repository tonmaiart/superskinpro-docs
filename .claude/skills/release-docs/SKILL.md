---
name: release-docs
description: Release the SuperSkinPro docs — build with mkdocs --strict to catch errors, commit pending changes, and push to main so GitHub Actions deploys to GitHub Pages. Use when the user says "release docs", "deploy docs", "publish docs" or runs /release-docs.
---

# Release docs

Deployment is handled by `.github/workflows/deploy.yml`, which builds and publishes to GitHub Pages on every push to `main`. This skill makes sure the push is safe.

## Steps

1. **Check state**
   - `git status` and `git branch --show-current`. If not on `main`, ask the user before continuing.
   - `git fetch` and confirm the local branch is not behind `origin/main`; if it is, `git pull --rebase` first.

2. **Build locally (same as CI)**
   - `pip install -r requirements.txt` only if `mkdocs` is not installed.
   - `mkdocs build --strict`
   - If it fails, show the errors (broken links, missing nav files, etc.), fix them or ask the user, and stop. Never push a failing build.
   - Delete the generated `site/` folder afterwards if it is not git-ignored.

3. **Commit**
   - If there are uncommitted changes, show a short summary (`git status --short`) and commit them with a descriptive message summarising which docs pages changed (not just "Update"). Pass `$ARGUMENTS` as the message if the user gave one.
   - If there is nothing to commit and nothing ahead of `origin/main`, tell the user there is nothing to release and stop.

4. **Push and deploy**
   - `git push origin main`
   - Report the run: `gh run list --workflow=deploy.yml --limit 1`. If `gh` is unavailable, give the Actions URL instead.
   - To redeploy without new commits: `gh workflow run deploy.yml`.
