---
layout: default.njk
---

### nika (@nonnullish)

I like interactive interfaces (both software and hardware).

In February 2023 I graduated with an engineering degree in Automatic Control and Robotics.

### posts

<ul>
    {%- for post in collections.posts -%}
        {% unless post.url == '/posts/' %}
            <li><a href="{{ post.url }}">{{ post.data.title }}</a> <span style="opacity: 0.5">({{ post.data.date | readableDate }})</span></li>
        {% endunless %}
    {%- endfor -%}
</ul>

### projects

<div class="projects">
<div class="item">
        <p class="date">Dec 2021</p>
        <p class="title">todo </p>
        <p class="description">Minimalist todo app utilizing local storage to store all the virtual sticky notes,
            designed with the intention to set as the homepage. <a href="https://github.com/tusindfryd/todo">→</a></p>
    </div>
    <div class="item">
        <p class="date">Mar 2021</p>
        <p class="title">Share Liked Songs</p>
        <p class="description">Web app that copies all the liked songs on Spotify onto a public playlist. <a href="https://tusindfryd.github.io/share-liked-songs/">→</a></p>
    </div>
    <div class="item">
        <p class="date">Oct 2020</p>
        <p class="title">Around the World</p>
        <p class="description">Web app that creates a playlist with 8 songs from different countries, in genres that the
            user most often listens to. <a href="https://tusindfryd.github.io/around-the-world">→</a></p>
    </div>
    <div class="item">
        <p class="date">Feb 2021</p>
        <p class="title">Custom Glyph Generator</p>
        <p class="description">Tool for creating LCD glyphs using multiple sections at once. <a href="https://tusindfryd.github.io/screenduino/">→</a></p>
    </div>
    <div class="item">
        <p class="date">Jul 2021</p>
        <p class="title">heck: hex the deck</p>
        <p class="description">Card game: claim the majority of the cards by placing one with a higher value next to
            other ones to win the game. <a href="https://tusindfryd.github.io/heck/">→</a></p>
    </div>
    <div class="item">
        <p class="date">Jan 2020</p>
        <p class="title">no-track</p>
        <p class="description">Simple browser extension for copying links without trackers. <a href="https://github.com/tusindfryd/no-track">→</a></p>
    </div>
</div>
