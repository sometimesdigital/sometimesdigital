---
title: Modding a Kobo Libra 2
description: All the mods I added to my grandma's new Kobo Libra 2 before gifting it to her for Christmas
date: 2023-12-15T19:20:00+01:00
comments: true
---

I'm writing down all the mods I added to my grandma's new Kobo Libra 2 before gifting it to her for Christmas, mostly for my own future reference, but also hoping that it may be useful for other people too.

### [KoboCloud](https://github.com/fsantini/KoboCloud)
I added KoboCloud and configured it to synchronize with Google Drive.

### [NickelMenu](https://pgaskin.net/NickelMenu/)
I set the "parental controls" on so that the Kobo Store (the Discover tab) isn't in the menu anymore (there aren't too many Polish books there). That way there's also more space in the navigation bar, so I put the NickelMenu there, with some games and the internet browser. I disabled the automatic updates because I don't want them to overwrite the changes, but I added the option to rescan for books in the menu and it seems to work well with KoboCloud. 

I changed the menu icon to [this one with cards](https://icons8.com/icon/571/cards). The size `50x50` looks good. It can be saved in the `nm` folder next to the config, but has to be hidden (the name has to start with a dot). It can then be accessed as `/mnt/onboard/.adds/nm/.icon.png`.

Here's my config (the original file has the labels written in Polish). It's really nice that everything can be modified, and that the features are translated too.

```text
menu_item    :main                  :Load books         :nickel_misc        :rescan_books_full
menu_item    :main                  :Sketchpad          :nickel_extras      :sketch_pad
menu_item    :main                  :Solitaire          :nickel_extras      :solitaire
menu_item    :main                  :Sudoku             :nickel_extras      :sudoku
menu_item    :main                  :Blocks             :nickel_extras      :unblock_it
menu_item    :main                  :Internet           :nickel_browser     :https://www.google.com/
menu_item    :browser               :Back               :nickel_misc        :home
experimental :menu_main_15505_icon  :/mnt/onboard/.adds/nm/.icon.png
experimental :menu_main_15505_label :Other
```

NickelMenu is wild. You can launch shell commands. I considered setting up SSH but I feel like realistically that won't help much with troubleshooting. I'm hoping to make everything as easy to use as possible and minimise any likelihood of anything breaking.

### Dictionaries
- [Polish dictionary](https://zabałaganionemiejsce.pl/cc-sjp/)
- [English to Polish](https://download.wikdict.com/dictionaries/kobo/)

### Fonts
I added [Libertinus Serif](https://github.com/alerque/libertinus). It really looks so nice. I added some other ones too, just in case, including Bookerly. The first search results for downloading Bookerly look really sketchy, but it turns out you can [download it from Amazon on their developer portal](https://developer.amazon.com/en-US/alexa/branding/echo-guidelines/identity-guidelines/typography). They don't mention the font name on the page but it is included in the set.

I did also install [Atkinson Hyperlegible](https://brailleinstitute.org/freefont) and I was surprised how much of a difference it made.

### Screensaver
I chose this [pretty picture of flowers](https://www.pexels.com/photo/delicate-flowers-in-tilt-shift-lens-8445490/). I cropped it to `1264×1680`, and put it in `.kobo/screensaver`. It only works with the "Show current read" and "Show book covers full screen" options checked on, and only when at least one book is in progress.

---

I might edit this post if I add more things. One thing that I'd still like to change is the system font. It doesn't support Polish characters, so all ęs and ąs in the navigation look really out of place. I haven't figured out how to change it. It seems to only support basic Latin characters, so I saw some people online from different countries complaining about the same thing.
