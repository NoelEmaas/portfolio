
export interface ExperienceProps {
  startYear: string;
  endYear: string;
  role: string;
  company: string;
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
  const { startYear, endYear, role, company, stack, description } = props;

  return (
    <div className="flex flex-col sm:flex-row gap-x-10">
        <div className="flex-none text-xs sub-text sub-color sm:mt-1">
          <div className="flex gap-x-2">
            <div>
              <p className="block sm:hidden">{startYear}</p>
              <p className="hidden sm:block">{startYear.split(" ")[0]}</p>
              <p className="hidden sm:block">{startYear.split(" ")[1]}</p>
            </div>
            <p>-</p>
            <div>
              <p className="block sm:hidden">{endYear}</p>
              <p className="hidden sm:block">{endYear.split(" ")[0]}</p>
              <p className="hidden sm:block">{endYear.split(" ")[1]}</p>
            </div>
          </div>
          {/* <p>{startYear.spl} — {endYear}</p> */}
        </div>
        <div className="flex flex-col w-full grow max-sm:mt-2">
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