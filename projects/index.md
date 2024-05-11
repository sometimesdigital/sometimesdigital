---
title: Projects
layout: default.njk
eleventyExcludeFromCollections: true
---
<style>
h3:nth-of-type(even) {
  text-align: right;
}

.bee {
  width: min(150px, 100%);
  margin-right: 0;
}

.around-the-world {
  position: relative;
  aspect-ratio: 16/10;
  pointer-events: none;

  video {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 60%;
    border-radius: 100%;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
  }
}

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
    background: currentcolor;
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

### ***Fast Fashion Begone*** [[about](fast-fashion-begone)] / [[see](https://addons.mozilla.org/en-GB/firefox/addon/fast-fashion-begone/)]


### ***Share Liked Songs*** [[about](share-liked-songs)] / [[see](https://nonnullish.github.io/share-liked-songs/)]
<figure>
  <img src="/weeknotes/attachments/2-years-later.png" alt="2 years later and still works like a charm!"/>
</figure>


### ***Around the World*** [[see](https://nonnullish.github.io/around-the-world/)]

<div class="around-the-world">
  <img src="around-the-world/around-the-world.gif"/>
  <video autoplay loop muted playsinline class="video">
    <source src="around-the-world/around-the-world.webm" type="video/webm" />
  </video>
</div>


### ***Hat Tile Puzzle*** [[about](cool-hat)] / [[see](/pages/hat-tile-puzzle)]
<img class="hats" src="cool-hat/hats.svg"/>

### ***Hex the Deck*** [[see](https://nonnullish.github.io/heck)]
<img class="bee" src="hex-the-deck/bee.webp"/>


### ***Custom Glyph Generator*** [[about](screenduino) / [see](https://nonnullish.github.io/screenduino/)]

<div class="butterflies">
  <video autoplay loop muted playsinline class="video">
    <source src="screenduino/butterflies.webm" type="video/webm" />
  </video>
  <img src="screenduino/screenshot.webp" class="screenshot"/>
  <img src="screenduino/arrow.svg" class="arrow"/>
</div>


### ***Fridge Poems*** [[see](https://sometimes.digital/pages/fridge-poems)]

<figure>
  <img src="fridge-poems/fridge-poems.webp" alt="Digital collage showing a hand pointing towards fridge magnets with the words 'fridge poems'."/>
</figure>
