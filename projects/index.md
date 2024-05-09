---
title: (some) projects
layout: default.njk
eleventyExcludeFromCollections: true
---
<section class="projects">
  {%- for project in collections.projects reversed -%}
    {% unless project.data.hide %}<div class="item">
    <a href="{{ project.data.url }}">
      <img 
        src="/{{ project.template.fileSlug.parsed.dir }}/{{ project.data.image }}" 
        class="project" 
        alt="{{ project.data.alt }}. {{ project.data.description }}" 
        title="{{ project.data.alt }}. {{ project.data.description }}"
      />
    </a>
    </div>{% endunless %}
  {%- endfor -%}
</section>
