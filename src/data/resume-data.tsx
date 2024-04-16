import { GitHubIcon } from "../components/icons/GitHubIcon";
import { LinkedInIcon } from "../components/icons/LinkedInIcon";

export const RESUME_DATA = {
  name: "Christian Lisboa",
  initials: "CL",
  location: "Florianópolis, SC, Brasil",
  locationLink: "https://maps.app.goo.gl/RkMfVLfYmMFMoeD99",
  about: "Desenvolvedor de sistemas",
  summary: [
    "Sou um desenvolvedor fullstack no ecossistema do JavaScript, com proficiência em frameworks como React e Node.js. Além disso, tenho experiência sólida em linguagens como Java, Python e C#, o que me permite criar soluções abrangentes e eficientes em uma variedade de contextos de desenvolvimento.",
    <br key={1} />,
    <br key={1} />,
    "Iniciei minha jornada na programação em 2017 com a linguagem MakeCode da Microsoft, explorando o desenvolvimento para hardware. Em 2020, dei continuidade ao meu interesse ao iniciar um curso técnico em Desenvolvimento de Sistemas. Essas experiências foram fundamentais para solidificar minha paixão pela programação e me preparar para os desafios do desenvolvimento de software.",
    <br key={2} />,
    <br key={2} />,
    "Atualmente, atuo como estagiário na função de desenvolvedor frontend na Tiki, onde mergulho diariamente no desenvolvimento web. Utilizo linguagens de programação como JavaScript e TypeScript, combinadas com os frameworks React e Next.js.",
    <br key={3} />,
    <br key={3} />,
    "Sou graduado em técnico em Desenvolvimento de Sistemas pelo SENAI e atualmente estou cursando o ensino superior em Análise e Desenvolvimento de Sistemas pela UNISENAI.",
    <br key={4} />,
    <br key={4} />,
    "Fora do ambiente de trabalho, estou constantemente em busca de evolução tanto como programador quanto como pessoa. Sou um participante ativo em diversas comunidades de programação, onde tenho a oportunidade de compartilhar conhecimento, trocar ideias sobre tecnologia e ajudar pessoas que estão iniciando sua jornada no mundo da programação. Essa interação contínua não apenas me mantém atualizado com as últimas tendências e tecnologias, mas também me permite contribuir para o crescimento da comunidade.",
    <br key={5} />,
    <br key={5} />,
  ],
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
      start: "abr de 2024",
      end: "No momento",
      description: [],
    },
    {
      company: "Tiki",
      link: "https://www.tiki.com.br/",
      badges: ["Remote"],
      title: "Estágio Desenvolvedor Web",
      start: "ago de 2023",
      end: "mar de 2024",
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
    // {
    //   title: "TodoList App",
    //   techStack: ["React", "JavaScript", "Styled Components"],
    //   description: "Um simples gerenciador de tarefas.",
    //   link: {
    //     label: "todolistlsb",
    //     href: "https://todolistlsb.netlify.app/",
    //   },
    // },
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
