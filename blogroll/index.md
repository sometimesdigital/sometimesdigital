---
title: blogroll
layout: default.njk
eleventyExcludeFromCollections: true
---

{%- for blog in blogroll -%}
  <div class="blogroll-card">
    <hgroup class="info">
      <p class="post-title">
        <b><a href="{{ blog.post.link }}">{{ blog.post.title }}</a></b>
      </p>
      <p class="post-date">
        on {{ blog.post.date }}
      </p>
      <h4 class="blog-title">
        <img src="{{ blog.icon }}" alt="{{ blog.title }} - favicon"/> <a href="{{ blog.link }}">{{ blog.title }}</a>
      </h4>
    </hgroup>
  </div>
{%- endfor -%}

