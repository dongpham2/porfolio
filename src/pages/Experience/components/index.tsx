import { Button } from "@/components/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/hover-card";
import { IExperiencePortalProps } from "@/types";
import { Link } from "react-router-dom";
import { CalendarDays } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar";

const ExperiencePortal: React.FC<IExperiencePortalProps> = (props) => {
    const { to, logo, companyName, description, time } = props
    return (
        <div className="flex flex-col md:flex-row items-center border border-border-primary rounded-xl rounded-l-none hover:cursor-pointer p-3 gap-5">
            <img src={logo} alt={companyName} className="bg-cover bg-no-repeat bg-center rounded-full size-14" />
            <div className="font-serif flex flex-col :md-flex-row items-center md:items-start gap-4">
                <Link to={to} target="_blank"><h2 className="text-sm md:text-base font-semibold">{companyName}</h2></Link>
                <p className="text-sm font-thin line-clamp-3">{description}</p>
                <HoverCard>
                    <HoverCardTrigger asChild>
                        <Button size="sm">Show more</Button>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 z-20">
                        <div className="flex justify-between space-x-4">
                            <Avatar>
                                <AvatarImage src={logo} />
                                <AvatarFallback>VC</AvatarFallback>
                            </Avatar>
                            <div className="space-y-1">
                                <h4 className="text-sm md:text-lg font-semibold font-serif">{companyName}</h4>
                                <p className="text-sm md:text-base font-serif">
                                    {description}
                                </p>
                                <div className="flex items-center pt-2">
                                    <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                                    <span className="text-xs text-muted-foreground">
                                        {time}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </HoverCardContent>
                </HoverCard>
            </div>
        </div>
    )
}

export default ExperiencePortal