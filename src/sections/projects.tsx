import ProjectCard from "@/components/project-card";
import OtherProjectCard from "@/components/other-project-card";
import { Project } from "@/types";

interface ProjectsSectionProps {
    projects: Project[];
    otherProjects: Omit<Project, 'stack' | 'imageBgColorClass'>[] | undefined;
}

function ProjectsSection (props: ProjectsSectionProps) {
    const { projects, otherProjects } = props;

    return (
        <div className={`transition-all duration-300 max-sm:opacity-100`} id="works">
            <div className="mb-28">
                <p className='top-0 z-40 block py-3 text-sm font-medium text-foreground max-lg:sticky lg:text-xl max-lg:uppercase bg-background'>Projects ✦</p>
                <div className='flex flex-col gap-y-8 mt-8 border-[#2f2f2f]'>
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
            <div className="mb-28">
                <p className='top-0 z-40 block py-3 text-sm font-medium text-foreground max-lg:sticky lg:text-xl max-lg:uppercase bg-background'>Other Projects ✦</p>
                <div className='flex flex-col gap-y-8 mt-8 border-[#2f2f2f]'>
                    {otherProjects?.map((project, index) => (
                        <OtherProjectCard key={index} {...project}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectsSection;