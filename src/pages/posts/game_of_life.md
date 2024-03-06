---
layout: ../../layouts/MarkdownPostLayout.astro
title: "Conway's Game of Life"
pubDate: 2024-03-04
description: "A showcase of Conway's Game of Life"
author: "Doppelter Espresso"
---

# About

I implemented [Conway\'s Game of
Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) using C and
[raylib](https://www.raylib.com/).

# Notes

In this program, there is a grid of **cells** with two possible states:
_live_ or _dead_. At every step of the simulation, each cell scans its 8
neighbors and changes in state according to the following rules:

1.  Any _live_ cell wih less than 2 neighbors _dies_
2.  Any _live_ cell with 2 or 3 live neighbors stays alive
3.  Any _live_ cell with more than 3 live neighbors also dies
4.  Any _dead_ cell with exactly 3 neighbors changes to _live_

These simple rules allow for very interesting interactions in the
simulation, depending on the initial _seed_ of the program, the initial
state of the grid.

---
