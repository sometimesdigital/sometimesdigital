---
title: Weeknotes 31
week: 31
date: 2024-08-06T21:00:00+02:00
---

Last week I let Next.js occupy a bit too much of my brain and there wasn’t much space for Weeknotes left on Sunday. But now I see the light at the end of the tunnel (the possibility of closing the Jira ticket). Here’s exactly what made me feel so defeated:

1. Auth.js (the recommended authentication library for Next.js) is *“[secure by default](https://github.com/nextauthjs/next-auth#secure-by-default)”* because it “*promotes the use of passwordless sign-in mechanisms*”. This is very funny to me as a developer because it just means that it’s going to make my job more difficult than it needs to be. I don’t need my tools to promote anything to me. I need my tools to let me do what I need to do, and that’s usually a custom solution that needs to integrate with something that another team has already made. I just don’t understand who this is for. Most people just have a job to do and most people don’t have full control over the design. 

2. [Next.js uses Undici as polyfill for Node fetch](https://nextjs.org/docs/architecture/supported-browsers#polyfills). Undici silently stripped away my very deliberate `Authorization` header [without telling me](https://github.com/nodejs/undici/issues/872). It would probably be easier to spot it if I had access to network logs. They are available in Vercel as Runtime Logs but are otherwise so inaccessible that [people develop the hackiest solutions](https://www.tomups.com/posts/log-nextjs-request-response-as-json/) and conspiracy theories. I don’t think this linked one even works anymore. Making the request with axios worked, so at least there’s that.
