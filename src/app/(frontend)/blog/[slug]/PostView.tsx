"use client";

import type { CSSProperties, ReactNode } from "react";
import { Fragment, useEffect, useState } from "react";
import { LangToggle } from "../../components/portfolio/sections";
import {
  Lang,
  LandingData,
  Localized,
  PostTeaser,
  pick,
} from "../../components/portfolio/types";

export type PostFull = {
  id: string | number;
  slug: string;
  title: Localized<string>;
  subtitle?: Localized<string>;
  excerpt?: Localized<string>;
  date: string;
  readingTime: number;
  tags?: { value: string }[] | null;
  intro?: Localized<string>;
  body?: Localized<{ root: LexicalNode }>;
  outro?: Localized<string>;
};

type LexicalNode = {
  type: string;
  tag?: string | number;
  format?: number | string;
  url?: string;
  fields?: { url?: string; newTab?: boolean };
  text?: string;
  children?: LexicalNode[];
  listType?: "bullet" | "number" | "check";
  language?: string;
};

const FORMAT_BOLD = 1;
const FORMAT_ITALIC = 1 << 1;
const FORMAT_STRIKETHROUGH = 1 << 2;
const FORMAT_UNDERLINE = 1 << 3;
const FORMAT_CODE = 1 << 4;

function pickLexical(
  body: Localized<{ root: LexicalNode }> | undefined,
  lang: Lang,
): { root: LexicalNode } | null {
  if (!body) return null;
  if (typeof body === "object" && "root" in body) return body as { root: LexicalNode };
  const obj = body as { pt?: { root: LexicalNode } | null; en?: { root: LexicalNode } | null };
  return obj?.[lang] ?? obj?.pt ?? obj?.en ?? null;
}

function renderText(node: LexicalNode, key: string | number): ReactNode {
  let el: ReactNode = node.text ?? "";
  const fmt = typeof node.format === "number" ? node.format : 0;
  if (fmt & FORMAT_CODE) el = <code>{el}</code>;
  if (fmt & FORMAT_BOLD) el = <strong>{el}</strong>;
  if (fmt & FORMAT_ITALIC) el = <em>{el}</em>;
  if (fmt & FORMAT_UNDERLINE) el = <u>{el}</u>;
  if (fmt & FORMAT_STRIKETHROUGH) el = <s>{el}</s>;
  return <Fragment key={key}>{el}</Fragment>;
}

function renderChildren(children: LexicalNode[] | undefined): ReactNode[] {
  return (children ?? []).map((c, i) => renderNode(c, i));
}

function renderNode(node: LexicalNode, key: string | number): ReactNode {
  switch (node.type) {
    case "text":
      return renderText(node, key);
    case "linebreak":
      return <br key={key} />;
    case "paragraph":
      return <p key={key}>{renderChildren(node.children)}</p>;
    case "heading": {
      const Tag = (node.tag || "h2") as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
      return <Tag key={key}>{renderChildren(node.children)}</Tag>;
    }
    case "quote":
      return <blockquote key={key}>{renderChildren(node.children)}</blockquote>;
    case "list": {
      const Tag = node.listType === "number" ? "ol" : "ul";
      return <Tag key={key}>{renderChildren(node.children)}</Tag>;
    }
    case "listitem":
      return <li key={key}>{renderChildren(node.children)}</li>;
    case "link":
    case "autolink": {
      const url = node.fields?.url ?? node.url ?? "#";
      const newTab = node.fields?.newTab;
      return (
        <a
          key={key}
          href={url}
          target={newTab ? "_blank" : undefined}
          rel={newTab ? "noopener noreferrer" : undefined}
        >
          {renderChildren(node.children)}
        </a>
      );
    }
    case "code":
      return (
        <pre key={key}>
          <code>{renderChildren(node.children)}</code>
        </pre>
      );
    default:
      return <Fragment key={key}>{renderChildren(node.children)}</Fragment>;
  }
}

export default function PostView({
  post,
  siblings,
  landing,
}: {
  post: PostFull;
  siblings: PostTeaser[];
  landing: LandingData;
}) {
  const [lang, setLang] = useState<Lang>("pt");
  const [progress, setProgress] = useState(0);

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

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight);
      setProgress(Math.min(1, Math.max(0, scrolled)));
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const blog = landing.blog;
  const title = pick(post.title, lang);
  const subtitle = pick(post.subtitle, lang);
  const intro = pick(post.intro, lang);
  const outro = pick(post.outro, lang);
  const body = pickLexical(post.body, lang);

  return (
    <main style={{ paddingBottom: 80 }}>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: 4,
          background: "var(--accent)",
          zIndex: 100,
          transition: "width 60ms linear",
          width: `${progress * 100}%`,
        }}
      />

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
            href="/blog"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.08em",
            }}
            className="uline"
          >
            {pick(blog.backToList, lang)}
          </a>
          <LangToggle lang={lang} setLang={setLang} />
        </div>
      </header>

      <article style={{ maxWidth: 760, margin: "0 auto", padding: "0 32px" }}>
        <div
          style={{
            paddingTop: 64,
            paddingBottom: 28,
            borderBottom: "var(--rule) solid var(--ink)",
            marginBottom: 40,
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 12,
              marginBottom: 18,
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.1em",
            }}
          >
            <span>{post.date.slice(0, 10)}</span>
            <span>·</span>
            <span>
              {post.readingTime} {pick(blog.readingTime, lang) || "MIN"}
            </span>
          </div>
          <h1
            className="display-blocky"
            style={{ fontSize: "clamp(40px, 6vw, 72px)", lineHeight: 0.95 }}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              style={{
                marginTop: 18,
                fontFamily: "var(--font-body), Georgia, serif",
                fontSize: 22,
                lineHeight: 1.4,
                fontStyle: "italic",
                color: "var(--ink)",
                opacity: 0.75,
              }}
            >
              {subtitle}
            </p>
          )}
          <div style={{ marginTop: 20, display: "flex", gap: 6, flexWrap: "wrap" }}>
            {(post.tags ?? []).map((t, i) => (
              <span key={i} className="tag" style={{ fontSize: 10 }}>
                {t.value}
              </span>
            ))}
          </div>
        </div>

        {intro && (
          <p
            style={{
              fontFamily: "var(--font-body), Georgia, serif",
              fontSize: 22,
              lineHeight: 1.5,
            }}
          >
            <span
              style={{
                float: "left",
                fontFamily: "var(--font-display)",
                fontSize: 96,
                lineHeight: 0.85,
                marginRight: 14,
                marginTop: 4,
                color: "var(--accent)",
              }}
            >
              {intro.charAt(0)}
            </span>
            {intro.slice(1)}
          </p>
        )}

        <div className="post-prose">
          {body && renderChildren(body.root.children)}

          {outro && (
            <div
              style={{
                margin: "64px 0",
                padding: "32px 28px",
                borderTop: "var(--rule) solid var(--ink)",
                borderBottom: "var(--rule) solid var(--ink)",
                background: "var(--ink)",
                color: "var(--bg)",
                fontFamily: "var(--font-display)",
                fontSize: 32,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                textTransform: "uppercase",
              }}
            >
              <span style={{ color: "var(--accent)" }}>&ldquo;</span>
              {outro}
              <span style={{ color: "var(--accent)" }}>&rdquo;</span>
            </div>
          )}
        </div>

        <AuthorCard lang={lang} bio={pick(blog.authorBio, lang)} cta={pick(blog.authorCta, lang)} />

        {siblings.length > 0 && (
          <div style={{ marginTop: 56 }}>
            <div className="sec-label">{pick(blog.morePosts, lang)}</div>
            <div
              style={{
                border: "var(--rule) solid var(--ink)",
                borderBottom: "none",
                marginTop: 12,
              }}
            >
              {siblings.map((p) => (
                <a
                  key={p.id}
                  href={`/blog/${p.slug}`}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "110px 1fr 90px",
                    gap: 16,
                    padding: "18px",
                    borderBottom: "var(--rule) solid var(--ink)",
                    alignItems: "baseline",
                  }}
                >
                  <div className="mono" style={{ fontSize: 11, fontWeight: 700 }}>
                    {p.date.slice(0, 10)}
                  </div>
                  <div>
                    <div className="display-blocky" style={{ fontSize: 18 }}>
                      {pick(p.title, lang)}
                    </div>
                  </div>
                  <div className="mono" style={{ fontSize: 11, textAlign: "right" }}>
                    {p.readingTime} {pick(blog.readingTime, lang) || "MIN"}
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        <div style={{ marginTop: 48, display: "flex", justifyContent: "space-between" }}>
          <a href="/blog" className="btn-brut ghost">
            {pick(blog.backToList, lang)}
          </a>
          <a href="/" className="btn-brut">
            {pick(blog.backHome, lang)}
          </a>
        </div>
      </article>
    </main>
  );
}

function AuthorCard({ lang, bio, cta }: { lang: Lang; bio: string; cta: string }) {
  const fallbackBio =
    lang === "pt"
      ? "Fullstack developer. Constrói SaaS. Quebra ESLint. Reclama do useEffect."
      : "Fullstack developer. Builds SaaS. Breaks ESLint. Complains about useEffect.";
  const cellStyle: CSSProperties = {
    background: "var(--accent)",
    display: "grid",
    placeItems: "center",
    borderRight: "var(--rule) solid var(--ink)",
  };
  return (
    <div
      style={{
        marginTop: 48,
        border: "var(--rule) solid var(--ink)",
        display: "grid",
        gridTemplateColumns: "120px 1fr",
      }}
    >
      <div style={cellStyle}>
        <span className="display-blocky" style={{ fontSize: 56, color: "#fff" }}>
          BE
        </span>
      </div>
      <div style={{ padding: 18 }}>
        <div className="display-blocky" style={{ fontSize: 22 }}>
          BRUNO EDUARDO
        </div>
        <p
          style={{
            marginTop: 6,
            fontFamily: "var(--font-mono)",
            fontSize: 13,
            lineHeight: 1.5,
          }}
        >
          {bio || fallbackBio}
        </p>
        <a
          href="/#contact"
          style={{
            marginTop: 8,
            display: "inline-block",
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.1em",
          }}
          className="uline"
        >
          {cta || (lang === "pt" ? "FALAR COMIGO →" : "TALK TO ME →")}
        </a>
      </div>
    </div>
  );
}
