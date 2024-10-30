import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
    title: string;
    year: string;
    imagePadding?: string;
    imageStyle?: string;
    hoverGradient?: string;
    description: string;
    image: string;
    link: string;
}

export default function ProjectCard (props: ProjectCardProps) {
    const { title, imagePadding, imageStyle, hoverGradient, description, image, year } = props;

    return (
      <div className="flex flex-col w-full duration-500 group">
        <div className="lg:h-[400px] sm:h-[300px] w-full bg-[#131313] rounded-lg relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[0.8px] bg-gradient-to-r from-[#0f0f0f] via-[#8f8f8f] to-[#0f0f0f]" />
          <div className="relative h-full rounded-lg border border-[#1f1f1f] group-hover:border-[#1d1d1d] overflow-hidden">
            {/* Base gradient layer */}
            <div className="absolute inset-0 transition-opacity duration-500 ease-in-out bg-[#181818] group-hover:opacity-0" />
            
            {/* Hover gradient layer */}
            <div className={`absolute inset-0 transition-opacity duration-500 ease-in-out opacity-0 bg-gradient-to-br ${hoverGradient} group-hover:opacity-100`}/>
            
            {/* Content */}
            <div className={`relative h-full p-[10px] flex flex-col items-center justify-center cursor-pointer ${imagePadding}`}>
              <div className="absolute top-0 left-0 right-0 h-[0.8px] bg-gradient-to-r from-[#1f1f1f] via-[#5f5f5f] to-[#181818] group-hover:from-transparent group-hover:to-transparent" />

              <img
                src={image}
                className={`object-cover lg:h-fit md: w-full duration-300 ease-out rounded-lg group-hover:mt-5 lg:mt-10 brightness-75 group-hover:brightness-100 ${imageStyle}`}
                alt="thumbnail"
              />
            </div>
          </div>
        </div>
        <div className="top-0 left-0 flex items-start justify-between w-full pt-2 mt-3">
            <div className="flex gap-x-10">
              <h1 className="bold text-[#353535]">{year}</h1>
              <div>
                <h1 className="bold text">{title}</h1>
                <p className="text-sm sub-color sub-text">{description}</p>
              </div>
            </div>
            <ArrowRight className="w-6 h-6 mr-2 duration-300 ease-out text-white/50 group-hover:mr-0"/>
          </div>
      </div>
    );
}