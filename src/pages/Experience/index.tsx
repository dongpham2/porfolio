import { IExperiencePortalProps } from "@/types"
import ExperiencePortal from "./components"

const ExperienceData: IExperiencePortalProps[] = [
  {
    logo: "https://assets.avepoint.com/upload/images/logo/avepoint-d.svg",
    companyName: "Avepoint",
    description: "Our world is rapidly changing. Today’s office is anywhere and everywhere. AI has the potential to transform productivity"
  },
  {
    logo: "https://waocon.com/wp-content/themes/waocon/assets/img/logo.png",
    companyName: "Waocon",
    description: "クライアントの課題にこだわり抜いた企画力とやり過ぎるほどの実行力をもって臨みます。"
  },
]

const Experience = () => {
  return (
    <div className="">
      <h1 className="text-lg md:text-3xl mb-8 underline">Work Experience</h1>
      <div className="grid md:grid-cols-2 gap-3 md:gap-5">
        {ExperienceData.map((item, index) => (
          <ExperiencePortal companyName={item.companyName} logo={item.logo} description={item.description} key={index}/>
        ))}
      </div>
    </div>
  )
}

export default Experience