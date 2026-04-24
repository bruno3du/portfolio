import type { GlobalConfig } from "payload";

export const WehelpConfig: GlobalConfig = {
  slug: "wehelp-config",
  label: "Wehelp Widget Config",
  admin: {
    group: "Settings",
  },
  fields: [
    {
      name: "surveyToken",
      type: "text",
      required: true,
      label: "Survey Token",
    },
    {
      name: "type",
      type: "select",
      required: true,
      label: "Widget Type",
      defaultValue: "box",
      options: [
        { label: "Box", value: "box" },
        { label: "Button", value: "button" },
      ],
    },
    {
      name: "messageOpen",
      type: "number",
      label: "Message Open (0 or 1)",
      defaultValue: 0,
    },
    {
      name: "language",
      type: "text",
      label: "Language",
      defaultValue: "PORTUGUESE",
    },
    {
      name: "experienceId",
      type: "text",
      label: "Experience ID",
    },
    {
      name: "internalCode",
      type: "text",
      label: "Internal Code (Customer ID)",
    },
    {
      name: "debug",
      type: "number",
      label: "Debug (0 or 1)",
      defaultValue: 0,
    },
    {
      label: "Person Info",
      type: "collapsible",
      fields: [
        {
          name: "name",
          type: "text",
          label: "Name",
        },
        {
          name: "email",
          type: "email",
          label: "Email",
        },
        {
          name: "phone",
          type: "text",
          label: "Phone",
        },
        {
          name: "dateOfBirth",
          type: "text",
          label: "Date of Birth (YYYY-MM-DD)",
        },
        {
          name: "state",
          type: "text",
          label: "State",
        },
        {
          name: "country",
          type: "text",
          label: "Country",
        },
        {
          name: "gender",
          type: "select",
          label: "Gender",
          options: [
            { label: "Male", value: "M" },
            { label: "Female", value: "F" },
          ],
        },
        {
          name: "document",
          type: "text",
          label: "Document",
        },
        {
          name: "companyUnit",
          type: "text",
          label: "Company Unit",
        },
      ],
    },
    {
      name: "customFields",
      type: "array",
      label: "Custom Fields",
      fields: [
        {
          name: "name",
          type: "text",
          required: true,
          label: "Field Name",
        },
        {
          name: "value",
          type: "text",
          required: true,
          label: "Field Value",
        },
      ],
    },
  ],
};
