---
title: blogroll
layout: default.njk
comments: false
eleventyExcludeFromCollections: true
---

{%- for blog in blogroll -%}
<div class="blogroll-card">
  <hgroup class="info">
    <h3 class="post-title">
      <a href="{{ blog.post.link }}">{{ blog.post.title }}</a>
    </h3>
    <p class="post-date">
      on {{ blog.post.date }}
    </p>
    <h4 class="blog-title">
      <img src="{{ blog.icon }}" alt="{{ blog.title }} - favicon"/> <a href="{{ blog.link }}">{{ blog.title }}</a>
    </h4>
  </hgroup>
</div>
{%- endfor -%}
