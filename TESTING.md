# Portfolio test plan

## Accessibility source audit — October 22, 2026

- **Pass — image descriptions:** All five displayed image instances across Home and Projects have nonempty, descriptive alt attributes. The other pages contain no images.
- **Pass — image size:** Every image in assets/images is below 500 KB. The largest is biocompatibility.svg at 796 bytes.
- **Pass — palette contrast calculation:** Black text against the defined opaque background colors ranges from 9.59:1 (orange) to 19.09:1 (light silver). This is a source-level calculation; rendered gradient contrast still needs browser inspection.
- **Source review completed — keyboard support:** Native links, buttons, and disclosure controls are used. Every page has a skip link; links, buttons, and disclosure summaries have visible focus styles. Menu open/close, Escape focus return, and resizing previously passed isolated JavaScript checks. Actual Tab/Shift+Tab/Enter/Space navigation has not been tested in a browser.
- **Not run — Lighthouse:** No connected browser was available. No Accessibility score is claimed.

To finish, open each live page in Chrome, open DevTools > Lighthouse, select Accessibility, and run an audit for mobile and desktop. Record each actual score and fix/retest any page below 90. On each page, also use Tab and Shift+Tab to reach every control, Enter to follow links, Space/Enter to activate buttons and disclosures, and Escape to close the mobile menu. Verify focus is visible and never trapped. Opening an email draft is sufficient; do not send a message during testing.

## Contact and final navigation

| ID | Testing | Steps | Expected result | Actual result |
| --- | --- | --- | --- | --- |
| T35 | All-page navigation | On each of the five pages, activate Home, About me, Projects, Skills, and Contact; also test Contact's wordmark, skip link, and Back to top. | Every link reaches its destination; only the current page is marked active. | Not run |
| T36 | Contact email | Activate Email me and the displayed email address with mouse and keyboard. | The configured email app opens a draft to cja67@njit.edu; nothing is sent automatically. | Not run |
| T37 | Contact responsive layout | Inspect Contact at 320px, 390px, and 1366px widths. | Email address, heading, and navigation fit without horizontal scrolling. | Not run |
| T38 | Contact keyboard and menu | Use Tab, Shift+Tab, Enter, and Escape at phone and laptop widths. | Skip link and visible focus work; menu opens and closes; links are operable. | Not run |
| T39 | Contact accessibility and console | Run Lighthouse Accessibility and inspect the console while using the page. | Accessibility at least 90; no console errors. | Not run |
| T40 | Contact live site | Repeat T35-T39 on GitHub Pages. | All pages, shared assets, and email links work on the live site. | Not run |

Run the browser checks locally and repeat on the live GitHub Pages site. Record the URL, date, browser, viewport, actual outcome, and Pass or Fail. Preserve failed results and append retests after fixes. Browser and live-site checks below have not yet been run.

| ID | Testing | Steps | Expected result | Actual result |
| --- | --- | --- | --- | --- |
| T1 | Local opening | Double-click `index.html`. | Content, styles, and navigation load without a server. | Not run |
| T2 | Home links | Activate the name, Home, About me, Contact, introduction link, and Back to top. | Each goes to the correct page or section. | Not run |
| T3 | Phone layout | Inspect Home at 320px and 390px widths. | All text and controls fit; no horizontal scrolling. | Not run |
| T4 | Laptop layout | Inspect Home at 1366px width. | Headline, section columns, and footer fit with readable spacing. | Not run |
| T5 | Mobile menu | On a phone viewport, open and close Menu. | Links toggle and expanded state tracks visibility. | Not run |
| T6 | Menu keyboard | Tab to Menu, press Enter, tab to a link, then press Escape. | Menu opens; links receive focus; Escape closes it and returns focus to Menu. | Not run |
| T7 | Menu link selection | Open mobile menu and activate About me and Contact. | Menu closes; About me opens about.html and Contact opens contact.html. | Not run |
| T8 | Resize behavior | Open the mobile menu, resize to laptop, then back to phone. | Desktop links remain visible; mobile menu returns to a closed state. | Not run |
| T9 | Keyboard and skip link | Reload Home; navigate with Tab, Shift+Tab, and Enter. | Skip link appears on focus; all controls work with visible focus and no traps. | Not run |
| T10 | No JavaScript | Disable JavaScript and reload Home. | Content and navigation remain available on phone and laptop. | Not run |
| T11 | Reduced motion | Enable reduced motion and follow a section link. | Scrolling is immediate rather than animated. | Not run |
| T12 | Accessibility | Run Chrome Lighthouse Accessibility on Home. | Score is at least 90; review and resolve reported issues. | Not run |
| T13 | Console | Open DevTools and exercise Home interactions. | No JavaScript errors or failed asset loads. | Not run |
| T14 | Live deployment | Repeat T2–T13 at the verified GitHub Pages URL. | Links, assets, responsive behavior, and accessibility work under `/portfolio/`. | Not run |

## About page checks

| ID | Testing | Steps | Expected result | Actual result |
| --- | --- | --- | --- | --- |
| T15 | About links | Open about.html; activate the wordmark, Home, About me, Contact, My story, skip link, and Back to top. | Links reach the correct pages or sections; About me is marked as current. | Not run |
| T16 | About phone layout | Inspect About at 320px and 390px widths. | Text and navigation fit without horizontal scrolling. | Not run |
| T17 | About laptop layout | Inspect About at 1366px width. | Headline and section columns remain readable and fit. | Not run |
| T18 | About keyboard and menu | Use Tab, Shift+Tab, Enter, and Escape on About at phone and laptop widths; follow the Contact link from the mobile menu. | Skip link and visible focus work; menu opens and closes; the Contact page opens. | Not run |
| T19 | About accessibility | Run Lighthouse Accessibility on About. | Score is at least 90; resolve reported issues. | Not run |
| T20 | About console and fallback | Exercise About with DevTools open, then reload with JavaScript disabled. | No console errors; navigation and content remain available without JavaScript. | Not run |
| T21 | About live site | Repeat T15-T20 on the live GitHub Pages site. | Both pages and assets work under /portfolio/. | Not run |

## Coverage to add as pages are built

All five pages now have test cases. Contact uses direct email links, so there is no form to validate.

## Skills page checks

| ID | Testing | Steps | Expected result | Actual result |
| --- | --- | --- | --- | --- |
| T30 | Skills navigation | Follow Skills from all four pages; activate its wordmark, Home, About me, Projects, Skills, Contact, project CTA, currency tracker link, skip link, and Back to top. | Every destination resolves; only Skills is marked current on Skills. | Not run |
| T31 | Skills responsive layout | Inspect at 320px, 390px, and 1366px widths. | Lists, heading, and navigation fit without horizontal scrolling. | Not run |
| T32 | Skills keyboard and mobile menu | Use Tab, Shift+Tab, Enter, and Escape at mobile and laptop widths. | Visible focus, working skip link, operable menu, and no focus traps. | Not run |
| T33 | Skills accessibility and console | Run Lighthouse Accessibility and exercise links with DevTools open. | Accessibility score at least 90; no console errors. | Not run |
| T34 | Skills live site | Repeat T30-T33 on GitHub Pages. | Links and shared assets work under /portfolio/. | Not run |

## Projects and updated Home checks

Automated checks completed during implementation: local links and fragment targets resolve on all three pages; each page has one h1; all three notebook excerpts parse and contain no saved outputs; SVGs parse and are under 500 KB; the exposed source credential is absent from public files. JavaScript syntax and category transitions (2 API, 1 data, 3 total) passed in an isolated DOM stub. This does not replace the browser checks below. No browser was connected, so visual, keyboard, live-site, and Lighthouse checks remain unrun.

| ID | Testing | Steps | Expected result | Actual result |
| --- | --- | --- | --- | --- |
| T22 | Navigation | On Home, About, and Projects activate every header link; follow Home project previews, all-projects link, Projects hero link, and footer link. | All links reach the correct page or section; current page is indicated. | Not run |
| T23 | Category filters | Choose APIs + databases, Biomedical research, then Show all. | Exactly 2, 1, then 3 projects appear; pressed state and count update. | Not run |
| T24 | Details and downloads | Expand each project and code block; download each notebook and the research paper. | Details open; code wraps; two valid source-only notebooks and the original Word paper download. | Not run |
| T25 | Phone and laptop | Inspect Home and Projects at 320, 390, and 1366px, including expanded code. | Images, headings, filters, code, and navigation fit without horizontal overflow. | Not run |
| T26 | Keyboard | Use Tab, Shift+Tab, Enter, Space, and Escape on Projects. | Skip link, menu, filters, details, and downloads work with visible focus. | Not run |
| T27 | No JavaScript | Disable JavaScript and load Projects. | All projects, details, source, and downloads remain available; inactive filters are hidden. | Not run |
| T28 | Console and accessibility | Exercise Projects and run Lighthouse Accessibility on all three pages. | No console errors; Accessibility is at least 90 on each page. | Not run |
| T29 | Live site | Repeat T22-T28 on GitHub Pages. | Navigation, relative assets, and notebook downloads work under /portfolio/. | Not run |
