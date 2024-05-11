---
title: Custom Glyph Generator
date: 2021-02-01
description: Tool for creating glyphs using multiple sections of an LCD screen at once.
---

Besides the preprogrammed characters, the HD44780 based LCD screens can also display custom glyphs. I made [a tool](https://nonnullish.github.io/screenduino/) for generating these glyphs that shows the whole screen so that it's easier to plan them out.

<style>
.butterflies {
  position: relative;
  aspect-ratio: 4/3;
  pointer-events: none;

  .video {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 60%;
    border: 2px solid currentcolor;
  }

  .screenshot {
    position: absolute;
    top: 0;
    left: 0;
    border: 2px solid black;
    width: 66%;
    z-index: -1;
  }

  .arrow {
    position: absolute;
    top: 35%;
    left: 20%;
    width: 40%;
  }
}
</style>

<div class="butterflies">
  <video autoplay loop muted playsinline class="video">
    <source src="butterflies.webm" type="video/webm" />
  </video>
  <img src="screenshot.webp" class="screenshot"/>
  <img src="arrow.svg" class="arrow"/>
</div>