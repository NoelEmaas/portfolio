import { PhotoProvider, PhotoView } from 'react-photo-view';

export interface AchievementProps {
  date: string;
  title: string;
  description: string;
  body: string;
  images: string[];
}

export default function AchievementCard (props: AchievementProps) {
  const { date, title, description, images, body } = props;

  return (
    <div className="sm:grid grid-cols-3 gap-x-6">
        <div className="flex-none flex flex-col max-sm:flex-row max-sm:justify-between text-xs sub-text sub-color sm:mt-1">
          <p>{date}</p>
          <p className='sm:mt-1 uppercase'>{body}</p>
        </div>
        <div className="col-span-2 flex flex-col w-full grow max-sm:mt-2">
          <h1 className="sub-text">{title}</h1>
          <p className="mt-4 text-sm border-t border-[#2f2f2f] pt-4 sub-color">{description}</p>
          <div className="flex flex-row flex-wrap mt-4 gap-x-2 gap-y-2">
            <PhotoProvider>
              {images.map((imageSource) => (
                <PhotoView src={imageSource}>
                  <img src={imageSource} alt="" className='object-cover w-[120px] rounded-lg p-1 border border-[#1f1f1f] cursor-pointer hover:bg-[#1f1f1f] transition-all duration-300'/>
                </PhotoView>
              ))}
            </PhotoProvider>
          </div>
        </div>
    </div>
  );
}