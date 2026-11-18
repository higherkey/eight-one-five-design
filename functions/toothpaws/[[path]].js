/*
 * Cloudflare Pages Function: serves Toothpaws at eight1fivedesign.com/toothpaws/.
 *
 * The app is built and published from the higherkey/toothpaws repository on
 * GitHub Pages. This function fetches each file from there at the edge, so
 * every merge to that repository is live here without copying files into this
 * site. The browser only ever sees eight1fivedesign.com, which keeps the app's
 * saved progress, service worker and install on this domain.
 */
const UPSTREAM = "https://higherkey.github.io/toothpaws/";
const FORWARDED_REQUEST_HEADERS = ["accept", "accept-language", "if-none-match", "if-modified-since", "range"];

export async function onRequest({ request, params }) {
  const url = new URL(request.url);

  // Relative links in the app need the trailing slash.
  if (url.pathname === "/toothpaws") {
    return Response.redirect(url.origin + "/toothpaws/" + url.search, 301);
  }
  if (request.method !== "GET" && request.method !== "HEAD") {
    return new Response("Method not allowed", { status: 405, headers: { allow: "GET, HEAD" } });
  }

  const segments = Array.isArray(params.path) ? params.path : params.path ? [params.path] : [];
  const upstream = new URL(segments.map(encodeURIComponent).join("/") + url.search, UPSTREAM);
  // "." and ".." segments must not reach other projects on the same GitHub Pages host.
  if (!upstream.pathname.startsWith(new URL(UPSTREAM).pathname)) {
    return new Response("Not found", { status: 404 });
  }

  const headers = new Headers();
  for (const name of FORWARDED_REQUEST_HEADERS) {
    const value = request.headers.get(name);
    if (value) headers.set(name, value);
  }

  const response = await fetch(upstream, { method: request.method, headers, redirect: "manual" });
  const result = new Response(response.body, response);

  // GitHub Pages redirects (for example, a folder without its trailing slash)
  // must point back at this domain, not at github.io.
  const location = response.headers.get("location");
  if (location) {
    const target = new URL(location, upstream);
    if (target.origin === new URL(UPSTREAM).origin && target.pathname.startsWith("/toothpaws")) {
      result.headers.set("location", url.origin + target.pathname + target.search);
    }
  }
  return result;
}
