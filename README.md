# mariobasic-n7

**My personal website built with Phel.**

## Summary

My initial idea was to use Phel on the backend and Rescript on the frontend. I tried to build the backend to match the previous website (n6) which was built with Laravel. Routing, global middleware, validation, logging, mail, CSRF protection, configs, partials and layouts are all inspired by Laravel. **It took me around 14 days to complete this website (3-6.3.2021 to 20-21.3.2021).** Since I spent a whole bunch of time implementing backend features, when I came to the point of dealing with Javascript I decided to stick to the already existing javascript code from the previous website, but with improvements to the tooling (prettier, eslint, webpack, babel, prop-types) and data handling. I still want to switch from Javascript to something else, but that will probably have to be in the future. Recently, I have started learning about F# and Fable/Feliz and that got me questioning using Rescript on the frontend. Also there are other options like Elm or Dart. ~~Can't really decide.~~ _Decided to go with F#/Fable. See update bellow for more details._

## Phel-lang "review"

Working with Phel was very fun and an interesting mind flex. The concept that code is data is mind blowing. This is my first encounter with a lisp inspired language and a functional language. The language has everything needed for rapid development. The language comes with support for the whole PHP ecosystem. It has testing and formatting integrated, and comes with a REPL in which one can quickly prototype functions. The only downside to the language at this point is its speed. I haven't done any concrete metrics, but when you visit the website you will feel the load times. I have talked with the language author and he knows about the issue and is working on a "compile" feature which will make the language as fast as PHP itself. Considering that the language is version 0.2.0, I can't wait for it to reach a stable release.

## Personal information

This repository contains the source code for my personal website. The source code is publicly available for educational and informative purposes, but is given without any license because it contains my personal data and information. I do not grant any permissions for the source code except reading the source code for educational or informative purposes. I really wanted to keep the original development commit log, but I have accidentaly commited a license file at some point, which gave all permissions to my personal data. I know that there are ways of removing that one file from history, but it was much simpler to just create a new repository and copy the files over.

## Future improvements

In the future I plan on adding missing tests and replacing Javascript with something else. Initially, I have started with simple tests for pages and partials, but then I got busy with implementing features and finishing the website, so the tests fell behind.

**Update 27.04.2021 F#/Fable**

I've rewritten Javascript with F#/Fable. After reading about F# and F#/Fable, comparing it with Rescript and Elm, and trying to find a project to experiment with it I have decided to use Fable and write Javascript with F#. My goal was to go all in and not write a single line of javascript. **It is all F# now 100%.** The code that I wrote follows the same structure as the JS code as much as possible. This was my plan so that it is easier for me to view differences. Parts of code could have been written better if I did not follow the code structure from JS as much.

Since I was/am new to the language I had to figure out a lot of stuff including the tooling, the ecosystem, the syntax, the libraries. The documentation for Fable could be better. There are so many options for everything. I had to find a React library, a JSON library and figure out how to do HTTP requests. There were times where I almost gave up on the F#/Fable rewrite.

For archive purposes I've kept the original JS files in the source code so that I can compare the syntax and code in the future.

## F# "review"

Originally I have wanted my first F# project to be a backend project, like a simple API or something, but since I wanted to replace Javascript with something I gave F# a chance. I do not regret it. The language is very beautiful. It's syntax is similar to LISP at times. It's immutable but can be mutable, it's functional but can be object oriented, it's strongly typed but most of the times it feels like a dynamic language because of type inference, it's what almost every new language these days wants to be, but is actually around 10 years old. A gem. Writing F# is fun and different than writing JS. Most of the time I was in my code editor, "adjusting" types and making the compiler happy. I would open the browser just to verify that it works after evertyhing compiles. When in case of JS I would write a line of code and then refresh the page in the browser to make sure that it runs or that I gave the correct parameter to a function etc. Maybe this is why Typescript is so loved these days.


## TODO

- [ ] Write tests for stuff.

The code in `src/helpers.phel` should be somewhere else. Maybe in Phel (extract-data-from-request) or converted to a public function in mabasic/phel-json library (encode-value).

## Requirements

- PHP 8
- Node.js v14.16.0

## Quickstart

```bash
cp .env.example .env
composer install
npm install
npm run fable-start
npm run watch
php -S localhost:8000 -t public/
```

## Javascript builds

- `npm run dev` - for generating a development build once.
- `npm run prod` - for generating a production build once.

## Formatting and linting

```
vendor/bin/phel fmt src/
vendor/bin/phel fmt tests/
npx prettier --write .
npx eslint resources
```

## F# 

- `.config/dotnet-tools.json` - Holds tools (fable) which are then available by using `dotnet fable watch resources/js`
- `Nuget.config` - No clue what this does. This is the comment that came with it: "This clears Nuget configuration in the machine to avoid conflicts".
- `resources/js/App.fsproj` - Holds the reference to all dotnet packages used and F# files that are included/compiled in the solution.