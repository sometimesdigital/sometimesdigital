---
title: nonnullish
layout: default.njk
description: nika (@nonnullish) - personal website
---

## posts

<ul>
  {%- for post in collections.posts -%}
    {% if post.data.highlight %}
      <li>
        <a href="{{ post.url }}">{{ post.data.title }}</a>
        <span>({{ post.data.date | MMM-YYYY }})</span>
      </li>
    {% endif %}
  {%- endfor -%}
</ul>

## projects

<section class="projects">
  {%- for demo in collections.demos reversed -%}
    {% unless demo.data.hide %}<article class="item">
        <img src="/{{ demo.template.fileSlug.parsed.dir }}/{{ demo.data.image }}" class="demo" alt="{{ demo.data.alt }}"/>
        <time class="date">{{ demo.data.date | MMM-YYYY}}</time>
        <h3><a href="{{ demo.data.url }}" class="title">{{ demo.data.title }}</a></h3>
        <p class="description">{{ demo.data.description }} <a href="{{ demo.data.url }}">→</a></p>
      </article>{% endunless %}
  {%- endfor -%}
</section>
