import { Github } from "lucide-react";
import { Button } from "./ui/button";

interface OtherProjectCardProps {
    title: string;
    description: string;
    image: string;
    link: string;
    icon?: JSX.Element;
}

export default function OtherProjectCard (props: OtherProjectCardProps) {
    const { title, description, image, link, icon } = props;

    return (
        <div className="w-full bg-[#0f0f0f] h-[240px] rounded-lg border border-[#212121] relative overflow-hidden group cursor-pointer">
            <div className="w-full h-[180px] bg-transparent flex items-center justify-center group-hover:blur-sm transition-all duration-300 group-hover:brightness-75">
                <img
                    src={image}
                    className="object-cover h-[140px] rounded-md p-1 border border-[#2e2e2e]"
                    alt="thumbnail"
                />
            </div>
            <div className="border-0 border-t p-4 border-[#212121] bg-[#080808] w-full absolute bottom-0 transition-all duration-300 h-[55px] group-hover:h-[140px]">
                <div className="flex items-center justify-between w-full">
                    <h1 className="text-sm font-semibold text-white">{title}</h1>
                    {icon}
                </div>
                <div className="mt-2 transition-opacity duration-300 opacity-0 details group-hover:opacity-100">
                    <p className="text-sm sub-color">{description}</p>
                </div>
                <Button className="w-full mt-4 text-xs bg-[#0f0f0f] border border-transparent hover:border-[#212121]">
                    <Github className="w-4 h-4 mr-2"/> View on Github
                </Button>
            </div>
        </div>
    );
}