# LoopedIn — Connect Communities Website

**Course:** Introduction to Web Design (DECO7140)  
**Work Phase 4 — Collaborative Tech Community Platform**

This project is a responsive, accessible, and ethically designed website built for the Connect Communities Initiative (CCI) as part of DECO7140 at UQ.

LoopedIn supports collaboration and knowledge sharing among tech innovators, with a focus on accessibility, ethical design, and clean user experience.

## Features

-   Mobile-first responsive layout
-   Accessible navigation with ARIA labels and keyboard focus styles
-   WCAG 2.2 Level AA compliance (audited with IBM Equal Access Accessibility Checker)
-   Semantic HTML and structured CSS
-   Interactive CTA components
-   News grid and community feed with API integration
-   Hero section with clear messaging and high contrast support
-   Ethical design principles integrated throughout

## Project Structure

-   `work_phase_1/` — Initial prototype (not part of final submission)
-   `work_phase_2/` — Further design iterations (not part of final submission)
-   `work_phase_3/` — Prototype with API functionality (not part of final submission)
-   `work_phase_4/` — Final submitted project:

    -   `css/` — Shared styles:
        -   `reset.css`
        -   `base.css`
        -   `layout.css`
        -   `components.css`
    -   `css/page_css/` — Page-specific styles:
        -   `index.css`
        -   `community_feed.css`
    -   `css/component_skeletons/` — Component styles:
        -   `card.css`
    -   `js/` — JavaScript files:
        -   `community_feed.js`
        -   `create_post.js`
        -   `site_map.js`
        -   `modules/` — Utility modules:
            -   `postFormData.js`
            -   `getData.js`
    -   `assets/` — Images and icons:
        -   `back.webp`
        -   `blockchain.jpg`
        -   `business_woman.png`
        -   `coder.png`
        -   `collaboration.jpg`
        -   `community.jpg`
        -   `community.webp`
        -   `loop.svg`
        -   `news.webp`
        -   `protein.jpg`
        -   `robot.jpg`
        -   `Site_Map.png`
        -   `IBM_screenshot.png`
        -   `16.png`
        -   `vr.jpeg`
    -   HTML pages:
        -   `index.html`
        -   `about.html`
        -   `community_feed.html`
        -   `create_post.html`
        -   `news.html`
        -   `implementation_rationale.html`
        -   `genai_mt_acknowledgement.html`

## Tech Stack

-   HTML5
-   CSS3
-   JavaScript (ES6)

## How to Run

1. Clone or download this repository.

You can view the project in one of the following ways:

2. Open `index.html` with in any modern browser.

    1. **Using a browser directly**

    - Double-click `index.html` or drag it into any modern browser.

    1. **Using Live Server in VS Code**

    - Open the project folder in [Visual Studio Code](https://code.visualstudio.com/).
    - Install the **Live Server** extension if not already installed.
    - Right-click `index.html` and select **"Open with Live Server"**, or click **"Go Live"** in the bottom-right corner.

    1. **Using the terminal**

    - Navigate to the project folder in your terminal.
    - Run one of the following commands:
        - **macOS**: `open index.html`
        - **Windows**: `start index.html`
        - **Linux**: `xdg-open index.html`

Once the site is open, click **Phase 4** in the navigation bar to access the final version of the system.

## Deployment

-   Live: [https://deco7140-29b86239.uqcloud.net/work_phase_4](https://deco7140-29b86239.uqcloud.net/work_phase_4)
-   GitHub: [https://github.com/JustBrochUQ/deco7140_development-](https://github.com/JustBrochUQ/deco7140_development-)

## Accessibility

-   All navigation links include `aria-label` and `aria-current` where appropriate
-   Images include meaningful `alt` text
-   Focus-visible outlines included for keyboard navigation
-   Hero section designed for high contrast modes
-   Audited with IBM Equal Access Accessibility Checker
-   Complies with WCAG 2.2 Level AA

## Credits

Developed by **Just Broch** — 2025  
Part of DECO7140 — Work Phase 4 submission at The University of Queensland.
