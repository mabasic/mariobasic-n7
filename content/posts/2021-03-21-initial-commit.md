---
title: "Initial Commit"
author: "Mario Bašić"
date: "2021-03-21"
excerpt: "This blog post contains what was previously written in the README.md."
---

My initial idea was to use Phel on the backend and Rescript on the frontend. I tried to build the backend to match the previous website (n6) which was built with Laravel. Routing, global middleware, validation, logging, mail, CSRF protection, configs, partials and layouts are all inspired by Laravel. **It took me around 14 days to complete this website (3-6.3.2021 to 20-21.3.2021).** Since I spent a whole bunch of time implementing backend features, when I came to the point of dealing with Javascript I decided to stick to the already existing javascript code from the previous website, but with improvements to the tooling (prettier, eslint, webpack, babel, prop-types) and data handling. I still want to switch from Javascript to something else, but that will probably have to be in the future. Recently, I have started learning about F# and Fable/Feliz and that got me questioning using Rescript on the frontend. Also there are other options like Elm or Dart. ~~Can't really decide.~~ _Decided to go with F#/Fable. See update bellow for more details._

## Phel-lang

Working with Phel was very fun and an interesting mind flex. The concept that code is data is mind blowing. This is my first encounter with a lisp inspired language and a functional language. The language has everything needed for rapid development. The language comes with support for the whole PHP ecosystem. It has testing and formatting integrated, and comes with a REPL in which one can quickly prototype functions. The only downside to the language at this point is its speed. I haven't done any concrete metrics, but when you visit the website you will feel the load times. I have talked with the language author and he knows about the issue and is working on a "compile" feature which will make the language as fast as PHP itself. Considering that the language is version 0.2.0, I can't wait for it to reach a stable release.

## F#/Fable

Originally I have wanted my first F# project to be a backend project, like a simple API or something, but since I wanted to replace Javascript with something I gave F# a chance. I do not regret it. The language is very beautiful. It's syntax is similar to LISP at times. It's immutable but can be mutable, it's functional but can be object oriented, it's strongly typed but most of the times it feels like a dynamic language because of type inference, it's what almost every new language these days wants to be, but is actually around 10 years old. A gem. Writing F# is fun and different than writing JS. Most of the time I was in my code editor, "adjusting" types and making the compiler happy. I would open the browser just to verify that it works after evertyhing compiles. When in case of JS I would write a line of code and then refresh the page in the browser to make sure that it runs or that I gave the correct parameter to a function etc. Maybe this is why Typescript is so loved these days.

## Future improvements

In the future I plan on adding missing tests and replacing Javascript with something else. Initially, I have started with simple tests for pages and partials, but then I got busy with implementing features and finishing the website, so the tests fell behind.

