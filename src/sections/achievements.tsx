import AchievementCard from "@/components/achievement-card";
import { Achievement } from "@/types";

interface AchievementsSectionProps {
    achievements: Achievement[];
}

function AchievementsSection (props: AchievementsSectionProps) {
    const { achievements } = props;

    return (
        <div className={`mb-28 transition-all duration-300 max-sm:opacity-100`} id="achievements">
            <p className='top-0 z-40 py-3 text-sm font-medium lock max-lg:sticky lg:text-xl max-lg:uppercase bg-background'>Achievements ✦</p>
            <div className='flex flex-col mt-8 gap-y-8'>
                {achievements.map((achievement, index) => (
                    <AchievementCard key={index} {...achievement} />
                ))}
            </div>
        </div>
    )
}

export default AchievementsSection;