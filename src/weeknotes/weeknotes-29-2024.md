---
title: Weeknotes 29
week: 29
date: 2024-07-21T21:35:00+02:00
---

I went to the park today and took photos of birds:

<div class="gallery">
  <img class="full-width" src="https://live.staticflickr.com/65535/53871756989_eea5026cd1_h.jpg" alt="Photo of two juvenile swans, an older one in the front and a younger one behind him"/>
  <img src="https://live.staticflickr.com/65535/53871819205_0e311fee3e_h.jpg" alt="Photo of a swan facing his right"/>
  <img src="https://live.staticflickr.com/65535/53870655882_338255d0e5_h.jpg" alt="Photo of a swan facing his left"/>
  <img class="full-width" src="https://live.staticflickr.com/65535/53871407276_ea43ed1e7f_h.jpg" alt="Photo of a juvenile moorhen"/>
</div>

At work this week, I was really happy with a function I wrote. The last time that I was happy with my solution to a problem, I asked an LLM to generate its own solution (thinking that it would surely be worse), and was disappointed when the result was pretty much identical to what I wrote. So this time I didn't do that and I am still happy with it.

[I looked into my nginx logs and wrote a post about it](/posts/looking-into-my-nginx-logs/). I also fixed redirects from the old Cloudflare Pages domain to this one. Cloudflare is good, but they do practice some dark patterns that are supposed to lock users in. But setting up the redirection [was pretty straightforward](https://developers.cloudflare.com/pages/configuration/redirects/#splats): I deleted the project, created a new one with the same URL, and put one static file there called `_redirects` with the content: `/* https://sometimes.digital/:splat 301`. The links seem to get redirected properly and the people who have subscribed to the RSS feed under the old domain should still get updates.
