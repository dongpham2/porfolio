import { Button } from "@/components/button";
import { IExperiencePortalProps } from "@/types";
import { Link } from "react-router-dom";



const ExperiencePortal: React.FC<IExperiencePortalProps> = (props) => {
    const {to, logo, companyName, description} = props
    return (
        <div className="flex flex-col md:flex-row items-center border border-border-primary rounded-xl rounded-l-none hover:cursor-pointer p-3 gap-5 hover:opacity-85">
            <img src={logo} alt={companyName} className="h-10 size-20 bg-cover bg-no-repeat bg-center"/>
            <div className="font-serif flex flex-col :md-flex-row items-center md:items-start gap-2">
                <Link to={to}><h2 className="text-sm md:text-base font-semibold">{companyName}</h2></Link>
                <p className="text-sm font-thin">{description}</p>
                <Button>Show more</Button>
            </div>
      </div>
    )
}

export default ExperiencePortal