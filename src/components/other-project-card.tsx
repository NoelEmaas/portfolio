import { ArrowUpRight } from "lucide-react";

interface OtherProjectCardProps {
    title: string;
    description: string;
    image: string;
    link: string;
    icon?: JSX.Element;
}

export default function OtherProjectCard (props: OtherProjectCardProps) {
    const { title, description, image } = props;

    return (
        <div className="relative border-[#1f1f1f] transition-all duration-300 grain-bg grid w-full sm:grid-cols-3 grid-cols-2 overflow-hidden cursor-pointer gap-x-6 group bg-clip-border">
            <div className="absolute w-full h-full grain-bg"/>
            <div className="flex flex-col justify-between w-full sm:col-span-2 border-[#2f2f2f] pt-4 pl-0 transition-all duration-300 border-t">
                <div className="flex items-center justify-between">
                    <h1 className="text-xs bold sub-color sub-text">2024</h1>
                    <ArrowUpRight 
                            className="w-4 h-4 text-white transition-all duration-300 ease-in-out scale-50 translate-x-0 translate-y-1 opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-1 group-hover:translate-y-0"
                        />
                </div>
                <div>
                    <div className="flex items-center justify-between w-full">
                        <h1 className="font-semibold text-white">{title}</h1>
                    </div>
                    <div className="mt-1 transition-opacity duration-300">
                        <p className="text-sm sub-color line-clamp-1">{description}</p>
                    </div>
                </div>
            </div>
            <div className="border-[#1f1f1f] bg-[#0a0a0a] border rounded-md">
                <img
                    src={image}
                    className="object-cover w-full transition-all duration-300 ease-out mix-blend-plus-lighter h-fit brightness-75 group-hover:brightness-100"
                    alt="thumbnail"
                />
            </div>
        </div>
    );
}
