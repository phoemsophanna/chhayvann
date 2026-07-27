import DOMPurify from "isomorphic-dompurify";

// Tightened sanitizer: allow iframe only for Google Maps embeds and
// restrict allowed attributes. This reduces risk of hidden/third-party
// frames (e.g., fake captchas) being injected and rendered.
export function sanitizeHtml(html?: string | null) {
  if (!html) return "";

  return DOMPurify.sanitize(html, {
    USE_PROFILES: { html: true },
    ALLOW_DATA_ATTR: false,
    ADD_TAGS: ["iframe"],
    ADD_ATTR: [
      "allow",
      "allowfullscreen",
      "frameborder",
      "scrolling",
      "src",
      "width",
      "height",
      "loading",
      "referrerpolicy",
      "class",
      "id",
      "title",
      "name",
      "target",
    ],
    // Only allow URIs that point to Google Maps embeds. Adjust if you
    // need to allow additional trusted providers.
    ALLOWED_URI_REGEXP: /^(https:\/\/((www\.)?(google\.com|maps\.google\.com)\/))/i,
  });
}
