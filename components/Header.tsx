
const NAV = [
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
];

export default function Header() {
  return (
    <header className="bg-gradient-to-b from-maroon to-maroon-dark text-white">
      <div className="mx-auto max-w-[1600px] px-4 sm:px-[52px]">
        {/* Top row */}
        <div className="relative flex h-[62px] items-center justify-between sm:h-[70px]">
          <a
            href="/"
            aria-label="Grow Up by Chamod Senevirathne"
            className="text-[30px] font-extrabold leading-none tracking-tight sm:text-[36px]"
          >
            Grow<span className="text-white/70">Up.</span>
          </a>

          <p className="absolute inset-x-0 mx-auto hidden w-fit text-[15px] tracking-wide text-white/85 sm:block">
            Ideas for a Better Mind, Life and World.
          </p>

          <div
            dir="ltr"
            className="flex items-center gap-5 font-ui text-[10px] font-bold"
          >
            <a
              href="#newsletter"
              className="rounded-full bg-white px-6 py-2.5 text-black transition-colors hover:bg-white/85"
            >
              Subscribe
            </a>

            <a
              href="https://www.instagram.com/growupsl"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block hover:text-white/70"
            >
              Follow
            </a>

            <button aria-label="Search" type="button">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-4-4" />
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav
          aria-label="Main navigation"
          className="overflow-x-auto pb-4 pt-3"
        >
          <ul className="flex gap-[14px] whitespace-nowrap text-[12.5px] font-bold sm:gap-[18px]">
            {NAV.map((item) => (
              <li key={item}>
                <a
                  href={
                    item === "Home"
                      ? "/"
                      : `/${item.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and")}`
                  }
                  className="transition-colors hover:text-white/65"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
