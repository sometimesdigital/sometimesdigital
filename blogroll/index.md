---
title: Blogroll
layout: layouts/post.njk
eleventyExcludeFromCollections: true
---

<ul>
{%- for blog in blogroll -%}
  <li class="blogroll-card">
    <b><a href="{{ blog.post.link }}">{{ blog.post.title }}</a></b> written on {{ blog.post.date }} by <a href="{{ blog.link }}">{{ blog.title }}</a>
  </li>
{%- endfor -%}
</ul>
