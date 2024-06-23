---
title: Posts
layout: layouts/post.njk
eleventyExcludeFromCollections: true
---

*(writing things down so that I won’t forget them later)*

<ul>
    {%- for post in collections.posts reversed -%}
        <li><a style="text-decoration: none" href="{{ post.url }}">{{ post.data.title }}</a> <span style="color: #a1a3a8">({{ post.data.date | readableDate }})</span></li>
    {%- endfor -%}
</ul>
