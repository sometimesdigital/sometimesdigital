---
title: Blogroll
layout: layouts/article
eleventyExcludeFromCollections: true
excludeFromPagefind: true
---

<ul class="cards">
  {%- for blog in blogroll -%}
    <li>
      <time title={{ blog.post.isoDate }}>{{ blog.post.readableDate }}</time>
      <h4><a style="text-decoration: none" href="{{ blog.post.link }}">{{ blog.post.title }}</a></h4>
      <p>by <a href="{{ blog.link }}">{{ blog.title }}</a></p>
    </li>
  {%- endfor -%}
</ul>