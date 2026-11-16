
export type CategoryArticle = {
  slug: string;
  title: string;
  image: string;
  date: string;
};

export type CategorySection = {
  slug: string;
  title: string;
  articles: CategoryArticle[];
};

export const categorySections: CategorySection[] = [
  {
    slug: "personal-growth",
    title: "Personal Growth",
    articles: [
      {
        slug: "true-growth-character",
        title: "True Growth Is Revealed in the Way You Treat Other People",
        image:
          "https://images.unsplash.com/photo-1529156069898-49953e39b3ac",
        date: "November 16, 2026",
      },
      {
        slug: "becoming-better-every-day",
        title: "The Art of Becoming a Better Version of Yourself Every Day",
        image:
          "https://images.unsplash.com/photo-1499209974431-9dddcece7f88",
        date: "November 12, 2026",
      },
    ],
  },
  {
    slug: "philosophy",
    title: "Philosophy & Deep Thinking",
    articles: [
      {
        slug: "question-of-god",
        title: "The Question of God: Time, Creation and the Limits of Human Understanding",
        image:
          "https://images.unsplash.com/photo-1462331940025-496dfbfc7564",
        date: "November 17, 2026",
      },
      {
        slug: "meaning-of-life",
        title: "What Makes Life Meaningful? Beyond Success, Wealth and Recognition",
        image:
          "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8",
        date: "November 10, 2026",
      },
    ],
  },
  {
    slug: "leadership",
    title: "Leadership & Character",
    articles: [
      {
        slug: "quiet-strength-of-character",
        title: "The Quiet Strength of Character: Why Self-Control Is True Power",
        image:
          "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
        date: "November 14, 2026",
      },
      {
        slug: "leadership-begins-within",
        title: "Leadership Begins Within: Understanding Yourself Before Leading Others",
        image:
          "https://images.unsplash.com/photo-1521737711867-e3b97375f902",
        date: "November 8, 2026",
      },
    ],
  },
  {
    slug: "relationships",
    title: "Love & Relationships",
    articles: [
      {
        slug: "understanding-human-nature",
        title: "Understanding Human Nature Changes the Way We Love",
        image:
          "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2",
        date: "November 13, 2026",
      },
      {
        slug: "meaningful-connections",
        title: "Beyond Attraction: What Makes Human Connections Truly Meaningful?",
        image:
          "https://images.unsplash.com/photo-1511988617509-a57c8a288659",
        date: "November 6, 2026",
      },
    ],
  },
  {
    slug: "mindset",
    title: "Mindset & Self-Development",
    articles: [
      {
        slug: "power-of-self-discipline",
        title: "The Power of Self-Discipline in a World Full of Distractions",
        image:
          "https://images.unsplash.com/photo-1455390582262-044cdead277a",
        date: "November 11, 2026",
      },
      {
        slug: "learning-to-let-go",
        title: "Learning to Let Go: Finding Peace in What You Cannot Control",
        image:
          "https://images.unsplash.com/photo-1500534623283-312aade485b7",
        date: "November 4, 2026",
      },
    ],
  },
  {
    slug: "books-and-ideas",
    title: "Books, Ideas & Reflections",
    articles: [
      {
        slug: "one-hundred-truths",
        title: "One Hundred Truths: Reflections on Character, Life and Human Nature",
        image:
          "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
        date: "November 9, 2026",
      },
      {
        slug: "wisdom-through-reading",
        title: "How Reading Great Books Can Change the Way You See the World",
        image:
          "https://images.unsplash.com/photo-1507842217343-583bb7270b66",
        date: "November 2, 2026",
      },
    ],
  },
];
