export function isExternalUrl(href: string) {
  return /^(https?:)?\/\//.test(href);
}

export function withBasePath(href: string, basePath: string) {
  if (isExternalUrl(href) || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("#")) {
    return href;
  }

  const normalizedBase = basePath === "/" ? "" : basePath.replace(/\/$/, "");

  if (!normalizedBase || href.startsWith(`${normalizedBase}/`)) {
    return href;
  }

  return href.startsWith("/") ? `${normalizedBase}${href}` : `${normalizedBase}/${href}`;
}
