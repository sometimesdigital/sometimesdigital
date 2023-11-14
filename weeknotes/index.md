---
title: weeknotes
layout: default.njk
comments: false
eleventyExcludeFromCollections: true
---

<ul>
    {%- for post in collections.weeknotes reversed -%}
        <li><a style="text-decoration: none" href="{{ post.url }}">{{ post.data.title }}</a> <span style="opacity: 0.5">({{ post.data.date | readableDate }})</span></li>
    {%- endfor -%}
</ul>
