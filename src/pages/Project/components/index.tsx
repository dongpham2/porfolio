import jobrocky from "@/assets/cvimg.png"
import { Link } from "react-router-dom"
import click from "@/assets/click.svg"
import arrow from "@/assets/arrow.png"

const ProjectCard = () => {
  return (
    <div className="flex flex-col md:flex-row gap-3 items-center md:items-start">
        <div className="flex flex-col gap-4 w-[50%]"> 
          <div className="flex flex-col gap-2 items-center md:items-start">
            <h2>Project name: <span className="text-violet-primary text-sm md:text-xl">Jobrocky</span></h2>
            <Link to="https://www.jobrocky.com/" target="_blank" className="text-xl md:text-4xl cursor-pointer relative">Demo <img src={arrow} alt="arrow" className="absolute -top-10 -left-24 md:-top-14 md:-left-28 rotate-[230deg]  w-24 md:w-full"/></Link>
          </div>
          <p className="border border- opacity-95 bg-cyan-500 p-3 rounded-md">Jobrocky helps you create professional resumes and offers personalized interview coaching. Build a standout resume and gain confidence with expert guidance for your next job interview.</p>
          <div className="hidden md:flex gap-9 ml-5">
            <img src={click} alt="click" className="size-5 cursor-pointer"/>
            <img src={click} alt="click" className="size-5 cursor-pointer"/>
          </div>
        </div>
        <img src={jobrocky} alt={jobrocky} className="w-1/2"/>
      </div>
  )
}

export default ProjectCard