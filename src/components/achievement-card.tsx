import { PhotoProvider, PhotoView } from 'react-photo-view';

export interface AchievementProps {
  date: string;
  title: string;
  description: string;
  images: string[];
}

export default function AchievementCard (props: AchievementProps) {
  const { date, title, description, images } = props;

  return (
    <div className="flex flex-col sm:flex-row gap-x-16">
        <div className="flex-none text-xs bold sub-color sm:mt-1">
          <p>{date}</p>
        </div>
        <div className="flex flex-col w-full grow max-sm:mt-2">
          <h1 className="bold">{title}</h1>
          <p className="mt-2 text-sm sub-color">{description}</p>
          <div className="flex flex-row flex-wrap mt-4 gap-x-2 gap-y-2">
            <PhotoProvider>
              {images.map((imageSource) => (
                <PhotoView src={imageSource}>
                  <img src={imageSource} alt="" className='object-cover w-[100px] rounded-lg p-1 border border-[#1f1f1f] cursor-pointer hover:bg-[#1f1f1f] transition-all duration-300'/>
                </PhotoView>
              ))}
            </PhotoProvider>
          </div>
        </div>
    </div>
  );
}