---
title: Base Colors
permalink: /tokens/colors/base/
eleventyNavigation:
  key: Base Colors
  parent: Tokens
  order: 1
---

These colors define a palette for building UIs. Colors are numbered in alignment with lightness value in the range of 0-100. For example, `color-charcoal-30` has about 30% lightness.

{%- assign base_colors = theme.color | notSystemColors -%}
{%- for colorConfig in base_colors -%}
  {%- if colorConfig[0] == 'white' -%}
    <div class="px-xs py-sm inline-block bg-{{ colorConfig[0] }} text-black">
      <code>color-white {{ colorConfig[1] }}</code>
    </div>
  {%- elsif colorConfig[0] == 'black' -%}
    <div class="px-xs py-sm inline-block bg-{{ colorConfig[0] }} text-white">
      <code>color-black</code> <code>{{ colorConfig[1] }}</code>
    </div>
  {%- else -%}

  <h4><code>color-{{ colorConfig[0] }}-*</code></h4>
  <div class="flex gap-xs mb-3 flex-wrap">
    {%- for shade in colorConfig[1] -%}
        {%- if shade[0] < 50 -%}
          {%- assign text_class = "text-white" -%}
          {%- assign shade_bg_class = "bg-black" -%}
        {%- else -%}
          {%- assign text_class = "text-black" -%}
          {%- assign shade_bg_class = "bg-white" -%}
        {%- endif %}
        <div class="px-xs py-sm bg-{{ colorConfig[0]}}-{{ shade[0] }} {{ text_class }}">
          <strong class="rounded-full p-xs {{shade_bg_class}}">{{ shade[0] }}</strong>
          <code>{{ shade[1] }}</code>
        </div>
    {%- endfor -%}
  {%- endif %}
  </div>
{% endfor %}
