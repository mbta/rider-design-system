---
title: Animation
permalink: /tokens/animation/
eleventyNavigation:
  key: Animation
  parent: Tokens
  order: 9
---

{% for item in theme['transitionDuration'] %}
  <dl class="flex gap-sm">
    <dt class="font-bold w-20">{{ item[0] }}</dt>
    <dd>{{ item[1] }}</dd>
  </dl>
{% endfor %}
