---
title: Photostream
layout: layouts/photostream.njk
eleventyExcludeFromCollections: true
pagination:
  data: photostream
  size: 10
---

<div tabindex="0" class="photostream-inner">
{% if pagination.href.previous %}<a class="pagination previous-page" href="{{ pagination.href.previous }}">Previous page</a>{% endif %}
{%- for photo in pagination.items %}<img alt="{{ photo.title }}" src="{{ photo.url }}" draggable="false"/>{% endfor -%}
{% if pagination.href.next %}<a class="pagination next-page" href="{{ pagination.href.next }}">Next page</a>{% endif %}
</div>