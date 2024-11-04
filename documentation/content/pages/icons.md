---
title: Icons
permalink: /icons/
status: draft
figma: "https://embed.figma.com/design/IupfoRXJNItGDD8ZaZCxDz/DRAFT%3A-Rider-Design-System-Components?m=auto&node-id=159-523&embed-host=share"
eleventyNavigation:
  key: Icons
  order: 2
---

<style>
article img {
  &:not:first-child {
    margin-inline: var(--spacing-lg);
  }

  &[src*="/static/images/icon"] {
    width: 1.5rem;
    height: 1.5rem;

    &[src*="small"] {
      width: 1rem;
      height: 1rem;
    }
  }
}
article ul i { display: inline-block; margin-left: var(--spacing-sm) }
article li { font-family: monospace }
article .route-icon {
  font-weight: 700;
  font-family: var(--font-family-heading);
  padding-left: 7px;
  padding-right: 7px;
  padding-block: 2px;
  line-height: 1.25;
}
</style>

## MBTA Logo

<img role="img" src="/static/images/mbta-name-and-logo.svg"  width="198" height="36" alt="Massachusetts Bay Transportation Authority" />
<img role="img" src="/static/images/mbta-logo.svg" width="36" height="36" alt="Massachusetts Bay Transportation Authority" />

## General Icons

Where possible, we use the [Font Awesome icon library](https://fontawesome.com/icons) in the free "solid" style. Explore available icons here: [https://fontawesome.com/search?o=v&m=free&s=solid](https://fontawesome.com/search?o=v&m=free&s=solid).

Here are some common ones:
<ul>
<li>fa-caret-up <i class="fa-solid fa-fw fa-caret-up" /></li>
<li>fa-caret-down <i class="fa-solid fa-fw fa-caret-down" /></li>
<li>fa-globe <i class="fa-solid fa-fw fa-globe" /></li>
</ul>

## MBTA Icons

This custom icon is used to indicate vehicle crowding:
<div class="flex gap-1 my-md">
  <img src="/static/images/icon-crowding.svg" />
</div>

These custom icons are used for marking stops, such as on a map:
<div class="flex gap-1 my-md">
  <img src="/static/images/icon-stop-default.svg" />
  <img src="/static/images/icon-stop-small.svg" />
  <img src="/static/images/icon-map-stop-marker.svg" />
  <img src="/static/images/icon-map-stop-marker-hover.svg" />
  <img src="/static/images/icon-map-station-marker.svg" />
  <img src="/static/images/icon-map-station-marker-hover.svg" />
</div>

## System icons

These icons can be used to depict transit stops and services.

<div class="flex gap-1 my-md">
  <img src="/static/images/icon-mode-subway-default.svg" />
  <img src="/static/images/icon-mode-trolley-default.svg" />
  <img src="/static/images/icon-mode-commuter-rail-default.svg" />
  <img src="/static/images/icon-mode-bus-default.svg" />
  <img src="/static/images/icon-mode-ferry-default.svg" />
  <img src="/static/images/icon-the-ride-default.svg" />
</div>

<div class="flex gap-1 my-md">
  <img src="/static/images/icon-mode-subway-small.svg" />
  <img src="/static/images/icon-mode-trolley-small.svg" />
  <img src="/static/images/icon-mode-commuter-rail-small.svg" />
  <img src="/static/images/icon-mode-bus-small.svg" />
  <img src="/static/images/icon-mode-ferry-small.svg" />
  <img src="/static/images/icon-the-ride-small.svg" />
</div>

<div class="flex gap-1 my-md">
  <span class="route-icon rounded-md bg-brandBus text-black">1</span>
  <span class="route-icon rounded-md bg-silverLine text-white">SL1</span>
  <span class="route-icon rounded-full bg-redLine text-white">RL</span>
  <span class="route-icon rounded-full bg-orangeLine text-white">OL</span>
  <span class="route-icon rounded-full bg-blueLine text-white">BL</span>
  <span class="route-icon rounded-full bg-greenLine text-white">GL</span>
</div>

<div class="flex gap-1 mt-1">
  <span class="route-icon rounded-full bg-redLine text-white">RL</span>
  <span class="route-icon rounded-full bg-redLine text-white">M</span>
  <span class="route-icon rounded-full bg-greenLine text-white">GL</span>
  <span class="route-icon rounded-full bg-greenLine text-white !px-0 w-lg h-lg text-center">B</span>
  <span class="route-icon rounded-full bg-greenLine text-white !px-0 w-lg h-lg text-center">C</span>
  <span class="route-icon rounded-full bg-greenLine text-white !px-0 w-lg h-lg text-center">D</span>
  <span class="route-icon rounded-full bg-greenLine text-white !px-0 w-lg h-lg text-center">E</span>
</div>

### Systems outside the MBTA

To aid in depicting trip plans, these icons can be used for other routes reaching Logan Airport.

#### Logan Express

<div class="flex gap-1">
  <img src="/static/images/icon-logan-express-BB.svg" />
  <img src="/static/images/icon-logan-express-BT.svg" />
  <img src="/static/images/icon-logan-express-DV.svg" />
  <img src="/static/images/icon-logan-express-FH.svg" />
  <img src="/static/images/icon-logan-express-WO.svg" />
</div>

#### Massport

<div class="flex gap-1">
  <img src="/static/images/icon-massport-11.svg" />
  <img src="/static/images/icon-massport-22.svg" />
  <img src="/static/images/icon-massport-33.svg" />
  <img src="/static/images/icon-massport-44.svg" />
  <img src="/static/images/icon-massport-55.svg" />
  <img src="/static/images/icon-massport-66.svg" />
  <img src="/static/images/icon-massport-77.svg" />
  <img src="/static/images/icon-massport-88.svg" />
  <img src="/static/images/icon-massport-99.svg" />
</div>
