import { HoverEffect } from '../components/ui/card-hover-effect';
import ReactIcon from '../assets/images/react_icon.png';
import LaravelIcon from '../assets/images/laravel_icon.png';
import NextjsIcon from '../assets/images/nextjs_icon.png';
import TailwindIcon from '../assets/images/tailwind_icon.png';
import FigmaIcon from '../assets/images/figma_icon.png';


interface Tool {
    title: string;
    description: string;
    link: string;
    icon: string;
    iconStyle: string;
}

const tools: Tool[] = [
    {
        title: 'React',
        description: 'Javascript library',
        link: 'https://react.dev/',
        icon: ReactIcon,
        iconStyle: 'w-20 h-20 -bottom-6 -right-6 brightness-50'
    },
    {
        title: 'Next.js',
        description: 'React framework',
        link: 'https://nextjs.org/',
        icon: NextjsIcon,
        iconStyle: 'w-16 h-16 -bottom-4 -right-4 brightness-50'
    },
    {
        title: 'Tailwind CSS',
        description: 'CSS framework',
        link: 'https://tailwindcss.com/',
        icon: TailwindIcon,
        iconStyle: 'w-16 bottom-2 -right-2 brightness-75'
    },
    {
        title: 'React Native',
        description: 'Mobile app framework',
        link: 'https://reactnative.dev/',
        icon: ReactIcon,
        iconStyle: 'w-20 h-20 -bottom-6 -right-6 brightness-50'
    },
    {
        title: 'Laravel',
        description: 'PHP framework',
        link: 'https://laravel.com/',
        icon: LaravelIcon,
        iconStyle: 'w-20 h-20 -bottom-4 -right-6 brightness-150'
    },
    {
        title: 'Figma',
        description: 'UI/UX design tool',
        link: 'https://www.figma.com/',
        icon: FigmaIcon,
        iconStyle: 'h-16 -bottom-4 -right-2 brightness-75'
    },
];

const SimpleCard = ({title}: {title: string, link: string}) => {
    return (
        <div 
          className='bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] drop-shadow-sm border-0 border-t border-[#212121] shadow-sm transition-all duration-300 cursor-pointer hover:border-[#1f1f1f] rounded-full px-4 py-2 text-sm sub-color hover:text-white'>
          {title}
        </div>
    );
}

interface StackProps {
  stackRef: React.RefObject<HTMLDivElement>;
}

export default function Stack ({stackRef}: StackProps) {
    return (
        <div ref={stackRef} className='bg-[#0d0d0d] w-full absolute flex items-center top-0 mt-[50vh] h-1/2 border-0 border-b border-t border-[#1f1f1f] z-40'>
          <div className='w-full relative container lg:px-[10%] sm:px-[5%] px-10 bg-[#0d0d0d] z-0'>
            <div className='mb-10'>
              <h1 className="text-lg bold">Stack</h1>
              <p className='sub-text sub-color'>Tools & frameworks I am proficient with.</p>
            </div>
            <HoverEffect items={tools} />
            <div className='mt-4 group relative overflow-hidden whitespace-nowrap sm:[mask-image:_linear-gradient(to_right,_transparent_0,_#080808_128px,#080808_calc(100%-128px),_transparent_100%)]'>
              <div className="inline-block pr-1 animate-slide-left-infinite group-hover:animation-pause w-max">
                <div className='flex gap-2 pb-4'>
                  <SimpleCard title='Node.js' link='#'/>
                  <SimpleCard title='Express.js' link='#'/>
                  <SimpleCard title='Nest.js' link='#'/>
                  <SimpleCard title='MongoDB' link='#'/>
                  <SimpleCard title='MySQL' link='#'/>
                  <SimpleCard title='Firebase' link='#'/>
                  <SimpleCard title='Kotlin' link='#'/>
                  <SimpleCard title='Flutter' link='#'/>
                  <SimpleCard title='Python' link='#'/>
                  <SimpleCard title='Typescript' link='#'/>
                  <SimpleCard title='C++' link='#'/>
                  <SimpleCard title='Java' link='#'/>
                  <SimpleCard title='Jest' link='#'/>
                  <SimpleCard title='Linux' link='#'/>
                </div>
              </div>
              <div className="inline-block animate-slide-left-infinite group-hover:animation-pause w-max">
                <div className='flex gap-2 pb-4'>
                  <SimpleCard title='Node.js' link='#'/>
                  <SimpleCard title='Express.js' link='#'/>
                  <SimpleCard title='Nest.js' link='#'/>
                  <SimpleCard title='MongoDB' link='#'/>
                  <SimpleCard title='MySQL' link='#'/>
                  <SimpleCard title='Firebase' link='#'/>
                  <SimpleCard title='Kotlin' link='#'/>
                  <SimpleCard title='Flutter' link='#'/>
                  <SimpleCard title='Python' link='#'/>
                  <SimpleCard title='Typescript' link='#'/>
                  <SimpleCard title='C++' link='#'/>
                  <SimpleCard title='Java' link='#'/>
                  <SimpleCard title='Jest' link='#'/>
                  <SimpleCard title='Linux' link='#'/>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}