---
title: Weeknotes 46
date: 2023-11-20T16:37:00+01:00
---

<script src="https://cdn.jsdelivr.net/npm/p5@1.8.0/lib/p5.js"></script>

<style>
  iframe {
    aspect-ratio: 16/9;
    border: none;
    height: auto;
    width: 100%;
  }

  .circle {
    aspect-ratio: 1/1;
    border-radius: 100%;
    overflow: hidden;
    width: 150px;
    margin-inline: calc((100% - 150px) / 2);
  }

  .half {
    width: 50%;
    margin-inline: 25%;
  }

  .landscapes {
    display: grid;
    grid-column-gap: 4px;
    grid-row-gap: 4px;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    margin-block-end: 1em;
    margin-block-start: 1em;
  }
</style>

This broadcast is now facilitated by the fibre-optic technology. I guess “fibre-optic” sounds more exciting in Polish; it sort of translates to “[light vessel](https://en.m.wiktionary.org/wiki/-wód)” (taken literally).

I went to a model railway exhibition this week and then to a Christmas market. It’s too early for a Christmas market but it was close to the model railway thing. It was really pretty.

<iframe class="iframe circle" width="200" height="200" src="/pages/epicycles"></iframe>

I want to make a plotter. The plotter has to have something to draw, and so I have been trying to figure out what it could draw. Its functionality is going to be somewhat limited because it won’t be able to put the pen away. I don’t want to include the drive that would do the “up” movement, so I want it to draw only continuous lines, and always start and end at the origin point. I thought it would be fun if it only drew squiggles. It’s a very unimpressive task for a person to do, but a ridiculously complicated one for a machine. Or maybe it’s just ridiculously complicated for me to make the machine do.

What makes a convincing squiggle? I started with [epicycles](https://v21.io/blog/epicycles), but even with noise they weren’t chaotic enough, in a way that I’d like them to be. Then I found [the perfect squiggle on Twitter](https://x.com/mattdesl/status/1013896537166888960). The author based it on a torus. I couldn’t really figure out how they made it, but I found [an interesting article](http://www.rdrop.com/~half/math/torus/illustrating.html), and [a video that really helped](https://www.youtube.com/watch?v=iNA4yH7DAN8). The author of the video commented the colours he used with the Japanese names, which lead me to discover [this website](https://irocore.com/rakuda-iro/). In Warsaw, next to the Museum of Modern Art, there is a really neat gift shop, where my partner bought “A Dictionary of Color Combinations” by Sanzō Wada. It’s nice to have a book like that on the desk and also a website like that in the bookmarks. I added noise to the torus and I’m happy with the squiggles the computer draws. I don’t know if I’m going to continue with this approach because I still need to figure out how to start and end the drawing at the origin point, and how to make sure that the drawing won’t go outside of the paper.

<iframe class="iframe" width="300" height="300" src="/pages/squiggles"></iframe>

The noise function from p5.js is fun. I added it to the stroke width to add some detail. I also generated some “landscapes” with it. They look a little dated but were fun to make.

<div class="landscapes">
  <iframe class="iframe" width="300" height="200" src="/pages/landscapes"></iframe>
  <iframe class="iframe" width="300" height="200" src="/pages/landscapes"></iframe>
  <iframe class="iframe" width="300" height="200" src="/pages/landscapes"></iframe>
  <iframe class="iframe" width="300" height="200" src="/pages/landscapes"></iframe>
</div>
