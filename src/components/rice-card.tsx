import { PhotoProvider, PhotoView } from 'react-photo-view';

interface RiceImg {
    image: string;
    imageFull?: string;
}
  

export interface RiceProps {
    title: string;
    description: string;
    image: RiceImg;
}

export default function RiceCard (props: RiceProps) {
    const { title, description, image } = props;

    return (
        <div className="flex flex-row gap-x-5">
            <div className="flex-none">
                <PhotoProvider>
                    <PhotoView src={image.imageFull || image.image}>
                        <img src={image.image} alt="" className='object-cover w-[100px] rounded-lg p-1 border border-[#1f1f1f] cursor-pointer hover:bg-[#1f1f1f] transition-all duration-300'/>
                    </PhotoView>
                </PhotoProvider>
            </div>
            <div className="flex flex-col w-full grow">
                <h1 className="bold">{title}</h1>
                <p className="mt-2 text-sm sub-color">{description}</p>
            </div>
        </div>
    );
}