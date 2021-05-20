---
title: "Lumen vendor:publish"
author: "Mario Bašić"
date: "2019-10-13"
excerpt: "After receiving multiple requests to add Lumen 6 support, I realized that people are still using this package."
---

Back in 2015. I put together a small helper package for Lumen which enabled me to use `php artisan vendor:publish` in my Lumen application to publish other packages config files.

**By default Lumen has no way of publishing files that come with service providers to this day.**

It was initially built for I think Lumen 5.3. I stopped using Lumen short after that and this package went mostly unmaintained. A few people sent PRs for newer Lumen releases and that is it.

At the time when Lumen 6 was released I received multiple requests to add Lumen 6 support. I've even received emails, and you know that when you get an email for something like this it means that people really need it.

## Backward compatibility

Before adding Lumen 6 support and being done with it, I took a step back and put some thought in it.

> This package contains a single command borrowed from the Laravel framework that enables you to use `php artisan vendor:publish` in your Lumen application.

This command is a direct copy from Laravel, and so I decided to make this package releases follow Lumen releases. This enables me to just copy the file from Laravel at the specific release and update the dependencies if needed. I did this for all Lumen versions starting from 5.1.

Use this command to get a compatible version of this package for your Lumen application:

```
composer require laravelista/lumen-vendor-publish=^6.0
```

**Hint**: Replace `6.0` with the version of your Lumen application or just use:

```
composer require laravelista/lumen-vendor-publish
```

And it will automatically detect the latest possible version compatible with your Lumen aplication.

