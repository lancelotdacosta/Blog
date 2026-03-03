# Lancelot Blog (Quarto + GitHub Pages)

This repository is a Quarto blog that publishes to GitHub Pages via GitHub Actions. You can link to it from Google Sites.

## One-time setup (GitHub)

In the GitHub repo (`lancelotdacosta/Blog`), go to **Settings → Pages**:
   - **Build and deployment**: select **GitHub Actions**.

Once you push to `master` or `main`, GitHub Actions publishes the site.

Your blog URL will be:
- `https://lancelotdacosta.github.io/Blog/`

## Link it from Google Sites

In Google Sites, add a navigation item called “Blog” that links to the URL above.

## Write a new post

Create a new folder under `posts/` and add an `index.qmd`, for example:
- `posts/2026-03-03-my-post/index.qmd`

Then push to GitHub; the site rebuilds automatically.

## Local preview (optional)

If you install Quarto locally, from this folder run:

```bash
quarto preview
```
