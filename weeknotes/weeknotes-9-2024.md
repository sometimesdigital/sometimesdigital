---
title: Weeknotes 9
week: 9
date: 2024-03-03T19:10:00+01:00
---

Yesterday I made a pull request to Elk (the Mastodon client). I use Elk a lot and I noticed that when an emoji gets inserted, it's inserted one character earlier than where it should be. It was a bit annoying to figure out what was happening, but I found that it was caused by a function in the Tiptap text editor that was called when the emoji were transformed into nodes with images. There is [a line in that function](https://github.com/ueberdosis/tiptap/blob/e00700110af771c6f7f826a5d54802ebfed6aeb4/packages/core/src/inputRules/nodeInputRule.ts#L60) that's basically `insert(start - 1)` and I found that replacing that with `insert(start)` fixes the issue. I think. I'm not sure if the fix will get merged, but I hope that it could be at least a starting point for someone to find a better solution.

There's probably a reason for that `-1` and it probably works in many cases. Although [on the Tiptap demo page](https://templates.tiptap.dev/WMfMgrMWjq) there's a different bug with emojis: they get inserted twice (at least on my computer). But that implementation is very different.

I like reading other people's code and see how they do things. It's fun to try to match the style when making a contribution.
