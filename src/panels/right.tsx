import Footer from "@/components/footer";
import AboutSection from "@/sections/about";
import AchievementsSection from "@/sections/achievements";
import ExperiencesSection from "@/sections/experiences";
import ProjectsSection from "@/sections/projects";
import SetupSection from "@/sections/setup";
import { About, Achievement, Experience, Project, Setup } from "@/types";

interface RightPanelProps {
    sections: string[];
    about?: About;
    experiences?: Experience[];
    projects?: Project[];
    otherProjects?: Omit<Project, 'stack' | 'imageBgColorClass'>[];
    achievements?: Achievement[];
    setup?: Setup;
    activeSection: string | null;
    aboutRef: React.RefObject<HTMLDivElement | null>;
    experienceRef: React.RefObject<HTMLDivElement | null>;
    projectsRef: React.RefObject<HTMLDivElement | null>;
    achievementsRef: React.RefObject<HTMLDivElement | null>;
    setupRef: React.RefObject<HTMLDivElement | null>;
    aboutInViewRef: (node?: Element | null) => void;
    experienceInViewRef: (node?: Element | null) => void;
    projectsInViewRef: (node?: Element | null) => void;
    achievementsInViewRef: (node?: Element | null) => void;
    setupInViewRef: (node?: Element | null) => void;
}

function RightPanel (props: RightPanelProps) {
    const { 
        sections, about, experiences, projects, otherProjects, achievements, setup,
        aboutRef, experienceRef, projectsRef, achievementsRef, setupRef,
        aboutInViewRef, experienceInViewRef, projectsInViewRef, achievementsInViewRef, setupInViewRef
    } = props;

    return (
        <div className="flex-1 pt-28">
            {sections.map((section, index) => (
                <div key={index}>
                    {section === 'about' && about && (
                        <div id="about" ref={(node) => { 
                            aboutInViewRef(node); 
                            // @ts-expect-error: TypeScript does not recognize that aboutRef can be assigned a node.
                            aboutRef.current = node; 
                        }}>
                            <AboutSection about={about} />
                        </div>
                    )}
                    {section === 'experiences' && experiences && (
                        <div id="experience" ref={(node) => { 
                            experienceInViewRef(node); 
                            // @ts-expect-error: TypeScript does not recognize that experienceRef can be assigned a node.
                            experienceRef.current = node; 
                        }}>
                            <ExperiencesSection experiences={experiences} />
                        </div>
                    )}
                    {section === 'projects' && projects && (
                        <div id="projects" ref={(node) => { 
                            projectsInViewRef(node); 
                            // @ts-expect-error: TypeScript does not recognize that projectsRef can be assigned a node.
                            projectsRef.current = node; 
                        }}>
                            <ProjectsSection projects={projects} otherProjects={otherProjects}/>
                        </div>
                    )}
                    {section === 'achievements' && achievements && (
                        <div id="achievements" ref={(node) => { 
                            achievementsInViewRef(node);
                            // @ts-expect-error: TypeScript does not recognize that achievementsRef can be assigned a node.
                            achievementsRef.current = node; 
                        }}>
                            <AchievementsSection achievements={achievements} />
                        </div>
                    )}
                    {section === 'setup' && setup && (
                        <div id="setup" ref={(node) => { 
                            setupInViewRef(node);
                            // @ts-expect-error: TypeScript does not recognize that achievementsRef can be assigned a node.
                            setupRef.current = node; 
                        }}>
                            <SetupSection setup={setup} />
                        </div>
                    )}
                </div>
            ))}
            <Footer />
        </div>
    );
}

export default RightPanel;