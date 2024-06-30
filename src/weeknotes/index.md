---
title: Weeknotes
layout: layouts/weeknotes.njk
eleventyExcludeFromCollections: true
---
<style>
  .year {
    display: grid;
    gap: 1rem;

    .month {
      display: grid;
      grid-template-columns: repeat(auto-fit, 20%);
      justify-content: right;
      justify-items: center;
      margin: 0;
      padding: 0;

      .week {
        align-items: center;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        width: min-content;

        a {
          text-decoration: none;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
</style>

[About Weeknotes](/posts/about-weeknotes/)

{%- for year in collections.weeknotes reversed -%}
<p><b>{{ year.year }}</b></p>
<div class="year">
{%- for month in year.posts reversed -%}
<div class="month">
{% for post in month.posts reversed  %}
<div class="week"><a href="{{ post.url }}">{{ post.data.week }}</a></div>
{% endfor %}
</div>
{%- endfor -%}
</div>
{%- endfor -%}
