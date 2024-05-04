---
title: Search
layout: default.njk
description: Search in site
---

<style>
:root {
    --pagefind-ui-scale: .8;
    --pagefind-ui-primary: #393939;
    --pagefind-ui-text: #393939;
    --pagefind-ui-background: #ffffff;
    --pagefind-ui-border: #eeeeee;
    --pagefind-ui-tag: #eeeeee;
    --pagefind-ui-border-width: 1px;
    --pagefind-ui-border-radius: 8px;
    --pagefind-ui-image-border-radius: 8px;
    --pagefind-ui-image-box-ratio: 3 / 2;
    --pagefind-ui-font: inherit;
}

.pagefind-ui * {
  font-size: 1rem!important;
}

.pagefind-ui input {
  font-size: 19px!important;
}

mark {
  background: #f3eab9!important;
}
</style>

<div id="search" class="search"></div>

<script src="/_pagefind/pagefind-ui.js" onload="new PagefindUI({ element: '#search', showImages: false });"></script>