---
title: Putting MicroPython on STM32 Nucleo F767ZI
date: 2022-03-15
---

(several ways to do this, but here's one with the STM32CubeProgrammer and Windows)

1. [Download the `.hex` file.](https://micropython.org/download/NUCLEO_F767ZI/)
2. Connect the board through the ST-Link USB.
3. Open STM32CubeProgrammer, choose ST-Link and *Connect*.
4. In *Erasing & Programming* choose the `.hex` file path, don't skip flash erase, and *Start Programming*.
5. If everything is okay, connect the second USB port. Two devices should be listed (`NOD_F767ZI` and `PYBFLASH`).