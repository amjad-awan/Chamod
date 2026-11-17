import Link from "next/link";
import { footerConfig } from "@/config/footer";
import NewsletterForm from "@/components/NewsletterForm";
import { toHref } from "@/config/nav";

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: readonly string[];
}) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
        {title}
      </h3>
      <ul className="space-y-3">
        {items.map((label) => (
          <li key={label}>
            <Link
              href={toHref(label)}
              className="text-sm text-[var(--color-footer-text)] transition-colors hover:text-white hover:underline hover:underline-offset-4"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const { brand, tagline, social, legal, columns, copyrightName } = footerConfig;
  const year = new Date().getFullYear();

  return (
    <footer
      className="mt-16 bg-[var(--color-footer-bg)] text-[var(--color-footer-text)]"
    >
      {/* Top: newsletter */}
      <div className="border-b border-white/15">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-4 py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white">
              Get fresh ideas in your inbox
            </h2>
            <p className="mt-2 text-sm">
              New articles and book summaries, once a week. No spam.
            </p>
          </div>
          <NewsletterForm />
        </div>
      </div>

      {/* Middle: brand + link columns */}
      <div className="mx-auto grid max-w-[1200px] gap-10 px-4 py-12 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <Link href="/" className="text-2xl font-bold text-white">
            {brand}
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed">{tagline}</p>

          <ul className="mt-6 flex flex-wrap gap-3">
            {social.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/30 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-white hover:text-[var(--color-footer-bg)]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {columns.map((col) => (
          <FooterColumn key={col.title} title={col.title} items={col.items} />
        ))}
      </div>

      {/* Bottom: copyright + legal */}
      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-3 px-4 py-6 text-xs md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {copyrightName}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-5">
            {legal.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}