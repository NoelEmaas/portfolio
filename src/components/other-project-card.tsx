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
        <div className="relative w-full overflow-hidden cursor-pointer group">
            <img
                src={image}
                className="object-cover w-full transition-all duration-300 ease-out rounded-md mix-blend-lighten"
                alt="thumbnail"
            />
            <div className="w-full mt-4 transition-all duration-300">
                <div className="flex items-center justify-between w-full">
                    <h1 className="font-semibold text-white">{title}</h1>
                    <ArrowUpRight 
                        className="w-4 h-4 text-white transition-all duration-300 ease-in-out scale-50 translate-x-0 translate-y-1 opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-1 group-hover:translate-y-0"
                    />
                </div>
                <div className="mt-1 transition-opacity duration-300">
                    <p className="text-sm sub-color">{description}</p>
                </div>
            </div>
        </div>
    );
}