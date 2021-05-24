---
title: "Ulauncher Extension for Laravel Documentation"
author: "Mario Bašić"
date: "2019-09-07"
excerpt: "How I made Ulauncher extension for quick access to the Laravel documentation."
---

I've created an extension for [Ulauncher - Application launcher for Linux](https://ulauncher.io/) which enables you to open Laravel documentation on a specific page in two steps and by using just your keyboard. You can view the extension on the [Ulauncher extensions website](https://ext.ulauncher.io/-/github-mabasic-ulauncher-laravel) or view the source code on [GitHub](https://github.com/mabasic/ulauncher-laravel). The idea came to me while I was preparing to work on a Laravel project. I wanted to open Laravel docs. Usually, what I do is open my browser, open new tab `ctrl+t`, type `!laravel routing` and press Enter. 

This works because I use [DuckDuckGo](https://duckduckgo.com/) as my default search engine and it has a feature called [bangs](https://duckduckgo.com/bang). There is a "bang" called `!laravel` which opens the Laravel website for you. If you type `!laravel routing` it will open the documentation page for routing. Currently it always redirects to the documentation for Laravel version `5.8` (Latest version `6.0` at the time of writing this post), but I think that they update it as the new version is released. Because I use Ulauncher for launching applications I [searched for an extension](https://ext.ulauncher.io/) to do just this. There wasn't one, so I decided to created one 😊.

## Overview

Once you install this extension, just start Ulauncher `ctrl+space` and type: `l`. That will start the extension.

![Command](/content/posts/2019-09-07-ulauncher-laravel-extension/command.png)

From there you can type the slug of the documentation page you want to read like so: `l routing` and press Enter. That will open your browser to the routing page for the latest version of Laravel.

![Default Laravel Version](/content/posts/2019-09-07-ulauncher-laravel-extension/default.png)

If you want a specific Laravel version just type: `l 5.8/routing` and press Enter.

![Specific Laravel Version](/content/posts/2019-09-07-ulauncher-laravel-extension/specific.png)

You can also just type `l` and press Enter. That will open the documentation on the default page.

## Installation

Open ulauncher preferences window -> extensions -> add extension and paste the following url:

```
https://github.com/mabasic/ulauncher-laravel
```

You are ready to go.