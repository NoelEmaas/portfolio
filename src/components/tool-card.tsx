import { ArrowUpRight } from 'lucide-react';

interface ToolCardProps {
    title: string;
    description: string;
    icon: string;
    iconStyle: string;
}

export default function ToolCard (props: ToolCardProps) {
    const { title, description, icon, iconStyle } = props;

    return (
        <div className="group bg-[#0f0f0f] flex flex-col rounded-lg p-4 gap-y-1 z-50 relative border border-[#141414] border-t-[#303030] drop-shadow-lg overflow-hidden shadow-sm">
            <div className='flex items-center gap-x-2'>
                <h1 className="font-medium">{title}</h1>
                <ArrowUpRight 
                    className="w-4 h-4 text-white transition-all duration-300 ease-in-out scale-50 translate-x-0 translate-y-1 opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-1 group-hover:translate-y-0"
                />
            </div>
            <p className="text-sm sub-color">{description}</p>
            <img 
                src={icon} 
                className={`absolute ${iconStyle} grayscale opacity-10 transition-all duration-300 ease-in-out group-hover:grayscale-0 group-hover:brightness-100 group-hover:opacity-100`}
                alt="React Icon" 
            />
        </div>
    );
}