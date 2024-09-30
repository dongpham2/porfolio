import techstack from "@/assets/stack.png"

const TechStack = () => {
  return (
    <div>
      <h1 className="text-lg md:text-3xl mb-8 underline">Technical Stack</h1>
      <div className="flex items-center w-[90%] mx-auto text-center my-5">
        <p className="items-center">I'm a <span className="text-xl text-violet-primary font-semibold uppercase">frontend developer</span> currently working with modern tech <span className="text-xl text-violet-primary font-semibold">stacks</span>, looking to join a <span className="text-xl text-violet-primary font-semibold">cross-functional</span> team that values improving people's lives through accessible design.</p>
      </div>
      <img src={techstack} alt="techstack" />
    </div>
  )
}

export default TechStack