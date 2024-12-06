import { Project } from "@/types";
import Chip from "./chip";

export default function ProjectCard (props: Project) {
    const { title, description, image, imageBgColorClass, year, link, stack } = props;
    const imageSrc = new URL(`../assets/images/${image}.png`, import.meta.url).href

    const onLinkClick = () => {
        if (link === '#' || !link) {
          return;
        }
        window.open(link, '_blank');
    }

    return (
      <div onClick={onLinkClick} className="w-full duration-500 cursor-pointer group gap-x-6">
        <div className="flex flex-col w-full">
          <div className="relative overflow-hidden rounded-md">
            <div className="relative h-full overflow-hidden border rounded-md border-sbackground">
              <div className="absolute inset-0 transition-opacity duration-500 ease-in-out opacity-100 group-hover:bg-0 bg-sbackground" />
              <div className={`card-bg absolute inset-0 transition-opacity duration-500 ease-in-out opacity-0 ${imageBgColorClass} bg-gradient-to-br group-hover:opacity-100`}/>
              <div className={`relative h-full flex flex-col items-center justify-center`}>
                <img
                  src={imageSrc}
                  className={`object-cover mix-blend-normal lg:h-fit md: w-full duration-300 ease-out rounded-md mt-0 scale-100 group-hover:scale-105`}
                  alt="thumbnail"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="top-0 left-0 grid flex-col items-start w-full grid-cols-1 pt-4 mt-4 border-t sm:grid-cols-3 gap-x-6 border-border">
          <div>
            <h1 className="text-xs font-medium text-subtle">{year}</h1>
            <h1 className="font-medium text-foreground">{title}</h1>
          </div>
          <div className="sm:col-span-2 max-sm:mt-2">
            <p className="text-sm text-left text-subtle">{description}</p>
            <div className="flex flex-row flex-wrap mt-4 gap-x-1 gap-y-2">
              {stack?.map((tool, index) => (
                <Chip key={index} text={tool} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
}