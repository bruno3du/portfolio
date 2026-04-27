import type { CollectionConfig } from "payload";

export const Experiences: CollectionConfig = {
  slug: "experiences",
  labels: { singular: "Experience", plural: "Experiences" },
  admin: {
    useAsTitle: "role",
    defaultColumns: ["role", "company", "year", "order"],
    group: "Portfolio",
  },
  access: { read: () => true },
  defaultSort: "order",
  fields: [
    {
      name: "year",
      type: "text",
      required: true,
      admin: { description: 'e.g. "2025—" or "2022—2023"' },
    },
    {
      name: "role",
      type: "text",
      required: true,
      localized: true,
    },
    {
      name: "company",
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
      name: "order",
      type: "number",
      defaultValue: 0,
    },
  ],
};
