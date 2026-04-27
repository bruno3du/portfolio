import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import sharp from "sharp";
import { fileURLToPath } from "url";

import { Experiences } from "./collections/Experiences";
import { Media } from "./collections/Media";
import { Posts } from "./collections/Posts";
import { Projects } from "./collections/Projects";
import { Socials } from "./collections/Socials";
import { Tools } from "./collections/Tools";
import { Users } from "./collections/Users";
import { LandingPage } from "./globals/LandingPage";
import { WehelpConfig } from "./globals/WehelpConfig";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Tools, Projects, Experiences, Socials, Posts],
  globals: [LandingPage, WehelpConfig],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URL || "",
  }),
  sharp,
  plugins: [],
  localization: {
    locales: [
      { code: "pt", label: "Português" },
      { code: "en", label: "English" },
    ],
    defaultLocale: "pt",
    fallback: true,
  },
});
