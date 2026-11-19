/*
 * Brush Buddies is now Toothpaws. Send old links to the same page under /toothpaws/.
 */
export function onRequest({ request, params }) {
  const url = new URL(request.url);
  const segments = Array.isArray(params.path) ? params.path : params.path ? [params.path] : [];
  const rest = segments.map(encodeURIComponent).join("/");
  return Response.redirect(url.origin + "/toothpaws/" + rest + url.search, 301);
}
