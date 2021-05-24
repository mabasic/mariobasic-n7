---
title: "Redirect domains using NGINX"
author: "Mario Bašić"
date: "2020-01-02"
excerpt: "You need to have valid SSL certificates for the domains that are being redirected, and the domain to which you are redirecting to."
---

**After struggling for a day to figure out what needs to be done for this to work, I decided to write it all down in case that I need it again in the future.**

Recently, I have decided to rebrand myself (my business) from Laravelista to just my name (**Mario Bašić** | MarioBasic). The reason behind this was that I am not a big company/agency/studio which represents a lot of people, I am just myself, a full stack web developer/programmer/IT manager/engineer.

> I wanted to brand **Super Mario**, but that was already taken ;)

## Issue

For laravelista I own two domains: `laravelista.com` and `laravelista.hr`. Both domains have good SEO rankings and a lot of links linking back to them. I did not want to lose that and because of that I decided to permanently redirect those domains to my new domain: `mariobasic.com`.

I configured a new server (This is a whole other topic) and configured:

- my website at `mariobasic.com` (http redirect to https) and
- my blog at `blog.mariobasic.com` (http redirect to https) with Nginx.

> I am using Let's Encrypt service for obtaining SSL certificates.

Then I added redirects from my old domains (See nginx cnfs bellow):

- HTTP\HTTPS `laravelista.com`, `www.laravelista.com`, `laravelista.hr`, `www.laravelista.hr` -> `mariobasic.com`
- HTTP\HTTPS `blog.laravelista.com`, `blog.laravelista.hr` -> `blog.mariobasic.com`

`laravelista.cnf`:

```
server {
    listen 80;
    listen [::]:80;

    server_name laravelista.hr www.laravelista.hr laravelista.com www.laravelista.com;
    rewrite ^/(.*)$ https://mariobasic.com/$1 permanent;
}

server {
    listen 443;
    listen [::]:443;

    server_name laravelista.hr www.laravelista.hr laravelista.com www.laravelista.com;
    rewrite ^/(.*)$ https://mariobasic.com/$1 permanent;
}
```

`laravelista-blog.cnf`:

```
server {
    listen 80;
    listen [::]:80;

    server_name blog.laravelista.hr blog.laravelista.com;
    rewrite ^/(.*)$ https://blog.mariobasic.com/$1 permanent;
}

server {
    listen 443;
    listen [::]:443;

    server_name blog.laravelista.hr blog.laravelista.com;
    rewrite ^/(.*)$ https://blog.mariobasic.com/$1 permanent;
}
```

A few quick tests:

- http://laravelista.com -> https://mariobasic.com **OK**
- http://www.laravelista.com -> https://mariobasic.com **OK**
- http://laravelista.hr -> https://mariobasic.com **OK**
- http://www.laravelista.hr -> https://mariobasic.com **OK**

- http://blog.laravelista.com -> https://blog.mariobasic.com **OK**
- http://blog.laravelista.hr -> https://blog.mariobasic.com **OK**

This seemed fine to me at the time, but after an hour later I've discovered that my HTTPS redirects do not work at all.

 - https://laravelista.com -> https://mariobasic.com **FAIL**
 - https://www.laravelista.com -> https://mariobasic.com **FAIL**
 - https://laravelista.com -> https://mariobasic.com **FAIL**
 - https://www.laravelista.com -> https://mariobasic.com **FAIL**

 - https://blog.laravelista.com -> https://blog.mariobasic.com **FAIL**
 - https://blog.laravelista.hr -> https://blog.mariobasic.com **FAIL**

When I would use HTTPS on any of those domains (eg. https://laravelista.hr) I would get `NET::ERR_CERT_COMMON_NAME_INVALID`. In short, it meant that the certificate for that domain (in this case laravelista.hr) is invalid.

> Of course it is invalid because there is none.

## Solution

After googling (duckduckgoing) for the rest of the day for a **simple** solution, I learned a few things.

1. SSL verification happens before any redirect can occur. Meaning that an invalid SSL certificate would would throw an error, like it did.
2. Using your web server (Nginx in this case) is the simplest method of solving this.

To fix this, this is what I did:

Without changing any configuration files or anything at all, I rerun `certbot --nginx` but with "old" domains included this time. In my case this was:

```
sudo certbot --nginx -d mariobasic.com -d www.mariobasic.com -d laravelista.com -d www.laravelista.com -d laravelista.hr -d www.laravelista.hr
```

I appended both domains (.com and .hr) with and without the `www` part. After accepting to expand the certificate with new domains (the original certificate had only mariobasic.com and www.mariobasic.com), I accepted to redirect HTTP to HTTPS for all. It was a success. Certbot had automatically configured my redirects to include SSL certificates and everything just works.