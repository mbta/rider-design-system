---
title: Text
permalink: /tokens/text/
eleventyNavigation:
  key: Text
  parent: Tokens
  order: 3
---

## Font Family

{% for item in theme['fontFamily'] %}
<dl class="flex gap-sm">
  <dt class="font-bold w-20">{{ item[0] }}</dt>
  <dd>{{ item[1] }}</dd>
</dl>
{% endfor %}

## Font Size

{% for item in theme['fontSize'] %}
<dl class="flex gap-sm">
  <dt class="font-bold w-20">{{ item[0] }}</dt>
  <dd>{{ item[1] }}</dd>
</dl>
{% endfor %}


## Line Height

{% for item in theme['lineHeight'] %}
<dl class="flex gap-sm">
  <dt class="font-bold w-20">{{ item[0] }}</dt>
  <dd>{{ item[1] }}</dd>
</dl>
{% endfor %}
