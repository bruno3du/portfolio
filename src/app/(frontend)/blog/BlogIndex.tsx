"use client";

import { useEffect, useMemo, useState } from "react";
import { LangToggle } from "../components/portfolio/sections";
import {
  Lang,
  LandingData,
  PostTeaser,
  pick,
} from "../components/portfolio/types";

export default function BlogIndex({
  landing,
  posts,
}: {
  landing: LandingData;
  posts: PostTeaser[];
}) {
  const [lang, setLang] = useState<Lang>("pt");
  const [activeTag, setActiveTag] = useState("ALL");

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

  const allTags = useMemo(() => {
    const s = new Set<string>();
    posts.forEach((p) => (p.tags ?? []).forEach((t) => s.add(t.value)));
    return ["ALL", ...Array.from(s)];
  }, [posts]);

  const filtered =
    activeTag === "ALL"
      ? posts
      : posts.filter((p) => (p.tags ?? []).some((t) => t.value === activeTag));

  const blog = landing.blog;
  const footer = landing.footer;

  return (
    <main style={{ maxWidth: 1100, margin: "0 auto", minHeight: "100vh", paddingBottom: 80 }}>
      <header
        style={{
          borderBottom: "var(--rule) solid var(--ink)",
          padding: "20px 32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: 0,
          background: "var(--bg)",
          zIndex: 50,
        }}
      >
        <a
          href="/"
          style={{
            fontFamily: "var(--font-blocky)",
            fontSize: 20,
            fontWeight: 900,
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
          }}
        >
          BRUNO/EDU<span style={{ color: "var(--accent)" }}>.</span>
        </a>
        <div style={{ display: "flex", gap: 22, alignItems: "center" }}>
          <a
            href="/"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.08em",
            }}
            className="uline"
          >
            {(pick(blog.backHome, lang) || "← Home").replace("←", "").trim()}
          </a>
          <LangToggle lang={lang} setLang={setLang} />
        </div>
      </header>

      <section style={{ padding: "40px 32px 48px", borderBottom: "var(--rule) solid var(--ink)" }}>
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
          <span>VOLUME IV · BLOG INDEX</span>
          <span>{pick(blog.label, lang)}</span>
          <span>
            {posts.length} {lang === "pt" ? "POSTS" : "POSTS"}
          </span>
        </div>
        <h1
          style={{
            marginTop: 28,
            fontFamily: "var(--font-display)",
            fontSize: "clamp(72px, 12vw, 184px)",
            lineHeight: 0.86,
            letterSpacing: "-0.04em",
            fontWeight: 400,
          }}
        >
          {pick(blog.indexHeadlinePre, lang)}
          <br />
          <em style={{ color: "var(--accent)", fontStyle: "italic" }}>
            {pick(blog.indexHeadlinePost, lang)}
          </em>
        </h1>
        <p
          style={{
            marginTop: 18,
            fontSize: 18,
            fontFamily: "var(--font-body), Georgia, serif",
            maxWidth: 600,
            lineHeight: 1.5,
          }}
        >
          {pick(blog.sub, lang)}
        </p>
      </section>

      <section
        style={{
          padding: "24px 32px",
          borderBottom: "var(--rule) solid var(--ink)",
          background: "var(--ink)",
          color: "var(--bg)",
        }}
      >
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.1em",
              marginRight: 6,
              color: "var(--accent)",
            }}
          >
            {pick(blog.filterLabel, lang) || (lang === "pt" ? "// FILTRAR:" : "// FILTER:")}
          </span>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              style={{
                padding: "6px 12px",
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.1em",
                background: activeTag === tag ? "var(--accent)" : "transparent",
                color: activeTag === tag ? "var(--ink)" : "var(--bg)",
                border: "2px solid currentColor",
              }}
            >
              {tag}
            </button>
          ))}
        </div>
      </section>

      <section>
        {filtered.map((p, i) => (
          <BlogRow
            key={p.id}
            post={p}
            index={i}
            lang={lang}
            readingTimeLabel={pick(blog.readingTime, lang) || "MIN"}
          />
        ))}
        {filtered.length === 0 && (
          <div style={{ padding: 80, textAlign: "center", fontFamily: "var(--font-mono)" }}>
            <div className="display-blocky" style={{ fontSize: 48, marginBottom: 12 }}>
              :(
            </div>
            <p>{pick(blog.emptyState, lang) || (lang === "pt" ? "Nada por aqui ainda." : "Nothing here yet.")}</p>
          </div>
        )}
      </section>

      <footer
        style={{
          padding: "32px",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
          borderTop: "var(--rule) solid var(--ink)",
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
        <a
          href="/"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.1em",
          }}
          className="uline"
        >
          {pick(blog.backHome, lang)}
        </a>
      </footer>
    </main>
  );
}

function BlogRow({
  post,
  index,
  lang,
  readingTimeLabel,
}: {
  post: PostTeaser;
  index: number;
  lang: Lang;
  readingTimeLabel: string;
}) {
  return (
    <a
      href={`/blog/${post.slug}`}
      style={{
        display: "grid",
        gridTemplateColumns: "60px 130px 1fr 220px 90px",
        gap: 20,
        padding: "28px 32px",
        borderBottom: "var(--rule) solid var(--ink)",
        alignItems: "baseline",
        background: "var(--bg)",
        transition: "background 120ms, padding-left 120ms",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "var(--accent)";
        e.currentTarget.style.paddingLeft = "40px";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "var(--bg)";
        e.currentTarget.style.paddingLeft = "32px";
      }}
    >
      <div className="display-blocky" style={{ fontSize: 22, opacity: 0.5 }}>
        {String(index + 1).padStart(2, "0")}
      </div>
      <div
        className="mono"
        style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em" }}
      >
        {post.date.slice(0, 10)}
      </div>
      <div>
        <div className="display-blocky" style={{ fontSize: 26, lineHeight: 1.05 }}>
          {pick(post.title, lang)}
        </div>
        <p
          style={{
            marginTop: 8,
            fontSize: 14,
            fontFamily: "var(--font-body), Georgia, serif",
            lineHeight: 1.45,
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
      <div className="mono" style={{ fontSize: 11, fontWeight: 700, textAlign: "right" }}>
        {post.readingTime} {readingTimeLabel}
      </div>
    </a>
  );
}
