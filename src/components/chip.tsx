interface ChipProps {
    text: string;
    link?: string;
}

export default function Chip (props: ChipProps) {
    const { text } = props;

    return (
        <div 
            className='flex z-10 items-center justify-center font-medium bg-gradient-to-br dark:from-[#1a1a1a] dark:to-[#0f0f0f] from-[#e5e5e5] drop-shadow-sm border-0 border-t border-border shadow-sm transition-all duration-300 cursor-pointer to-[#f0f0f0] rounded-full px-4 py-[4px] text-xs text-subtle hover:text-foreground'> 
            {text}
        </div>
    );
}