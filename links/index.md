---
title: links
layout: default.njk
comments: false
eleventyExcludeFromCollections: true
---

<h3>blogroll</h3>

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

<h3>bookmarks</h3>

<script>
  const toggle = (element, tag) => {
    element.toggleAttribute('active');
    const hidden = !element.hasAttribute('active');

    [...document.querySelectorAll(`[data-tags*="${tag}"]`)].forEach(bookmark => {
      hidden ? bookmark.setAttribute("hidden", true) : bookmark.removeAttribute("hidden");
    });
  }

  const toggleAll = (element) => {
    element.toggleAttribute('active');
    const hidden = !element.hasAttribute('active');

    [...document.querySelectorAll('[tag]')].forEach(thing => {
      hidden ? thing.removeAttribute("active") : thing.setAttribute("active", true);
    });

    [...document.querySelectorAll('[data-tags]')].forEach(thing => {
      hidden ? thing.setAttribute("hidden", true) : thing.removeAttribute("hidden");
    });
  }
</script>

{%- for tag in bookmarks.tags -%}
  <span tag class="tag" active onclick="toggle(this, '{{ tag }}')">{{ tag }}</span>
{%- endfor -%}
<span class="tag" active onclick="toggleAll(this)">all</span>

<ul>
{%- for bookmark in bookmarks.bookmarks -%}
  <li data-tags="{{ bookmark.tags | join: ', ' }}"><a style="text-decoration: none" href="{{ bookmark.url }}">{{ bookmark.title }}</a> <i>{{ bookmark.note }} [{{ bookmark.tags | join: ', ' }}]</i></li>
{%- endfor -%}
</ul>


