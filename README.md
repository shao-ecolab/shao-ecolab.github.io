# Shao EcoLab website

Source for the website of the [Shao EcoLab](https://shao-ecolab.github.io), Department of Microbiology,
University of Tennessee, Knoxville.

Built with [MyST Markdown](https://mystmd.org) from
[opengeos/myst-cv-template](https://github.com/opengeos/myst-cv-template) by Qiusheng Wu (MIT).

## How it works

Content lives in Markdown. On every push to `main`, GitHub Actions builds the HTML site and
deploys it to GitHub Pages.

### The CV

`cv.pdf` at the repo root is a **committed file**, exported from Word, and is served verbatim
at <https://shao-ecolab.github.io/cv.pdf>. To update the CV, replace that file and push.

**It is not generated from the Markdown any more**, so the site pages and the PDF can drift
apart — update both when something changes.

`generate_cv.py` is kept in the repo but is no longer wired into the build. To go back to
generating the PDF from the page content, restore the "Setup Typst", "Download fonts",
"Generate CV Typst source" and "Compile CV PDF" steps in `.github/workflows/deploy.yml`, and
re-add `cv.pdf` to `.gitignore`. The section below describes the formats that script expects.

## Editing

| File | Contents |
|------|----------|
| `index.md` | Homepage: contact block, lab summary, highlights, recent news |
| `pages/about.md` | Bio, education table, appointments table |
| `pages/research.md` | Research areas, publications, in-review/in-prep, grants |
| `pages/join.md` | Recruiting page (not part of the CV PDF) |
| `pages/models.md` | Process-based models the lab develops |
| `pages/teaching.md` | Courses and mentoring |
| `pages/talks.md` | Invited talks and conference presentations |
| `pages/awards.md` | Awards and honors |
| `pages/services.md` | Professional and disciplinary service |
| `pages/news.md` | News archive |
| `blog/*.md` | Blog posts (add files here; they appear automatically) |

### Formats the CV generator depends on (only if you re-enable generation)

`generate_cv.py` parses specific headings and structures. If a section silently disappears from
`cv.pdf`, it is almost always one of these:

- **Education / Appointments** (`about.md`) must be tables under `## Education` / `## Appointments`.
- **Awards** (`awards.md`) must be a table with `Year` and `Award` columns — a bullet list is ignored.
- **Courses** (`teaching.md`) must be tables with `Course`, `Title`, `Semesters` columns, under
  headings matching `## Courses at <institution>`.
- **Mentoring** (`teaching.md`) subsections must contain tables. Anything under a heading containing
  the word "Past" must additionally be wrapped in a `:::{dropdown}` block.
- **Professional Services** (`services.md`) must be a table. **Disciplinary Services** accepts bullets.
- Avoid escaped asterisks (`\*`) anywhere — they survive into the PDF as literal backslashes.

The `join.md` page is intentionally excluded from the CV.

## Local development

```bash
npm install -g mystmd
myst start
```

To build the CV PDF locally you also need Typst and the fonts:

```bash
brew install typst
mkdir -p fonts
curl -sL "https://github.com/adobe-fonts/source-sans-pro/releases/download/3.006R/source-sans-pro-3.006R.zip" -o /tmp/ssp.zip
unzip -qo /tmp/ssp.zip -d /tmp/ssp && cp /tmp/ssp/source-sans-pro-3.006R/OTF/*.otf fonts/
python generate_cv.py
typst compile cv.typ cv.pdf --font-path ./fonts --ignore-system-fonts
```

Personal details in the PDF header (name, address, links) are set in `gen_preamble()` in
`generate_cv.py`, not in the Markdown.

## License

Content: © Siya Shao. Template code: MIT (see `LICENSE`).
