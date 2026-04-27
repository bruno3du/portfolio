import config from "@payload-config";
import { getPayload } from "payload";
import LoadWidget from "./components/load-widget";
import Portfolio from "./components/portfolio/Portfolio";
import type {
  ExperienceItem,
  LandingData,
  PortfolioProps,
  PostTeaser,
  ProjectItem,
  SocialItem,
  ToolItem,
} from "./components/portfolio/types";

export const revalidate = 10;

export default async function Home() {
  const payload = await getPayload({ config });

  const [landing, toolsRes, projectsRes, experiencesRes, socialsRes, postsRes] =
    await Promise.all([
      payload.findGlobal({ slug: "landing-page", locale: "all", depth: 1 }),
      payload.find({
        collection: "tools",
        sort: "order",
        limit: 100,
        pagination: false,
      }),
      payload.find({
        collection: "projects",
        sort: "order",
        limit: 50,
        pagination: false,
        locale: "all",
      }),
      payload.find({
        collection: "experiences",
        sort: "order",
        limit: 50,
        pagination: false,
        locale: "all",
      }),
      payload.find({
        collection: "socials",
        sort: "order",
        limit: 20,
        pagination: false,
      }),
      payload.find({
        collection: "posts",
        sort: "-date",
        limit: 5,
        pagination: false,
        locale: "all",
        where: { published: { equals: true } },
      }),
    ]);

  const props: PortfolioProps = {
    landing: landing as unknown as LandingData,
    tools: toolsRes.docs as unknown as ToolItem[],
    projects: projectsRes.docs as unknown as ProjectItem[],
    experiences: experiencesRes.docs as unknown as ExperienceItem[],
    socials: socialsRes.docs as unknown as SocialItem[],
    posts: postsRes.docs as unknown as PostTeaser[],
  };

  return (
    <>
      <Portfolio {...props} />
      <LoadWidget />
    </>
  );
}
