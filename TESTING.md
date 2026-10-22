# Portfolio test plan

Run the browser checks locally and repeat on the live GitHub Pages site. Record the URL, date, browser, viewport, actual outcome, and Pass or Fail. Preserve failed results and append retests after fixes. Browser and live-site checks below have not yet been run.

| ID | Testing | Steps | Expected result | Actual result |
| --- | --- | --- | --- | --- |
| T1 | Local opening | Double-click `index.html`. | Content, styles, and navigation load without a server. | Not run |
| T2 | Home links | Activate the name, Home, About me, My interests, introduction link, and Back to top. | Each goes to the correct page or section. | Not run |
| T3 | Phone layout | Inspect Home at 320px and 390px widths. | All text and controls fit; no horizontal scrolling. | Not run |
| T4 | Laptop layout | Inspect Home at 1366px width. | Headline, section columns, and footer fit with readable spacing. | Not run |
| T5 | Mobile menu | On a phone viewport, open and close Menu. | Links toggle and expanded state tracks visibility. | Not run |
| T6 | Menu keyboard | Tab to Menu, press Enter, tab to a link, then press Escape. | Menu opens; links receive focus; Escape closes it and returns focus to Menu. | Not run |
| T7 | Menu link selection | Open mobile menu and activate About me and My interests. | Menu closes; About me opens about.html and My interests reaches the local section with focus. | Not run |
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
| T15 | About links | Open about.html; activate the wordmark, Home, About me, My interests, My story, skip link, and Back to top. | Links reach the correct pages or sections; About me is marked as current. | Not run |
| T16 | About phone layout | Inspect About at 320px and 390px widths. | Text and navigation fit without horizontal scrolling. | Not run |
| T17 | About laptop layout | Inspect About at 1366px width. | Headline and section columns remain readable and fit. | Not run |
| T18 | About keyboard and menu | Use Tab, Shift+Tab, Enter, and Escape on About at phone and laptop widths; follow the My interests link from the mobile menu. | Skip link and visible focus work; menu opens and closes; focus reaches the interests section. | Not run |
| T19 | About accessibility | Run Lighthouse Accessibility on About. | Score is at least 90; resolve reported issues. | Not run |
| T20 | About console and fallback | Exercise About with DevTools open, then reload with JavaScript disabled. | No console errors; navigation and content remain available without JavaScript. | Not run |
| T21 | About live site | Repeat T15-T20 on the live GitHub Pages site. | Both pages and assets work under /portfolio/. | Not run |

## Coverage to add as pages are built

For each Skills and Contact page, add cases covering every navigation link, phone and laptop layouts, keyboard navigation, and Lighthouse Accessibility. If a contact form is added, test valid and invalid input.

## Projects and updated Home checks

Automated checks completed during implementation: local links and fragment targets resolve on all three pages; each page has one h1; all three notebook excerpts parse and contain no saved outputs; SVGs parse and are under 500 KB; the exposed source credential is absent from public files. JavaScript syntax and category transitions (2 API, 1 data, 3 total) passed in an isolated DOM stub. This does not replace the browser checks below. No browser was connected, so visual, keyboard, live-site, and Lighthouse checks remain unrun.

| ID | Testing | Steps | Expected result | Actual result |
| --- | --- | --- | --- | --- |
| T22 | Navigation | On Home, About, and Projects activate every header link; follow Home project previews, all-projects link, Projects hero link, and footer link. | All links reach the correct page or section; current page is indicated. | Not run |
| T23 | Category filters | Choose APIs + databases, Data manipulation, then Show all. | Exactly 2, 1, then 3 projects appear; pressed state and count update. | Not run |
| T24 | Details and downloads | Expand each project and code block; download each notebook. | Details open; code wraps; three valid source-only notebooks download. | Not run |
| T25 | Phone and laptop | Inspect Home and Projects at 320, 390, and 1366px, including expanded code. | Images, headings, filters, code, and navigation fit without horizontal overflow. | Not run |
| T26 | Keyboard | Use Tab, Shift+Tab, Enter, Space, and Escape on Projects. | Skip link, menu, filters, details, and downloads work with visible focus. | Not run |
| T27 | No JavaScript | Disable JavaScript and load Projects. | All projects, details, source, and downloads remain available; inactive filters are hidden. | Not run |
| T28 | Console and accessibility | Exercise Projects and run Lighthouse Accessibility on all three pages. | No console errors; Accessibility is at least 90 on each page. | Not run |
| T29 | Live site | Repeat T22-T28 on GitHub Pages. | Navigation, relative assets, and notebook downloads work under /portfolio/. | Not run |
