import { Achievement } from '@/types';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

export default function AchievementCard (props: Achievement) {
  const { date, title, description, images } = props;

  return (
    <div className="grid-cols-3 sm:grid gap-x-6">
        <div className="flex flex-col flex-none text-xs font-medium max-sm:flex-row max-sm:justify-between text-subtle sm:mt-1">
          <p>{date}</p>
        </div>
        <div className="flex flex-col w-full col-span-2 grow max-sm:mt-2">
          <h1 className="font-medium">{title}</h1>
          <p className="pt-4 mt-4 text-sm border-t border-border text-subtle">{description}</p>
          <div className="flex flex-row flex-wrap mt-4 gap-x-2 gap-y-2">
            <PhotoProvider>
              {images?.map((image, index) => {
                const imageSrc = new URL(`../assets/images/${image}.png`, import.meta.url).href
                return (
                  <PhotoView key={index} src={imageSrc}>
                    <img src={imageSrc} alt="" className='object-cover w-[120px] rounded-lg p-1 border border-border cursor-pointer hover:bg-sbackground transition-all duration-300'/>
                  </PhotoView>
                )
            })}
            </PhotoProvider>
          </div>
        </div>
    </div>
  );
}