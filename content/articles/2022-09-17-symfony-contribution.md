---
title: "Contribution: Symfony"
date: 2022-09-1701:05:02+02:00
lastmod: 2022-09-1701:05:02+02:00

categories: ["Contribution", "Programming"]
tags: ["Symfony", "BinaryFileResponse", "PHP"]
authors: ["László GÖRÖG"]
summary: "Let's talk about my contribution to Symfony."
---
In 2018 I worked on a [Laravel] based project where during download a temporary file was created which had to be deleted after it was downloaded. Laravel relies on a lof of [Symfony] component and can handle any implementation of `Symfony\Component\HttpFoundation\Response`. This seemed really handy because `Symfony\Component\HttpFoundation\BinaryFileResponse` has a `deleteFileAfterSend` method. This was running for a while but suddenly the operators got in touch because the disks were slowly filling up. As it turns out, `deleteFileAfterSend` is only called when the download completes but in case the connection is aborted the execution stops and `deleteFileAfterSend` never gets called.

While investigating, I found [symfony/symfony#27538][issues-27538] bug report. In that ticket the proposed solution was to use [`ignore_user_abort` function][ignore_user_abort], but during testing, I noticed high CPU load and the site started to respond slower and slower. After some more digging, it turned out inside `BinaryFileResponse` [`stream_copy_to_stream` function][stream_copy_to_stream] copies the temporary file to the response file descriptor and when user abort is ignored it does not terminate the execution until it finishes the copy. I reported my finding in that issue and commented with an optional fix but at that moment in time I wasn't confident enough to open a pull request (PR).

There was not much activity on the ticket for a long time. I played some ping-pong with the archive bot and in 2021 I tried to escalate things. I was asked to create a PR and I opened [symfony/symfony#42033][pr-42033] with my solution from 2018. A year passed, and I tried to escalate again but this time the stars aligned, and my PR from previous year was merged.

[Laravel]: https://laravel.com/
[Symfony]: https://symfony.com/
[ignore_user_abort]: https://www.php.net/manual/en/function.ignore-user-abort.php
[stream_copy_to_stream]: https://www.php.net/manual/en/function.stream-copy-to-stream.php
[issues-27538]: https://github.com/symfony/symfony/issues/27538
[pr-42033]: https://github.com/symfony/symfony/pull/42033
