---
name: duka-mkononi-website
description: Duka Mkononi marketing website conventions for static HTML pages (EN/SW). Use when editing site copy, legal pages, assets, or deployment scripts in this repository.
---

# Duka Mkononi Website Skill

Static marketing site for Duka Mkononi. Keep English and Swahili pages aligned and verify diffs before finishing.

## Project identity
- Product site for Duka Mkononi
- Stack: static HTML + assets (GitHub Pages)
- Live: https://chingalo-family.github.io/duka-mkononi-website/

## Page map
| Purpose | English | Swahili |
|---------|---------|---------|
| Home | `index-en.html` | `index.html` |
| Privacy | `privacy-en.html` | `privacy.html` |
| Terms | `terms-en.html` | `terms.html` |

Also: `assets/`, `scripts/`, `README.md`

## Consistency rules
- Prefer updating **both** language variants in the same change when content is shared.
- Keep branding, product claims, and links consistent with the mobile app README where they describe the product.
- Do not invent pricing or plan limits that contradict app docs; defer to `duka_mkononi_app` docs/subscription when unsure.
- Keep legal pages carefully scoped; avoid accidental copy/paste between privacy and terms.

## After any change — check what changed

```bash
git status
git diff
```

Confirm only intentional HTML/assets/scripts changed, and that EN/SW pairs stay in sync when expected.

## Done criteria
- Diff reviewed via `git status` / `git diff`
- EN and SW pages updated together when content is shared
- Links and assets resolve
- `README.md` updated if pages or deploy flow change
