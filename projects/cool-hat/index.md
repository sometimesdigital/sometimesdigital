---
title: Hat Tile Puzzle
date: 2023-06-01
description: I've made a page to play with the hat shape.
---

[In May 2023](https://www.scientificamerican.com/article/newfound-mathematical-einstein-shape-creates-a-never-repeating-pattern/), *a new shape went viral*: 

> a group of mathematicians posted a preprint proving that *the hat*, when considered with its mirror image, forms an aperiodic prototile set, solving *the einstein problem*[^1]

This was exciting to me, a person who doesn't know enough about maths to understand the relevance of this discovery but likes shapes of various kind.

I thought it would be nice to have an interactive way to explore this new shape and made [a page](/pages/hat-tile-puzzle) for that. [This video](https://www.youtube.com/watch?v=uoJFqLn-1eY) was very helpful.

<style>
  iframe {
    aspect-ratio: 1/1;
    border: none;
    height: auto;
    width: 100%;
  }

  .cool-hat {
    position: relative;
    aspect-ratio: 16/11;
    pointer-events: none;

    img {
      position: absolute;
      top: 0;
    }

    video {
      position: absolute;
      top: 21%;
      left: 10%;
      width: 90%;
      height: 65%;
      background: currentcolor;
    }
  }
</style>

<iframe width="200" height="200" src="/pages/hat-tile-puzzle"></iframe>

---

I did also try to make this work on touch devices, with questionable success.  

<div class="cool-hat">
  <video autoplay loop muted playsinline>
    <source src="cool-hat.webm" type="video/webm">
  </video>
  <img src="cool-hat.svg"/>
</div>


[^1]: They lure you in with Einstein and only later let you know that the name is actually only a word play on *ein Stein*, German for "one stone".