# Portfolio test plan

Updated October 29, 2026. This plan covers Home, About Me, Projects, Skills, and Contact. Test IDs have been reorganized into a single sequence for the completed five-page site; the earlier source audit is preserved below.

The plan contains 40 primary test cases and the additional T41 availability check. Execution is incomplete: the supplied live Projects Lighthouse report establishes a desktop Accessibility pass only. A subsequent live HTTP/source run passed 138 checks, but these do not establish full browser-case passes.

## Assignment coverage

| Requirement | Test cases |
| --- | --- |
| Every navigation link on every page | T1-T5 |
| Every page at phone and laptop sizes | T6-T15 |
| Keyboard navigation on every page | T16-T20 |
| Lighthouse Accessibility on every page | T21-T25 |
| Every JavaScript feature: mobile menu and category filters | T26-T30 |
| Live GitHub Pages testing and failure/retest history | Execution and retest log below; record local and live runs separately |

Each case includes an ID, testing subject, steps, expected result, and actual-result field. Unrun cases are not passes. Form validation is not applicable because Contact uses email links.

## How to run and record tests

- Run locally first, then repeat every applicable test on the live GitHub Pages site. Intended live base URL: https://cja67-byte.github.io/portfolio/ (verify that deployment is available before testing).
- Use Chrome and record its version, test date, tested commit, URL, and viewport in the execution log below.
- Phone viewports: 320 x 740 and 390 x 844. Laptop viewport: 1366 x 768. Chrome DevTools device emulation can be used; record whether a real device or emulation was used.
- Replace `Not run` with **Pass** or **Fail** only after executing the full case, and add the observed behavior or score. If a case has multiple viewports or controls, all must meet the expected result to pass.
- For failures, record the original failure, the fix/commit, and a new retest entry. Do not overwrite the failure history. Keep local and live results separate in the execution log.
- The final results must include live-site testing, not just source checks or local preview. A source audit or JavaScript stub test does not establish a browser test result.

## Test cases

Each navigation case requires testing **all five header links** (Home, About me, Projects, Skills, Contact) from the named starting page. Return to that page before testing each next link. Repeat with the mobile menu open and at laptop width. Also test the wordmark and Back to top link.

For keyboard cases, start with a fresh reload and use only Tab, Shift+Tab, Enter, Space, and Escape. Test both phone and laptop layouts, including the skip link, every navigation link, every page-specific control, and the footer. Open an email draft only; do not send it.

For Lighthouse cases, open the named live page in Chrome DevTools, select Lighthouse and Accessibility, then run mobile and desktop audits. Record both actual scores and save the report. Fix issues and rerun if either score is below 90.

| Test ID | What is being tested | Steps to run the test | Expected result | Actual result (Pass or Fail after execution) |
| --- | --- | --- | --- | --- |
| T1 | Home navigation | Open index.html; follow the full navigation procedure above, returning before each link. | All five page links, the wordmark, and Back to top work; only the current page is marked active. | Not run |
| T2 | About Me navigation | Open about.html; follow the full navigation procedure above, returning before each link. | All five page links, the wordmark, and Back to top work; only the current page is marked active. | Not run |
| T3 | Projects navigation | Open projects.html; follow the full navigation procedure above, returning before each link. | All five page links, the wordmark, and Back to top work; only the current page is marked active. | Not run |
| T4 | Skills navigation | Open skills.html; follow the full navigation procedure above, returning before each link. | All five page links, the wordmark, and Back to top work; only the current page is marked active. | Not run |
| T5 | Contact navigation | Open contact.html; follow the full navigation procedure above, returning before each link. | All five page links, the wordmark, and Back to top work; only the current page is marked active. | Not run |
| T6 | Home phone layout | Open index.html at both phone sizes; scroll the whole page, open Menu, and expand any project details. | No horizontal scrolling, overlap, or clipped content; controls are usable and text/images fit. | Not run |
| T7 | About Me phone layout | Open about.html at both phone sizes; scroll the whole page, open Menu, and expand any project details. | No horizontal scrolling, overlap, or clipped content; controls are usable and text/images fit. | Not run |
| T8 | Projects phone layout | Open projects.html at both phone sizes; scroll the whole page, open Menu, and expand any project details. | No horizontal scrolling, overlap, or clipped content; controls are usable and text/images fit. | Not run |
| T9 | Skills phone layout | Open skills.html at both phone sizes; scroll the whole page, open Menu, and expand any project details. | No horizontal scrolling, overlap, or clipped content; controls are usable and text/images fit. | Not run |
| T10 | Contact phone layout | Open contact.html at both phone sizes; scroll the whole page, open Menu, and expand any project details. | No horizontal scrolling, overlap, or clipped content; controls are usable and text/images fit. | Not run |
| T11 | Home laptop layout | Open index.html at 1366 x 768; inspect the whole page, including footer and expanded details where present. | Navigation is visible; columns, typography, images, and spacing remain readable without overflow. | Not run |
| T12 | About Me laptop layout | Open about.html at 1366 x 768; inspect the whole page, including footer and expanded details where present. | Navigation is visible; columns, typography, images, and spacing remain readable without overflow. | Not run |
| T13 | Projects laptop layout | Open projects.html at 1366 x 768; inspect the whole page, including footer and expanded details where present. | Navigation is visible; columns, typography, images, and spacing remain readable without overflow. | Not run |
| T14 | Skills laptop layout | Open skills.html at 1366 x 768; inspect the whole page, including footer and expanded details where present. | Navigation is visible; columns, typography, images, and spacing remain readable without overflow. | Not run |
| T15 | Contact laptop layout | Open contact.html at 1366 x 768; inspect the whole page, including footer and expanded details where present. | Navigation is visible; columns, typography, images, and spacing remain readable without overflow. | Not run |
| T16 | Home keyboard navigation | Open index.html; follow the keyboard procedure above through every control. | Logical focus order, visible focus, working skip link and controls, no focus trap; Escape closes the mobile menu and returns focus to Menu. | Not run |
| T17 | About Me keyboard navigation | Open about.html; follow the keyboard procedure above through every control. | Logical focus order, visible focus, working skip link and controls, no focus trap; Escape closes the mobile menu and returns focus to Menu. | Not run |
| T18 | Projects keyboard navigation | Open projects.html; follow the keyboard procedure above through every control. | Logical focus order, visible focus, working skip link and controls, no focus trap; Escape closes the mobile menu and returns focus to Menu. | Not run |
| T19 | Skills keyboard navigation | Open skills.html; follow the keyboard procedure above through every control. | Logical focus order, visible focus, working skip link and controls, no focus trap; Escape closes the mobile menu and returns focus to Menu. | Not run |
| T20 | Contact keyboard navigation | Open contact.html; follow the keyboard procedure above through every control. | Logical focus order, visible focus, working skip link and controls, no focus trap; Escape closes the mobile menu and returns focus to Menu. | Not run |
| T21 | Home Lighthouse Accessibility | Open index.html; run the mobile and desktop Lighthouse procedure above. Record both scores. | Accessibility score is at least 90 in both modes; identified issues are reviewed. | Not run |
| T22 | About Me Lighthouse Accessibility | Open about.html; run the mobile and desktop Lighthouse procedure above. Record both scores. | Accessibility score is at least 90 in both modes; identified issues are reviewed. | Not run |
| T23 | Projects Lighthouse Accessibility | Open projects.html; run the mobile and desktop Lighthouse procedure above. Record both scores. | Accessibility score is at least 90 in both modes; identified issues are reviewed. | Live desktop: Pass, 100/100 (October 29, 2026, supplied report). Mobile: Not run. Local: Not run. Full case incomplete. |
| T24 | Skills Lighthouse Accessibility | Open skills.html; run the mobile and desktop Lighthouse procedure above. Record both scores. | Accessibility score is at least 90 in both modes; identified issues are reviewed. | Not run |
| T25 | Contact Lighthouse Accessibility | Open contact.html; run the mobile and desktop Lighthouse procedure above. Record both scores. | Accessibility score is at least 90 in both modes; identified issues are reviewed. | Not run |
| T26 | Mobile menu on every page | On each page at phone width, click Menu twice, reopen it, then select another page. Inspect aria-expanded in DevTools. | First click opens all five links; second closes them; expanded state matches visibility; navigation reaches the selected page. | Not run |
| T27 | Menu resizing on every page | On each page, open the phone menu; resize to laptop, then back to phone. | Desktop navigation remains visible and Menu is hidden; returning to phone resets to a closed menu with aria-expanded=false. | Not run |
| T28 | API project filter | Open Projects; select APIs + databases using mouse, then repeat with keyboard. | Only Currency exchange tracker and News headline organizer appear; count is 2 of 3 and only the selected filter has aria-pressed=true. | Not run |
| T29 | Research project filter | On Projects, select Biomedical research using mouse, then keyboard. | Only the biocompatibility paper appears; count is 1 of 3 and selected state updates. | Not run |
| T30 | Show all and repeated filtering | Switch between both categories, then Show all, several times. | All three projects return; count is 3 of 3; no duplicated cards, stale state, or keyboard focus loss. | Not run |
| T31 | Project details and code | Expand and collapse all three Explore the project controls; expand both Python code disclosures with mouse and keyboard. | Correct details are shown; code is readable and wraps without horizontal page overflow. | Not run |
| T32 | Project downloads | Download both Python notebooks and the Word paper. Open notebooks in Colab and the paper in Word or another compatible reader. No API execution is needed. | All three files download and open; notebook excerpts contain source without saved outputs; paper displays the supplied research project. | Not run |
| T33 | Home content links | Activate Explore my projects, Beyond my studies, both project preview links, and View all three projects; return between checks. | Links reach Projects, Home interests, the matching project cards, and the full project collection respectively. | Not run |
| T34 | About and Skills content links | On About, activate My story. On Skills, activate See my class projects and the currency tracker link. | About scrolls to studies; Skills links reach Projects and the currency tracker card. | Not run |
| T35 | Contact email links | Activate Email me and the visible email address with mouse and Enter. | Both open the configured email app with cja67@njit.edu as recipient; no message is sent automatically. | Not run |
| T36 | JavaScript-disabled fallback | Disable JavaScript; reload each page at phone and laptop widths. On Projects, inspect details and downloads. Restore JavaScript afterward. | All content and navigation remain usable; filters are hidden and all three projects are visible; native disclosures and downloads still work. | Not run |
| T37 | Reduced motion | Enable reduced-motion emulation; follow My story, Beyond my studies, and Back to top links. Restore normal settings afterward. | Section navigation works without animated smooth scrolling. | Not run |
| T38 | Browser console and assets | On every page, open Console and Network; reload, operate the menu, and exercise all page-specific features. | No JavaScript errors, missing images, or failed stylesheet/script requests. | Not run |
| T39 | Images and rendered contrast | Inspect every displayed image's alt attribute and file size. Review text and focus indicators across gradients and project surfaces at both viewport sizes. | Descriptive alt text; each image under 500 KB; readable text (at least 4.5:1 for normal text) and visible keyboard focus throughout. | Not run |
| T40 | Local file opening | Double-click index.html; visit every page and use navigation, filters, details, and downloads without a server. | Styles, scripts, links, and downloads work using relative paths. | Not run |

Contact uses email links, not a form. Valid/invalid form-input testing is therefore not applicable. The JavaScript features are responsive navigation (T26-T27, plus keyboard cases) and project filters (T28-T30).

## Execution and retest log

### Attempt to execute the full suite — October 29, 2026

Windows computer-use discovery found the existing Chrome window on the live Projects page. Its accessibility tree could be read and DevTools opened, but screenshot capture repeatedly failed with `FrameArrived timed out` / `window capture timed out`; clicking failed with `coordinate input geometry is unavailable`. No successful filter activation or new Lighthouse run was verified. Consequently, full navigation, viewport, keyboard, mouse, visual-contrast, and Lighthouse cases remain incomplete rather than being marked Pass or website Fail.

The live HTTP/source checks below were executed instead where possible. They are partial evidence for T1-T5, T32-T35, T38-T39 and full evidence for T41, not substitutes for their browser steps.

| Run | Method and scope | Actual result | Retest or limitation |
| --- | --- | --- | --- |
| Initial HTTP/source run | PowerShell requests for all five live pages and referenced resources; HTML, image, notebook, and Word-download checks | 136 of 138 checks passed; two notebook-parser checks failed | Test-harness error: binary notebook response bodies were not decoded as UTF-8 before JSON parsing. No site defect established. Original results retained in test-evidence/live-http-checks-initial.json. |
| Corrected HTTP/source run | Same checks after adding UTF-8 decoding for binary notebook responses | Pass: 138 of 138 checks | All five pages and referenced assets returned HTTP 200; navigation targets and fragments exist; image alt text and sizes pass; both notebooks parse without saved outputs; live Word download matches the repository copy byte-for-byte. Results in test-evidence/live-http-checks.json. |

These runs did not measure viewports, inspect rendered text/focus contrast, open downloaded files in Colab/Word, launch the email app, inspect browser runtime errors, or execute new Lighthouse audits. Resume the browser cases when reliable capture and input are available. Preserve the previously supplied Lighthouse result below.

The user-supplied Lighthouse report is recorded below. Add a row for each further test run, including repeat runs after fixes. T40 is local-only; record live results for all other cases. A pass for one mode does not establish a pass for the other mode or for manual keyboard and layout tests.

| Date | Test ID | Commit | URL / local path | Browser version / device | Viewport | Observed result / Lighthouse scores | Pass or Fail | Fix and retest reference |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| October 29, 2026, 1:54 p.m. EDT | T23, live desktop portion | Not identified in supplied report | https://cja67-byte.github.io/portfolio/projects.html | Chrome 156.0.0.0; Lighthouse 13.5.0; user-supplied JSON | Actual viewport not established; formFactor=desktop; screen emulation disabled | Accessibility 100; Performance 100; Best Practices 100; SEO 100. FCP/LCP approximately 0.3 s; TBT 0 ms; CLS 0. | Pass (desktop Lighthouse portion only) | No failed run supplied. Mobile audit and manual checks remain Not run. |

Report timestamp: `2026-10-29T17:54:23.982Z`. The report includes unused mobile screen-emulation dimensions, but `screenEmulation.disabled` is true; those dimensions are not evidence of a phone test. Manual accessibility checks are not established by the automated score. The historical October 22 notes below describe the evidence available on that date.

## Earlier verification evidence

### Live availability check — October 29, 2026

| Test ID | What is being tested | Steps to run the test | Expected result | Actual result |
| --- | --- | --- | --- | --- |
| T41 | Live page availability | Request index.html, about.html, projects.html, skills.html, and contact.html from https://cja67-byte.github.io/portfolio/ and inspect each HTTP response. | Every page returns HTTP 200. | Pass — all five returned HTTP 200 using PowerShell Invoke-WebRequest on October 29, 2026. |

No browser was connected for this availability check. This result does not establish keyboard usability, responsive layout, or Lighthouse scores. Existing results above are preserved. Complete remaining browser cases on the live site and record failures, fixes, and retests separately.

Earlier source checks confirmed relative links, one h1 per page, current-page indicators, and valid download files. The original research-paper copy was verified byte-for-byte. Isolated JavaScript checks confirmed menu state transitions and project filtering for two API projects, one research project, and all three projects. These are not browser or Lighthouse results and do not mark the cases above as passed.

## Accessibility source audit — October 22, 2026

- **Pass — image descriptions:** All five displayed image instances across Home and Projects have nonempty, descriptive alt attributes. The other pages contain no images.
- **Pass — image size:** Every image in assets/images is below 500 KB. The largest is biocompatibility.svg at 796 bytes.
- **Pass — palette contrast calculation:** Black text against the defined opaque background colors ranges from 9.59:1 (orange) to 19.09:1 (light silver). This is a source-level calculation; rendered gradient contrast still needs browser inspection.
- **Source review completed — keyboard support:** Native links, buttons, and disclosure controls are used. Every page has a skip link; links, buttons, and disclosure summaries have visible focus styles. Menu open/close, Escape focus return, and resizing previously passed isolated JavaScript checks. Actual Tab/Shift+Tab/Enter/Space navigation has not been tested in a browser.
- **Not run — Lighthouse:** No connected browser was available. No Accessibility score is claimed.

To finish, open each live page in Chrome, open DevTools > Lighthouse, select Accessibility, and run an audit for mobile and desktop. Record each actual score and fix/retest any page below 90. On each page, also use Tab and Shift+Tab to reach every control, Enter to follow links, Space/Enter to activate buttons and disclosures, and Escape to close the mobile menu. Verify focus is visible and never trapped. Opening an email draft is sufficient; do not send a message during testing.
