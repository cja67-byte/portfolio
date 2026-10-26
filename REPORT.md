# Personal Portfolio Website Report

**Chigozirim Amaefule**

**Repository:** https://github.com/cja67-byte/portfolio  
**Website address:** https://cja67-byte.github.io/portfolio/ (live deployment still needs verification)

*Draft for review. Add the two screenshots below and complete live-site testing before submission. The text is intended for a short 1–2 page report once formatted with the screenshots.*

## Website features

My portfolio introduces me as a Biomedical Engineering student interested in prosthetics and biomaterials development. I built it with Codex using plain HTML, CSS, and JavaScript. It has five pages: Home, About Me, Projects, Skills, and Contact. Each page links to the other four through consistent navigation.

The design uses a metallic-silver and orange background, black text, and a shared external stylesheet. Media queries adjust the navigation, spacing, and columns for phone and laptop screens. The mobile menu opens and closes with a button, and the Projects page lets visitors filter between API projects and biomedical research.

The three projects are a Python currency exchange tracker, a news headline organizer, and my paper on biocompatibility in prosthetics and implants. Visitors can expand project descriptions, inspect the Python code, and download notebook excerpts or the original research paper. The Skills page describes my experience honestly, including beginner Python and SQL knowledge. Contact provides a direct email link.

## Challenges and solutions

One challenge was presenting Google Colab coursework clearly on a static website. Rather than trying to run Python or databases in the website, I used project summaries, explanatory graphics, expandable code, and downloadable files. Recorded notebook results are identified as recorded results rather than live data.

Another challenge was preparing the notebooks for a public repository. A saved output in the weather exercise exposed an API key and showed an authentication failure. That exercise was excluded. The selected notebook downloads preserve the source code but omit saved outputs and notebook metadata. This kept the exposed credential out of the public site.

Keeping five pages consistent was also important. A shared stylesheet and script provide common styling and navigation behavior. Source checks confirmed that all five pages have one main heading and working local links. Every displayed image has descriptive alternative text, and all image files are below 500 KB.

## A Codex mistake and its correction

While preparing the Projects page, Codex generated a PowerShell helper script that assigned page content to a variable named `$home`. PowerShell treats variable names without regard to capitalization, so this conflicted with its read-only `$HOME` variable and stopped the script.

Codex corrected the variable name to `$homePageSource` and reran the helper successfully. The generated page and its links were then checked. This showed why reviewing execution errors and checking the resulting files matters, even when an agent writes the code.

## Testing status

`TESTING.md` contains 40 test cases covering every page, navigation links, responsive layouts, keyboard use, interactive features, downloads, and Lighthouse Accessibility. Source-level checks and isolated JavaScript checks have passed. Browser keyboard testing, phone/laptop visual checks, live-site testing, and Lighthouse scores are still pending. I have not claimed results for tests that have not been performed.

## Website screenshots

**Figure 1 — Phone view:** Screenshot pending. Capture the actual Home page at approximately 390 × 844, with the mobile menu open to show the navigation.

**Figure 2 — Laptop view:** Screenshot pending. Capture the actual Home page at approximately 1366 × 768, showing the headline and desktop navigation.

Use real browser captures here, not the earlier design mockups. If using Chrome device emulation for the phone capture, identify it as an emulated phone viewport in the caption.
