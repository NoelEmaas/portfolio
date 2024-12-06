import { About } from "@/types";

interface AboutProps {
    about: About;
}

function AboutSection (props: AboutProps) {
    const { about } = props;
    const { paragraphs } = about;

    return (
        <div className='mb-28'>
            <p className='top-0 z-40 block py-3 text-sm font-medium lg:pb-3 lg:pt-0 max-lg:sticky lg:text-xl max-lg:uppercase bg-background'>About ✦</p>
            {paragraphs?.map((paragraph, index) => (
                <p key={index} className='mt-4 text-subtle'>{paragraph}</p>
            ))}
        </div>
    );
}

export default AboutSection;