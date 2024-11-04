---
title: Spacing
permalink: /tokens/spacing/
eleventyNavigation:
  key: Spacing
  parent: Tokens
  order: 5
---

{% for item in theme['spacing'] %}
<dl class="flex gap-sm">
  <dt class="font-bold w-20">{{ item[0] }}</dt>
  <dd>{{ item[1] }}</dd>
</dl>
{% endfor %}
