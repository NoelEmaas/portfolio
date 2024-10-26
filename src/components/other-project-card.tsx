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
    const { title, description, image, icon } = props;

    return (
        <div className="w-full bg-[#0f0f0f] h-[240px] rounded-lg border border-[#141414] border-t-[#303030] relative overflow-hidden group cursor-pointer drop-shadow-lg shadow-sm">
            <div className="flex items-center justify-center w-full transition-all duration-300 bg-transparent mix-blend-plus-lighter group-hover:blur-sm group-hover:brightness-75">
                <img
                    src={image}
                    className="object-cover w-full rounded-t-lg"
                    alt="thumbnail"
                />
            </div>
            <div className="bg-[#111111] p-4 border-0 border-t border-[#212121] w-full absolute bottom-0 transition-all duration-300 h-[55px] group-hover:h-[140px] ease-in-out">
                <div className="flex items-center justify-between w-full">
                    <h1 className="text-sm font-semibold text-white">{title}</h1>
                    {icon}
                </div>
                <div className="mt-2 transition-opacity duration-300 opacity-0 details group-hover:opacity-100">
                    <p className="text-xs sub-color">{description}</p>
                </div>
                <Button className="w-full mt-4 text-sm bg-[#0f0f0f] border border-[#212121]">
                    <Github className="w-4 h-4 mr-2"/> Check on Github
                </Button>
            </div>
        </div>
    );
}