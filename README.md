# A1 House Inspections preview

Complete static website for review. GitHub Pages is the preview host; the official business domain has not been changed.

Repository: https://github.com/smithDaveSmith/a1-house-inspections-preview

Preview address: https://smithdavesmith.github.io/a1-house-inspections-preview/

Pages is configured to use GitHub Actions. Check the workflow run for publication status.

## Edit and run

Requires Node.js 20+; no dependencies or install step.

- `src/content.mjs`: business details, seven services and FAQs.
- `src/styles.css`: shared design tokens and responsive styling.
- `src/app.js`: mobile menu and validated email-draft enquiry.
- `scripts/build.mjs`: shared HTML layout and page compositions.
- `public/assets/`: licensed photograph derivatives, brand asset and historical certificate.
- `.github/workflows/pages.yml`: builds, checks and publishes `dist/`.

```sh
npm run dev
# Open http://localhost:4173/ . Stop with Ctrl+C.
npm run build
npm run check
```

Re-run/restart `npm run dev` after edits; this small server has no hot reload. Generated `dist/` is disposable and excluded from the source package. Do not edit it.

Test a repository path locally:

```sh
BASE_PATH=/a1-house-inspections-preview/ npm run dev
# Open http://localhost:4173/a1-house-inspections-preview/
```

The build accepts `BASE_PATH`, `SITE_ORIGIN` and `PREVIEW_MODE`. The Pages workflow gets the origin and base path from GitHub, so it also works if the repository is renamed. Preview mode is on by default and explicitly enabled in the workflow. Preview pages have `noindex,nofollow,noarchive`; robots.txt disallows crawling. Noindex is not access protection: anyone with the public URL can view the preview. No production domain or CNAME is included.

## GitHub Pages

The public repository `smithDaveSmith/a1-house-inspections-preview` uses `main` as its deployment branch. For a fresh copy, create a separate public repository with `main` as its default branch. Do not reuse another client's repository.

Upload the source package's **contents** at the repository root. The root must contain `package.json`, `src/`, `public/`, `scripts/` and `.github/`; do not nest them inside another `a1-house-inspections` folder. Do not upload the ZIP itself or `dist/`.

In **Settings → Pages → Build and deployment → Source**, select **GitHub Actions**. In **Actions**, select **Deploy GitHub Pages preview → Run workflow → main → Run workflow**. A push to `main` also deploys automatically. Confirm both `build` and `deploy` succeed; use the deployment's actual URL. Do not assume a committed workflow has deployed.

If browser upload is needed, GitHub's checked limits are 100 files per upload and 25 MiB per file. This source package is below both limits. Extract it first. Upload `src/`, `public/`, `scripts/`, `package.json`, `README.md`, `ASSETS.md` and `LICENSE` to the repository root in one batch. Hidden files may not appear in the file chooser:

1. Create `.github/workflows/pages.yml` using **Add file → Create new file**. Copy the complete contents of the identically named extracted file. Commit to `main`.
2. Optionally create `.gitignore` the same way.
3. Set Pages to **GitHub Actions**, then manually run the named workflow.

If a run fails, inspect its failed step and logs. Do not add Jekyll configuration or change the output from `dist/` without evidence.

## Pages and journeys

Home; service index; House surveys; Snag lists; BER assessments; Certificates of compliance; Building-work inspections; Certificates of identity; Land registry maps; About A1; Coverage; FAQs; Contact; Preview privacy; Credits; custom 404. All navigation destinations are local to the redesign.

The chooser links to the relevant service. Each service links to related services and a preselected enquiry. The contact form validates required fields and email, creates a reviewable draft, and offers an email-app link plus copy. **It does not deliver enquiries, accept payment or confirm bookings.** Calls and email links use A1's published contact details. External email-app handling and actual delivery remain the visitor's responsibility. No verified social profiles or submission endpoint were found; none are invented. JavaScript-disabled users have direct contact links.

## Verification and launch essentials

Static checks passed for 16 pages and 413 internal link/asset references, including headings, anchors, metadata and repository-base handling. Real Chrome checks covered all 16 pages in 390/768/1280px iframe viewports (usable widths 375/753/1265px after scrollbars), mobile menu/Escape, keyboard FAQs, required-field/email validation, service preselection and copy. Representative home/contact/service pages also passed 200% root text-size tests at 320/390/1280px frame widths. No horizontal overflow remained. A real repository-path navigation test passed. These are responsive browser checks, not physical-device testing or a complete accessibility audit. No Lighthouse score was measured.

Before official launch: owner approves all drafted service scope and copy; confirms current personnel, qualifications, registration, insurance, availability, contact and coverage; supplies actual terms/privacy/complaints information; approves a real enquiry destination and tests delivery/spam protection; selects the final platform and authorises domain/DNS changes. A sample report, approved team photography and permissioned reviews would strengthen evidence but are not required to use this preview. No fabricated substitutes are included.

Retain homepage `/`. On the final platform, migrate `/BUILDING%20SURVEYOR%20REGISTER%20CERT%202012.jpg` to `/assets/registration-2012.jpg` with a 301 redirect (or preserve the original path). No other HTML destinations were found on the existing website. Original robots.txt and sitemap.xml could not be verified. The new `/services/…/`, `/about/`, `/service-area/`, `/faqs/` and `/contact/` URLs are new. Preserve them during platform migration.

After all launch prerequisites are approved, a production build may use `PREVIEW_MODE=false` and the approved `SITE_ORIGIN`. This removes preview indexing restrictions and emits a sitemap plus ProfessionalService structured data using only published business facts. Replace preview privacy content before using this mode. **Do not disable preview mode in the GitHub workflow.**

See `ASSETS.md` for provenance and rights. No WordPress, Webflow or Squarespace package has been generated.
