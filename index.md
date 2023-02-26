---
layout: default.njk
---

### posts

<ul>
    {%- for post in collections.posts -%}
        {% if post.data.highlight %}
            <li><a href="{{ post.url }}">{{ post.data.title }}</a> <span style="opacity: 0.5">({{ post.data.date | readableDate }})</span></li>
        {% endif %}
    {%- endfor -%}
</ul>

### projects

<div class="projects">
<div class="item">
        <p class="date">Dec 2021</p>
        <a href href="https://github.com/tusindfryd/todo" class="title">todo </a>
        <p class="description">Minimalist todo app utilizing local storage to store all the virtual sticky notes,
            designed with the intention to set as the homepage. <a href="https://github.com/tusindfryd/todo">→</a></p>
    </div>
    <div class="item">
        <p class="date">Mar 2021</p>
        <a href="https://tusindfryd.github.io/share-liked-songs/" class="title">Share Liked Songs</a>
        <p class="description">Web app that copies all the liked songs on Spotify onto a public playlist. <a href="https://tusindfryd.github.io/share-liked-songs/">→</a></p>
    </div>
    <div class="item">
        <p class="date">Oct 2020</p>
        <a href="https://tusindfryd.github.io/around-the-world" class="title">Around the World</a>
        <p class="description">Web app that creates a playlist with 8 songs from different countries, in genres that the
            user most often listens to. <a href="https://tusindfryd.github.io/around-the-world">→</a></p>
    </div>
    <div class="item">
        <p class="date">Feb 2021</p>
        <a href="https://tusindfryd.github.io/screenduino/" class="title">Custom Glyph Generator</a>
        <p class="description">Tool for creating LCD glyphs using multiple sections at once. <a href="https://tusindfryd.github.io/screenduino/">→</a></p>
    </div>
    <div class="item">
        <p class="date">Jul 2021</p>
        <a href="https://tusindfryd.github.io/heck/" class="title">heck: hex the deck</a>
        <p class="description">Card game: claim the majority of the cards by placing one with a higher value next to
            other ones to win the game. <a href="https://tusindfryd.github.io/heck/">→</a></p>
    </div>
    <div class="item">
        <p class="date">Jan 2020</p>
        <a href="https://github.com/tusindfryd/no-track" class="title">no-track</a>
        <p class="description">Simple browser extension for copying links without trackers. <a href="https://github.com/tusindfryd/no-track">→</a></p>
    </div>
</div>
