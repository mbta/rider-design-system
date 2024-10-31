---
title: Footer
permalink: /patterns/footer/
figma: "https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FIupfoRXJNItGDD8ZaZCxDz%2FDRAFT%253A-Rider-facing-Design-System%3Fnode-id%3D679-20&%26t%3DtmHlFMXSdzDGXYaK-1"
eleventyNavigation:
  key: Footer
  parent: Patterns
---

<p class="text-2xl">The {{ title }} is for applications and subsites outside of the main MBTA.com website.</p>

This shows users that they are on an MBTA page, and offers links users might not find elsewhere in the page.

## When to use a {{ title }}

You must use the MBTA footer at the bottom of every page if your service is being hosted on `mbta.com`.

## When not to use a {{ title }}

You must not use the MBTA footer if your service is not being hosted on the above domain.

## How the {{ title }} works

### Default {{ title }}

The default footer contains links to the privacy policy and terms of use, as well as a copyright notice and another link to MBTA.com.

```html
<footer>
  <nav class="mbta--nav" aria-label="MBTA.com footer">
    <ul class="mbta--nav-actions">
      <li><a href="https://www.mbta.com/policies/privacy-policy">Privacy</a></li>
      <li><a href="https://www.mbta.com/policies/terms-use">Terms and conditions</a></li>
    </ul>
    <div class="mbta--copyright">© Massachusetts Bay Transportation Authority, all rights reserved.</div>
    <a class="mbta--logo" href="https://www.mbta.com">
      <img 
        role="img"
        src="https://cdn.mbta.com/images/mbta-logo.svg"
        width="36"
        height="36"
        alt="Massachusetts Bay Transportation Authority"
      />
    </a>
  </nav>
</footer>
```

There are no variations of this component.
