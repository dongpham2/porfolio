import me from "@/assets/banner.jfif"
import { Link } from "react-router-dom"
import Experience from "../Experience"
import TechStack from "../TechStack"
import Project from "../Project"

const HomePage = () => {
  return (
    <main>
      <section className='flex flex-col md:flex-row items-center'>
        <div className='flex flex-col mr-4 md:max-w-[70%]'>
          <h2 className='text-lg md:text-4xl md:leading-10 md:tracking-widest mb-2'>
          I'm a Software Engineer.|
          </h2>
          <p className='mb-7'>Currently, I'm a Software Engineer at <Link to="https://www.avepoint.com/" target="_blank" className="text-company-primary underline text-xl">Avepoint,</Link></p>
          <p>A self-taught UI/UX designer, functioning in the industry for 3+ years now.
          I make meaningful and delightful digital products that create an equilibrium
          between user needs and business goals.</p>
        </div>
        <img src={me} alt="me" className='md:flex-1 w-40 flex items-center justify-center mt-4 md:mt-0 rounded-full'/>
      </section>
      <section className="mt-20">
        <Experience/>
      </section>
      <section className="mt-20">
        <TechStack/>
      </section>
      <section className="mt-20">
        <Project/>
      </section>
    </main>
  )
}

export default HomePage