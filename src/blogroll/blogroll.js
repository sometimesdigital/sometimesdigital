const dayjs = require('dayjs');
const Parser = require('rss-parser');
const parser = new Parser({ timeout: 5000 });
const blogroll = require('./blogroll.json')

const getBlogroll = async () => {
  const feeds = [];

  for await (const { url } of blogroll) {
    let feed;

    try {
      feed = await parser.parseURL(url);
    } catch(e) {
      continue;
    }

    const post = feed.items.sort((a, b) => new Date(b.isoDate) - new Date(a.isoDate))?.at(0);

    const entry = {
      title: feed.title.trim(),
      link: feed.link.trim(),
      post: {
        title: post.title.trim(),
        link: post.link.trim(),
        readableDate: dayjs(post.isoDate).format('MMMM D, YYYY'),
        isoDate: post.isoDate,
      }
    };
    console.log(entry)
    feeds.push(entry);
  }

  return feeds.sort((a, b) => new Date(b.post.isoDate) - new Date(a.post.isoDate));
}

module.exports = { getBlogroll };
