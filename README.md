# Lancelot Blog (Quarto + GitHub Pages)

This folder is a standalone blog you can publish to GitHub Pages and then link from Google Sites.

## One-time setup (GitHub)

1. Use your existing GitHub repo: `lancelotdacosta/Blog`.
2. Put the contents of this folder in that repo (as the repo root), replacing what’s there.
3. In the GitHub repo, go to **Settings → Pages**:
   - **Build and deployment**: select **GitHub Actions**.

Once you push to `main`, GitHub Actions publishes the site.

Your blog URL will be:
- `https://lancelotdacosta.github.io/Blog/`

### If you prefer commands

Copy/paste this whole block (it clones your GitHub repo into `Blog-repo/`, then copies this Quarto blog into it, then pushes):

```bash
cd /Users/lancelotdacosta/Desktop/Work/2_PUBLIC/25_Blog

# Fresh clone of your GitHub repo
command rm -rf Blog-repo
git clone https://github.com/lancelotdacosta/Blog.git Blog-repo

# Copy this Quarto blog into the clone (keeps Blog-repo/.git intact)
rsync -a --delete --exclude .git Blog/ Blog-repo/

cd Blog-repo
git add -A
git commit -m "Replace site with Quarto blog"
git push -u origin HEAD
```

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
