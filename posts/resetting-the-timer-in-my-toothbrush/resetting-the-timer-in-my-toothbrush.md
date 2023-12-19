---
title: Resetting the timer in my toothbrush 
description: It’s still good to use, I swear
date: 2023-12-19T16:12:00+01:00
comments: true
---
There is an NFC chip inside of my toothbrush head, and it counts the time. After 360 minutes of work it will signal that it needs to be replaced, even if it doesn’t really. It’s possible to reset the counter, by sending a message from a phone to the toothbrush head. [It’s all a little insane](https://kuenzi.dev/toothbrush/).

1. Scan the toothbrush head with the NFC Tools app. Copy the serial number.
2. Find the part number written on the bottom of the brush head.
3. Enter the data [into the password generator](https://nicjes.github.io/SonicareGenerator/) and copy the generated NFC command.
4. In NFC Tools, go to Other -> Advanced NFC Commands. Paste the command into the input and send it to the toothbrush head. 