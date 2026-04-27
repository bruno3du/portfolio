import type { CollectionConfig } from "payload";

export const Socials: CollectionConfig = {
  slug: "socials",
  labels: { singular: "Social", plural: "Socials" },
  admin: {
    useAsTitle: "platform",
    defaultColumns: ["platform", "handle", "url", "order"],
    group: "Portfolio",
  },
  access: { read: () => true },
  defaultSort: "order",
  fields: [
    {
      name: "platform",
      type: "text",
      required: true,
      admin: { description: "Display label, e.g. GITHUB, LINKEDIN" },
    },
    {
      name: "handle",
      type: "text",
      required: true,
    },
    {
      name: "url",
      type: "text",
    },
    {
      name: "order",
      type: "number",
      defaultValue: 0,
    },
  ],
};
