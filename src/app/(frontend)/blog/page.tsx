import config from "@payload-config";
import { getPayload } from "payload";
import type { LandingData, PostTeaser } from "../components/portfolio/types";
import BlogIndex from "./BlogIndex";

export const revalidate = 10;

export const metadata = {
  title: "Blog · Bruno Eduardo",
};

export default async function BlogPage() {
  const payload = await getPayload({ config });

  const [landing, postsRes] = await Promise.all([
    payload.findGlobal({ slug: "landing-page", locale: "all", depth: 0 }),
    payload.find({
      collection: "posts",
      sort: "-date",
      limit: 100,
      pagination: false,
      locale: "all",
      where: { published: { equals: true } },
    }),
  ]);

  return (
    <BlogIndex
      landing={landing as LandingData}
      posts={postsRes.docs as PostTeaser[]}
    />
  );
}
