import { IExperiencePortalProps } from "@/types"
import ExperiencePortal from "./components"
import waocon from "@/assets/waocon.png"
import ave from "@/assets/ave.png"

const ExperienceData: IExperiencePortalProps[] = [
  {
    to:"https://www.avepoint.com/",
    logo: ave,
    companyName: "Avepoint",
    description: "I specialize in creating intuitive and engaging user interfaces, with a strong focus on enhancing user experiences. My work revolves around designing and implementing solutions that not only look visually appealing but also improve the usability and accessibility of digital products. Through thoughtful design and the latest technologies, I strive to make every interaction seamless, ensuring that users can navigate and enjoy their digital environments effortlessly.",
    time: "May 2024"
  },
  {
    to: "https://waocon.com/",
    logo: waocon,
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