# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static website for Globe Furniture — a family-owned furniture store with three Massachusetts locations. The entire site is a single file: `index.html`.

## Workflow

There is no build step. To preview changes:

```
start index.html        # Windows — opens in default browser
```

The `gh` CLI is at `C:\Program Files\GitHub CLI\gh.exe` (not on the default Bash PATH — use PowerShell for `gh` commands).

## Git discipline — required after every task

Commit and push to GitHub at the completion of every piece of work, no matter how small. This ensures no progress is ever lost and the repo always reflects the current state of the site.

```
git add index.html
git commit -m "short imperative summary of what changed"
git push
```

Commit message rules:
- Imperative mood, present tense: "Add dining section" not "Added" or "Adding"
- First line ≤ 72 characters, specific to what actually changed
- No vague messages like "update" or "fix stuff"

Examples of good messages:
- `Add outdoor furniture section to navigation`
- `Update Fall River address to 40 County Street`
- `Fix mobile layout on product cards`
- `Add Facebook and Instagram links to footer`

## Architecture

Everything lives in `index.html` — HTML, CSS, and JavaScript are all inline. There are no external dependencies, frameworks, build tools, or separate files.

**Page routing** is JavaScript-only. `showPage(name)` hides all `.page` divs and shows `#page-<name>`, then sets the matching `#nav-<name>` link active. Pages: `home`, `living`, `bedroom`, `mattresses`, `dining`.

**Product catalog** is the `catalog` object in the `<script>` block. Keys: `sofas`, `sectionals`, `recliners`, `bedroom`, `mattresses`, `dining`. Each entry is an array of `{ name, desc, bg, icon }` objects. `renderProducts(gridId, key)` injects product cards into the matching grid div.

**Living Room tabs** use `switchTab(key, btn, tabsId, gridId)` to swap between `sofas`, `sectionals`, and `recliners` within the same page without a full navigation.

**Slider** (`#mainSlider`) auto-advances every 4.5 s. `goToSlide(n)`, `changeSlide(dir)` control it. Pauses on mouse hover.

**Call modal** (`#callModal`) opens via `openModal()` from the navbar button and all product "Call for Details" buttons.

## Brand constants

- Phone: `508-677-4185`
- Email: `globefurniturema@gmail.com`
- Financing note: "Financing Available Through ASEMA"
- Colors: navy `#1a2744`, gold `#c9a96e`, warm white `#f8f5f0`
- Locations: 40 County St, Fall River MA · 89 Rodney French Blvd, New Bedford MA · 101 Maseo Dr, Randolph MA

## GitHub

- Repo: https://github.com/globefurniturema-dev/globe-furniture
- Branch: `master`
- Auth account: `globefurniturema-dev`
