---
title: Adding a Photo Stream to an Eleventy site
description: Fetching all my public photos from Flickr & putting them on my page
date: 2024-06-30T19:00:00+02:00
tags: eleventy
---

I added a [photo stream](/photos) to my site. That's how serious I am about my new hobby. For now, there aren't many photos there, but I'm going to be adding more. 

There are [several ways to do this](https://indieweb.org/photo_stream), but in my approach I'm not hosting the photos myself - I'm just fetching all my public photos from Flickr. The [API](https://www.flickr.com/services/api/) is nice, and there's a [recommended wrapper for Node](https://www.npmjs.com/package/flickr-sdk). The API returns up to 500 photo IDs in one request, which I'm then adding to Eleventy's [global data](https://www.11ty.dev/docs/data-global/).

Another approach would be to use RSS with [rss-parser](https://www.npmjs.com/package/rss-parser) and the RSS photo feed instead of an API to fetch images. That would be an option for other services that don't offer an API, like [Glass](https://glass.photo/highlights/profile-rss-feeds) or [500px](https://support.500px.com/hc/en-us/articles/204910987-What-RSS-feeds-are-available). [It is also possible with Flickr](https://www.flickr.com/services/feeds/docs/photos_public/) but the RSS feed returns only the last 20 photos.

#### 1. **Adding the images to global data**

The snippet below assumes that there are two [environmental variables](https://www.11ty.dev/docs/environment-vars/) in the `.env` config: `FLICKR_API_KEY` with the API key and `FLICKR_USER_ID` with the user ID. The photo image URL is constructed [according to the documentation](https://www.flickr.com/services/api/misc.urls.html).


```js
eleventyConfig.addGlobalData(
  "photostream",
  async () => {
    // the function addGlobalData runs with every re-build,
    // so it might be a good idea to add a check 
    // that doesn't make it run in development builds
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
```

#### 2. **Creating a photo stream page**

This uses [Eleventy's pagination](https://www.11ty.dev/docs/pagination/), with the `size` parameter controlling the number of photos displayed per page.

```njk
---
title: Photostream
pagination:
  data: photostream
  size: 10
---

{% raw %}{%- for photo in pagination.items %}
  <figure>
    <img alt="{{ photo.title }}" src="{{ photo.url }}" />
    <figcaption>{{ photo.title }}</figcaption>
  </figure>
{% endfor -%}

<nav class="pagination">
  {% if pagination.href.previous %}
    <a class="previous-page" href="{{ pagination.href.previous }}">
      Previous page
    </a>
  {% endif %}
  {% if pagination.href.next %}
    <a class="pagination next-page" href="{{ pagination.href.next }}">
      Next page
    </a>
  {% endif %}
</nav>{% endraw %}
```

I also added a layout for this page and some styling.
