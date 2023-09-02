---
title: "Update: New design and upgrades"
author: "Mario Bašić"
date: "2023-09-02"
excerpt: "After being happy for a long time with this website, a few things started bothering me."
---

After being happy for a long time with this website, a few things started bothering me. 

## 1. 80kb JS for mobile menu hamburger and menu dropdowns

I was loading Bootstrap JS file which was 80kb heavy, just so that the dropdown menu would appear and that you can see the menu on mobile devices. I wrote a few lines of vanilla JS to solve this. This lead to another thing. I no longed needed rollup for this. I did not need it in the first place, but for sure I don't need it now. The JS code now is 4kb in size.

## 2. 200kb for Bootstrap/CSS

Again, I was loading the entire Boostrap scss. After some research I found that I can only include parts of bootstrap that I use. This cut down 50kb in size. I was considering rewrite the entire style in tailwind, but that would take me a long time, so I decided to work with what was already here. Because of the size of bootstrap I don't think that I will be using it again in my projects, but I find it to be very good in terms of having a base layer on which you can build upon. 

### Linting

When I was removing rollup and working with scss I noticed that I had this command `css-lint` in my package.json. After running it I found that there were some issues with my SCSS code. I fixed those, but after upgrading to the latest version of Bootstrap I also noticed that my website looks weird. I fixed that also.

## 3. Lighthouse score

Recently I have stumbled upon a tool with which you can fix those accessibiliy issues in lighthouse with contrast. After adjusting the lightness of few colors I have managed to achieve 100/100 score.

## NPM -> PNPM

After watching a video on youtube on benefits of using PNPM, I switched to it just to give it a try, and this project seemed perfect for that. So far so good.

## Updated documentation

I have updated the readme in three ways:
- moved progress/update content to blog posts (as this one) in order to keep it minimal and relevant
- updated instructions (quickstart) for working with this project
- moved important chapters closer to the top of the document

## New Design

I've made a few tweaks to get the minimal almost monochromatic experience which I was wanting for a long time. I've also implemented dark mode with automatic and manual mode.

## Phel 0.11.0

I've successfuly upgraded to the latest version of Phel after a few days of struggle.
