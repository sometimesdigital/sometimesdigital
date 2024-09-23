---
title: Installing the Canon EOS Utility without the CD (but with lies)
description: Notes on connecting my camera to my computer
date: 2024-08-15T18:50:00+02:00
tags: tech
---

My second-hand Canon camera tagged all my photos with the name of the previous owner. The author name cannot be changed in the camera settings – the camera has to be connected with a mini USB cable to a computer that runs the [Canon EOS Utility](https://www.canon-europe.com/support/consumer/products/cameras/eos/eos-1200d.html?type=software&detailId=tcm:13-1171868). I am sure that I have at least one mini USB cable somewhere in my apartment, but I couldn’t find it, so before I surrendered and ordered a new one, I had used this command to remove author info from my photos:

```sh
exiftool -By-line= -Artist= -Creator= . -overwrite_original
```

[ExifTool](https://exiftool.org/) is a Perl program for reading, writing, and manipulating image, audio, video, and PDF metadata. It has been maintained by the same person [since 2003](https://exiftool.org/ancient_history.html).

[The Canon EOS Utility can be downloaded from the Canon website](https://www.canon-europe.com/support/consumer/products/cameras/eos/eos-1200d.html?type=software&detailId=tcm:13-1171868), but there’s a catch: you can only download an updater that checks if an older version of the program has already been installed from a CD. I guess that is supposed to suppress the resale of stolen cameras, but I think it’s more likely that the previous owner of my camera just threw the CD away. Even if I had the CD, I would then also have to find a CD drive, another thing that I probably own but don’t know where it might be.

But, as I learned from [this YouTube video](https://www.youtube.com/watch?v=VTLISryqbSc), the Canon software can be lied to. The video says to add an empty key with the name of the program in the Windows Registry[^1]. Somehow that works. What else can I trick my computer into believing this way?

After doing all that I also found a link for the [EOS Digital Solution Disk Software 29.0A for Windows (for users who cannot use the bundled CD)](https://www.canon-europe.com/support/consumer/products/cameras/eos/eos-1200d.html?type=software&detailId=tcm:13-1156620&productTcmUri=tcm:13-1142579), which is supposed to contain the EOS Utility. I haven't tested if it works. Either way, the solution with the Registry key seems more fun. 

[^1]: `HKEY_LOCAL_MACHINE > SOFTWARE > WOW6432Node > CANON > EOS Utility`