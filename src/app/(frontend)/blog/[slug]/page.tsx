import config from "@payload-config";
import { notFound } from "next/navigation";
import { getPayload } from "payload";
import PostView, { type PostFull } from "./PostView";
import type { LandingData, PostTeaser } from "../../components/portfolio/types";

export const revalidate = 10;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return { title: `${slug} · Bruno Eduardo` };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const payload = await getPayload({ config });

  const [postRes, siblingsRes, landing] = await Promise.all([
    payload.find({
      collection: "posts",
      where: { slug: { equals: slug }, published: { equals: true } },
      limit: 1,
      locale: "all",
    }),
    payload.find({
      collection: "posts",
      where: {
        slug: { not_equals: slug },
        published: { equals: true },
      },
      sort: "-date",
      limit: 2,
      locale: "all",
    }),
    payload.findGlobal({ slug: "landing-page", locale: "all", depth: 0 }),
  ]);

  const post = postRes.docs[0];
  if (!post) notFound();

  return (
    <PostView
      post={post as unknown as PostFull}
      siblings={siblingsRes.docs as unknown as PostTeaser[]}
      landing={landing as unknown as LandingData}
    />
  );
}
