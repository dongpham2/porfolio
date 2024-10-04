import techstack from "@/assets/stack.png";
import { FaHtml5, FaJs, FaReact, FaVuejs, FaAngular, FaGithub, FaFigma  } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { GrGraphQl } from "react-icons/gr";

const TechStackData = [
  {
    icon: FaHtml5,
    stack: "HTML",
  },
  {
    icon: IoLogoCss3,
    stack: "CSS",
  },
  {
    icon: RiTailwindCssFill,
    stack: "Tailwind",
  },
  {
    icon: FaJs,
    stack: "Javascript",
  },
  {
    icon: SiTypescript,
    stack: "Typescript",
  },
  {
    icon: FaReact,
    stack: "Reactjs",
  },
  {
    icon: FaVuejs,
    stack: "Vuejs",
  },
  {
    icon: FaAngular,
    stack: "Angular",
  },
  {
    icon: RiNextjsFill,
    stack: "Nextjs",
  },
  {
    icon: FaGithub,
    stack: "Github",
  },
  {
    icon: GrGraphQl,
    stack: "GraphQL",
  },
  {
    icon: FaFigma ,
    stack: "Figma",
  }
];


const TechStack = () => {
  return (
    <div id="tech-stack-section">
      <h1 className="text-lg md:text-3xl mb-8 underline">Technical Stack</h1>
      <div className="flex items-center w-[90%] mx-auto text-center my-5">
        <p className="items-center">I'm a <span className="md:text-lg text-violet-primary font-semibold uppercase">frontend developer</span> currently working with modern tech <span className="md:text-lg text-violet-primary font-semibold">stacks</span>, looking to join a <span className="md:text-lg text-violet-primary font-semibold">cross-functional</span> team that values improving people's lives through accessible design.</p>
      </div>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 my-12">
        {TechStackData.map((tech, index) => (
          <li key={index} className="flex items-center space-x-3">
            <tech.icon className="text-2xl" /> {/* Render the icon */}
            <span>{tech.stack}</span>
          </li>
        ))}
      </ul>
      <div className="flex xl:justify-center">
        <img src={techstack} alt="techstack" />
      </div>
    </div>
  )
}

export default TechStack