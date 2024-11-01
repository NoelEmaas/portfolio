import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
    title: string;
    year: string;
    imagePadding?: string;
    imageStyle?: string;
    hoverGradient?: string;
    description: string;
    image: string;
    stack: string[];
    link: string;
}

export default function ProjectCard (props: ProjectCardProps) {
    const { title, imagePadding, imageStyle, hoverGradient, description, image, year } = props;

    return (
      <div className="grid w-full grid-cols-2 duration-500 cursor-pointer group gap-x-8">
        <div className="flex flex-col w-full">
          <div className="lg:h-[150px] sm:h-[300px] bg-[#131313] rounded-md relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[0.8px] bg-gradient-to-r from-[#0f0f0f] via-[#8f8f8f] to-[#0f0f0f]" />
            <div className="relative h-full rounded-md group-hover:border-[#1d1d1d] overflow-hidden">
              <div className="absolute inset-0 transition-opacity duration-500 ease-in-out bg-[#181818] group-hover:opacity-0" />
              <div className={`absolute inset-0 transition-opacity duration-500 ease-in-out opacity-0 bg-gradient-to-br ${hoverGradient} group-hover:opacity-100`}/>
              <div className={`relative h-full p-[10px] flex flex-col items-center justify-center ${imagePadding}`}>
                <img
                  src={image}
                  className={`object-cover lg:h-fit md: w-full duration-300 ease-out rounded-md group-hover:mb-2 mt-0 brightness-75 group-hover:brightness-100 ${imageStyle}`}
                  alt="thumbnail"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="top-0 left-0 flex flex-col items-start w-full border-[#2f2f2f]">
          <div className="flex flex-col gap-x-10">
            <h1 className="text-xs bold sub-color sub-text">{year}</h1>
            <h1 className="mt-4 text-white sub-text">{title}</h1>
            <p className="mt-1 text-sm sub-color">{description}</p>
          </div>
          <ArrowUpRight 
              className="w-4 h-4 mt-4 text-white transition-all duration-300 ease-in-out scale-50 translate-x-0 translate-y-1 opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-1 group-hover:translate-y-0"
          />
        </div>
      </div>
    );
}