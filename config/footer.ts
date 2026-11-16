export const footerConfig = {
  brand: "Grow Up",
  tagline:
    "Ideas on growth, leadership, philosophy and meaningful living, written to help you think clearly and live better.",
  email: "hello@example.com", // change later
  copyrightName: "Grow Up",
  social: [
    { label: "Facebook", href: "https://facebook.com/" },
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "YouTube", href: "https://youtube.com/" },
    { label: "X", href: "https://x.com/" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Use", href: "/terms" },
    { label: "Contact", href: "/contact" },
  ],
  // which NAV labels go in each footer column
  columns: [
    {
      title: "Explore",
      items: ["Personal Growth", "Spirituality", "Leadership", "Philosophy"],
    },
    {
      title: "More Topics",
      items: ["Relationships", "Mindset", "Lifestyle", "Ideas & Reflections"],
    },
    {
      title: "Library",
      items: ["Books", "Book Summaries", "Articles", "Videos"],
    },
  ],
} as const;