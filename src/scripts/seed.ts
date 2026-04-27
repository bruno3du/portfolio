import { getPayload } from "payload";
import config from "@payload-config";

type LexicalChild = {
  type: string;
  text?: string;
  tag?: string;
  children?: LexicalChild[];
  format?: number | string;
  detail?: number;
  mode?: string;
  style?: string;
  indent?: number;
  version?: number;
  direction?: "ltr" | "rtl" | null;
};

const TEXT = (text: string): LexicalChild => ({
  type: "text",
  text,
  detail: 0,
  format: 0,
  mode: "normal",
  style: "",
  version: 1,
});

const PARA = (text: string): LexicalChild => ({
  type: "paragraph",
  format: "",
  indent: 0,
  version: 1,
  direction: "ltr",
  children: [TEXT(text)],
});

const HEADING = (text: string, tag: "h2" | "h3" = "h2"): LexicalChild => ({
  type: "heading",
  tag,
  format: "",
  indent: 0,
  version: 1,
  direction: "ltr",
  children: [TEXT(text)],
});

const ROOT = (children: LexicalChild[]) => ({
  root: {
    type: "root",
    format: "",
    indent: 0,
    version: 1,
    direction: "ltr",
    children,
  },
});

const tools = [
  { name: "TypeScript", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Tailwind", category: "frontend" },
  { name: "Vite", category: "frontend" },
  { name: "Framer Motion", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "tRPC", category: "backend" },
  { name: "Prisma", category: "backend" },
  { name: "Zod", category: "backend" },
  { name: "Bun", category: "backend" },
  { name: "PostgreSQL", category: "data" },
  { name: "MongoDB", category: "data" },
  { name: "Redis", category: "data" },
  { name: "Supabase", category: "data" },
  { name: "PlanetScale", category: "data" },
  { name: "AWS (EC2, S3, Lambda)", category: "infra" },
  { name: "Docker", category: "infra" },
  { name: "GitHub Actions", category: "infra" },
  { name: "Vercel", category: "infra" },
  { name: "Cloudflare", category: "infra" },
];

const projects = [
  {
    n: "01",
    title: "FINANCEIRO PRO",
    year: "2025",
    tags: ["NEXT.JS", "POSTGRES", "AWS"],
    pt:
      "Dashboard B2B de gestão financeira para PMEs. 3.2k empresas ativas, R$ 180M processados/mês. Eu fiz o frontend inteiro do zero e ajudei na arquitetura do backend.",
    en:
      "B2B financial management dashboard for SMBs. 3.2k active companies, R$180M processed/month. I built the frontend from scratch and helped with backend architecture.",
  },
  {
    n: "02",
    title: "ROUTEHQ",
    year: "2024",
    tags: ["REACT", "NODE", "MONGODB"],
    pt:
      "Plataforma de logística para entregadores de última milha. Otimização de rotas com Mapbox + algoritmo próprio. Reduziu tempo médio de entrega em 23%.",
    en:
      "Last-mile delivery logistics platform. Route optimization with Mapbox + custom algorithm. Reduced average delivery time by 23%.",
  },
  {
    n: "03",
    title: "TIPOGRAFIA.DEV",
    year: "2024",
    tags: ["VITE", "OSS", "DESIGN"],
    pt:
      "Side project: ferramenta open source para testar pares tipográficos. 8.4k estrelas no GitHub. Aparentemente outras pessoas também acham fontes interessantes.",
    en:
      "Side project: open-source typography pairing tool. 8.4k stars on GitHub. Apparently other people also find fonts interesting.",
  },
  {
    n: "04",
    title: "MERCATA",
    year: "2023",
    tags: ["NEXT.JS", "PRISMA", "STRIPE"],
    pt:
      "Marketplace de produtores rurais. Cliente fechou Series A após o lançamento. Não estou dizendo que foi por minha causa mas também não estou dizendo que não foi.",
    en:
      "Marketplace for rural producers. Client closed a Series A after launch. Not saying it was because of me, but also not saying it wasn't.",
  },
];

const experiences = [
  {
    year: "2025—",
    company: "FREELA / FINANCEIRO PRO",
    pt: {
      role: "FULLSTACK SÊNIOR",
      desc:
        "Liderando frontend e arquitetura. Mentorando 2 devs juniores que agora sabem mais que eu sobre Postgres.",
    },
    en: {
      role: "SENIOR FULLSTACK",
      desc:
        "Leading frontend and architecture. Mentoring 2 juniors who now know more than me about Postgres.",
    },
  },
  {
    year: "2023—2025",
    company: "ROUTE TECHNOLOGIES",
    pt: {
      role: "DESENVOLVEDOR FULLSTACK",
      desc:
        "Construí a plataforma de logística do zero. Aprendi que algoritmos de roteamento são tipo Tetris mas pior.",
    },
    en: {
      role: "FULLSTACK DEVELOPER",
      desc:
        "Built the logistics platform from scratch. Learned routing algorithms are like Tetris but worse.",
    },
  },
  {
    year: "2022—2023",
    company: "AGÊNCIA NORTE",
    pt: {
      role: "DESENVOLVEDOR FRONTEND",
      desc:
        "Sites para clientes. Aprendi a dizer 'não' para o cliente que queria carrossel auto-play sem controles.",
    },
    en: {
      role: "FRONTEND DEVELOPER",
      desc:
        "Client websites. Learned to say 'no' to the client who wanted an auto-playing carousel without controls.",
    },
  },
  {
    year: "2021",
    company: "STARTUP DE EDTECH",
    pt: {
      role: "ESTAGIÁRIO",
      desc:
        "Primeiro emprego de verdade. Quebrei a produção uma vez. Aprendi MUITO rápido o que é git revert.",
    },
    en: {
      role: "INTERN",
      desc:
        "First real job. Broke production once. Learned VERY fast what git revert is.",
    },
  },
];

const socials = [
  {
    platform: "GITHUB",
    handle: "@brunoeduardo",
    url: "https://github.com/brunoeduardo",
  },
  {
    platform: "TWITTER/X",
    handle: "@brunoeduardo_",
    url: "https://x.com/brunoeduardo_",
  },
  {
    platform: "LINKEDIN",
    handle: "/in/brunoeduardo",
    url: "https://linkedin.com/in/brunoeduardo",
  },
  {
    platform: "EMAIL",
    handle: "bruno@exemplo.dev",
    url: "mailto:bruno@exemplo.dev",
  },
];

const sampleSectionsPt = [
  [
    "1. O ARRAY DE DEPENDÊNCIAS VAZIO E A PROMESSA QUEBRADA",
    'Você escreve [] porque "só quer rodar uma vez". O ESLint reclama. Você ignora. Em produção, o usuário entra no perfil errado e você pega 4 horas pra entender por quê. Lição: o array vazio não é um truque. Se você usa uma variável dentro do effect, ela DEVE estar nas dependências. Sempre.',
  ],
  [
    "2. CHAMAR setState NO EFFECT SEM CONDIÇÃO",
    "Você escreve um effect que faz setCount(count + 1). Renderiza. O effect roda. Renderiza de novo. O effect roda. Bem-vindo ao loop infinito mais comum do mundo. Use functional updates ou um useReducer.",
  ],
  [
    "3. ESQUECER DO CLEANUP",
    "Subscriptions, timers, event listeners. Se você abriu, fecha. Se não fechar, o usuário troca de tela e o seu setInterval continua tentando atualizar um componente desmontado. O React vai gritar. Com razão.",
  ],
  [
    "4. ASYNC DIRETO NO useEffect",
    "Você escreve useEffect(async () => {...}). Não funciona como você espera. A função retornada pelo useEffect é o cleanup, não uma Promise. Crie uma função interna async e chame ela. Eu sei, é chato. Mas é assim.",
  ],
  [
    "5. DEPENDÊNCIAS QUE MUDAM A CADA RENDER",
    "Você passa um objeto literal como dependência: { id }. Toda render é um objeto novo. Boom, effect roda toda render. Use useMemo, ou desestrutura no nível superior.",
  ],
  [
    "6. RACE CONDITIONS EM FETCHES",
    "Usuário troca de página. Antes do primeiro fetch terminar, o segundo começa. O primeiro termina depois e sobrescreve os dados certos. Solução: AbortController, ou uma flag isCurrent no cleanup.",
  ],
  [
    "7. USAR EFFECT QUANDO NÃO PRECISA",
    "Pergunta importante: você precisa MESMO de um useEffect aqui? Cálculos derivados podem ser feitos durante o render. Reagir a eventos pode ser feito em handlers. O useEffect é pra sincronizar com sistemas externos. Use com moderação.",
  ],
];

const sampleSectionsEn = [
  [
    "1. THE EMPTY DEPENDENCY ARRAY AND THE BROKEN PROMISE",
    'You write [] because you "just want it to run once." ESLint complains. You ignore it. In production, the user lands on the wrong profile and you spend 4 hours understanding why. Lesson: the empty array isn\'t a trick. If you use a variable inside the effect, it MUST be in the dependencies. Always.',
  ],
  [
    "2. CALLING setState INSIDE THE EFFECT WITHOUT A CONDITION",
    "You write an effect that does setCount(count + 1). Renders. Effect runs. Renders again. Effect runs. Welcome to the most common infinite loop in the world. Use functional updates or a useReducer.",
  ],
  [
    "3. FORGETTING THE CLEANUP",
    "Subscriptions, timers, event listeners. If you open it, close it. If you don't, the user switches screens and your setInterval keeps trying to update an unmounted component. React will yell. Rightfully.",
  ],
  [
    "4. ASYNC DIRECTLY IN useEffect",
    "You write useEffect(async () => {...}). It doesn't work the way you expect. The function returned by useEffect is the cleanup, not a Promise. Create an internal async function and call it. I know, it's annoying. But it's how it is.",
  ],
  [
    "5. DEPENDENCIES THAT CHANGE EVERY RENDER",
    "You pass an object literal as a dependency: { id }. Every render is a new object. Boom, effect runs every render. Use useMemo, or destructure at the top level.",
  ],
  [
    "6. RACE CONDITIONS IN FETCHES",
    "User switches pages. Before the first fetch finishes, the second one starts. The first finishes later and overwrites the correct data. Solution: AbortController, or an isCurrent flag in the cleanup.",
  ],
  [
    "7. USING EFFECT WHEN YOU DON'T NEED IT",
    "Important question: do you REALLY need a useEffect here? Derived calculations can be done during render. Reacting to events can be done in handlers. useEffect is for syncing with external systems. Use sparingly.",
  ],
];

function buildBody(sections: string[][]): any {
  const children: LexicalChild[] = [];
  for (const [h, p] of sections) {
    children.push(HEADING(h, "h2"));
    children.push(PARA(p));
  }
  return ROOT(children);
}

const posts = [
  {
    slug: "use-effect-armadilhas",
    date: "2026-04-12",
    readingTime: 8,
    tags: ["REACT", "TYPESCRIPT"],
    pt: {
      title:
        "AS 7 ARMADILHAS DO useEffect QUE VÃO TE FAZER CHORAR ÀS 3 DA MANHÃ",
      subtitle:
        "Um guia honesto, com exemplos, sobre o hook mais traiçoeiro do React.",
      excerpt: "Spoiler: a quinta é sobre dependency arrays e ela é pessoal.",
      intro:
        "Eu já chorei por causa de useEffect. Você provavelmente também. Aqui estão as sete armadilhas mais brutais que eu já caí — e como sair delas sem perder o cabelo.",
      body: buildBody(sampleSectionsPt),
      outro:
        "Se você sobreviveu a essas sete, você tá pronto. Se não, bem-vindo ao clube — me adiciona no GitHub.",
    },
    en: {
      title: "THE 7 useEffect TRAPS THAT WILL MAKE YOU CRY AT 3 AM",
      subtitle:
        "An honest guide, with examples, about React's most treacherous hook.",
      excerpt:
        "Spoiler: the fifth is about dependency arrays and it's personal.",
      intro:
        "I've cried because of useEffect. You probably have too. Here are the seven most brutal traps I've fallen into — and how to escape them without losing your hair.",
      body: buildBody(sampleSectionsEn),
      outro:
        "If you survived these seven, you're ready. If not, welcome to the club — add me on GitHub.",
    },
  },
  {
    slug: "postgres-vs-mongo",
    date: "2026-03-28",
    readingTime: 12,
    tags: ["BANCO", "BACKEND"],
    pt: {
      title: "POSTGRES VS MONGODB EM 2026: PAREM DE BRIGAR, OS DOIS SÃO BONS",
      subtitle: null,
      excerpt:
        "Eu uso os dois. Eu sei. Esse texto é uma terapia, não um tutorial.",
      intro: "Trabalhei o suficiente com os dois pra ter opiniões. Aqui vão.",
      body: ROOT([
        PARA(
          "Eu uso os dois. Eu sei. Esse texto é uma terapia, não um tutorial.",
        ),
      ]),
      outro: "Use o que faz sentido. Pare de brigar.",
    },
    en: {
      title: "POSTGRES VS MONGODB IN 2026: STOP FIGHTING, BOTH ARE GOOD",
      subtitle: null,
      excerpt: "I use both. I know. This text is therapy, not a tutorial.",
      intro: "I've worked enough with both to have opinions. Here they are.",
      body: ROOT([
        PARA("I use both. I know. This text is therapy, not a tutorial."),
      ]),
      outro: "Use what makes sense. Stop fighting.",
    },
  },
  {
    slug: "freelance-precificacao",
    date: "2026-03-10",
    readingTime: 6,
    tags: ["CARREIRA", "FREELA"],
    pt: {
      title: "COMO EU PARO DE COBRAR R$ 30 POR HORA: UM DIÁRIO",
      subtitle: null,
      excerpt:
        "A história de como aprendi a precificar projetos sem vender meu fígado no processo.",
      intro: "Eu cobrava R$ 30/h. Hoje cobro mais. Aqui está o caminho.",
      body: ROOT([
        PARA(
          "A história de como aprendi a precificar projetos sem vender meu fígado no processo.",
        ),
      ]),
      outro: "Cobre o que vale. Sempre.",
    },
    en: {
      title: "HOW I STOPPED CHARGING $6/HR: A DIARY",
      subtitle: null,
      excerpt:
        "The story of learning to price projects without selling my liver in the process.",
      intro: "I used to charge $6/hr. Now I charge more. Here's the path.",
      body: ROOT([
        PARA(
          "The story of learning to price projects without selling my liver in the process.",
        ),
      ]),
      outro: "Charge what it's worth. Always.",
    },
  },
  {
    slug: "next-app-router",
    date: "2026-02-22",
    readingTime: 15,
    tags: ["NEXT.JS", "REACT"],
    pt: {
      title: "NEXT.JS APP ROUTER: O QUE EU APRENDI MIGRANDO 14 PROJETOS",
      subtitle: null,
      excerpt:
        "RSC, server actions, e por que o cache vai te dar pesadelos. Mas também: por que vale a pena.",
      intro:
        "Migrei 14 projetos do pages router pro app router. Algumas anotações.",
      body: ROOT([
        PARA(
          "RSC, server actions, e por que o cache vai te dar pesadelos. Mas também: por que vale a pena.",
        ),
      ]),
      outro: "Vale a pena. Mas leia os docs.",
    },
    en: {
      title: "NEXT.JS APP ROUTER: WHAT I LEARNED MIGRATING 14 PROJECTS",
      subtitle: null,
      excerpt:
        "RSC, server actions, and why caching will haunt you. But also: why it's worth it.",
      intro:
        "I migrated 14 projects from pages router to app router. A few notes.",
      body: ROOT([
        PARA(
          "RSC, server actions, and why caching will haunt you. But also: why it's worth it.",
        ),
      ]),
      outro: "It's worth it. But read the docs.",
    },
  },
  {
    slug: "monorepo-turborepo",
    date: "2026-02-05",
    readingTime: 10,
    tags: ["TOOLING", "DEVOPS"],
    pt: {
      title: "MONOREPOS COM TURBOREPO: PARA E PARA QUEM",
      subtitle: null,
      excerpt: "Não é pra todo mundo. E tudo bem. Aqui está como decidir.",
      intro: "Turborepo é incrível. Também é exagero pra muitos times.",
      body: ROOT([
        PARA("Não é pra todo mundo. E tudo bem. Aqui está como decidir."),
      ]),
      outro: "Decida com base no time, não na hype.",
    },
    en: {
      title: "MONOREPOS WITH TURBOREPO: WHO IT'S FOR",
      subtitle: null,
      excerpt: "Not for everyone. And that's fine. Here's how to decide.",
      intro: "Turborepo is great. It's also overkill for many teams.",
      body: ROOT([
        PARA("Not for everyone. And that's fine. Here's how to decide."),
      ]),
      outro: "Decide based on the team, not the hype.",
    },
  },
];

const landingPt = {
  meta: {
    name: "Bruno Eduardo",
    role: "Fullstack Developer",
    email: "bruno@exemplo.dev",
    mastheadEdition: "VOLUME IV · EDITION 26",
  },
  nav: { work: "TRABALHO", about: "SOBRE", blog: "BLOG", contact: "CONTATO" },
  hero: {
    kicker: "DESENVOLVEDOR FULLSTACK · DISPONÍVEL Q3/2026",
    headlineLine1: "EU CONSTRUO",
    headlineLine2: "COISAS QUE",
    headlineLine3: "FUNCIONAM.",
    sub:
      "Bruno Eduardo. 4+ anos transformando café em SaaS. TypeScript, React, Node, Postgres. Você tem a ideia, eu tenho o teclado mecânico.",
    ctaPrimary: "ME CONTRATA",
    ctaSecondary: "VER CÓDIGO",
  },
  about: {
    label: "// SOBRE",
    title: "OI, EU SOU O BRUNO.",
    body:
      "Eu construo produtos digitais que as pessoas realmente usam — não os que ficam num portfólio juntando poeira. Comecei no PHP achando que era hacker, virei adulto no TypeScript e hoje passo metade do dia gritando com o ESLint e a outra metade aprendendo coisas novas. Especialidade: dashboards de SaaS que não fazem o usuário querer chorar.",
    facts: [
      { value: "4+", label: "ANOS DE EXPERIÊNCIA" },
      { value: "27", label: "PROJETOS ENVIADOS" },
      { value: "∞", label: "BUGS RESOLVIDOS" },
      { value: "3", label: "TECLADOS QUEBRADOS" },
    ],
  },
  skills: {
    label: "// STACK",
    title: "MINHAS FERRAMENTAS.",
    categoryLabels: {
      frontend: "FRONTEND",
      backend: "BACKEND",
      data: "DADOS",
      infra: "INFRA",
    },
  },
  work: {
    label: "// TRABALHO",
    title: "PROJETOS SELECIONADOS.",
    sub: "Coisas das quais eu não tenho vergonha.",
  },
  timeline: { label: "// HISTÓRICO", title: "O CAMINHO ATÉ AQUI." },
  github: {
    label: "// OPEN SOURCE",
    title: "CÓDIGO ABERTO.",
    stats: [
      { value: "847", label: "CONTRIBUIÇÕES (12 MESES)" },
      { value: "12.3K", label: "ESTRELAS RECEBIDAS" },
      { value: "38", label: "REPOSITÓRIOS PÚBLICOS" },
      { value: "127", label: "PRs MESCLADOS" },
    ],
    reposTitle: "REPOS EM DESTAQUE",
    repos: [
      {
        name: "tipografia.dev",
        description: "Ferramenta de pareamento tipográfico",
        stars: "8.4k",
        lang: "TypeScript",
      },
      {
        name: "use-async-state",
        description: "Hook React para estados assíncronos sem dor",
        stars: "2.1k",
        lang: "TypeScript",
      },
      {
        name: "brutalist-ui",
        description: "Componentes brutalistas. Sem rounded-lg.",
        stars: "1.6k",
        lang: "TypeScript",
      },
      {
        name: "pg-snapshot",
        description: "Snapshots de Postgres em CI/CD",
        stars: "180",
        lang: "Go",
      },
    ],
  },
  blog: {
    label: "// BLOG",
    title: "EU ESCREVO ÀS VEZES.",
    sub: "Sobre código, carreira, e por que useEffect vai te trair.",
    readMore: "LER TUDO",
    readingTime: "MIN",
    backToList: "← VOLTAR AOS POSTS",
    backHome: "← VOLTAR PRO INÍCIO",
    filterLabel: "// FILTRAR:",
    indexHeadlinePre: "todos os",
    indexHeadlinePost: "posts.",
    morePosts: "// MAIS POSTS",
    emptyState: "Nada por aqui ainda.",
    authorBio:
      "Fullstack developer. Constrói SaaS. Quebra ESLint. Reclama do useEffect.",
    authorCta: "FALAR COMIGO →",
  },
  contact: {
    label: "// CONTATO",
    title: "VAMOS CONSTRUIR ALGO?",
    sub: "Email é o melhor caminho. Eu não checo o LinkedIn.",
  },
  footer: {
    copy: "© 2026 BRUNO EDUARDO. FEITO COM HTML, CSS, RAIVA E AMOR.",
    built: "CONSTRUÍDO À MÃO. SEM TEMPLATES. SEM IA (BOM, POUCA).",
  },
};

const landingEn = {
  meta: {
    name: "Bruno Eduardo",
    role: "Fullstack Developer",
    email: "bruno@example.dev",
    mastheadEdition: "VOLUME IV · EDITION 26",
  },
  nav: { work: "WORK", about: "ABOUT", blog: "BLOG", contact: "CONTACT" },
  hero: {
    kicker: "FULLSTACK DEVELOPER · AVAILABLE Q3/2026",
    headlineLine1: "I BUILD",
    headlineLine2: "THINGS THAT",
    headlineLine3: "ACTUALLY WORK.",
    sub:
      "Bruno Eduardo. 4+ years turning coffee into SaaS. TypeScript, React, Node, Postgres. You bring the idea, I bring the mechanical keyboard.",
    ctaPrimary: "HIRE ME",
    ctaSecondary: "SEE CODE",
  },
  about: {
    label: "// ABOUT",
    title: "HI, I'M BRUNO.",
    body:
      "I build digital products people actually use — not the kind that gather dust in a portfolio. I started with PHP thinking I was a hacker, grew up on TypeScript, and now I spend half my day yelling at ESLint and the other half learning new things. Specialty: SaaS dashboards that don't make users want to cry.",
    facts: [
      { value: "4+", label: "YEARS OF EXPERIENCE" },
      { value: "27", label: "PROJECTS SHIPPED" },
      { value: "∞", label: "BUGS RESOLVED" },
      { value: "3", label: "BROKEN KEYBOARDS" },
    ],
  },
  skills: {
    label: "// STACK",
    title: "MY TOOLS.",
    categoryLabels: {
      frontend: "FRONTEND",
      backend: "BACKEND",
      data: "DATA",
      infra: "INFRA",
    },
  },
  work: {
    label: "// WORK",
    title: "SELECTED PROJECTS.",
    sub: "Things I'm not embarrassed about.",
  },
  timeline: { label: "// HISTORY", title: "THE PATH HERE." },
  github: {
    label: "// OPEN SOURCE",
    title: "OPEN SOURCE.",
    stats: [
      { value: "847", label: "CONTRIBUTIONS (12 MO.)" },
      { value: "12.3K", label: "STARS RECEIVED" },
      { value: "38", label: "PUBLIC REPOSITORIES" },
      { value: "127", label: "PRs MERGED" },
    ],
    reposTitle: "FEATURED REPOS",
    repos: [
      {
        name: "tipografia.dev",
        description: "Typography pairing tool",
        stars: "8.4k",
        lang: "TypeScript",
      },
      {
        name: "use-async-state",
        description: "React hook for painless async state",
        stars: "2.1k",
        lang: "TypeScript",
      },
      {
        name: "brutalist-ui",
        description: "Brutalist components. No rounded-lg.",
        stars: "1.6k",
        lang: "TypeScript",
      },
      {
        name: "pg-snapshot",
        description: "Postgres snapshots in CI/CD",
        stars: "180",
        lang: "Go",
      },
    ],
  },
  blog: {
    label: "// BLOG",
    title: "I WRITE SOMETIMES.",
    sub: "About code, careers, and why useEffect will betray you.",
    readMore: "READ ALL",
    readingTime: "MIN",
    backToList: "← BACK TO POSTS",
    backHome: "← BACK HOME",
    filterLabel: "// FILTER:",
    indexHeadlinePre: "all the",
    indexHeadlinePost: "posts.",
    morePosts: "// MORE POSTS",
    emptyState: "Nothing here yet.",
    authorBio:
      "Fullstack developer. Builds SaaS. Breaks ESLint. Complains about useEffect.",
    authorCta: "TALK TO ME →",
  },
  contact: {
    label: "// CONTACT",
    title: "LET'S BUILD SOMETHING?",
    sub: "Email is the best path. I don't check LinkedIn.",
  },
  footer: {
    copy: "© 2026 BRUNO EDUARDO. MADE WITH HTML, CSS, RAGE AND LOVE.",
    built: "HAND-BUILT. NO TEMPLATES. NO AI (OK, A LITTLE).",
  },
};

async function main() {
  const payload = await getPayload({ config });

  console.log("Clearing existing entries…");
  for (
    const slug of [
      "tools",
      "projects",
      "experiences",
      "socials",
      "posts",
    ] as const
  ) {
    await payload.delete({
      collection: slug,
      where: { id: { exists: true } },
    });
  }

  console.log("Seeding tools…");
  for (let i = 0; i < tools.length; i++) {
    const t = tools[i];
    await payload.create({
      collection: "tools",
      data: { name: t.name, category: t.category as any, order: i },
    });
  }

  console.log("Seeding projects…");
  for (let i = 0; i < projects.length; i++) {
    const p = projects[i];
    const created = await payload.create({
      collection: "projects",
      locale: "pt",
      data: {
        n: p.n,
        title: p.title,
        year: p.year,
        order: i,
        tags: p.tags.map((value) => ({ value })),
        description: p.pt,
      },
    });
    await payload.update({
      collection: "projects",
      id: created.id as any,
      locale: "en",
      data: { description: p.en },
    });
  }

  console.log("Seeding experiences…");
  for (let i = 0; i < experiences.length; i++) {
    const e = experiences[i];
    const created = await payload.create({
      collection: "experiences",
      locale: "pt",
      data: {
        year: e.year,
        company: e.company,
        order: i,
        role: e.pt.role,
        description: e.pt.desc,
      },
    });
    await payload.update({
      collection: "experiences",
      id: created.id as any,
      locale: "en",
      data: { role: e.en.role, description: e.en.desc },
    });
  }

  console.log("Seeding socials…");
  for (let i = 0; i < socials.length; i++) {
    await payload.create({
      collection: "socials",
      data: { ...socials[i], order: i },
    });
  }

  console.log("Seeding posts…");
  for (const p of posts) {
    const created = await payload.create({
      collection: "posts",
      locale: "pt",
      data: {
        slug: p.slug,
        date: p.date,
        readingTime: p.readingTime,
        published: true,
        tags: p.tags.map((value) => ({ value })),
        title: p.pt.title,
        subtitle: p.pt.subtitle,
        excerpt: p.pt.excerpt,
        intro: p.pt.intro,
        outro: p.pt.outro,
        body: p.pt.body as any,
      },
    });
    await payload.update({
      collection: "posts",
      id: created.id as any,
      locale: "en",
      data: {
        title: p.en.title,
        subtitle: p.en.subtitle,
        excerpt: p.en.excerpt,
        intro: p.en.intro,
        outro: p.en.outro,
        body: p.en.body as any,
      },
    });
  }

  console.log("Seeding landing-page (PT)…");
  await payload.updateGlobal({
    slug: "landing-page",
    locale: "pt",
    data: landingPt as any,
  });

  console.log("Seeding landing-page (EN)…");
  await payload.updateGlobal({
    slug: "landing-page",
    locale: "en",
    data: landingEn as any,
  });

  console.log("Done.");
}

try {
  await main();
  process.exit(0);
} catch (err) {
  console.error(err);
  process.exit(1);
}
