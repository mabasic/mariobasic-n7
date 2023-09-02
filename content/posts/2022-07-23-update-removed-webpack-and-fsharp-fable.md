---
title: "Update: Removed webpack and F#/Fable"
author: "Mario Bašić"
date: "2022-07-23"
excerpt: "I used F# to build the contact form on the start page because I wanted to try F#."
---

I used F# to build the contact form on the start page because I wanted to try F#. Since then I have started using F# whenever I can. My goal is to make a simple contact form with no JS. Phel renders html form, form submits and the user gets the response as html. Because of that I am removing F# from this repository. I have made a new tag called `fsharp-fable-start` where you can view the last working version of F#/Fable start page form.

Because of this I have moved away from webpack to using rollup for js and sass for css. I think that this is very simple now to maintain and there are no hacks involved.
