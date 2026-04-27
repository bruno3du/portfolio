"use client";

import { useEffect, useState } from "react";
import {
  About,
  BlogTeaser,
  Contact,
  Footer,
  GitHub,
  Hero,
  NavBar,
  Skills,
  Timeline,
  Work,
} from "./sections";
import type { Lang, PortfolioProps } from "./types";

export default function Portfolio({
  landing,
  tools,
  projects,
  experiences,
  socials,
  posts,
}: PortfolioProps) {
  const [lang, setLang] = useState<Lang>("pt");

  useEffect(() => {
    const stored =
      typeof window !== "undefined"
        ? (window.localStorage.getItem("lang") as Lang | null)
        : null;
    if (stored === "pt" || stored === "en") setLang(stored);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("lang", lang);
      document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    }
  }, [lang]);

  return (
    <main>
      <NavBar lang={lang} setLang={setLang} nav={landing.nav} />
      <Hero
        lang={lang}
        hero={landing.hero}
        mastheadEdition={landing.meta.mastheadEdition}
      />
      <About lang={lang} about={landing.about} />
      <Skills lang={lang} skills={landing.skills} tools={tools} />
      <Work lang={lang} work={landing.work} projects={projects} />
      <Timeline lang={lang} timeline={landing.timeline} experiences={experiences} />
      <GitHub lang={lang} github={landing.github} />
      <BlogTeaser lang={lang} blog={landing.blog} posts={posts} />
      <Contact
        lang={lang}
        contact={landing.contact}
        email={landing.meta.email}
        socials={socials}
      />
      <Footer lang={lang} footer={landing.footer} />
    </main>
  );
}
