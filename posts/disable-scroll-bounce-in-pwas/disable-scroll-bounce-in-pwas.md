---
title: Disable Scroll Bounce in PWAs with CSS
description: A neat way to prevent the scroll bounce in PWAs with CSS
date: 2024-04-06T17:42:00+02:00
---

Here's a neat way to prevent the scroll bounce in PWAs with CSS:

```css
@media all and (display-mode: fullscreen) {
  html {
    overscroll-behavior: none;
  }
}
```

Without the media query the rule will also work in browsers.

I think it's a nice touch that unifies the way native apps and PWAs behave on iOS, while keeping the bounce in the browser.

[Here's a demo page](demo). I haven't tested it on other systems or browsers, but it should work on iOS Safari.