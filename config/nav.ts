export const NAV = [
  "Home",
  "Personal Growth",
  "Spirituality",
  "Leadership",
  "Philosophy",
  "Relationships",
  "Mindset",
  "Lifestyle",
  "Ideas & Reflections",
  "Books",
  "Book Summaries",
  "Articles",
  "Videos",
  "About",
] as const;

export const toHref = (label: string) =>
  label === "Home"
    ? "/"
    : `/${label.toLowerCase().replace(/&/g, "and").replace(/\s+/g, "-")}`;