
import Image from "next/image";

type Post = {
  title: string;
  date: string;
  img: string;
  alt: string;
  category: string;
};

const big: Post = {
  title: "The Question of God: What Does It Mean for Time and the Universe to Have a Beginning?",
  date: "November 17, 2026",
  category: "Philosophy",
  alt: "A vast universe filled with stars and galaxies",
  img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564",
};

const small: Post[] = [
  {
    title: "True Growth Is Revealed in the Way You Treat Other People",
    date: "November 16, 2026",
    category: "Personal Growth",
    alt: "Two people having a thoughtful conversation",
    img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac",
  },
  {
    title: "The Power of Self-Discipline in a World Full of Distractions",
    date: "November 14, 2026",
    category: "Self Development",
    alt: "A person writing in a notebook at a desk",
    img: "https://images.unsplash.com/photo-1455390582262-044cdead277a",
  },
  {
    title: "Why Understanding Human Nature Changes the Way We Love",
    date: "November 12, 2026",
    category: "Relationships",
    alt: "A couple walking together at sunset",
    img: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2",
  },
  {
    title: "The Quiet Strength of Character: Becoming Better Without Seeking Attention",
    date: "November 10, 2026",
    category: "Leadership",
    alt: "A person standing thoughtfully in a natural landscape",
    img: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8",
  },
];

function Card({ p, large = false }: { p: Post; large?: boolean }) {
  return (
    <article className="flex flex-col">
      <div
        className={`relative w-full overflow-hidden ${
          large ? "aspect-[337/190]" : "aspect-[161/92]"
        }`}
      >
        <Image
          src={p.img}
          alt={p.alt}
          fill
          sizes={
            large
              ? "(max-width: 768px) 100vw, 55vw"
              : "(max-width: 768px) 50vw, 22vw"
          }
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <span className="mt-3 text-[9px] font-semibold uppercase tracking-[1.5px] text-maroon">
        {p.category}
      </span>

      <h3
        className={
          large
            ? "mt-2 text-[26px] font-bold leading-[1.5]"
            : "mt-2 text-[12.5px] font-bold leading-[1.7]"
        }
      >
        {p.title}
      </h3>

      <time
        dateTime={new Date(p.date).toISOString().split("T")[0]}
        className={`font-ui text-[10px] text-muted ${
          large ? "mt-5 text-left" : "mt-3 text-left"
        }`}
      >
        {p.date}
      </time>
    </article>
  );
}

export default function FeaturedGrid() {
  return (
    <section className="mx-auto max-w-[1600px]  pt-[30px]">
      <h2 className="mb-[26px] flex w-fit items-center gap-3 border-l-[3px] border-maroon pl-3 text-[15px] font-bold leading-8">
        Featured Articles
      </h2>

      <div className="grid cursor-pointer gap-x-[19px] gap-y-6 md:grid-cols-[2.08fr_2fr]">
        <div>
          <Card p={big} large />
        </div>

        <div className="grid grid-cols-2 gap-x-[16px] gap-y-8 md:gap-y-[28px]">
          {[small[1], small[0], small[3], small[2]].map((p) => (
            <Card key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
