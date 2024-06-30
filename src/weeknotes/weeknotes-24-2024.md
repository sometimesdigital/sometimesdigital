---
title: Weeknotes 24
week: 24
date: 2024-06-16T20:35:00+02:00
---

It's my birthday today. I've always liked that my birthday is sort of in the middle of the year. The new year is a good prompt for change, and my birthday feels like a good checkpoint, or another chance to make resolutions.

My partner got me a set of wooden bird calls. The company that makes them has [an amazing website](https://www.qbc.fr/) and apparently they've made a custom promo set for Björk, [which is really cool](https://www.bjork.fr/Utopia-Bird-Call-Boxset).

At work, all my tasks this week were about making components, which I like much more compared to configuring stuff like last week. I got to use the `cqw` unit, which was very exciting.

I really haven't felt like using the computer recreationally, but I did make one change in a personal repository. Someone opened an issue for my browser extension that blocks specific brands on Vinted. The issue was that they couldn't save all the 2000 brands that they wanted to have blocked. I have no idea what kind of items they have left with that list. It didn't block Shein, so I guess that still shows up. Either way, the issue was that the method `chrome.storage.sync.set` allows saving strings that are up to 8,192 bytes big, and the 2000 brand list was around 20 kB. I thought `chrome.storage.sync.set` meant that the data was saved synchronously (I expected there would exist another function like `chrome.storage.async.set`) but it actually saved the data in the user's Chrome account. I changed it to use local storage.
