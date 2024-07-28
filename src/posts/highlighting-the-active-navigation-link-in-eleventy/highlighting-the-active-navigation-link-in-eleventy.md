---
title: Highlighting the active navigation link in Eleventy using templates, shortcodes, and the page object
description: Using templates, shortcodes, and the Eleventy supplied data for highlighting the current page in navigation
date: 2024-07-06T18:00:00+01:00
tags: eleventy
---

I like Eleventy because I can say "please take this folder and make a website out of it" and it will probably do that with little effort on my side, but at the same time there are also a lot of options for elaborate configuration and customization.

I feel like I haven't thought about its templating nature enough, and it adds a lot of possibilities. Here's a small detail I've added that I think is pretty neat: a link highlight for the currently visited page, without client-side JavaScript.

In `.eleventy.js`, using [shortcodes](https://www.11ty.dev/docs/languages/nunjucks/#single-shortcode) and [accessing](https://www.11ty.dev/docs/languages/nunjucks/#access-to-page-data-values) the [Eleventy supplied data](https://www.11ty.dev/docs/data-eleventy-supplied/#page-variable-contents):

```js
eleventyConfig.addShortcode("link", function (url, label) {
  const isActive = this.page.url === url;
  return `<a ${isActive ? 'aria-current="page"' : ''} href="${url}">${label}</a>`;
});
```

In `_includes/sections/navigation.njk`:
```html
{% raw %}<nav class="links">
  <ul>
    <li>{% link "/posts/", "Posts" %}</li>
    <li>{% link "/projects/", "Projects" %}</li>
  </ul>
</nav>{% endraw %}
```
Mind the trailing slashes that may be load-bearing depending on other configuration. That actually became a problem for me when I switched servers, so I added this hack for now:

```js
eleventyConfig.addShortcode("link", function (url, label) {
  const isActive = this.page.url === url;
  return `<a ${isActive ? 'aria-current="page"' : ''} href="${url.at(-1) === '/' ? url.slice(0, -1) : url}">${label}</a>`;
});
```

And in the CSS stylesheet:
```css
.links a[aria-current="page"] {
  font-weight: 700;
}
```

In the first version of this post I used a custom `data-active` attribute, but I got an e-mail from cypressSap in which they pointed my attention to the [aria-current](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-current) attribute, so I've updated the post to use that instead.
