---
title: "Programming Mojo in Helix"
author: "Mario Bašić"
date: "2023-10-22"
excerpt: "I've submitted a PR that adds support for the Mojo programming language to the Helix editor."
---

## The PR

[feat: adds mojo language support #8583](https://github.com/helix-editor/helix/pull/8583)

In the hyperlink above you can find the code and instructions for adding Mojo support to the Helix editor; both the latest master branch and the 23.05 version.

## A bit of history

Long time ago in this galaxy I have programmed in Python. I have even made a few simple programs and a web application. At that time Python 3 was just emerging and the community was divided. I have programmed mostly in Python 2, and very little in Python 3.

At the time for some reason I have found PHP to be easier to work with and have never looked back since. Even today, if I had to decide between the two languages to build something, I would choose PHP over Python just because I have more experience with PHP. 

But the Python syntax stuck with me. That is why I think that F# has the most beautiful syntax combined with static typing and performance of the dotnet. Scala comes in second place because lately there have been improvements in dropping the braces where possible. Before those changes in Scala 3, Scala was not very beautiful in my opinion.

I have experience writing programs using C, C++, C#, Go, and many others. The reason why I like Go lang is because it reminds me of C, which I have enjoyed as being my first programming language.

## Mojo 🔥 — the programming language for all AI developers.

> Mojo combines the usability of Python with the performance of C, unlocking unparalleled programmability of AI hardware and extensibility of AI models.

So why learn [Mojo](https://www.modular.com/mojo)? Why not. If you want to learn something just for the experience of learning it, just do it. I am interested in Mojo because of the following things:

1. I am looking to **switch to something more demanding than writing web applications**.

	In the past I have considered switching to Elixir and [Nx](https://github.com/elixir-nx) for machine learning and stuff, but I have never really had a need for something like that. I like Elixir and would love to build something with it, but I just can't find a project fit for it. The Elixir community is great and Elixir has many awesome projects and tools to work with.

	If I have to refactor one more application to make use of server side rendering and built-in data fetching I would go nuts :). For context, lately I have been working with huge Next.js apps and refactoring whole codebases to reduce the number of requests, increase speed, provide better DX and make projects maintanable. I have managed to reduce the number of requests for a cluster from 700 req/s to 300 req/s and have done so while also reducing JS bundle size and making applications feel faster and have better metrics.

2. Using Python and not being ridiculed of it being a slow language etc.

	Now this is something that I have never experienced first hand. Web applications are not that demanding unless you have high traffic and huge number of requests. Usually I don't build high traffic websites :( so early optimizing for something like that and going with a blazingly fast language (Rust) seems like an overkill to me.

I really like the Python syntax and the idea that a language uses that syntax, has static and dynamic typing, runs fast as C++ and is memory safe as Rust, got me interested.

**If I can also do some AI stuff with it and gain some experience, great!**

## Helix editor

I write programs using Helix only these days. I have used Vi in college and it has stuck with me for terminal use on servers only. A few months (I can't remember when exactly) I started using Helix and I got addicted to it. I really think that its mental model is better than Vim. First select text then manipulate it, the opposite of what Vim does and that is choose the action first and then choose on what text to apply it. I don't want to look the correct phrasing now, but If you want to learn more go read up on Kakoune. Helix is based on Kakoune but comes with great defaults out of the box and is a complete IDE in a sense. Just install it and use it as is.

I'm hoping that my next blog post will be something about Mojo and AI. Wish me luck.
