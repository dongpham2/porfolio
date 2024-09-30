import ProjectCard from "./components"

const Project = () => {
  return (
    <div>
      <h1 className="text-lg md:text-3xl mb-8 underline">Featured  Project</h1>
      <section>
        <ProjectCard/>
      </section>
    </div>
  )
}

export default Project