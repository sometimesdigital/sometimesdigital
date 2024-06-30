---
title: Weeknotes 26
week: 26
date: 2024-06-30T19:00:00+02:00
---

I've made some changes to this site. I think it looks nice. I played with Eleventy quite a bit and wrote down some notes, so I'll have some tutorial-like posts to publish. [The first one](/posts/adding-a-photostream-to-eleventy/) is about the [/photos](/photos) page that I made. There was a heatwave this week, with temperatures over 30°C, but I went on a walk today and took some photos. I saw a chaffinch too, and a lot of dragonflies.

At work, I have come across a really weird edge case in Docker, or rather BuildKit which is used in `docker build`. I was trying to copy the `.git` folder, but kept getting an error: `failed to solve: source can't be a git ref for COPY`. It turned out that that the computer [didn't know](https://github.com/moby/buildkit/blob/2ec1338fc13f73b43f0b1b4f4678d7cd654bc86c/frontend/dockerfile/dockerfile2llb/convert.go#L1394) if it was supposed to copy the folder or clone a remote repository and didn't try to do either. I only found [two issues](https://github.com/moby/buildkit/issues/4777) mentioning this error, which is weird because it seems like a fairly common thing.

