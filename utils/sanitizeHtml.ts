import DOMPurify from "isomorphic-dompurify";

export function sanitizeHtml(html?: string | null) {
  if (!html) return "";

  return DOMPurify.sanitize(html, {
    USE_PROFILES: { html: true },
    ALLOW_DATA_ATTR: true,
    ADD_TAGS: ["iframe"],
    ADD_ATTR: [
      "allow",
      "allowfullscreen",
      "allowpaymentrequest",
      "frameborder",
      "scrolling",
      "src",
      "width",
      "height",
      "style",
      "loading",
      "referrerpolicy",
      "class",
      "id",
      "title",
      "name",
      "target",
    ],
  });
}
