import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
    title: string;
    imagePadding?: string;
    imageStyle?: string;
    hoverGradient?: string;
    description: string;
    image: string;
    link: string;
}

export default function ProjectCard (props: ProjectCardProps) {
    const { title, imagePadding, imageStyle, hoverGradient, description, image } = props;

    return (
      <div className="flex flex-col w-full duration-500 shadow-xl drop-shadow-xl group">
        <div className="h-[500px] w-full bg-[#131313] rounded-2xl p-3 border border-[#1f1f1f] relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[0.8px] bg-gradient-to-r from-[#0f0f0f] via-[#8f8f8f] to-[#0f0f0f]" />
          <div className="relative h-full rounded-lg border border-[#1f1f1f] group-hover:border-[#2f2f2f] overflow-hidden">
            {/* Base gradient layer */}
            <div className="absolute inset-0 transition-opacity duration-500 ease-in-out bg-gradient-to-br from-[#1f1f1f] from-30% to-[#080808] group-hover:opacity-0" />
            
            {/* Hover gradient layer */}
            <div className={`absolute inset-0 transition-opacity duration-500 ease-in-out opacity-0 bg-gradient-to-br ${hoverGradient} group-hover:opacity-100`}/>
            
            {/* Content */}
            <div className={`relative h-full p-[40px] flex flex-col items-center justify-center cursor-pointer ${imagePadding}`}>
              <div className="absolute top-0 left-0 right-0 h-[0.8px] bg-gradient-to-r from-[#1f1f1f] via-[#5f5f5f] to-[#181818] group-hover:from-transparent group-hover:to-transparent" />
              <div className="absolute top-0 left-0 flex items-center justify-between w-full px-6 pt-2 mt-3">
                <div>
                    <h1 className="bold text">{title}</h1>
                    <p className="text-sm sub-color sub-text">{description}</p>
                </div>
                <ArrowRight className="w-6 h-6 mr-2 duration-300 ease-out text-white/50 group-hover:mr-0"/>
              </div>
              <img
                src={image}
                className={`object-cover w-full mt-20 duration-300 ease-out rounded-lg group-hover:mt-14 brightness-75 group-hover:brightness-100 ${imageStyle}`}
                alt="thumbnail"
              />
            </div>
          </div>
        </div>
      </div>
    );
}