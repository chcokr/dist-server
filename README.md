# dist-server

Some modern webapps leverage the following properties of a CDN, besides its
speed, to minimize load times.

- All static assets are gzip'd
- All static assets remain on the browser's cache forever (assuming that their
file names have been properly hashed a.k.a cache-busted)
- HTTP 304 is properly sent out to indicate a resource has not been modified
since last requested

`dist-server` launches a server that exposes all files in the current working
directory on port 8000 and satisfies the above conditions.

```
$ npm install -g dist-server
$ dist-server
Server running at http://localhost:8000
```

Hosting your files via `dist-server` will make Chrome's audits less cranky about
`Enable gzip compression` and `Leverage browser caching`!
