import type { CollectionConfig } from "payload";

export const Projects: CollectionConfig = {
  slug: "projects",
  labels: { singular: "Project", plural: "Projects" },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["n", "title", "year", "order"],
    group: "Portfolio",
  },
  access: { read: () => true },
  defaultSort: "order",
  fields: [
    {
      name: "n",
      type: "text",
      required: true,
      admin: { description: 'Display number, e.g. "01"' },
    },
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      required: true,
      localized: true,
    },
    {
      name: "tags",
      type: "array",
      fields: [{ name: "value", type: "text", required: true }],
    },
    {
      name: "year",
      type: "text",
      required: true,
    },
    {
      name: "link",
      type: "text",
    },
    {
      name: "repo",
      type: "text",
    },
    {
      name: "order",
      type: "number",
      defaultValue: 0,
    },
  ],
};
