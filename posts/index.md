---
title: posts
---
<ul>
    {%- for post in collections.posts -%}
        {% unless post.url == page.url %}
            <li><a href="{{ post.url }}">{{ post.data.title }}</a> <span style="opacity: 0.5">({{ post.data.date | readableDate }})</span></li>
        {% endunless %}
    {%- endfor -%}
</ul>
