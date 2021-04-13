# mariobasic-n7

**My personal website built with Phel.**

"n" in "n7" stands for the **number** of times that I have created a new personal website for myself. Meaning that this is the seventh time as I recall.

## Summary

My initial idea was to use Phel on the backend and Rescript on the frontend. I tried to build the backend to match the previous website (n6) which was built with Laravel. Routing, global middleware, validation, logging, mail, CSRF protection, configs, partials and layouts are all inspired by Laravel. **It took me around 14 days to complete this website (3-6.3.2021 to 20-21.3.2021).** Since I spent a whole bunch of time implementing backend features, when I came to the point of dealing with Javascript I decided to stick to the already existing javascript code from the previous website, but with improvements to the tooling (prettier, eslint, webpack, babel, prop-types) and data handling. I still want to switch from Javascript to something else, but that will probably have to be in the future. Recently, I have started learning about F# and Fable/Feliz and that got me questioning using Rescript on the frontend. Also there are other options like Elm or Dart. Can't really decide.

## Phel-lang "review"

Working with Phel was very fun and an interesting mind flex. The concept that code is data is mind blowing. This is my first encounter with a lisp inspired language and a functional language. The language has everything needed for rapid development. The language comes with support for the whole PHP ecosystem. It has testing and formatting integrated, and comes with a REPL in which one can quickly prototype functions. The only downside to the language at this point is its speed. I haven't done any concrete metrics, but when you visit the website you will feel the load times. I have talked with the language author and he knows about the issue and is working on a "compile" feature which will make the language as fast as PHP itself. Considering that the language is version 0.2.0, I can't wait for it to reach a stable release.

## Personal information

This repository contains the source code for my personal website. The source code is publicly available for educational and informative purposes, but is given without any license because it contains my personal data and information. I do not grant any permissions for the source code except reading the source code for educational or informative purposes. I really wanted to keep the original development commit log, but I have accidentaly commited a license file at some point, which gave all permissions to my personal data. I know that there are ways of removing that one file from history, but it was much simpler to just create a new repository and copy the files over.

## Future improvements

In the future I plan on adding missing tests and replacing Javascript with something else. Initially, I have started with simple tests for pages and partials, but then I got busy with implementing features and finishing the website, so the tests fell behind.


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
php -S localhost:8000 -t public/
```

## Development

```
npm run dev
npm run prod
npm run watch
```

## Formatting and linting

```
vendor/bin/phel fmt src/
vendor/bin/phel fmt tests/
npx prettier --write .
npx eslint resources
```
