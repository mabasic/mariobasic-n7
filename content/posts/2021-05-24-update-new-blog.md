---
title: "Update: New Blog"
author: "Mario Bašić"
date: "2021-05-24"
excerpt: "I've moved my blog from Gatsby.js to this website."
---

I've moved my blog from Gatsby.js to this website. In order to achive this I had to implement named route paramaters in the router, implement reading front matter/markdown from files and converting to html, implement better active route detection (laravelista/Ekko logic) and other related stuff. The whole process was simple, but I had to deal with regex and that was painful. Every time I have to lookup what each symbol means. I have added a bunch of tests and updated the application to Phel 0.3.2 which bring new data structures and fixes.
