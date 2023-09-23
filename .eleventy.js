const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginDate = require("eleventy-plugin-date");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const inspect = require("node:util").inspect;
const dayjs = require('dayjs');

module.exports = (eleventyConfig) => {
  // collections
  eleventyConfig.addCollection("projects", (collectionApi) => collectionApi.getFilteredByGlob("projects/**/*"));
  eleventyConfig.addCollection("posts", (collectionApi) => collectionApi.getFilteredByGlob("posts/**/*"));

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

  // settings
  eleventyConfig.setServerOptions({
    showAllHosts: true,
  });
}
