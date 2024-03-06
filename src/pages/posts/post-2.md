---
layout: ../../layouts/MarkdownPostLayout.astro
title: "Math Notes"
pubDate: 2024-02-25
description: "This is a Math Notes test page"
author: "Doppelter Espresso"
---

_Testing LaTeX support and setup for future notes_

## A Growing Square

As the length of the square increases at 1 meter/second, its area grows faster the bigger it gets.

First, we'll write a function which models the area of the square:

$$
\large
A(x) = x^2
$$

The graph of the area of the growing square is a **parabola**

As time elapses, the area of the square increases as we increase the side length. We'll use $\Delta A$ to refer to the change in area and $\Delta x$ to refer to the change in side length.

When the side length increases from 1m to 2m, $\Delta A = 3m^2$ .
This is the slope of the line connecting the points:

$$
\large
\frac{\Delta A}{\Delta x} = \frac{4-1}{2-1} = 3
$$

As the square's sides increase at a constant rate, its area increase _faster_.

The slope of each line $\frac{\Delta A}{\Delta x}$ represents the _average rate of change_ of the area between each value.

The lines connecting two points on a curve is called a **secant line**

## Rate of change in an instant

To represent when $x$ is 1, we draw a line which touches the curve only at $(1,1)$ and has the exact slope of the curve at that point. This line is called a **tangent line**.

In order to find the slope of the tangent line - and the instantaneous growth rate of the square - we'll need a new technique:
