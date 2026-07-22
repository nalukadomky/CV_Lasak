export const HERO = {
  name: "Lukáš Lasák",
  age: "33 let",
  location: "Praha",
  role: "Obchodní zástupce",
  experience: "více než 12 let v B2B",
  tagline: "Obchod · Technologie · Kreativita",
};

export const ABOUT_PARAGRAPHS: string[] = [
  "Obchodu se věnuji prakticky celý svůj profesní život. Už během studia grafického designu jsem zjistil, že mě mnohem více baví práce s lidmi než samotná tvorba grafiky.",
  "Ve svých devatenácti letech jsem nastoupil do společnosti Channel Partners, kde jsem více než osm let pomáhal firmám nakupovat energie prostřednictvím společnosti E.ON. Specializoval jsem se především na střední podniky a velké společnosti.",
  "Současně jsem si splnil svůj podnikatelský sen a otevřel vlastní bar. Tahle zkušenost mě naučila dívat se na obchod nejen očima obchodníka, ale i podnikatele.",
  "Poslední více než čtyři roky působím ve společnosti O2, kde se starám o akvizice nových SMB zákazníků.",
  "Dnes hledám novou výzvu. Místo, kde budu moci spojit obchod, technologie a kreativitu.",
  "Poslední rok se intenzivně věnuji AI a tzv. vibe codingu. Baví mě přemýšlet nad produkty, hledat nové příležitosti a přicházet s řešeními, která posouvají firmy dopředu.",
];

export const ABOUT_CLOSER = {
  lead: "Věřím, že nejlepší obchodník není ten, kdo pouze prodává.",
  emphasis: "Je to člověk, který chápe byznys.",
};

export type JourneyItem = {
  year: string;
  company: string;
  role: string;
  meta: string[];
};

export const JOURNEY: JourneyItem[] = [
  {
    year: "2022 — dnes",
    company: "O2 Czech Republic",
    role: "SMB akvizice",
    meta: ["B2B obchod", "Akvizice nových zákazníků"],
  },
  {
    year: "2019 — 2023",
    company: "Bowlingwood s.r.o.",
    role: "Majitel vlastního baru",
    meta: ["Podnikání", "Vedení týmu", "Provoz"],
  },
  {
    year: "2019 — 2021",
    company: "Ramirent s.r.o.",
    role: "Hlavní grafický designer pro ČR a Slovensko",
    meta: ["Tvorba bannerů", "Tiskoviny", "Idea maker"],
  },
  {
    year: "2011 — 2019",
    company: "Channel Partners",
    role: "Obchodní zastoupení společnosti E.ON",
    meta: ["více než 8 let", "B2B obchod", "střední podniky", "velké firmy"],
  },
];

export type SkillCard = {
  title: string;
  icon: string;
};

export const SKILLS: SkillCard[] = [
  { title: "B2B obchod", icon: "growth" },
  { title: "Akviziční obchod", icon: "target" },
  { title: "Vyjednávání", icon: "handshake" },
  { title: "Péče o klienty", icon: "heart" },
  { title: "AI & Vibe Coding", icon: "spark" },
  { title: "Kreativní myšlení", icon: "bulb" },
  { title: "Podnikání", icon: "rocket" },
  { title: "Komunikace", icon: "chat" },
  { title: "Networking", icon: "network" },
];

export const EDUCATION = [
  {
    school: "Vyšší odborná škola Kreativní komunikace",
    detail: "Absolutorium",
  },
  { school: "Střední škola grafického designu Michael", detail: "Maturita" },
  { school: "Gymnázium Litoměřická", detail: "" },
];

export const LANGUAGES = [{ flag: "🇬🇧", name: "Angličtina", level: "B2" }];

export const HOBBIES = [
  "Fotografování",
  "Fotbal",
  "Sport",
  "Cestování",
  "AI",
  "Nové technologie",
];

export const SOFTWARE = [
  "Claude Code",
  "Adobe Illustrator",
  "Photoshop",
  "Lightroom",
  "Premiere Pro",
  "Microsoft Excel / Word",
];

export const DRIVING = ["B — osobní auta", "A — motorka"];

export const WHY_ME = {
  headline: "Obchod je pro mě hlavně o důvěře.",
  cards: [
    {
      title: "Obchodní zkušenosti",
      body: "Více než 12 let v B2B.",
      index: "01",
    },
    {
      title: "Podnikatelské myšlení",
      body: "Znám obchod z obou stran.",
      index: "02",
    },
    {
      title: "Technologie",
      body: "Nebojím se AI ani moderních nástrojů.",
      index: "03",
    },
    {
      title: "Rychle se učím",
      body: "Nová témata mě baví a rád jim přijdu na kloub.",
      index: "04",
    },
    {
      title: "Hraju, abych vyhrál",
      body: "Jde mi o výsledek, ne o odškrtnutou aktivitu. Nejspíš proto hraju fotbal už 25 let.",
      index: "05",
    },
  ],
};

export const CONTACT = {
  lead: "Hledám firmu, která chce růst.",
  emphasis: "Stejně jako já.",
  email: "lasak.design@gmail.com",
  phone: "776 288 098",
  phoneHref: "+420776288098",
};
