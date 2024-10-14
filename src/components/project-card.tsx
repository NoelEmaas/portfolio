import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

interface ProjectCardProps {
    title: string;
    titleColor?: string;
    imgageContainerStyle?: string;
    description: string;
    image: string;
    link: string;
}

export default function ProjectCard (props: ProjectCardProps) {
    const { title, titleColor, imgageContainerStyle, description, image, link } = props;

    return (
        <CardContainer className="transition-all duration-300 cursor-pointer group">
            <CardBody className="bg-[#0f0f0f] relative group/card w-auto h-auto rounded-lg p-6 border border-[#1f1f1f]">
                <CardItem translateZ="100" className="w-full">
                    <div className={`transition-all group-hover:bg-gradient-to-br from-transparent to-transparent rounded-lg h-[300px] bg-transparent bg-grid-small-[#1f1f1f] relative flex items-center justify-center overflow-hidden border border-[#1f1f1f] ${imgageContainerStyle}`}>
                        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[#080808] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] z-[-10]"></div>
                        <img
                            src={image}
                            className="object-cover w-full rounded-lg"
                            alt="thumbnail"
                        />
                    </div>
                </CardItem>
                <CardItem
                    translateZ="50"
                    className={`mt-4 ${titleColor} bold text`}
                >
                    {title}
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="max-w-sm mt-2 text-sm sub-color sub-text"
                >
                    {description}
                </CardItem>
            </CardBody>
        </CardContainer>
    );
}