---
title: Generating Open Graph Images in Eleventy
description: I added the og:media image tags yesterday, and the approach seems to work, so I'm going to share it in this post.
date: 2023-12-17T13:17:00+01:00
comments: true
---

I added the `og:media` image tags yesterday, and the approach seems to work, so I'm going to share it in this post.

![Normally you wouldn't see this banner.](generating-images-eleventy.png)

I am using the [filter functions](https://www.11ty.dev/docs/filters/) and generating the raster images directly inside of the filter with `node-canvas`, as described [in this article](https://blog.logrocket.com/creating-saving-images-node-canvas/).

First I added the meta tags to my default layout. I called the filter `previews`, and I will be using the `title` variable as the argument.

```plain
<meta property="og:image" content="{% raw %}{{ title | previews }}{% endraw %}" />
```

Then I wrote the filter.

```js
const fs = require('fs');
const path = require('path');
const { createCanvas, registerFont } = require("canvas");

...

eleventyConfig.addFilter("previews", async function (title) {
  // register custom fonts, if you want to use any
  // this step has to be done before creating the canvas
  registerFont('./custom-font.ttf', { family: 'Custom Font' });

  // set layout variables
  const width = 1200;
  const height = 630;

  // create the canvas
  const canvas = createCanvas(width, height);
  const context = canvas.getContext("2d");

  // get the output path
  const output = path.dirname(this.page.outputPath);

  // set the filename to the slug of the page, or "preview" as a backup
  const filename = this.page.fileSlug.trim() || 'preview';

  // set the extension
  const ext = "png";

  // create the full output path
  const filepath = path.join(output, `${filename}.${ext}`);

  // maybe the file already exists - in that case, just return the relative path
  if (fs.existsSync(filepath)) {
    return `${filename}.${ext}`;
  }

  // canvas won't automatically divide the header into multiple lines,
  // so we have to do it manually - in my case, there'll be at most
  // six words in one line
  const wordsPerLine = 6;

  const header = title
    .split(' ')
    .reduce((result, word, index) => {
      const line = Math.floor(index / wordsPerLine);

      if (!result[line]) {
        result[line] = []; // begin new line
      }

      result[line].push(word);

      return result;
    }, [])
    .map(line => line.join(' '))
    .join('\n');

  // set the canvas background
  context.fillStyle = "#222222";
  context.fillRect(0, 0, width, height);

  // set the header
  const fontSize = 30;
  const lineCount = header.match(/\n/g)?.length ?? 0;

  context.fillStyle = "#ffffff";
  context.font = `${fontSize}px 'Custom Font'`;
  context.textAlign = "center";
  context.fillText(header, width / 2, (height - lineCount * fontSize) / 2);

  // create the image
  const buffer = canvas.toBuffer("image/png");

  // create the output directory if it doesn't already exist
  if (!fs.existsSync(output)) {
    fs.mkdirSync(output, { recursive: true });
  }

  // write the file
  fs.writeFileSync(filepath, buffer);

  // return the relative file path
  return `${filename}.${ext}`;
});
```

This is the bare-bones set-up, without any decorations, or the name of the author, or anything like that, but [this article](https://blog.logrocket.com/creating-saving-images-node-canvas/) and the [node-canvas](https://github.com/Automattic/node-canvas) documentation describe how to add more things.