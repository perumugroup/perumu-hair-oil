# Perumu Hair Oil Website

This repository contains the static website for **Perumu Hair Oil**.

## Automatic Deployment

A GitHub Actions workflow (`.github/workflows/publish.yml`) is included. It automatically deploys the site to **GitHub Pages** whenever you push to the `main` branch.

### Steps to Enable
1. **Create a GitHub repository** (public or private) named `perumu-hair-oil`.
2. **Push this folder** to the repository (instructions below).
3. In the repository settings, enable **GitHub Pages** – source: `gh-pages` branch (the workflow will create it for you).
4. After the first successful run, your live site will be available at:
   `https://<USERNAME>.github.io/perumu-hair-oil/`

## Deploying Changes
You can use the provided `auto_deploy.bat` script to commit and push changes with a single click. It runs:
```bat
git add .
git commit -m "Update site"
git push origin main
```
Make sure you have Git installed and your local repository is linked to the remote.

## Local Testing
- Open `index.html` directly in the browser, or run `python -m http.server 8080` from this folder to test with a local server.

---
*This README was generated to help you set up automatic live deployment.*
