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
| T7 | Menu link selection | Open mobile menu and activate About me and My interests. | Menu closes; destination section is reached and receives focus. | Not run |
| T8 | Resize behavior | Open the mobile menu, resize to laptop, then back to phone. | Desktop links remain visible; mobile menu returns to a closed state. | Not run |
| T9 | Keyboard and skip link | Reload Home; navigate with Tab, Shift+Tab, and Enter. | Skip link appears on focus; all controls work with visible focus and no traps. | Not run |
| T10 | No JavaScript | Disable JavaScript and reload Home. | Content and navigation remain available on phone and laptop. | Not run |
| T11 | Reduced motion | Enable reduced motion and follow a section link. | Scrolling is immediate rather than animated. | Not run |
| T12 | Accessibility | Run Chrome Lighthouse Accessibility on Home. | Score is at least 90; review and resolve reported issues. | Not run |
| T13 | Console | Open DevTools and exercise Home interactions. | No JavaScript errors or failed asset loads. | Not run |
| T14 | Live deployment | Repeat T2–T13 at the verified GitHub Pages URL. | Links, assets, responsive behavior, and accessibility work under `/portfolio/`. | Not run |

## Coverage to add as pages are built

For each About, Projects, Skills, and Contact page, add cases covering every navigation link, phone and laptop layouts, keyboard navigation, and Lighthouse Accessibility. Add tests for all project filter categories and Show all. If a contact form is added, test valid and invalid input. These features are outside the current Home page implementation.
