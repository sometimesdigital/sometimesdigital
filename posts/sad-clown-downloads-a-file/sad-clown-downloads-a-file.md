---
title: It’s always a good day when a coworker sends you an article in which the header picture is a photo of a sad clown (Saving a File in 2023)
description: Guide on how to (and how not to) save a file programmatically with JavaScript
date: 2023-05-17
---
It’s always a good day when a coworker sends you [an article in which the header picture is a photo of a sad clown](https://medium.com/@drevets/you-cant-prompt-a-file-download-with-the-content-disposition-header-using-axios-xhr-sorry-56577aa706d6).

Basically it said that processing a response with the `Content-Disposition` header in JavaScript won’t trigger file download in the browser. But the article was written in 2019! A lifetime ago! Get with the times. Surely things must have changed? I pleaded. “Maybe”. I was full of hope and mocked a server. It still didn’t work.

So, how do you save a file in 2023? Apparently science has not progressed much in this area recently.

**EASY MODE**
 - no fancy headers
 - just GET & go

Anchor elements have a `download` attribute. You can just do this:

```html
<a href="https://example.com" download="my_file.json">Website</a>
```

**MY CASE**
 - headers for authorization & content type
 
 I pretty much went with the solution suggested by the author of the original blog post.

 ```js
 const download = async () => {
    const response = await fetch(url, {
        headers: {
            'Content-Type': 'text/csv'
        },
    });

    const blob = await response.blob();
    const objectURL = URL.createObjectURL(blob);
    const link - document.createElement('a');
    link.href = objectURL;
    link.setAttribute('download', filename);
    link.click();
 };
 ```