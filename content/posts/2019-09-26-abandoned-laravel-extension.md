---
title: "Abandoned Laravel Extension"
author: "Mario Bašić"
date: "2019-09-26"
excerpt: "I've realized that there is no need for this extension because you can use Ulauncher shortcuts instead."
---

At the start of this month, I've created an extension for [Ulauncher - Application launcher for Linux](https://ulauncher.io/) which enables you to open Laravel documentation on a specific page in two steps and by using just your keyboard. It was great and I've found it very useful, since almost everyday, a couple of times a day, I would visit the Laravel documentation. Because of my frequent visits to the documentation website I know a lot of URLs by memory. My knowledge of the documentation URLs, and having this extension installed made accessing the documentation very fast.

I've made this extension to work the same as the **Google search shortcut** in Ulauncher.

> Type letter `g `, enter query and press enter.

My initial idea was to recreate that but for Laravel documentation. Little did I know that I could have just used Ulauncher shortcuts to achieve the same result.

![Ulauncher shortcuts](/content/posts/2019-09-26-abandoned-laravel-extension/shortcuts-default.png)

## Use shortcuts instead of this extension

Click on the "Add shortcut" button and then enter the information like you can see in the image bellow

![Ulauncher add shortcut for Laravel](/content/posts/2019-09-26-abandoned-laravel-extension/add-shortcut.png)

or in the table bellow.

| Field                 | Value                       |
|-----------------------|-----------------------------|
| Name                  | Laravel                     |
| Keyword               | `l`                         |
| Query or Script       | https://laravel.com/docs/%s |
| Default search        | false                       |
| Run without arguments | false*                      |

_*to achieve the same result as the extension you would need to check the "Run without arguments" box, but when I do that it navigates me to this URL `https://laravel.com/docs/%s`. This could be a bug in Ulauncher._

## Looking forward

Because we can recreate the extension functionality using shortcuts, there is no need for this extension at the moment. But this extension can be a starting ground for adding more functionality to it like:

- dynamic docs search with links to pages, not typing the part of the URL like it is now. I think that the alfred extension does this already.
- links to documentation for other applications in the laravel ecosystem like lumen, nova, spark...

Until I add more features to the extension or somebody submits a PR, this extension will not be actively worked upon.