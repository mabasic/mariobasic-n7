# mariobasic-n7

**My personal website built with Phel.**

"n" in "n7" stands for the **number** of times that I have created a new personal website for myself. Meaning that this is the seventh time as I recall.

## TODO

- [ ] The code in `src/helpers.phel` should be somewhere else. Maybe in Phel (extract-data-from-request) or converted to a public function in mabasic/phel-json library (encode-value).

## Requirements

- PHP 8.1
- Node.js v18.17.1
- pnpm

## Quickstart

```bash
# php
composer install

# node
pn install

# Use this to compile the phel application to php.
composer build

# dev mode
PHEL_MODE=slow php -S localhost:8000 -t public/

# prod mode
composer build && PHEL_MODE=fast php -S localhost:8000 -t public/
```

For managing SCSS:

```bash
# One time scss -> css.
pn css-dev
# Watch for changes.
pn css-dev-watch
# Compile for production.
pn css-prod
# Lint scss code.
pn css-lint
```

Run tests with:

```
composer test
```

## Code Formatting

```bash
vendor/bin/phel format 

# or

composer format
```

## Build for production

Compile PHEL to PHP.

```bash
vendor/bin/phel build --no-cache

# or

composer build
composer build:no-cache
```

verify that `index.php` has the right code uncommented (fast/slow).

# Icons

This project uses [bootstrap-icons](https://icons.getbootstrap.com/). The icons are copied (svg) one by one to `resources/svg/icons/*.svg`.

## License and disclaimer

This repository contains the source code for my personal website. The source code is publicly available for educational and informative purposes, but is given without any license because it contains my personal data and information. I do not grant any permissions for the source code except reading the source code for educational or informative purposes. I really wanted to keep the original development commit log, but I have accidentaly commited a license file at some point, which gave all permissions to my personal data. I know that there are ways of removing that one file from history, but it was much simpler to just create a new repository and copy the files over.

