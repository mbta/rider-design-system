---
title: Header
permalink: /patterns/header/
figma: "https://embed.figma.com/design/IupfoRXJNItGDD8ZaZCxDz/DRAFT%3A-Rider-Design-System-Components?m=auto&node-id=2031-738&embed-host=share"
eleventyNavigation:
  key: Header
  parent: Patterns
---

<p class="text-2xl">The {{ title }} is for applications and subsites outside of the main MBTA.com website.</p>

This shows users that they are on an MBTA page.

<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src={{figma}} allowfullscreen></iframe>

## When to use a {{ title }}

You must use the MBTA header at the top of every page if your service is being hosted on `mbta.com`.

## When not to use a {{ title }}

You must not use the MBTA header if your service is not being hosted on the above domain.

## How the {{ title }} works

### Default {{ title }}

The default header uses the most minimal implementation, solely consisting of an MBTA logo which links to `https://www.mbta.com`. Applications are responsible for supplying a skip link here as well, with an `href` value referencing an ID for the HTML element which contains the primary application content.

```html
<section role="banner">
  <a href="#main-content" class="mbta--skip-link">Skip to main content</a>
  <nav class="mbta--nav">
    <a class="mbta--logo" href="https://www.mbta.com">
      <img role="img" src="https://cdn.mbta.com/images/mbta-name-and-logo.svg" width="198" height="36" alt="Massachusetts Bay Transportation Authority" />
      <img role="img" src="https://cdn.mbta.com/images/mbta-logo.svg" width="36" height="36" alt="Massachusetts Bay Transportation Authority" />
    </a>
  </nav>
</section>
```

### Variation: {{ title }} with actions

The following actions are permitted, but not required:

- A button to let users modify the application language
- A button to let users log in or out of the application using MBTA SSO

```html
<section role="banner">
  <a href="#main-content" class="mbta--skip-link">Skip to main content</a>
  <nav class="mbta--nav">
    <a class="mbta--logo" href="https://www.mbta.com">
      <img role="img" src="https://cdn.mbta.com/images/mbta-name-and-logo.svg" width="198" height="36" alt="Massachusetts Bay Transportation Authority" />
      <img role="img" src="https://cdn.mbta.com/images/mbta-logo.svg" width="36" height="36" alt="Massachusetts Bay Transportation Authority" />
    </a>
    <ul class="mbta--nav-actions">
      <li><button>Languages</button></li>
      <li><button>Login</button></li>
    </ul>
  </nav>
</section>
```
