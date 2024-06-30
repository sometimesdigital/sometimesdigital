---
title: Posts
layout: layouts/article
eleventyExcludeFromCollections: true
---
(writing things down so that I won’t forget them later)

### Code

<ul class="cards">
  {%- for post in collections.code reversed -%}
    <li>
      <time title={{ post.data.date | isoDate }}>{{ post.data.date | readableDate }}</time>
      <h4><a style="text-decoration: none" href="{{ post.url }}">{{ post.data.title }}</a></h4>
      <p>{{ post.data.description }}</p>
    </li>
  {%- endfor -%}
</ul>


### Things

<ul class="cards">
  {%- for post in collections.tech reversed -%}
    <li>
      <time title={{ post.data.date | isoDate }}>{{ post.data.date | readableDate }}</time>
      <h4><a style="text-decoration: none" href="{{ post.url }}">{{ post.data.title }}</a></h4>
      <p>{{ post.data.description }}</p>
    </li>
  {%- endfor -%}
</ul>


### Electronics

<ul class="cards">
  {%- for post in collections.electronics reversed -%}
    <li>
      <time title={{ post.data.date | isoDate }}>{{ post.data.date | readableDate }}</time>
      <h4><a style="text-decoration: none" href="{{ post.url }}">{{ post.data.title }}</a></h4>
      <p>{{ post.data.description }}</p>
    </li>
  {%- endfor -%}
</ul>

### Eleventy

<ul class="cards">
  {%- for post in collections.eleventy reversed -%}
    <li>
      <time title={{ post.data.date | isoDate }}>{{ post.data.date | readableDate }}</time>
      <h4><a style="text-decoration: none" href="{{ post.url }}">{{ post.data.title }}</a></h4>
      <p>{{ post.data.description }}</p>
    </li>
  {%- endfor -%}
</ul>

### IndieWeb

<ul class="cards">
  {%- for post in collections.indieweb reversed -%}
    <li>
      <time title={{ post.data.date | isoDate }}>{{ post.data.date | readableDate }}</time>
      <h4><a style="text-decoration: none" href="{{ post.url }}">{{ post.data.title }}</a></h4>
      <p>{{ post.data.description }}</p>
    </li>
  {%- endfor -%}
</ul>

<!-- 
### Other

<ul class="cards">
  {%- for post in collections.posts reversed -%}
    {% if post.tags.length is 0 %} 
    <li>
      <time title={{ post.data.date | isoDate }}>{{ post.data.date | readableDate }}</time>
      <h4><a style="text-decoration: none" href="{{ post.url }}">{{ post.data.title }}</a></h4>
      <p>{{ post.data.description }}</p>
    </li>
    {% endif %}
  {%- endfor -%}
</ul> 
-->