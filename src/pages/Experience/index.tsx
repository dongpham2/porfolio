import { IExperiencePortalProps } from "@/types"
import ExperiencePortal from "./components"

const ExperienceData: IExperiencePortalProps[] = [
  {
    to:"https://www.avepoint.com/",
    logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAbFBMVEX/////9vX/lpH/7Oz/i4b/TUL/LBr/09H/JQ//Oy3/QTX/Lx7/RDj/tLH/NSb/k47/y8n/KBT/X1b/Z1//OCr/8fH/19b/q6f/hoD/MiL/g33/PjH/op7/4+L/Vk3/fXf/5eT/xMH/dG3/SDyi4xO7AAABG0lEQVR4AX3SBRbCMAwA0DlUmLvL/e8IaWYhPAKzNO9Xra+wbet/OA4+Xc/3PZe320FgiMdTSCmeDw4IAYStpP6EVBzQGohXqE2ELwZoDYQnsEB4HDCEcxQ4tCAyeRFZscICFVMgwXRiWymWphzYCSsL8jzIaHuBABCFZZVVVdJ2HDofPAeQgOAAJyjwl6gPAIn6u929A0C4vwFOUEA0gWrEL6LtPrku7AfbLh1zGLqWASI7JjR2SFCgu+2MLw1BgeA29SGgxAQAGXYGmen4mgEIl3tBlQMx3wDdkM2NQ22IA2AFCxQcxAqAzskJ74UGYjUjNoCWsApknkAMCJhQj1sPjdZI4AiQEMU5LWUAHEW7+XtscjcW4Z+59g30aBpEhSWkigAAAABJRU5ErkJggg==",
    companyName: "Avepoint",
    description: "I specialize in creating intuitive and engaging user interfaces, with a strong focus on enhancing user experiences. My work revolves around designing and implementing solutions that not only look visually appealing but also improve the usability and accessibility of digital products. Through thoughtful design and the latest technologies, I strive to make every interaction seamless, ensuring that users can navigate and enjoy their digital environments effortlessly.",
    time: "May 2024"
  },
  {
    to: "https://waocon.com/",
    logo: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAUVBMVEVHcExcUUF4aVR3aFNORjt5aVR2Z1N0ZVF3aFR4aVR3aFN3aFN0ZVFeVEZUS0AwLi01MzI2NDM1MzI3NTQ2NTM2NDM2NDM2NDM2NDM2NDM2NDOY3LNIAAAAG3RSTlMAB921Dv97V8XupZRCJxYaPV5N+YC+z6dusZjYCXuGAAAA6ElEQVR4AaySR5bDIBQEm9DKgYzl+x90MA8m2yuXBPxUrMCbEHiBVHiKJvGUgRzxi3FowSTnpYXr1gO2EoeVqCh2QZCq3sB9YzUmEp2VnOo4wBWAZBW7OlPWRh2QnJvY1JHy4AaM1DPHLjZ13Tlvj2gjj6WLXUXpHsBOHvpL7OpRnP3hC0X8ZOFCMZNSlGAFfqmcIGYJSP4SqzqiMvwSqzoJVPSE93CW7ygL5ihLwwAHjta0zhtnPEKIZ7R7svH0R2hNnWJCzCbC3S7ojHSGeEPD7x6XuVyZuWdz5ftuQ/jvZer6f4xSAAATPQkCdx4zpQAAAABJRU5ErkJggg==",
    companyName: "Waocon",
    description: "私はフロントエンド開発者として、直感的で魅力的なユーザーインターフェースを専門にしています。ユーザーエクスペリエンスの向上に重点を置き、視覚的に美しいだけでなく、使いやすく、アクセスしやすいデジタルプロダクトを設計・実装しています。洗練されたデザインと最新技術を駆使し、ユーザーがデジタル環境をスムーズに操作し、快適に利用できるような体験を提供することを目指しています。",
    time: "June 2023"
  },
]

const Experience = () => {
  return (
    <div className="">
      <h1 className="text-lg md:text-3xl mb-8 underline">Work Experience</h1>
      <div className="grid md:grid-cols-2 gap-3 md:gap-5">
        {ExperienceData.map((item, index) => (
          <ExperiencePortal to={item.to} companyName={item.companyName} logo={item.logo} description={item.description} time={item.time} key={index}/>
        ))}
      </div>
    </div>
  )
}

export default Experience