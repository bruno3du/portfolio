export type Lang = "pt" | "en";

export type Localized<T> = { [K in Lang]?: T | null } | T | null | undefined;

export type Fact = { value: string; label: Localized<string> };

export type LandingData = {
  meta: {
    name: string;
    role?: Localized<string>;
    email: string;
    mastheadEdition?: string | null;
  };
  nav: {
    work?: Localized<string>;
    about?: Localized<string>;
    blog?: Localized<string>;
    contact?: Localized<string>;
  };
  hero: {
    kicker?: Localized<string>;
    headlineLine1?: Localized<string>;
    headlineLine2?: Localized<string>;
    headlineLine3?: Localized<string>;
    sub?: Localized<string>;
    ctaPrimary?: Localized<string>;
    ctaSecondary?: Localized<string>;
  };
  about: {
    label?: Localized<string>;
    title?: Localized<string>;
    body?: Localized<string>;
    facts?: Fact[] | null;
  };
  skills: {
    label?: Localized<string>;
    title?: Localized<string>;
    categoryLabels?: {
      frontend?: Localized<string>;
      backend?: Localized<string>;
      data?: Localized<string>;
      infra?: Localized<string>;
    };
  };
  work: {
    label?: Localized<string>;
    title?: Localized<string>;
    sub?: Localized<string>;
  };
  timeline: {
    label?: Localized<string>;
    title?: Localized<string>;
  };
  github: {
    label?: Localized<string>;
    title?: Localized<string>;
    stats?: { value: string; label: Localized<string> }[] | null;
    reposTitle?: Localized<string>;
    repos?:
      | {
        name: string;
        description: Localized<string>;
        stars: string;
        lang: string;
      }[]
      | null;
  };
  blog: {
    label?: Localized<string>;
    title?: Localized<string>;
    sub?: Localized<string>;
    readMore?: Localized<string>;
    readingTime?: Localized<string>;
    backToList?: Localized<string>;
    backHome?: Localized<string>;
    filterLabel?: Localized<string>;
    indexHeadlinePre?: Localized<string>;
    indexHeadlinePost?: Localized<string>;
    morePosts?: Localized<string>;
    emptyState?: Localized<string>;
    authorBio?: Localized<string>;
    authorCta?: Localized<string>;
  };
  contact: {
    label?: Localized<string>;
    title?: Localized<string>;
    sub?: Localized<string>;
  };
  footer: {
    copy?: Localized<string>;
    built?: Localized<string>;
  };
};

export type ToolItem = {
  id: string | number;
  name: string;
  category: "frontend" | "backend" | "data" | "infra";
};

export type ProjectItem = {
  id: string | number;
  n: string;
  title: string;
  description: Localized<string>;
  tags?: { value: string }[] | null;
  year: string;
  link?: string | null;
  repo?: string | null;
};

export type ExperienceItem = {
  id: string | number;
  year: string;
  role: Localized<string>;
  company: string;
  description: Localized<string>;
};

export type SocialItem = {
  id: string | number;
  platform: string;
  handle: string;
  url?: string | null;
};

export type PostTeaser = {
  id: string | number;
  slug: string;
  title: Localized<string>;
  excerpt: Localized<string>;
  date: string;
  readingTime: number;
  tags?: { value: string }[] | null;
};

export type PortfolioProps = {
  landing: LandingData;
  tools: ToolItem[];
  projects: ProjectItem[];
  experiences: ExperienceItem[];
  socials: SocialItem[];
  posts: PostTeaser[];
};

export function pick(value: Localized<string> | undefined, lang: Lang): string {
  if (value == null) return "";
  if (typeof value === "string") return value;
  return value[lang] ?? value.pt ?? value.en ?? "";
}
