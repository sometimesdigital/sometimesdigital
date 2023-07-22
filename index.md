---
layout: default.njk
description: nika (@nonnullish) - personal website
---

### posts

<ul>
    {%- for post in collections.posts -%}
        {% if post.data.highlight %}<li><a href="{{ post.url }}">{{ post.data.title }}</a> <span>({{ post.data.date | readableDate }})</span></li>{% endif %}
    {%- endfor -%}
</ul>

### projects

<div class="projects">
    <div class="item">
        <img src="/pages/fridge-poems/fridge-poems.jpg" class="demo" alt="Demo of the Fridge Poems app"/>
        <p class="date">Jul 2023</p>
        <a href="https://nonnullish.pages.dev/pages/fridge-poems/" class="title">Fridge Poems </a>
        <p class="description">Interactive page for playing with words. <a href="https://nonnullish.pages.dev/pages/fridge-poems/">→</a></p>
    </div>
    <div class="item">
        <img src="/cool-hat.gif" class="demo" alt="Demo of the Hat Tile Puzzle app"/>
        <p class="date">June 2023</p>
        <a href="https://nonnullish.pages.dev/pages/hat-tile-puzzle" class="title">Hat Tile Puzzle</a>
        <p class="description">Interactive page for playing with <a href="https://www.sciencenews.org/article/mathematicians-discovered-einstein-tile">the hat</a>, a 13-sided polykite shape whose pattern is an aperiodic monotile. 
        <a href="https://nonnullish.pages.dev/pages/hat-tile-puzzle">→</a></p>
    </div>
    <div class="item">
        <img src="/rss-notifications.gif" class="demo" alt="Demo of the RSS Notifications app"/>
        <p class="date">May 2023</p>
        <a href="https://github.com/nonnullish/rss-notifications" class="title">RSS Notifications</a>
        <p class="description">Lightweight system tray application that sends notifications about updates in saved RSS and Atom feeds.
        <a href="https://github.com/nonnullish/rss-notifications">→</a></p>
    </div>
    <div class="item">
        <img src="/share-liked-songs.gif" class="demo" alt="Demo of the Share Liked Songs app"/>
        <p class="date">Mar 2021</p>
        <a href="https://nonnullish.github.io/share-liked-songs/" class="title">Share Liked Songs</a>
        <p class="description">Web app that copies all the liked songs on Spotify onto a public playlist. <a href="https://nonnullish.github.io/share-liked-songs/">→</a></p>
    </div>
    <div class="item">
        <img src="/around-the-world.gif" class="demo" alt="Demo of the Around the World app"/>
        <p class="date">Oct 2020</p>
        <a href="https://nonnullish.github.io/around-the-world" class="title">Around the World</a>
        <p class="description">Web app that creates a playlist with 8 songs from different countries, in genres that the
            user most often listens to. <a href="https://nonnullish.github.io/around-the-world">→</a></p>
    </div>
    <div class="item">
        <img src="/butterflies.gif" class="demo" alt="Recording of a 16x2 LCD screen showing an animation of a caterpillar turning into a butterfly"/>
        <p class="date">Feb 2021</p>
        <a href="https://nonnullish.github.io/screenduino/" class="title">Custom Glyph Generator</a>
        <p class="description">Tool for creating glyphs using multiple sections of an LCD screen at once. <a href="https://nonnullish.github.io/screenduino/">→</a></p>
    </div>
    <div class="item">
        <img src="/bgif.gif" class="demo" alt="3D plasticine-like model of a bee over a hexagonal tile"/>
        <p class="date">Jul 2021</p>
        <a href="https://nonnullish.github.io/heck/" class="title">heck: hex the deck</a>
        <p class="description">Card game: claim the majority of the cards by placing one with a higher value next to
            other ones to win the game. <a href="https://nonnullish.github.io/heck/">→</a></p>
    </div>
    <div class="item">
        <img src="/notrack.png" class="demo" alt="4 star review of the no-track extension by Pedro saying 'Does the job, that's all!'"/>
        <p class="date">Jan 2020</p>
        <a href="https://github.com/nonnullish/no-track" class="title">no-track</a>
        <p class="description">Simple browser extension for copying links without trackers added to the URLs. <a href="https://github.com/nonnullish/no-track">→</a></p>
    </div>
</div>
