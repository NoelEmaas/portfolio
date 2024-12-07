import { Info } from "@/types";

interface LeftPanelProps {
    info: Info;
    sections: string[];
    activeSection: string | null;
    scrollToSection: (sectionRef: React.RefObject<HTMLDivElement>) => void;
    aboutRef: React.RefObject<HTMLDivElement>;
    experienceRef: React.RefObject<HTMLDivElement>;
    projectsRef: React.RefObject<HTMLDivElement>;
    achievementsRef: React.RefObject<HTMLDivElement>;
    setupRef: React.RefObject<HTMLDivElement>;
}

const Contacts = (contacts: { [key: string]: string }) => {
    const contactInfo = Object.keys(contacts);

    return (
        <div className="flex items-center gap-x-4">
            {contactInfo.map((contact, index) => {
                if (contact === 'email') return (
                    <a key={index} href={`mailto:${contacts[contact]}`} className="text-xs font-medium transition-all duration-300 text-subtle hover:text-white">
                        {contact.toUpperCase()}
                    </a>
                );
                return (
                    <a key={index} href={contacts[contact]} target="_blank" rel="noreferrer" className="text-xs font-medium transition-all duration-300 text-subtle hover:text-white">
                        {contact.toUpperCase()}
                    </a>
                );
            })}
        </div>
    )
}

function LeftPanel (props: LeftPanelProps) {
    const { 
        info, sections, scrollToSection, activeSection,
        aboutRef, experienceRef, projectsRef, achievementsRef, setupRef
    } = props;
    const { name, title, pitch, contacts } = info;

    const getSectionRef = (section: string) => {
        if (section === 'about') return aboutRef;
        if (section === 'experiences') return experienceRef;
        if (section === 'projects') return projectsRef;
        if (section === 'achievements') return achievementsRef;
        if (section === 'setup') return setupRef;
        return aboutRef;
    }

    return (
        <div className="top-0 lg:h-screen lg:sticky pt-28">
            <div className='flex flex-col gap-y-2'>
                <h1 className='text-5xl font-bold'>{name}</h1>
                <p className='mt-1 text-xl font-medium'>{title}</p>
                <p className='w-[300px] text-subtle'>{pitch}</p>
                <a 
                    href="https://drive.google.com/file/d/1XJte_afn0xRNkWgWCXPTLU3RjMdbXfAZ/view?usp=sharing"
                    className="px-3 py-1 mt-4 text-xs font-medium transition-all duration-300 rounded-full text-background bg-foreground w-fit" 
                    target="_blank" 
                    rel="noreferrer" 
                >
                    RESUME
                </a>
                <div className="block pt-6 mt-4 border-t border-border lg:hidden">
                    <Contacts {...contacts} />
                </div>
            </div>
            <div className="flex-col hidden mt-20 lg:flex gap-y-4">
                {sections.filter(section => section !== 'info' && section !== 'otherProjects').map((section, index) => (
                    <div key={index} className='flex flex-row items-center gap-x-4'>
                        <hr className={`${activeSection === section ? 'border-foreground w-[60px]' : 'border-subtle w-[20px]'} transition-all border-1`}/>
                        <p onClick={() => scrollToSection(getSectionRef(section))} 
                            className={`${activeSection === section ? 'text-foreground' : 'text-subtle'} font-bold text-xs transition-all duration-300 cursor-pointer hover:text-foreground w-fit`}>
                            {section.toUpperCase()}
                        </p>
                    </div>
                ))}
            </div>
            <div className="absolute lg:block hidden justify-between w-[80%] bottom-28">
                <p className="mb-4 text-xs font-bold">CONTACTS</p>
                <Contacts {...contacts} />
            </div>
        </div>
    );
}

export default LeftPanel;