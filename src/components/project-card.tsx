
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
    const { title, imagePadding, imageStyle, hoverGradient, description, image, year, link } = props;

    const onLinkClick = () => {
        if (link === '#') {
          return;
        }
        window.open(link, '_blank');
    }

    return (
      <div onClick={onLinkClick} className="w-full duration-500 cursor-pointer group gap-x-6">
        <div className="flex flex-col w-full">
          <div className="bg-[#131313] rounded-md relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[0.8px] bg-gradient-to-r from-[#0f0f0f] via-[#8f8f8f] to-[#0f0f0f]" />
            <div className="relative h-full rounded-md group-hover:border-[#1d1d1d] overflow-hidden">
              <div className="absolute inset-0 transition-opacity duration-500 ease-in-out bg-[#181818] group-hover:opacity-0" />
              <div className={`absolute inset-0 transition-opacity duration-500 ease-in-out opacity-100 bg-gradient-to-br ${hoverGradient} group-hover:opacity-100`}/>
              <div className={`relative h-full flex flex-col items-center justify-center ${imagePadding}`}>
                <img
                  src={image}
                  className={`object-cover lg:h-fit md: w-full duration-300 ease-out rounded-md mt-0 brightness-75 group-hover:brightness-90 ${imageStyle} scale-100 group-hover:scale-105`}
                  alt="thumbnail"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-x-6 top-0 left-0 flex-col items-start w-full border-[#2f2f2f] border-t mt-4 pt-4">
          <div>
            <h1 className="text-xs bold sub-color sub-text">{year}</h1>
            <h1 className="text-white sub-text">{title}</h1>
          </div>
          <p className="col-span-2 text-sm sub-color">{description}</p>
        </div>
      </div>
    );
}