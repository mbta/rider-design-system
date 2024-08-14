---
title: Application top header
date: Last Modified
tags: pg
permalink: /components/header/
pg_order: 2
---

<p class="text-2xl">The {{ title }} is for applications and subsites outside of the main MBTA.com website.</p>


wraps top-level navigation and branding to provide consistent navigation between global application areas, such as organizations and projects, while facilitating easy access to utilities like support and user settings.

The header shows users that they are on an MBTA page, and shows which MBTA service they're using.

<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FIupfoRXJNItGDD8ZaZCxDz%2FDRAFT%253A-Rider-facing-Design-System%3Fnode-id%3D751-463%26t%3DtmHlFMXSdzDGXYaK-1" allowfullscreen></iframe>

## When to use a {{ title }}

You must use the MBTA header at the top of every page if your service is being hosted on `mbta.com`.

## When not to use a {{ title }}

You must not use the MBTA header if your service is not being hosted on the above domain.

## How the {{ title }} works

### Default header

The default header has the most minimal implementation, solely consisting of an MBTA logo which links to `https://www.mbta.com`.


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


### Header with buttons

The following are permitted:

- Language button to let users modify the language on the page
- Login button to get users access their account

```html
 <section role="banner">
    <a href="#main-content" class="mbta--skip-link">Skip to main content</a>
    <nav class="mbta--nav">
      <a class="mbta--logo" href="https://www.mbta.com">
        <img role="img" src="https://cdn.mbta.com/images/mbta-name-and-logo.svg" width="198" height="36" alt="Massachusetts Bay Transportation Authority" />
        <img role="img" src="https://cdn.mbta.com/images/mbta-logo.svg" width="36" height="36" alt="Massachusetts Bay Transportation Authority" />
      </a>
      <ul class="mbta--nav-actions">
        <li><button>Languages</buttons></li>
        <li><button>Login</buttons></li>
      </ul>
    </nav>
  </section>
```
