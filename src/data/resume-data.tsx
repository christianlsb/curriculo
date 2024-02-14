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
      description: [
        "• Desenvolvo novas funcionalidades para vários sistemas em que a Tiki lidera.",
        <br key={1} />,
        "• Iniciei a implementação de testes no frontend utilizando Cypress.",
        <br key={2} />,
        "• Assumo demandas de diversos níveis de complexidade para desafiar minhas habilidades.",
        <br key={3} />,
        "• Compartilho ativamente ideias e soluções para resolver problemas dentro da equipe. ",
        <br key={4} />,
        "• Valorizo feedbacks sobre meu trabalho e estou sempre em busca de melhorias com base neles.",
        <br key={5} />,
      ],
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
  projects: [
    {
      title: "TodoList App",
      techStack: ["React", "JavaScript", "Styled Components"],
      description: "Um simples gerenciador de tarefas.",
      link: {
        label: "todolistlsb",
        href: "https://todolistlsb.netlify.app/",
      },
    },
    {
      title: "Matrículas GUI",
      techStack: ["Java", "JavaSwing"],
      description: "Um sistema de matrículas para uma escola.",
      link: {
        label: "matriculas-gui",
        href: "https://github.com/christianlsb/Matriculas-GUI",
      },
    },
    {
      title: "ElementOOps",
      techStack: ["Java"],
      description: "Um jogo de plataforma terminal.",
      link: {
        label: "elementoops",
        href: "https://github.com/christianlsb/ElementOOPs",
      },
    },
    // {
    //   title:"FSW-STORE",
    //   techStack: ["Next", "Prisma", "Tailwind", "Shadcn"],
    //   description: "E-Commerce.",
    //   link: {
    //     label: "fsw-store",
    //     href: "https://fsw-store-lsb.vercel.app/",
    //   },
    // }
  ],
} as const;
