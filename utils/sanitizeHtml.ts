import DOMPurify from "isomorphic-dompurify";

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
      "loading",
      "referrerpolicy",
      "class",
      "id",
      "title",
      "name",
      "target",
    ],

    // Allow normal HTTP/HTTPS URLs for images, links, etc.
    ALLOWED_URI_REGEXP:
      /^(?:(?:https?|mailto):|[^a-z]|[a-z+.-]+(?:[^a-z+.-]|$))/i,
  });
}