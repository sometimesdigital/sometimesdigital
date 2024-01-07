---
title: weeknotes
layout: default.njk
comments: false
eleventyExcludeFromCollections: true
---

{%- for year in collections.weeknotes reversed -%}
<p>{{ year.year }}</p>
<div class="year">
{%- for month in year.posts reversed -%}
<div class="month">
{% for post in month.posts reversed  %}
<div class="week"><a href="{{ post.url }}">{{ post.data.week }}</a></div>
{% endfor %}
</div>
{%- endfor -%}
</div>
{%- endfor -%}
