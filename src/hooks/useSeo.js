import { useEffect } from "react";
import { site } from "../config/site";

function setMeta(attribute, key, content) {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function setCanonical(href) {
  let element = document.head.querySelector('link[rel="canonical"]');
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
}

/**
 * Sets the page title, description, canonical URL and social tags.
 * @param {{ title?: string, description?: string, path?: string, image?: string, type?: string }} meta
 */
export function useSeo({ title, description, path = "/", image, type = "website" }) {
  useEffect(() => {
    const origin = site.url || window.location.origin;
    const fullTitle = title ? `${title} | ${site.name}` : `${site.name} | ${site.tagline}`;
    const metaDescription = description || site.description;
    const url = `${origin}${path}`;
    const imageUrl = image
      ? new URL(image, origin).href
      : `${origin}/og-image.jpg`;

    document.title = fullTitle;
    setMeta("name", "description", metaDescription);
    setCanonical(url);

    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", metaDescription);
    setMeta("property", "og:url", url);
    setMeta("property", "og:type", type);
    setMeta("property", "og:image", imageUrl);
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", metaDescription);
    setMeta("name", "twitter:image", imageUrl);
  }, [title, description, path, image, type]);
}
