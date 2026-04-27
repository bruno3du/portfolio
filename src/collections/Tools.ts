import type { CollectionConfig } from "payload";

export const Tools: CollectionConfig = {
  slug: "tools",
  labels: { singular: "Tool", plural: "Tools" },
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "category", "order"],
    group: "Portfolio",
  },
  access: { read: () => true },
  defaultSort: "order",
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "category",
      type: "select",
      required: true,
      options: [
        { label: "Frontend", value: "frontend" },
        { label: "Backend", value: "backend" },
        { label: "Data", value: "data" },
        { label: "Infra", value: "infra" },
      ],
    },
    {
      name: "order",
      type: "number",
      defaultValue: 0,
    },
  ],
};
