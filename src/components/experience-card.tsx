
export interface ExperienceProps {
  startYear: string;
  endYear: string;
  role: string;
  company: string;
  setup: string;
  stack: string[];
  description: string;
}

export const SimpleCard = ({title}: {title: string, link?: string}) => {
  return (
      <div 
        className='flex items-center justify-center sub-text bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] drop-shadow-sm border-0 border-t border-[#212121] shadow-sm transition-all duration-300 cursor-pointer hover:border-[#1f1f1f] rounded-full px-4 py-[4px] text-xs sub-color hover:text-white'>
        {title}
      </div>
  );
}

export default function ExperienceCard (props: ExperienceProps) {
  const { startYear, endYear, role, company, stack, description, setup } = props;

  return (
    <div className="sm:grid grid-cols-3 gap-x-6">
        <div className="flex-none flex flex-col max-sm:flex-row max-sm:justify-between text-xs sub-text sub-color sm:mt-1">
          <p>{startYear} — {endYear}</p>
          <p className="sm:mt-1 uppercase">{setup}</p>
        </div>
        <div className="col-span-2 flex flex-col w-full grow max-sm:mt-2">
          <h1 className="sub-text">{role}</h1>
          <h1 className="">{company}</h1>
          <p className="mt-4 text-sm sub-color border-t border-[#2f2f2f] pt-4">{description}</p>
          <div className="flex flex-row flex-wrap mt-4 gap-x-2 gap-y-2">
            {stack.map((tool) => (
              <SimpleCard title={tool} link="#" />
            ))}
          </div>
        </div>
    </div>
  );
}