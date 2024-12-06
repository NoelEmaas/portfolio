import { Project } from "@/types";
import { ArrowUpRight } from "lucide-react";
import { useTheme } from "./theme-provider";

export default function OtherProjectCard (props: Omit<Project, 'stack' | 'imageBgColorClass'>) {
    const { title, description, image, link } = props;
    const { theme } = useTheme();
    
    const onLinkClick = () => {
        window.open(link, '_blank');
    }

    const imageSrc = new URL(`../assets/images/${image}${theme === 'light' ? '_light' : ''}.png`, import.meta.url).href

    return (
        <div onClick={onLinkClick} className="relative grid w-full grid-cols-2 overflow-hidden transition-all duration-300 cursor-pointer border-border grain-bg sm:grid-cols-3 gap-x-6 group bg-clip-border">
            <div className="flex flex-col justify-between w-full pt-4 pl-0 transition-all duration-300 border-t sm:col-span-2 border-border">
                <div className="flex items-center justify-between">
                    <h1 className="text-xs bold sub-color text-subtle">2024</h1>
                    <ArrowUpRight 
                        className="w-4 h-4 transition-all duration-300 ease-in-out scale-50 translate-x-0 translate-y-1 opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-1 group-hover:translate-y-0"
                    />
                </div>
                <div>
                    <div className="flex items-center justify-between w-full">
                        <h1 className="font-semibold text-foreground">{title}</h1>
                    </div>
                    <div className="mt-1 transition-opacity duration-300">
                        <p className="text-sm text-subtle line-clamp-1">{description}</p>
                    </div>
                </div>
            </div>
            <div className={`border border-border rounded-md overflow-hidden ${theme === 'dark' ? 'bg-[#0a0a0a]' : ''}`}>
                <img
                    src={imageSrc}
                    className={`object-cover w-full transition-all duration-300 ease-out ${theme === 'dark' ? 'mix-blend-plus-lighter' : ''} h-fit brightness-100 group-hover:brightness-100`}
                    alt="thumbnail"
                />
            </div>
        </div>
    );
}