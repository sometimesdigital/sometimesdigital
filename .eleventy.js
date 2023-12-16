const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginDate = require("eleventy-plugin-date");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const fs = require('fs');
const path = require('path');
const { createCanvas, loadImage, registerFont } = require("canvas");
const inspect = require("node:util").inspect;
const dayjs = require('dayjs');

module.exports = (eleventyConfig) => {
  // collections
  eleventyConfig.addCollection("projects", (collectionApi) => collectionApi.getFilteredByGlob("projects/**/*"));
  eleventyConfig.addCollection("posts", (collectionApi) => collectionApi.getFilteredByGlob("posts/**/*"));
  eleventyConfig.addCollection("weeknotes", (collectionApi) => collectionApi.getFilteredByGlob("weeknotes/**/*"));

  // plugins
  eleventyConfig.addPlugin(syntaxHighlight, {
    alwaysWrapLineHighlights: true,
  });

  eleventyConfig.addPlugin(pluginDate);
  eleventyConfig.addPlugin(pluginRss);

  // filters
  eleventyConfig.addFilter("inspect", (object = {}) => inspect(object, { sorted: true }));
  eleventyConfig.addFilter("MMM-YYYY", (date) => dayjs(date).format('MMM YYYY'));
  eleventyConfig.addFilter("dateNow", (_) => dayjs().toISOString());

  eleventyConfig.addFilter("smartquotes", (post) => {
    const hawaii = new RegExp(/(?<=<(h|l|p[^r]).*)Hawai'i/g);
    const slang = new RegExp(/'(cause|em|til|twas)/g);
    const apostrophes = new RegExp(/(?<=<(h|l|p[^r]).*)\b'\b/g);
    const years = new RegExp(/(?<=\s)'(?=\d)/g);
    const openDoubles = new RegExp(/(?<=<(h|l|p[^r]).*)(?<=\s|>)&quot;/g);
    const closeDoubles = new RegExp(
      /(?<=<(h|l|p[^r]).*“.*)&quot;(?=(\s|\p{P}|<))/gu
    );
    const openSingles = new RegExp(/(?<=<(h|l|p[^r]).*)(?<=\s|>)'/g);
    const closeSingles = new RegExp(
      /(?<=<(h|l|p[^r]).*‘.*)'(?=(\s|\p{P}|<))/gu
    );

    return post
      .replace(hawaii, "Hawaiʻi")
      .replace(slang, "’$1")
      .replace(apostrophes, "’")
      .replace(years, "’")
      .replace(openDoubles, "“")
      .replace(closeDoubles, "”")
      .replace(openSingles, "‘")
      .replace(closeSingles, "’");
  });

  eleventyConfig.addFilter("previews", async function (post) {
    const margin = 32;
    registerFont('./ConsolaMono-Bold.ttf', { family: 'ConsolaMono-Bold' })
    registerFont('./ConsolaMono-Book.ttf', { family: 'ConsolaMono' })


    const title = this.ctx.title.split(' ').reduce((acc, curr, index) => {
      const chunkIndex = Math.floor(index / 6);

      if (!acc[chunkIndex]) {
        acc[chunkIndex] = [];
      }

      acc[chunkIndex].push(curr);

      return acc;
    }, []).map(line => line.join(' ')).join('\n');

    const output = path.dirname(this.page.outputPath);
    const name = this.page.fileSlug.trim() || 'preview';
    const author = "nonnullish";

    const width = 1200;
    const height = 627;

    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");

    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, width, height);

    const cat = await loadImage("./cat.jpg");
    const catProportions = cat.width / cat.height;
    const catPosition = {
      w: height * catProportions,
      h: height,
      x: width - height * catProportions,
      y: 0,
    };

    let { w, h, x, y } = catPosition;
    context.drawImage(cat, x, y, w, h);

    let fontSize = 30;
    context.fillStyle = "#222222";
    context.font = `${fontSize}px 'ConsolaMono-Bold'`;
    context.textAlign = "center";
    context.fillText(title, (width - height * catProportions) / 2 + 50, (height - (title.match(/\n/g)?.length || 1) * fontSize) / 2);

    if (title !== author) {
      fontSize = 24;
      context.font = `${fontSize}px 'ConsolaMono'`;
      context.fillText("nonnullish", width / 2, height - fontSize - margin);
    }

    context.fillStyle = "#00000005";
    context.fillRect(0, 0, width, height);

    const buffer = canvas.toBuffer("image/png");

    if (!fs.existsSync(output)) {
      fs.mkdirSync(output, { recursive: true });
    }

    fs.writeFileSync(`${output}/${name}.png`, buffer);

    return post;
  });

  // settings
  eleventyConfig.setServerOptions({
    showAllHosts: true,
  });
}
