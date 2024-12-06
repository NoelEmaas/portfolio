import { Experience } from "@/types";
import Chip from "./chip";

export default function ExperienceCard (props: Experience) {
    const { startYear, endYear, title, company, stack, description, setup } = props;

    return (
        <div className="grid-cols-3 sm:grid gap-x-6">
            <div className="flex flex-col flex-none text-xs font-medium max-sm:flex-row max-sm:justify-between text-subtle sm:mt-1">
                <p>{startYear} — {endYear}</p>
                <p className="uppercase sm:mt-1">{setup}</p>
            </div>
            <div className="flex flex-col w-full col-span-2 grow max-sm:mt-2">
                <h1 className="font-medium">{title}</h1>
                <h1 className="">{company}</h1>
                {description?.map((desc, index) => (
                    <p key={index} className="pt-4 mt-4 text-sm border-t text-subtle border-border">
                        {desc}
                    </p>
                ))}
                <div className="flex flex-row flex-wrap mt-4 gap-x-2 gap-y-2">
                    {stack?.map((tool, index) => (
                        <Chip key={index} text={tool} link="#" />
                    ))}
                </div>
            </div>
        </div>
    );
}