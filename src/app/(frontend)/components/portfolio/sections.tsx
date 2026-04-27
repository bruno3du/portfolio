"use client";

import type { CSSProperties, ReactNode } from "react";
import {
  ExperienceItem,
  Lang,
  LandingData,
  Localized,
  PortfolioProps,
  PostTeaser,
  ProjectItem,
  SocialItem,
  ToolItem,
  pick,
} from "./types";

const linkStyle: CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
};

const displayStyle: CSSProperties = {
  fontFamily: "var(--font-display)",
  fontWeight: 400,
  letterSpacing: "-0.03em",
};

const blockyStyle: CSSProperties = {
  fontFamily: "var(--font-blocky)",
  fontWeight: 900,
  letterSpacing: "-0.03em",
};

export function NavBar({
  lang,
  setLang,
  nav,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
  nav: LandingData["nav"];
}) {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "var(--bg)",
        borderBottom: "var(--rule) solid var(--ink)",
        padding: "14px 28px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <a
        href="#top"
        style={{
          fontFamily: "var(--font-blocky)",
          fontSize: 18,
          fontWeight: 900,
          letterSpacing: "-0.02em",
          textTransform: "uppercase",
        }}
      >
        BRUNO/EDU
        <span style={{ color: "var(--accent)" }}>.</span>
      </a>
      <div style={{ display: "flex", gap: 22, alignItems: "center" }}>
        <a href="#work" style={linkStyle} className="uline">
          {pick(nav.work, lang) || (lang === "pt" ? "TRABALHO" : "WORK")}
        </a>
        <a href="#about" style={linkStyle} className="uline">
          {pick(nav.about, lang) || (lang === "pt" ? "SOBRE" : "ABOUT")}
        </a>
        <a href="/blog" style={linkStyle} className="uline">
          {pick(nav.blog, lang) || "BLOG"}
        </a>
        <a href="#contact" style={linkStyle} className="uline">
          {pick(nav.contact, lang) || (lang === "pt" ? "CONTATO" : "CONTACT")}
        </a>
        <LangToggle lang={lang} setLang={setLang} />
      </div>
    </nav>
  );
}

export function LangToggle({
  lang,
  setLang,
}: {
  lang: Lang;
  setLang: (l: Lang) => void;
}) {
  const btn = (l: Lang): CSSProperties => ({
    padding: "6px 10px",
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "0.1em",
    background: lang === l ? "var(--ink)" : "transparent",
    color: lang === l ? "var(--bg)" : "var(--ink)",
    fontFamily: "var(--font-mono)",
    border: "none",
    ...(l === "en" ? { borderLeft: "var(--rule) solid var(--ink)" } : {}),
  });
  return (
    <div style={{ display: "flex", border: "var(--rule) solid var(--ink)", marginLeft: 8 }}>
      <button onClick={() => setLang("pt")} style={btn("pt")}>
        PT
      </button>
      <button onClick={() => setLang("en")} style={btn("en")}>
        EN
      </button>
    </div>
  );
}

export function Hero({ lang, hero, mastheadEdition }: { lang: Lang; hero: LandingData["hero"]; mastheadEdition?: string | null }) {
  return (
    <section
      id="top"
      style={{ borderBottom: "var(--rule) solid var(--ink)", padding: "28px 32px 56px" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.15em",
          paddingBottom: 18,
          borderBottom: "1px solid var(--ink)",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <span>{mastheadEdition || "VOLUME IV · EDITION 26"}</span>
        <span>{pick(hero.kicker, lang)}</span>
        <span>R$ 0,00</span>
      </div>
      <div style={{ paddingTop: 28 }}>
        <h1
          style={{
            ...displayStyle,
            fontSize: "clamp(72px, 12vw, 200px)",
            lineHeight: 0.86,
            letterSpacing: "-0.04em",
          }}
        >
          {pick(hero.headlineLine1, lang)}
          <br />
          <em style={{ color: "var(--accent)", fontStyle: "italic" }}>
            {pick(hero.headlineLine2, lang).toLowerCase()}
          </em>
          <br />
          {pick(hero.headlineLine3, lang)}
        </h1>
      </div>
      <div
        style={{
          marginTop: 36,
          display: "grid",
          gridTemplateColumns: "120px 1fr 1fr",
          gap: 28,
          paddingTop: 24,
          borderTop: "1px solid var(--ink)",
        }}
      >
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.15em" }}>
          BY
          <br />
          BRUNO
          <br />
          EDUARDO
        </div>
        <p
          style={{
            fontFamily: "var(--font-body), Georgia, serif",
            fontSize: 17,
            lineHeight: 1.5,
          }}
        >
          {pick(hero.sub, lang)}
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            alignItems: "flex-start",
          }}
        >
          <a href="#contact" className="btn-brut">
            {pick(hero.ctaPrimary, lang)} →
          </a>
          <a href="#work" className="btn-brut ghost">
            {pick(hero.ctaSecondary, lang)}
          </a>
        </div>
      </div>
    </section>
  );
}

function SecHead({
  lang,
  label,
  title,
  sub,
  marginBottom = 28,
}: {
  lang: Lang;
  label: Localized<string>;
  title: Localized<string>;
  sub?: Localized<string>;
  marginBottom?: number;
}) {
  const titleStr = pick(title, lang);
  return (
    <>
      <div className="sec-label">{pick(label, lang)}</div>
      <h2
        style={{
          ...displayStyle,
          fontSize: "clamp(48px, 7vw, 96px)",
          lineHeight: 0.92,
          marginBottom: sub ? 8 : marginBottom,
        }}
      >
        <em style={{ fontStyle: "italic" }}>{titleStr.toLowerCase()}</em>
      </h2>
      {sub && (
        <p
          style={{
            marginBottom,
            fontSize: 17,
            fontFamily: "var(--font-body), Georgia, serif",
            fontStyle: "italic",
            opacity: 0.85,
          }}
        >
          {pick(sub, lang)}
        </p>
      )}
    </>
  );
}

export function About({ lang, about }: { lang: Lang; about: LandingData["about"] }) {
  const titleStr = pick(about.title, lang);
  return (
    <section
      id="about"
      style={{
        padding: "72px 32px",
        borderBottom: "var(--rule) solid var(--ink)",
        background: "var(--accent-2)",
      }}
    >
      <div className="sec-label">{pick(about.label, lang)}</div>
      <h2
        style={{
          ...displayStyle,
          fontSize: "clamp(48px, 7vw, 96px)",
          lineHeight: 0.92,
          marginBottom: 28,
        }}
      >
        <em style={{ fontStyle: "italic" }}>{titleStr.toLowerCase()}</em>
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 40 }}>
        <p
          style={{
            fontSize: 18,
            lineHeight: 1.55,
            fontFamily: "var(--font-body), Georgia, serif",
            maxWidth: 600,
          }}
        >
          {pick(about.body, lang)}
        </p>
        <FactsGrid facts={about.facts} lang={lang} />
      </div>
    </section>
  );
}

function FactsGrid({ facts, lang }: { facts: LandingData["about"]["facts"]; lang: Lang }) {
  const items = facts ?? [];
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        border: "var(--rule) solid var(--ink)",
      }}
    >
      {items.map((f, i) => (
        <div
          key={i}
          style={{
            padding: "18px 16px",
            borderRight: i % 2 === 0 ? "var(--rule) solid var(--ink)" : "none",
            borderTop: i >= 2 ? "var(--rule) solid var(--ink)" : "none",
          }}
        >
          <div className="display-blocky" style={{ fontSize: 44, color: "var(--accent)" }}>
            {f.value}
          </div>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.1em",
              marginTop: 4,
            }}
          >
            {pick(f.label, lang)}
          </div>
        </div>
      ))}
    </div>
  );
}

export function Skills({
  lang,
  skills,
  tools,
}: {
  lang: Lang;
  skills: LandingData["skills"];
  tools: ToolItem[];
}) {
  const order: ToolItem["category"][] = ["frontend", "backend", "data", "infra"];
  const labels = skills.categoryLabels ?? {};
  const grouped = order.map((cat) => ({
    cat,
    label:
      pick(labels[cat], lang) || cat.toUpperCase(),
    items: tools.filter((t) => t.category === cat),
  }));
  return (
    <section style={{ padding: "72px 32px", borderBottom: "var(--rule) solid var(--ink)" }}>
      <SecHead lang={lang} label={skills.label} title={skills.title} marginBottom={36} />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          border: "var(--rule) solid var(--ink)",
        }}
      >
        {grouped.map((g, i) => (
          <div
            key={g.cat}
            style={{
              padding: 22,
              borderRight: i % 2 === 0 ? "var(--rule) solid var(--ink)" : "none",
              borderBottom: i < 2 ? "var(--rule) solid var(--ink)" : "none",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                background: "var(--ink)",
                color: "var(--bg)",
                display: "inline-block",
                padding: "4px 8px",
                marginBottom: 14,
              }}
            >
              {g.label}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {g.items.map((tool) => (
                <span
                  key={tool.id}
                  className="tag"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {tool.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Work({
  lang,
  work,
  projects,
}: {
  lang: Lang;
  work: LandingData["work"];
  projects: ProjectItem[];
}) {
  return (
    <section
      id="work"
      style={{ padding: "72px 32px", borderBottom: "var(--rule) solid var(--ink)" }}
    >
      <SecHead
        lang={lang}
        label={work.label}
        title={work.title}
        sub={work.sub}
        marginBottom={32}
      />
      <div style={{ border: "var(--rule) solid var(--ink)", borderBottom: "none" }}>
        {projects.map((p) => (
          <ProjectRow key={p.id} project={p} lang={lang} />
        ))}
      </div>
    </section>
  );
}

function ProjectRow({ project, lang }: { project: ProjectItem; lang: Lang }) {
  return (
    <article
      style={{
        display: "grid",
        gridTemplateColumns: "80px 1fr 200px 80px",
        gap: 20,
        padding: "24px 20px",
        borderBottom: "var(--rule) solid var(--ink)",
        alignItems: "start",
        background: "var(--bg)",
        transition: "background 120ms",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "var(--accent)")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "var(--bg)")}
    >
      <div className="display-blocky" style={{ fontSize: 32 }}>
        {project.n}
      </div>
      <div>
        <h3 className="display-blocky" style={{ fontSize: 28 }}>
          {project.title}
        </h3>
        <p
          style={{
            marginTop: 8,
            fontSize: 13,
            lineHeight: 1.5,
            fontFamily: "var(--font-body), Georgia, serif",
          }}
        >
          {pick(project.description, lang)}
        </p>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {(project.tags ?? []).map((t, i) => (
          <span key={i} className="tag" style={{ fontSize: 10, padding: "3px 7px" }}>
            {t.value}
          </span>
        ))}
      </div>
      <div
        className="mono"
        style={{ fontSize: 12, fontWeight: 700, textAlign: "right" }}
      >
        {project.year}
      </div>
    </article>
  );
}

export function Timeline({
  lang,
  timeline,
  experiences,
}: {
  lang: Lang;
  timeline: LandingData["timeline"];
  experiences: ExperienceItem[];
}) {
  return (
    <section
      style={{
        padding: "72px 32px",
        borderBottom: "var(--rule) solid var(--ink)",
        background: "var(--bg)",
      }}
    >
      <SecHead lang={lang} label={timeline.label} title={timeline.title} marginBottom={32} />
      <div>
        {experiences.map((it, i) => (
          <div
            key={it.id}
            style={{
              display: "grid",
              gridTemplateColumns: "160px 1fr",
              gap: 24,
              padding: "20px 0",
              borderTop: i === 0 ? "var(--rule) solid currentColor" : "none",
              borderBottom: "var(--rule) solid currentColor",
            }}
          >
            <div className="display-blocky" style={{ fontSize: 22, color: "var(--accent)" }}>
              {it.year}
            </div>
            <div>
              <div className="display-blocky" style={{ fontSize: 22 }}>
                {pick(it.role, lang)}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  marginTop: 4,
                  opacity: 0.7,
                }}
              >
                {it.company}
              </div>
              <p
                style={{
                  marginTop: 10,
                  fontSize: 13,
                  lineHeight: 1.5,
                  fontFamily: "var(--font-body), Georgia, serif",
                  maxWidth: 640,
                }}
              >
                {pick(it.description, lang)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function GitHub({ lang, github }: { lang: Lang; github: LandingData["github"] }) {
  const stats = github.stats ?? [];
  const repos = github.repos ?? [];
  return (
    <section style={{ padding: "72px 32px", borderBottom: "var(--rule) solid var(--ink)" }}>
      <SecHead lang={lang} label={github.label} title={github.title} marginBottom={28} />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          border: "var(--rule) solid var(--ink)",
          marginBottom: 32,
        }}
      >
        {stats.map((s, i) => (
          <div
            key={i}
            style={{
              padding: 18,
              borderRight: i < stats.length - 1 ? "var(--rule) solid var(--ink)" : "none",
            }}
          >
            <div className="display-blocky" style={{ fontSize: 36 }}>
              {s.value}
            </div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "0.1em",
                marginTop: 4,
              }}
            >
              {pick(s.label, lang)}
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.15em",
          marginBottom: 14,
        }}
      >
        {pick(github.reposTitle, lang)}
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          border: "var(--rule) solid var(--ink)",
        }}
      >
        {repos.map((r, i) => (
          <div
            key={i}
            style={{
              padding: 18,
              borderRight: i % 2 === 0 ? "var(--rule) solid var(--ink)" : "none",
              borderBottom: i < repos.length - 2 ? "var(--rule) solid var(--ink)" : "none",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                marginBottom: 6,
              }}
            >
              <div className="display-blocky" style={{ fontSize: 18 }}>
                {r.name}
              </div>
              <div className="mono" style={{ fontSize: 11, fontWeight: 700 }}>
                ★ {r.stars}
              </div>
            </div>
            <div
              style={{
                fontSize: 12,
                fontFamily: "var(--font-mono)",
                opacity: 0.75,
              }}
            >
              {pick(r.description, lang)}
            </div>
            <div
              style={{
                marginTop: 10,
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <span
                style={{
                  width: 10,
                  height: 10,
                  background: "var(--accent)",
                  display: "inline-block",
                  border: "1.5px solid var(--ink)",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                }}
              >
                {r.lang.toUpperCase()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function BlogTeaser({
  lang,
  blog,
  posts,
}: {
  lang: Lang;
  blog: LandingData["blog"];
  posts: PostTeaser[];
}) {
  return (
    <section
      id="blog"
      style={{ padding: "72px 32px", borderBottom: "var(--rule) solid var(--ink)" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          gap: 24,
        }}
      >
        <div style={{ flex: 1 }}>
          <SecHead
            lang={lang}
            label={blog.label}
            title={blog.title}
            sub={blog.sub}
            marginBottom={0}
          />
        </div>
        <a href="/blog" className="btn-brut">
          {pick(blog.readMore, lang)} →
        </a>
      </div>
      <div
        style={{
          marginTop: 32,
          border: "var(--rule) solid var(--ink)",
          borderBottom: "none",
        }}
      >
        {posts.slice(0, 3).map((p) => (
          <BlogTeaserRow key={p.id} post={p} lang={lang} readingTimeLabel={pick(blog.readingTime, lang)} />
        ))}
      </div>
    </section>
  );
}

function BlogTeaserRow({
  post,
  lang,
  readingTimeLabel,
}: {
  post: PostTeaser;
  lang: Lang;
  readingTimeLabel: string;
}) {
  return (
    <a
      href={`/blog/${post.slug}`}
      style={{
        display: "grid",
        gridTemplateColumns: "120px 1fr 200px 80px",
        gap: 20,
        padding: "20px 18px",
        borderBottom: "var(--rule) solid var(--ink)",
        alignItems: "center",
        transition: "background 120ms",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = "var(--accent)")}
      onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
    >
      <div className="mono" style={{ fontSize: 11, fontWeight: 700 }}>
        {post.date.slice(0, 10)}
      </div>
      <div>
        <div className="display-blocky" style={{ fontSize: 20 }}>
          {pick(post.title, lang)}
        </div>
        <p
          style={{
            marginTop: 6,
            fontSize: 13,
            fontFamily: "var(--font-body), Georgia, serif",
          }}
        >
          {pick(post.excerpt, lang)}
        </p>
      </div>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
        {(post.tags ?? []).map((t, i) => (
          <span key={i} className="tag" style={{ fontSize: 10 }}>
            {t.value}
          </span>
        ))}
      </div>
      <div className="mono" style={{ fontSize: 11, textAlign: "right" }}>
        {post.readingTime} {readingTimeLabel}
      </div>
    </a>
  );
}

export function Contact({
  lang,
  contact,
  email,
  socials,
}: {
  lang: Lang;
  contact: LandingData["contact"];
  email: string;
  socials: SocialItem[];
}) {
  const titleStr = pick(contact.title, lang);
  return (
    <section
      id="contact"
      style={{
        padding: "72px 32px",
        background: "var(--ink)",
        color: "var(--bg)",
        borderTop: "var(--rule) solid var(--ink)",
        borderBottom: "var(--rule) solid var(--ink)",
      }}
    >
      <div className="sec-label" style={{ opacity: 0.85 }}>
        {pick(contact.label, lang)}
      </div>
      <h2
        style={{
          ...displayStyle,
          fontSize: "clamp(64px, 9vw, 144px)",
          lineHeight: 0.92,
        }}
      >
        <em style={{ fontStyle: "italic" }}>{titleStr.toLowerCase()}</em>
      </h2>
      <p
        style={{
          marginTop: 14,
          fontSize: 16,
          fontFamily: "var(--font-body), Georgia, serif",
          maxWidth: 540,
        }}
      >
        {pick(contact.sub, lang)}
      </p>
      <a
        href={`mailto:${email}`}
        style={{
          display: "inline-block",
          marginTop: 28,
          ...blockyStyle,
          fontSize: "clamp(28px, 4vw, 56px)",
          letterSpacing: "-0.02em",
          borderBottom: "4px solid currentColor",
          paddingBottom: 4,
        }}
      >
        {email} →
      </a>
      <div
        style={{
          marginTop: 40,
          display: "grid",
          gridTemplateColumns: `repeat(${Math.max(socials.length, 1)}, 1fr)`,
          border: "3px solid currentColor",
        }}
      >
        {socials.map((s, i) => (
          <SocialCell key={s.id} social={s} isLast={i === socials.length - 1} />
        ))}
      </div>
    </section>
  );
}

function SocialCell({ social, isLast }: { social: SocialItem; isLast: boolean }) {
  const inner: ReactNode = (
    <>
      <div
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: "0.12em",
          opacity: 0.7,
        }}
      >
        {social.platform}
      </div>
      <div
        className="mono"
        style={{ fontSize: 14, fontWeight: 700, marginTop: 4 }}
      >
        {social.handle}
      </div>
    </>
  );
  const cellStyle: CSSProperties = {
    padding: 14,
    borderRight: isLast ? "none" : "3px solid currentColor",
  };
  return social.url ? (
    <a href={social.url} target="_blank" rel="noopener noreferrer" style={cellStyle}>
      {inner}
    </a>
  ) : (
    <div style={cellStyle}>{inner}</div>
  );
}

export function Footer({
  lang,
  footer,
}: {
  lang: Lang;
  footer: LandingData["footer"];
}) {
  return (
    <footer
      style={{
        padding: "24px 32px",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 12,
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.1em",
        }}
      >
        {pick(footer.copy, lang)}
      </span>
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.1em",
          opacity: 0.65,
        }}
      >
        {pick(footer.built, lang)}
      </span>
    </footer>
  );
}

export type { PortfolioProps };
