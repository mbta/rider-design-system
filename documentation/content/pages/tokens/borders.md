---
title: Borders
permalink: /tokens/borders/
eleventyNavigation:
  key: Borders
  parent: Tokens
  order: 4
---

## Border Width

{% for item in theme['borderWidth'] %}
<dl class="flex gap-sm">
  <dt class="font-bold w-20">{{ item[0] }}</dt>
  <dd>{{ item[1] }}</dd>
</dl>
{% endfor %}

## Border Radius

{% for item in theme['borderRadius'] %}
<dl class="flex gap-sm">
  <dt class="font-bold w-20">{{ item[0] }}</dt>
  <dd>{{ item[1] }}</dd>
</dl>
{% endfor %}
