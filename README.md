  # Dental Care for Moms — Deployment Guide

Static site built with HTML/CSS/JS. Below are quick ways to make it live.

## Local Preview
- Start a local server:
```bash
cd path/to/website/folder
python3 -m http.server 8000
```
- Visit: http://127.0.0.1:8000

## Option 1: GitHub Pages (fast + free)
1. Initialize git and commit:
```bash
cd /home/haseeb/Pictures/APAA_WEBSITE
git init
git add .
git commit -m "Initial site"
```
2. Create a GitHub repo (via web UI) and add remote:
```bash
git remote add origin https://github.com/<your-username>/<repo-name>.git
git branch -M main
git push -u origin main
```
3. Enable Pages: GitHub → Repo → Settings → Pages → "Deploy from branch"; Branch: `main`, Folder: `/root`.
4. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

Notes:
- For a custom domain, add it in Pages settings and create DNS `CNAME` to `<your-username>.github.io`.

## Option 2: Netlify Drop (no git required)
1. Zip the folder or use the folder directly: `/home/haseeb/Pictures/APAA_WEBSITE`.
2. Go to https://app.netlify.com/drop and drag-and-drop the folder.
3. Netlify will give you a live URL instantly; add a custom domain in Site settings.

## Option 3: Vercel CLI (zero-config)
1. Install Vercel:
```bash
npm i -g vercel
```
2. Deploy from the project directory:
```bash
cd path/to/website/folder
vercel
```
3. Follow login prompts; Vercel will publish and return a live URL.

## Custom Domain
- Point DNS `A`/`CNAME` records per host instructions (GitHub Pages: `CNAME`; Netlify/Vercel: provider-specific).
- Add HTTPS: most hosts auto-provision TLS (Let’s Encrypt) after DNS is set.

## Project Structure
- `index.html` — entry point
- `assets/css/styles.css` — styles
- `assets/js/main.js` — scripts
- `INDEX.HTML` — legacy file kept as redirect to `index.html`

## Tips
- Keep relative paths (already used) so deployment works at any base URL.
- If using GitHub Pages under a repo path, links like `assets/...` will still resolve.
