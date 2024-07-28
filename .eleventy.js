const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const dates = require("eleventy-plugin-date");
const rss = require("@11ty/eleventy-plugin-rss");
const dayjs = require("dayjs");
const { createFlickr } = require("flickr-sdk");

const { createCanvas, loadImage, registerFont } = require("canvas");
const CanvasTextBlock = require("canvas-text-block");

const markdownIt = require("markdown-it");
const footnotes = require("markdown-it-footnote");
const anchors = require('markdown-it-anchor')

const inspect = require("node:util").inspect;

const path = require("path");
const fs = require("fs");
const { execSync } = require('child_process');
require('dotenv').config();

const { getBlogroll } = require("./src/blogroll/blogroll.js");

const addCollection = (config, name, globs) => {
  config.addCollection(name, (handler) => handler.getFilteredByGlob(globs));
}

const addCopies = (config, formats) => {
  for (const format of formats) {
    config.addPassthroughCopy(`src/**/*.${format}`);
  }
}

module.exports = (config) => {
  config.setTemplateFormats(["md", "njk", "html"]);
  addCopies(config, ['css', 'domains', 'gif', 'jpg', 'mp4', 'otf', 'png', 'svg', 'ttf', 'txt', 'webm', 'webmanifest', 'webp', 'woff', 'woff2']);

  // collections
  addCollection(config, 'rss', ["src/weeknotes/**/*", "src/posts/**/*", "src/projects/**/*"]);
  addCollection(config, 'rssPosts', "src/posts/**/*");
  addCollection(config, 'rssWeeknotes', "src/weeknotes/**/*");
  addCollection(config, 'posts', "src/posts/**/*");

  config.addCollection("weeknotes", (handler) => {
    const weeknotes = handler.getFilteredByGlob("src/weeknotes/**/*");
    const years = weeknotes.map(post => post.date.getFullYear());
    const months = weeknotes.map(post => post.date.getMonth());

    const uniqueYears = [...new Set(years)];
    const uniqueMonths = [...new Set(months)];

    const byMonth = (group) => uniqueMonths.reduce((prev, month) => {
      const posts = group.filter(post => post.date.getMonth() === month);

      return [
        ...prev,
        ...posts.length ? [{ month, posts }] : []
      ]
    }, []);

    const byYear = uniqueYears.reduce((prev, year) => {
      const posts = byMonth(weeknotes.filter(post => post.date.getFullYear() === year));

      return [
        ...prev,
        ...posts.length ? [{ year, posts }] : []
      ]
    }, []);

    return byYear;
  });

  // plugins
  config.addPlugin(syntaxHighlight, {
    alwaysWrapLineHighlights: true,
  });

  const markdown = markdownIt({
    html: true,
    breaks: true,
    linkify: true,
    typographer: true,
  })
    .use(footnotes)
    .use(anchors, {
      permalink: anchors.permalink.headerLink({
        safariReaderFix: true
      })
    });

  markdown.renderer.rules.footnote_caption = (tokens, idx) => {
    let n = Number(tokens[idx].meta.id + 1).toString();

    if (tokens[idx].meta.subId > 0) {
      n += ":" + tokens[idx].meta.subId;
    }

    return n;
  };

  config.setLibrary("md", markdown);

  config.addPlugin(dates);
  config.addPlugin(rss);

  // filters
  config.addFilter("inspect", (object = {}) => inspect(object, { sorted: true }));
  config.addFilter("now", (_) => dayjs().toISOString());

  config.addFilter("previews", async function (title) {
    if (!title) {
      return;
    }

    registerFont("./src/assets/fonts/inter.ttf", { family: "Inter" });

    const width = 1200;
    const height = 630;
    const margin = 100;
    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d", { alpha: false });
    const output = path.dirname(this.page.outputPath);
    const filename = this.page.fileSlug.trim() || "preview";
    const ext = "png";
    const filepath = path.join(output, `${filename}.${ext}`);

    if (fs.existsSync(filepath)) {
      return `${filename}.${ext}`;
    }

    context.fillStyle = "#f4f4f4";
    context.fillRect(0, 0, width, height);

    if (!this.page.fileSlug) {
      const flower = await loadImage("./src/assets/images/favicon.png");
      const flowerSize = 48;
      const flowerPosition = {
        w: flowerSize,
        h: flowerSize,
        x: (width - flowerSize) / 2,
        y: (height - flowerSize) / 2 - 48,
      };

      let { w, h, x, y } = flowerPosition;
      context.drawImage(flower, x, y, w, h);

      const name = new CanvasTextBlock(
        canvas,
        width / 2 - 67,
        height / 2,
        width - 2 * margin,
        24 + margin,
        {
          color: "#222222",
          fontFamily: "Inter",
          fontSize: 28,
        }
      );
      name.setText('nonnullish');

      const domain = new CanvasTextBlock(
        canvas,
        width / 2 - 100,
        height / 2 + 48,
        width - 2 * margin,
        24 + margin,
        {
          color: "#222222",
          fontFamily: "Inter",
          fontSize: 24,
        }
      );
      domain.setText('sometimes.digital');

      const buffer = canvas.toBuffer("image/png");

      if (!fs.existsSync(output)) {
        fs.mkdirSync(output, { recursive: true });
      }

      fs.writeFileSync(filepath, buffer);

      return `${filename}.${ext}`;
    }

    const domain = new CanvasTextBlock(
      canvas,
      margin,
      margin,
      width - 2 * margin,
      24 + margin,
      {
        color: "#222222",
        fontFamily: "Inter",
        fontSize: 24,
      }
    );
    domain.setText('sometimes.digital');

    const date = new CanvasTextBlock(
      canvas,
      margin,
      height - 48 / 2 - 24 / 2 - margin,
      width - 2 * margin,
      24 + margin,
      {
        color: "#222222",
        fontFamily: "Inter",
        fontSize: 24,
      }
    );
    date.setText(this.ctx.date ? dayjs(this.page.date).format('dddd, MMMM D, YYYY') : '');

    const header = new CanvasTextBlock(
      canvas,
      margin,
      24 + margin + 32,
      width - 2 * margin,
      height - 3 * margin - 24,
      {
        color: "#222222",
        fontFamily: "Inter",
        fontSize: 32,
        lineHeight: 48,
      }
    );

    header.setText(title);

    const flower = await loadImage("./src/assets/images/favicon.png");
    const flowerSize = 48;
    const flowerPosition = {
      w: flowerSize,
      h: flowerSize,
      x: width - flowerSize - margin,
      y: height - flowerSize - margin,
    };

    let { w, h, x, y } = flowerPosition;
    context.drawImage(flower, x, y, w, h);

    const buffer = canvas.toBuffer("image/png");

    if (!fs.existsSync(output)) {
      fs.mkdirSync(output, { recursive: true });
    }

    fs.writeFileSync(filepath, buffer);

    return `${filename}.${ext}`;
  });

  // blogroll
  config.addGlobalData(
    "blogroll",
    async () => {
      if (process.env.MODE === 'development') {
        return [];
      }

      return await getBlogroll()
    },
  )

  // photostream
  config.addGlobalData(
    "photostream",
    async () => {
      if (process.env.MODE === 'development') {
        return [];
      }

      const size = "c";
      const key = process.env.FLICKR_API_KEY;
      const { flickr } = createFlickr(key);
      const response = await flickr("flickr.people.getPublicPhotos", {
        user_id: process.env.FLICKR_USER_ID,
        per_page: '500',
      });

      return response.photos.photo.map(
        ({ id, title, secret, server }) => ({
          title,
          url: `https://live.staticflickr.com/${server}/${id}_${secret}_${size}.jpg`
        })
      );
    },
  )

  // shortcodes
  config.addShortcode("link", function (url, label) {
    const isActive = this.page.url === url;
    return `<a ${isActive ? 'aria-current="page"' : ''} href="${url.at(-1) === '/' ? url.slice(0, -1) : url}">${label}</a>`;
  });

  // settings
  config.setServerOptions({
    showAllHosts: true,
  });

  // pagefind
  config.on('eleventy.after', () => {
    execSync(`npx pagefind --site _site --glob \"**/*.html\"`, { encoding: 'utf-8' })
  });
};