---
title: Tokens
permalink: /tokens/
figma: "https://embed.figma.com/design/lEyzR3FEuJKVMJwIzM3WM0/MBTA-Design-Tokens?m=auto&node-id=2148-2&embed-host=share"
eleventyNavigation:
  key: Tokens
  order: 1
---

<h2>Colors</h2>
<p>Colors are numbered in alignment with lightness value in the range of 0-100. For example, <code>color-charcoal-30</code> has about 30% lightness.</p>

<h3>Base colors</h3>
{%- assign base_colors = theme.color | notSystemColors -%}
{%- for colorConfig in base_colors -%}
  <h4>{{ colorConfig[0] }}</h4>
  <div class="flex gap-xs mb-3 flex-wrap">
  {%- if colorConfig[0] == 'white' -%}
    <div class="px-xs py-sm bg-{{ colorConfig[0] }} text-black">
      <code>{{ colorConfig[1] }}</code>
    </div>
  {%- elsif colorConfig[0] == 'black' -%}
    <div class="px-xs py-sm bg-{{ colorConfig[0] }} text-white">
      <code>{{ colorConfig[1] }}</code>
    </div>
  {%- else -%}
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

<h3>System colors</h3>
{%- assign system_colors = theme.color | systemColors -%}
{%- for colorConfig in system_colors -%}
  <div class="px-xs py-sm bg-{{ colorConfig[0] }} text-black">
    <span>{{ colorConfig[0] }}</span>
    <code>{{ colorConfig[1] }}</code>
  </div>
{% endfor %}

<h2>Other tokens</h2>
{% for themeConfig in theme %}
  {%- if themeConfig[0] != 'color' -%}
  <h2>{{ themeConfig[0] }}</h2>
 
  {% for item in themeConfig[1] %}
   <dl class="flex gap-sm">
      <dt class="font-bold w-20">{{ item[0] }}</dt>
      <dd>{{ item[1] }}</dd>
    </dl>
  {% endfor %}
  {%- endif -%}
{% endfor %}
