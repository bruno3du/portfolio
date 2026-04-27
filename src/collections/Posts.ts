import type { CollectionConfig } from "payload";
import { lexicalEditor } from "@payloadcms/richtext-lexical";

export const Posts: CollectionConfig = {
  slug: "posts",
  labels: { singular: "Post", plural: "Posts" },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "date", "published"],
    group: "Blog",
  },
  access: { read: () => true },
  defaultSort: "-date",
  fields: [
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      index: true,
    },
    {
      name: "title",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "subtitle",
      type: "text",
      localized: true,
    },
    {
      name: "excerpt",
      type: "textarea",
      localized: true,
    },
    {
      name: "date",
      type: "date",
      required: true,
    },
    {
      name: "readingTime",
      type: "number",
      required: true,
      defaultValue: 5,
      admin: { description: "Minutes" },
    },
    {
      name: "tags",
      type: "array",
      fields: [{ name: "value", type: "text", required: true }],
    },
    {
      name: "intro",
      type: "textarea",
      localized: true,
      admin: { description: "Drop-cap opening paragraph" },
    },
    {
      name: "body",
      type: "richText",
      localized: true,
      editor: lexicalEditor(),
    },
    {
      name: "outro",
      type: "textarea",
      localized: true,
      admin: { description: "Pull quote shown after the body" },
    },
    {
      name: "published",
      type: "checkbox",
      defaultValue: true,
    },
  ],
};
