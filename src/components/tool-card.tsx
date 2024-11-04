import { ArrowUpRight } from 'lucide-react';

interface ToolCardProps {
    title: string;
    description: string;
    icon: string;
    iconStyle: string;
    link: string;
}

export default function ToolCard (props: ToolCardProps) {
    const { title, description, link } = props;

    const onLinkClick = () => {
        window.open(link, '_blank');
    }

    return (
        <div onClick={onLinkClick} className="relative flex flex-col pt-4 overflow-hidden border-t cursor-pointer border-[#2f2f2f] group gap-y-1">
            <p className="text-xs uppercase sub-color line-clamp-1">{description}</p>
            <div className='flex items-center gap-x-2'>
                <h1 className="text-white sub-text">{title}</h1>
                <ArrowUpRight 
                    className="w-4 h-4 text-white transition-all duration-300 ease-in-out scale-50 translate-x-0 translate-y-1 opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-1 group-hover:translate-y-0"
                />
            </div>
        </div>
    );
}