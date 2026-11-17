import Image from "next/image";
import Link from "next/link";
import {
  categorySections,
  type CategoryArticle,
  type CategorySection,
} from "@/data/categorySections";

const SECTIONS_PER_ROW = 2;

function chunk<T>(items: T[], size: number): T[][] {
  return Array.from({ length: Math.ceil(items.length / size) }, (_, i) =>
    items.slice(i * size, i * size + size)
  );
}


function CategoryCard({ article }: { article: CategoryArticle }) {
  return (
    <article className="group flex h-full min-w-0 flex-col">
      <Link href={`/articles/${article.slug}`} className="flex flex-1 flex-col">
        {/* Same image ratio as Card */}
        <div className="relative aspect-[16/9] w-full shrink-0 overflow-hidden bg-neutral-200">
          <Image
            src={article.image}
            alt={article.title}
            fill
            sizes="(max-width: 768px) 50vw, 30vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Category title */}
        <h3 className="mt-3 min-h-[72px] line-clamp-3 text-[15px] font-bold leading-[1.6] text-[var(--color-ink,#1c1c1c)] transition-colors group-hover:text-[var(--color-brand,#7a1a1a)]">
          {article.title}
        </h3>
      </Link>

      {/* Date aligned at bottom */}
      <time
        dateTime={new Date(article.date).toISOString().split("T")[0]}
        className="mt-auto pt-3 text-left font-ui text-[10px] text-[var(--color-muted,#8a6a3a)]"
      >
        {article.date}
      </time>
    </article>
  );
}


function CategoryBlock({ section }: { section: CategorySection }) {
  return (
    <div>
      <h2 className="mb-5 border-s-4 border-[var(--color-brand,#7a1a1a)] ps-3 text-2xl font-bold leading-[1.8] text-[var(--color-brand,#7a1a1a)]">
        {section.title}
      </h2>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {section.articles.map((article) => (
          <CategoryCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  );
}

export default function CategorySections() {
  const rows = chunk(categorySections, SECTIONS_PER_ROW);

  return (
    <div  className="mx-auto max-w-[1600px]">
      {rows.map((row, i) => (
        <div
          key={i}
          className="grid grid-cols-1 gap-x-[16px] md:gap-y-[28px] gap-y-12 border-t border-[var(--color-line,#e5e5e5)] py-8 lg:grid-cols-2"
        >
          {row.map((section) => (
            <CategoryBlock key={section.slug} section={section} />
          ))}
        </div>
      ))}
    </div>
  );
}