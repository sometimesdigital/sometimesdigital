---
title: Weeknotes 48
week: 48
date: 2023-12-04T14:15:00+01:00
---

According to Spotify Wrapped, this year the artist that I listened to the most was John Maus, and the song was "[Walls of Silence](https://www.youtube.com/watch?v=W_aJ3q04W-0)".

I have found some [patterns for making bead jewellery](https://elk.zone/indieweb.social/@nonnullish/111499972869076520). I like how complicated they are and how much work they take. I've made a berry but it looks more like a tomato.

I have been trying to do Advent of Code. Last year I gave up after four days. I was quite excited for it this year because I think I have learned quite a lot, at work mostly. But then yesterday I couldn't figure out the second part and today my solution took so long to run that I could make myself breakfast in the meantime. Then it still kept going for quite a lot of time, and I thought "yeah, no", and wrote it properly, and it gave a correct answer. So as for now I'm missing one star. I'm trying not to take it too seriously. 

I have added a server to my plotter. The idea is that the microcontroller should parse the G-code sent in a request and run the motors appropriately. [There are quite a lot of instructions in the G-code.](https://reprap.org/wiki/G-code) [I'm going to cheat and not do the bad bits.](https://www.todepond.com/wikiblogarden/tadi-web/entry-points/#you-can-just-cheat) I'm actually only going to do `G0`, which is "move", and perhaps `G1`, which is "move in a slightly different way", but I think both of them will actually do the same thing. I may also do `G4`, which is "dwell". I like that they called it "dwell". And I think I'll only do relative positioning so that I don't have to manage the position of the tool, but that would actually be a good thing to do, so I am not set on it yet.

Everything is so difficult with microcontrollers, and there's so much set-up. But I have found a library called [WiFi Manager](https://github.com/tzapu/WiFiManager) and I was really surprised how well it works. I have no idea what is happening under the hood but at this point I don't even mind. 