import { Button } from "@/components/button";
import { IExperiencePortalProps } from "@/types";



const ExperiencePortal: React.FC<IExperiencePortalProps> = (props) => {
    const { logo, companyName, description} = props
    return (
        <div className="flex flex-col md:flex-row items-center border border-border-primary rounded-xl rounded-l-none hover:cursor-pointer p-2 gap-5">
            <img src={logo} alt={companyName} className="h-10 size-20"/>
            <div className="font-serif flex flex-col :md-flex-row items-center md:items-start gap-2">
                <h2 className="text-sm md:text-base font-semibold">{companyName}</h2>
                <p className="text-sm font-thin">{description}</p>
                <Button>Show more</Button>
            </div>
      </div>
    )
}

export default ExperiencePortal