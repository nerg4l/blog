---
title: "Contribution: EBML"
date: 2021-03-06T12:23:19+01:00
lastmod: 2021-08-13T12:00:22+02:00

categories: ["Contribution", "Programming"]
tags: ["EBML", "Matroska", "RFC", "proud"]
authors: ["László GÖRÖG"]
summary: "Let's talk about my contribution to an IETF draft."
---
Recently I got interested in Matroska container and found out [IETF][IETF] is working on documents to make Matroska and EBML a standard. These documents help developers to better understand the underlining technologies and to create implementations for them in any programming language. From these two documents my main interest is EBML which defines the structure of Matroska (.mkv .mk3d .mka .mks) files.

While working on a Go implementation myself I've found some issues in the EBML specification and provided [an issue](https://github.com/ietf-wg-cellar/ebml-specification/issues/395) and [a PR to fix it](https://github.com/ietf-wg-cellar/ebml-specification/pull/396). I can proudly announce my PR got merged.

I plan to keep working on my implementation and provide feedback if needed to help the IETF Cellar Group finalise EBML and Matroska specification.

[IETF]: https://www.ietf.org/
