---
title: posts
layout: default.njk
eleventyExcludeFromCollections: true
---

(writing things down so that I won’t forget them later)

<ul>
    {%- for post in collections.posts reversed -%}
        <li><a style="text-decoration: none" href="{{ post.url }}">{{ post.data.title }}</a> <span style="opacity: 0.5">({{ post.data.date | readableDate }})</span></li>
    {%- endfor -%}
</ul>
