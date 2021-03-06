---
title: "EBML"
menu:
    page:
        parent: "Projects"
weight: 10
state: "alpha released"
summary: "An EBML parser written in Go."
---
Link: https://github.com/coding-socks/ebml

> Extensible Binary Meta Language (EBML) is a generalized file format for any kind of data, aiming to be a binary equivalent to XML. It provides a basic framework for storing data in XML-like tags. It was originally developed for the Matroska audio/video container format.

Source: https://en.wikipedia.org/wiki/Extensible_Binary_Meta_Language

It is based on the July 2020 version of [RFC 8794][rfc8794] and on the 6th iteration of [draft-ietf-cellar-matroska][draft-ietf-cellar-matroska-06]. None of these documents reached ["Internet Standard"](https://tools.ietf.org/html/rfc2026#section-4.1.3) status yet.

- RFC 8794 is in a ["Proposed Standard"](https://tools.ietf.org/html/rfc2026#section-4.1.1) status.
- draft-ietf-cellar-matroska is still an [Internet-Draft](https://tools.ietf.org/html/rfc2026#section-2.2).

The goal is to provide implementation for these documents and during the implementation provide feedback for them.
