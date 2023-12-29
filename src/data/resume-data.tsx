import { GitHubIcon } from "../components/icons/GitHubIcon";
import { LinkedInIcon } from "../components/icons/LinkedInIcon";
export const RESUME_DATA = {
  name: "Christian Lisboa",
  initials: "CL",
  location: "Florianópolis, SC, Brasil",
  locationLink: "https://maps.app.goo.gl/RkMfVLfYmMFMoeD99",
  about: "Desenvolvedor de sistemas",
  summary:
    "Desenvolvedor web formado no curso técnico em Desenvolvimento de Sistemas (SENAI CTAI) e cursando o ensino superior em Análise e Desenvolvimento de Sistemas (UniSenai CTAI). Possuo conhecimento em linguagens como JavaScript, TypeScript, Java e Python. No dia-a-dia, utilizo frameworks como React e Next, e também trabalho de forma nativa com HTML, CSS e SCSS. No backend, tenho experiência em Node.js e Spring Boot. Possuo experiência em bancos de dados como MySQL, PostgreSQL e utilizo o Prisma como ORM.",
  personalWebsiteUrl: "https://christianlsb.github.io/",
  contact: {
    email: "chrislsb09@gmail.com",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/christianlsb",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/christian-lsb/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "UniSenai CTAI",
      degree: "Análise e Desenvolvimento de Sistemas",
      start: "2023",
      end: "2025",
    },
    {
      school: "SENAI CTAI",
      degree: "Técnico em Desenvolvimento de Sistemas",
      start: "2020",
      end: "2022",
    },
  ],
  work: [
    {
      company: "Tiki",
      link: "https://www.tiki.com.br/",
      badges: ["Remote"],
      title: "Estágio Desenvolvedor Frontend",
      start: "2023",
      end: "No momento",
      description:
        "Na Tiki, sou responsável por realizar manutenções e implementações de projetos na área de Front-End. Minhas principais responsabilidades incluem trabalhar com tecnologias como Next.js, React, React Native e WordPress.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "Java",
    "Python",
    "React/Next.js/Gatsby",
    "Node.js",
    "Spring Boot",
    "MySQL",
    "PostgreSQL",
    "Prisma",
  ],
  /*  projects: [
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
  ], */
} as const;