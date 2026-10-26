# Project instructions

## Purpose
Build a personal portfolio for a class assignment using plain HTML, CSS, and JavaScript. Showcase my background, education, interests, skills, and at least three projects. Keep the code simple enough for me to understand and explain during a demo.

This is an editable starting draft. I selected the Clean minimal visual direction; I can refine the details below before building.

## Pages and content
- Approved name: Chigozirim Amaefule.
- Approved public contact email: cja67@njit.edu. Use a direct mailto link on Contact; no contact form is needed.
- Approved headline: "Exploring technology that supports the human body."
- Approved skills: Python and SQL are beginner skills currently being developed; SolidWorks and MATLAB experience is introductory. Technical and lab skills: CAD, mechanical tensile testing, biomaterial formulation, technical troubleshooting, Microsoft Office 365, data entry and reporting. Professional skills: sales management, client acquisition, team coordination, field operations, problem-solving, communication, adaptability. Languages: English (native), French (conversational, currently learning). Do not invent proficiency scores, certifications, employers, or years of experience.
- Personal content: I study Biomedical Engineering. My interests are video games (especially fighting games at the moment), rock music, and soccer.
- Academic interests and goals: My interest in prosthetics drew me to Biomedical Engineering. After graduating, I would like to work in biomaterials development.
- Approved project sources: Currency exchange tracker (API notebook, Project 2), News headline organizer (data manipulation notebook, Question 8), and the supplied paper Biocompatibility: A Mechanical Hurdle in Prosthetics and Implants (ENG 102, New Jersey Institute of Technology, April 1, 2025). The paper replaces Python data lab as the third project. Describe it as literature-based research writing, not experimental or clinical work. Preserve original Python source in downloadable excerpts without saved outputs or metadata; never publish the weather credential. Offer the unchanged paper as a Word download. Distinguish recorded results from verified execution and summary graphics from screenshots.
- `index.html`: Home, with a brief personal introduction and navigation.
- `about.html`: About Me, including background, education, and interests.
- `projects.html`: At least three projects, each with a description, image or screenshot, and a relevant link when available. Class projects count.
- `skills.html`: Technical skills and proficiencies, described honestly.
- `contact.html`: Public contact information, such as an email link and GitHub profile.
- Include navigation to all five pages on every page, with the current page clearly indicated.
- Ask me for missing personal content. Do not invent my experience, education, skills, projects, or contact information.
- The finished website must have real content with no placeholder text or empty sections.

## Design direction: Clean minimal (selected)
- Style: airy, polished, and easy to read, with generous whitespace, restrained decoration, and simple project previews.
- Colors: a metallic-silver and orange background with black text (`#000000`). Suggested background tones are light silver (`#ececec`), silver (`#c0c0c0`), and orange (`#f59a45`). Create a subtle metallic effect with static CSS gradients and broad orange areas. Keep the background behind text light enough for clear contrast throughout the gradient.
- No separate accent colors or colored heading phrases. Orange is part of the background palette. Use black text, underlines, borders, and spacing to distinguish links, buttons, active navigation, and keyboard focus.
- On desktop screens at least 1024px wide, the orange background glow begins fading in around the horizontal midpoint and strengthens toward the right edge. Preserve the existing phone gradient. Size the desktop glow relative to the viewport so long pages do not stretch it.
- Fonts: a local system font stack such as `system-ui, -apple-system, "Segoe UI", sans-serif`; no external font dependency.
- Typography: large, left-aligned sans-serif headings, readable body text, and small secondary labels, all in black. Scale headings down on phones.
- Header: my name or wordmark on the left, simple navigation on the right, and a thin divider below. Use the responsive menu on phones.
- Home layout: a spacious introduction, one prominent black underlined or outlined project link, then selected project previews with images, titles, and short descriptions. Use two columns on laptops and one on phones.
- Details: modest corner rounding, minimal shadows, understated separators, and a quiet footer. Use real project screenshots when available; sample artwork and copy are not final content.
- Keep the silver/orange palette and black text consistent; do not add a dark theme unless I request one.
- Use consistent spacing, navigation, buttons, headings, and footers across all pages.
- Design for phones first, then adapt layouts for laptops with media queries. Avoid horizontal scrolling.
- Keep motion subtle and honor `prefers-reduced-motion`.

## Technical rules
- Use only plain HTML5, CSS, and JavaScript. No React, Vue, Tailwind, Bootstrap, npm, frameworks, or build tools.
- Keep this a static site: no backend, database, accounts, or login system.
- The site must work by opening `index.html` directly and when hosted under `/portfolio/` on GitHub Pages.
- Use relative paths for internal links, scripts, stylesheets, and images; avoid root-relative paths such as `/assets/...`.
- Use one shared external stylesheet at `css/styles.css`, one shared script at `js/main.js`, and images in `assets/images/`. Avoid inline styles and inline event handlers.
- Load JavaScript with `defer`. Shared scripts must handle elements that are absent on a particular page.
- Avoid features that require a server when opened locally, such as fetching local HTML fragments.
- Keep image files under 500 KB and use descriptive filenames.
- Never add API keys, passwords, tokens, my phone number, or my home address. The repository and website will be public.

## Interactivity and accessibility
- Include at least two working JavaScript features: a responsive mobile navigation menu and project category filtering by default. Filtering must use real project categories and include an option to show all projects.
- The menu must open and close with an accessible button, keep `aria-expanded` accurate, and support keyboard use.
- If a contact form is added, validate input with JavaScript and direct visitors to my email. Do not claim that a static form sends messages.
- Use semantic elements such as `header`, `nav`, `main`, `section`, and `footer`.
- Use exactly one `h1` per page, with logically ordered headings and a descriptive page title.
- Give every image an `alt` attribute; use meaningful descriptions for content images and empty alt text for decorative images.
- Include a skip link, visible keyboard focus, accessible control names, and labels for any form fields.
- Ensure links, buttons, and fields work with the keyboard. Use native elements whenever possible.
- Aim for a Lighthouse Accessibility score of at least 90 on every page, in both themes where applicable.
- Fix browser console errors.

## Working process
- Work on one requested task at a time. Do not build unrelated features or the entire assignment when asked for a small change.
- Read the existing files before editing. Preserve my edits and keep changes focused.
- Favor readable code and straightforward solutions. Comment non-obvious logic so I can explain it.
- After each change, run appropriate checks and explain what changed, what was tested, and anything I need to review.
- Check the affected pages locally, at phone and laptop widths, and with the keyboard. If browser testing is unavailable, state which checks still need to be run.
- Update this file when I change the design or project rules.

## Testing and documentation
- Create `TESTING.md` with at least 12 test cases. Each needs an ID, what is being tested, steps, expected result, and actual result. Leave unrun tests marked `Not run`; record Pass or Fail only after testing.
- Cover every navigation link on every page, every page at phone and laptop sizes, every JavaScript feature, keyboard navigation on every page, and Lighthouse Accessibility on every page.
- If a form exists, test both valid and invalid inputs.
- Run the final tests on the live GitHub Pages site as well as locally. Record failures and subsequent retest results rather than erasing the original failures.
- Keep `README.md` updated with a project description, live website link, local viewing instructions, and relevant acknowledgments.
- When requested, help prepare the 1–2 page report with repository and live links, features, challenges, a real example of a Codex mistake and its correction, and phone/laptop screenshots. Do not invent testing results or development history.

## Git and deployment
- For implementation tasks after I review this draft, commit after each completed task with a clear, descriptive message, then push to GitHub. Request push approval when required by the environment.
- Review the diff before committing and include only files belonging to the task. Do not include unrelated changes or secrets.
- Use small, meaningful commits as work happens; do not fabricate dates or commit history.
- Undo changes with a revert commit. Do not use destructive resets or force pushes.
- Deploy with GitHub Pages from the `main` branch and repository root. Verify the actual repository settings and live URL before claiming deployment is complete.
