---
title: Programming ATtiny with USBASP and Arduino IDE
description: Guide on how to program ATtiny with USBASP and Arduino IDE
date: 2022-03-15
comments: true
---

#### USBASP drivers
On Linux and MacOS this step should not be necessary. On Windows, install Zadig and install the **libusbK (v3.1.0.0)** driver (libusb-win32 (v1.2.6.0) did not work for me).

#### Connections
1. Enable the slow mode with a jumper (JP3).
2. Connect the USBASP to the ATtiny (bear in mind the orientation of the USBASP pinout, [check if it's not mirrored when using a ribbon cable](https://www.randseq.org/2018/08/hooking-up-usbasp-programmer-to-attiny85.html)).

``` markup
     USBASP                 
+--------------+             ATTINY    
|1 MOSI  VCC 10|         +------u------+
|              |         |1 RST   VCC 8|         10 (VCC) → 8 (VCC)
|2 GND    TXD 9|         |             |         1 (MOSI) → 5 (MOSI)
|              |         |2       SCK 7|         3 (RST)  → 1 (RST)
|3 RST    RXD 8|         |             |         4 (SCK)  → 7 (SCK)
|              |         |3      MISO 6|         6 (GND)  → 4 (GND)
|4 SCK    GND 7|         |             |         5 (MISO) → 6 (MISO)   
|              |         |4 GND  MOSI 5|
|5 MISO   GND 6|         +-------------+
+--------------+         
```
#### Arduino IDE setup

1. Go to `File → Preferences`. In *Additional Boards Manager URLs* paste: https://raw.githubusercontent.com/damellis/attiny/ide-1.6.x-boards-manager/package_damellis_attiny_index.json
2. Go to `Tools → Boards → Board Manager`. Search for *attiny* and install the boards.
3. In `Tools`, set `board`, `processor`, and `clock` to the values corresponding to the chip.
4. In `Tools`, set `programmer` to USBasp.

#### Troubleshooting
- 1 second delay results in an 8 second delay:
    * The device runs at 1 MHz instead of 8 MHz - go to `Tools → Burn Bootloader` to make it run at 8 MHz.