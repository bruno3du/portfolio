import type { GlobalConfig } from "payload";

export const LandingPage: GlobalConfig = {
  slug: "landing-page",
  label: "Landing Page",
  admin: { group: "Content" },
  access: { read: () => true },
  fields: [
    {
      name: "meta",
      type: "group",
      fields: [
        { name: "name", type: "text", required: true, defaultValue: "Bruno Eduardo" },
        { name: "role", type: "text", localized: true },
        { name: "email", type: "email", required: true },
        { name: "mastheadEdition", type: "text", defaultValue: "VOLUME IV · EDITION 26" },
      ],
    },
    {
      name: "nav",
      type: "group",
      fields: [
        { name: "work", type: "text", localized: true },
        { name: "about", type: "text", localized: true },
        { name: "blog", type: "text", localized: true },
        { name: "contact", type: "text", localized: true },
      ],
    },
    {
      name: "hero",
      type: "group",
      fields: [
        { name: "kicker", type: "text", localized: true },
        { name: "headlineLine1", type: "text", localized: true },
        { name: "headlineLine2", type: "text", localized: true, admin: { description: "Rendered italic + accent color" } },
        { name: "headlineLine3", type: "text", localized: true },
        { name: "sub", type: "textarea", localized: true },
        { name: "ctaPrimary", type: "text", localized: true },
        { name: "ctaSecondary", type: "text", localized: true },
      ],
    },
    {
      name: "about",
      type: "group",
      fields: [
        { name: "label", type: "text", localized: true, defaultValue: "// SOBRE" },
        { name: "title", type: "text", localized: true },
        { name: "body", type: "textarea", localized: true },
        {
          name: "facts",
          type: "array",
          minRows: 0,
          maxRows: 6,
          fields: [
            { name: "value", type: "text", required: true },
            { name: "label", type: "text", required: true, localized: true },
          ],
        },
      ],
    },
    {
      name: "skills",
      type: "group",
      fields: [
        { name: "label", type: "text", localized: true, defaultValue: "// STACK" },
        { name: "title", type: "text", localized: true },
        {
          name: "categoryLabels",
          type: "group",
          admin: { description: "Display labels for each tool category" },
          fields: [
            { name: "frontend", type: "text", localized: true, defaultValue: "FRONTEND" },
            { name: "backend", type: "text", localized: true, defaultValue: "BACKEND" },
            { name: "data", type: "text", localized: true, defaultValue: "DADOS" },
            { name: "infra", type: "text", localized: true, defaultValue: "INFRA" },
          ],
        },
      ],
    },
    {
      name: "work",
      type: "group",
      fields: [
        { name: "label", type: "text", localized: true, defaultValue: "// TRABALHO" },
        { name: "title", type: "text", localized: true },
        { name: "sub", type: "text", localized: true },
      ],
    },
    {
      name: "timeline",
      type: "group",
      fields: [
        { name: "label", type: "text", localized: true, defaultValue: "// HISTÓRICO" },
        { name: "title", type: "text", localized: true },
      ],
    },
    {
      name: "github",
      type: "group",
      fields: [
        { name: "label", type: "text", localized: true, defaultValue: "// OPEN SOURCE" },
        { name: "title", type: "text", localized: true },
        {
          name: "stats",
          type: "array",
          minRows: 0,
          maxRows: 8,
          fields: [
            { name: "value", type: "text", required: true },
            { name: "label", type: "text", required: true, localized: true },
          ],
        },
        { name: "reposTitle", type: "text", localized: true },
        {
          name: "repos",
          type: "array",
          fields: [
            { name: "name", type: "text", required: true },
            { name: "description", type: "text", required: true, localized: true },
            { name: "stars", type: "text", required: true },
            { name: "lang", type: "text", required: true },
          ],
        },
      ],
    },
    {
      name: "blog",
      type: "group",
      fields: [
        { name: "label", type: "text", localized: true, defaultValue: "// BLOG" },
        { name: "title", type: "text", localized: true },
        { name: "sub", type: "text", localized: true },
        { name: "readMore", type: "text", localized: true, defaultValue: "LER TUDO" },
        { name: "readingTime", type: "text", localized: true, defaultValue: "MIN" },
        { name: "backToList", type: "text", localized: true, defaultValue: "← VOLTAR AOS POSTS" },
        { name: "backHome", type: "text", localized: true, defaultValue: "← VOLTAR PRO INÍCIO" },
        { name: "filterLabel", type: "text", localized: true, defaultValue: "// FILTRAR:" },
        { name: "indexHeadlinePre", type: "text", localized: true, defaultValue: "todos os" },
        { name: "indexHeadlinePost", type: "text", localized: true, defaultValue: "posts." },
        { name: "morePosts", type: "text", localized: true, defaultValue: "// MAIS POSTS" },
        { name: "emptyState", type: "text", localized: true, defaultValue: "Nada por aqui ainda." },
        { name: "authorBio", type: "textarea", localized: true },
        { name: "authorCta", type: "text", localized: true, defaultValue: "FALAR COMIGO →" },
      ],
    },
    {
      name: "contact",
      type: "group",
      fields: [
        { name: "label", type: "text", localized: true, defaultValue: "// CONTATO" },
        { name: "title", type: "text", localized: true },
        { name: "sub", type: "text", localized: true },
      ],
    },
    {
      name: "footer",
      type: "group",
      fields: [
        { name: "copy", type: "text", localized: true },
        { name: "built", type: "text", localized: true },
      ],
    },
  ],
};
