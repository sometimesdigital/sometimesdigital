const dayjs = require('dayjs');
const Parser = require('rss-parser');
const parser = new Parser({ timeout: 5000 });

const blogroll = [
  "https://maya.land/feed.xml",
  "https://sweetfish.site/feed.txt",
  "https://tomoe.asia/index.xml",
  "https://www.todepond.com/feed/index.xml",
];

const getBlogroll = async () => {
  const feeds = [];

  for await (const url of blogroll) {
    const feed = await parser.parseURL(url);
    const post = feed.items.sort((a, b) => new Date(b.isoDate) - new Date(a.isoDate))?.at(0);

    const entry = {
      title: feed.title,
      icon: `https://v1.indieweb-avatar.11ty.dev/${encodeURIComponent(feed.link)}`,
      link: feed.link,
      post: {
        title: post.title,
        link: post.link,
        date: dayjs(post.isoDate).format('MMMM D, YYYY'),
      }
    };

    feeds.push(entry);
  }

  return feeds.sort((a, b) => new Date(b.post.date) - new Date(a.post.date));
}

module.exports = getBlogroll;
