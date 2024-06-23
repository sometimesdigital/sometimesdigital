---
title: Weeknotes
layout: layouts/weeknotes.njk
eleventyExcludeFromCollections: true
---
[About Weeknotes](/posts/about-weeknotes/)

{%- for year in collections.weeknotes reversed -%}
<p><b>{{ year.year }}</b></p>
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
