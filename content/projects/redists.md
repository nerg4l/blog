---
title: "RedisTS"
menu:
page:
parent: "Projects"
weight: 20
state: "alpha released"
summary: "A tool for realtime applications."
---
Link: https://github.com/coding-socks/redists

RedisTS is a typesafe Go client for RedisTimeSeries. It was created during a coding spree which had the following focus:

1. [Functional options for friendly APIs](https://dave.cheney.net/2014/10/17/functional-options-for-friendly-apis).
2. Type safety.
3. Switched word order for better autocompletion and to follow the naming scheme used in stdlib (e.g. `http.MethodGet`, `http.StatusNotFound`).
4. Compatibility with multiple Redis clients.
5. Accept `time.Time` and `time.Duration` where a parameter is a timestamp in milliseconds or a duration in milliseconds.
