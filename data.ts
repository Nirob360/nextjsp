import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { BsCircleFill } from "react-icons/bs";
import { FaServer } from "react-icons/fa";
import { MdDeveloperMode } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import { IProject, Service, Skill } from "./types";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>Express </b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop robust  REST API using <b>django-rest-api</b>  & <b>Node API</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "a daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about:
      "stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ",
  },
  {
    Icon: RiComputerLine,
    title: "Whatever",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "HTML 5",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "CSS 3",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Style Components",
    level: "85",
  },

  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "80",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Photoshop",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Illustrator",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Framer",
    level: "45",
  },
];

export const projects: IProject[] = [
  {
    name: "COVID Tracker",
    description:
      "This app shows a statistical view about corona virus over the world",
    image_path: "/images/covid.jpg",
    deployed_url: "https://covid-19-inky.vercel.app/",
    github_url: "https://github.com/Nirob360/sunvi-covid-19",
    category: ["react"],
    key_techs: ["React", "Chart.js", "Material UI"],
  },

  {
    name: "Bancking site one ",
    image_path: "/images/banckingsiteone.png",
    deployed_url: "https://sunvi-bancking-site.vercel.app/",
    github_url: "https://github.com/Nirob360/sunvi-backing-site-one",
    category: ["react"],
    description:
      "When Banking meets Minimalists. A simplr bankin experience for a simpler life, Evrything you need in a modern bank and more ",
    key_techs: ["React", "react-scroll", "react-slick", "node-sass"],
  },
  {
    name: "Vertual Bancking site ",
    image_path: "/images/dolla.png",
    deployed_url: "https://vurtual-backing-sunvi-dev.vercel.app/",
    github_url: "https://github.com/Nirob360/vurtual-bancking-sunvidev",
    category: ["react"],
    description:
      "Sigup for a ew account tody and receive $250 in credit towards you next payment. ",
    key_techs: ["React", "react-scroll", "styled-components", "formik"],
  },
  {
    name: "Labas website Design by sunvi ",
    image_path: "/images/labas.png",
    deployed_url: "https://labash-webste-sunvi-rohoman.vercel.app/",
    github_url: "https://github.com/Nirob360/Labas-sunvi-rohoman",
    category: ["react"],
    description: "Unlimited Transactions with zero fees. ",
    key_techs: [
      "React",
      "formik",
      "node-sass",
      "yup",
      "react-icons",
      "react-router-dom",
    ],
  },
  {
    name: "React Landing Page Design by sunvi ",
    image_path: "/images/landing.png",
    deployed_url: "https://react-landing-page-sunvi-sungreat-it.vercel.app/",
    github_url: "https://github.com/Nirob360/React-landing-page-sunvi",
    category: ["react"],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ",
    key_techs: [
      "React",
      "formik",
      "node-sass",
      "yup",
      "react-icons",
      "react-router-dom",
    ],
  },
  {
    name: "React Dasbord Design by sunvi ",
    image_path: "/images/dashbord.png",
    deployed_url: "https://react-dasbord-sunvi.vercel.app/",
    github_url: "https://github.com/Nirob360/React-dasbord-sunvi-rohoman",
    category: ["react"],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ",
    key_techs: [
      "React",
      "styled-components",
      "react-icons",
      "react-router-dom",
    ],
  },
  {
    name: "React Mordarn Ui Design by sunvi ",
    image_path: "/images/mordernuione.png",
    deployed_url: "https://sunvi-mordarn-ui-gpt.vercel.app/",
    github_url: "https://github.com/Nirob360/React-dasbord-sunvi-rohoman",
    category: ["react"],
    description: "Let's Build Something amazing withGPT-3 OpenAI",
    key_techs: ["React", "react-icons", "react-router-dom", "node-sass"],
  },
  {
    name: "React Restrurant one Design by sunvi ",
    image_path: "/images/sss.png",
    deployed_url: "https://sunvi-restrurent.vercel.app/",
    github_url: "https://github.com/Nirob360/sunvi-restrurant-one",
    category: ["react"],
    description: "Let's Build Something amazing withGPT-3 OpenAI",
    key_techs: [
      "React",
      "react-icons",
      "react-router-dom",
      "styled-components",
    ],
  },
  {
    name: "React Ultra  Design by sunvi ",
    image_path: "/images/ultra.png",
    deployed_url: "https://sunvi-ultra.vercel.app/",
    github_url: "https://github.com/Nirob360/sunvi-restrurant-one",
    category: ["react"],
    description: "Let's Build Something amazing withGPT-3 OpenAI",
    key_techs: [
      "React",
      "react-icons",
      "react-router-dom",
      "styled-components",
    ],
  },
];
