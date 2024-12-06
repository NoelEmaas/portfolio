import ExperienceCard from "@/components/experience-card";
import { Experience } from "@/types";

interface ExperiencesSectionProps {
    experiences: Experience[];
}

function ExperiencesSection (props: ExperiencesSectionProps) {
    const { experiences } = props;

    return (
        <div className='mb-28'>
            <p className='top-0 z-40 block py-3 text-sm font-medium max-lg:sticky lg:text-xl max-lg:uppercase bg-background'>Experiences ✦</p>
            <div className='flex flex-col mt-8 gap-y-8'>
                {experiences.map((exp, index) => (
                    <ExperienceCard key={index} {...exp} />
                ))}
            </div>
        </div>
    );
}

export default ExperiencesSection;