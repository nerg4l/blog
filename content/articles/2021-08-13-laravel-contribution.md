---
title: "Contribution: Laravel"
date: 2021-08-13T12:02:17+02:00
lastmod: 2021-08-26T10:14:37+02:00

categories: ["Contribution"]
tags: ["Laravel", "mailer", "proud"]
authors: ["László GÖRÖG"]
summary: "Let's talk about my contribution to Laravel 8.x."
---
In one of my Laravel based personal projects I use [mailgun] to send emails. Unfortunately, in some cases their service is not available in my region (EU). In the time of writing this article the most recent one in the EU was on Aug 2 for ~2 hours and the one before that was on May 29 for ~5 hours. You can check out all outage (orange) on their [incident history page][mailgun.incident-history].

In Oct 2020 I already had the idea to create a package which will use a different email sender when the application receives an invalid response from mailgun, but I kept postponing the project up until now. While looking into the solution I found out that [Swiftmailer] the package used by laravel to send emails already had this functionality. All I had to do is register `Swift_FailoverTransport` as a new email transport.

The whole implementation was just one file with less than 60 lines of code. This got me thinking, why not add this to the core framework. I quickly created a PR which adds the same functionality to Laravel 8.x core. The PR was accepted and merged in 24 hours.

- The library I originally planned (ARCHIVED): https://github.com/coding-socks/laravel-mail-failover.
- The accepted PR: https://github.com/laravel/framework/pull/38344

Now all I have to do is wait for the next minor version, update Laravel in my project, and enjoy the benefits of `Swift_FailoverTransport`.

[mailgun]: https://www.mailgun.com/
[mailgun.incident-history]: https://status.mailgun.com/history
[Swiftmailer]: https://github.com/swiftmailer/swiftmailer
