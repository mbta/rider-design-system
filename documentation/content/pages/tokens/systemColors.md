---
title: System Colors
permalink: /tokens/colors/system/
eleventyNavigation:
  key: System Colors
  parent: Tokens
  order: 2
---

{%- assign system_colors = theme.color | systemColors -%}
{% assign additional_colors = theme.color | additionalColors %}

Color is a central means of communication on the T, representing different lines and modes of transportation. Occasionally a specific color will be used around a large project or event.

{% for colorConfig in system_colors %}
  {% if colorConfig[0] == 'greenLine' %}
  This color was chosen because the Green Line travels along the trees and suburban lawns of Brookline and Newton.
  {% endif %}
  {% if colorConfig[0] == 'orangeLine' %}
  Orange was chosen because this line previously ran along Washington Street, once known as the Orange Way. 
  {% endif %}
  {% if colorConfig[0] == 'redLine' %}
  The color choice was based on the Harvard Crimson, because this subway leaves from Cambridge, heading southeast to Braintree and Quincy.
  {% endif %}
  {% if colorConfig[0] == 'blueLine' %}
  Because this line runs along the coast, it was named for the blue of the Atlantic.
  {% endif %}
  <div class="px-sm py-sm inline-block mb-1 bg-{{ colorConfig[0] }} text-white">
    <code>color-{{ colorConfig[0] }}</code>
    <code>{{ colorConfig[1] }}</code>
  </div>
{% endfor %}

## Additional Colors

In addition to the colors we use across the system to represent lines and modes of travel, different initiatives and projects sometimes have a specific color assigned to them. These colors, much like the system colors, aid in quick communication and extend understanding.

{% for colorConfig in additional_colors %}
  {% if colorConfig[0] == 'swa' %}
  A vibrant cyan created for the System-Wide Accessibility initiative.
  {% endif %}
  {% if colorConfig[0] == 'darkWinter' %}
  Created for use in winter advisories.
  {% endif %}
  {% if colorConfig[0] == 'midWinter' %}
  Created for use in winter advisories.
  {% endif %}

  <div class="px-sm py-sm inline-block mb-1 bg-{{ colorConfig[0] }} text-white">
    <code>color-{{ colorConfig[0] }}</code>
    <code>{{ colorConfig[1] }}</code>
  </div>
{% endfor %}
