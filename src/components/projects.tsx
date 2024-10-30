import ProjectCard from '../components/project-card';
import TodoMock from '../assets/images/todo_mock.png';
import AgriconMock from '../assets/images/agricon_mock_tmp.png';
import StubuMock from '../assets/images/stubu_mock_tmp.png';
import AnzenMock from '../assets/images/anzen_mock.png';


export default function Projects () {
    return (
      <div className={`w-full border-0 border-[#1f1f1f] bg-[#101010] transition-all duration-300 drop-shadow-lg z-0 sticky top-0`}>
        <div className='container py-[5%] pt-[calc(16vh)] lg:px-[12%] sm:px-[5%] px-5 mx-auto flex flex-col gap-y-32 sticky'>
          <div>
            <div className='mb-10'>
              <h1 className="text-lg bold">Highlighted Projects</h1>
              <p className='sub-text sub-color'>Some projects that I am really proud of.</p>
            </div>
            <div className='grid grid-cols-1 gap-10 mt-5 sm:grid-cols-2'>
              <ProjectCard
                title='To Do It'
                imagePadding='md:p-[40px]'
                year='2022'
                hoverGradient='to-sky-800 from-sky-950'
                description='Task managemment android app'
                image={TodoMock}
                link='#'
              />
              <ProjectCard
                title='Anzen'
                imagePadding='md:p-[40px]'
                year='2024'
                imageStyle='border border-[#2f2f2f] rounded-lg shadow-lg drop-shadow-lg'
                hoverGradient='to-blue-800 from-indigo-950'
                description='University RFID system'
                image={AnzenMock}
                link='#'
              />
              <ProjectCard
                title='AgriCon'
                year='2023'
                imagePadding='md:p-[20px]'
                hoverGradient='to-[#0e6e2f] from-[#18453a]'
                description='Agricultural consultancy platform'
                image={AgriconMock}
                link='#'
              />
              {/* <ProjectCard
                title='FlavorShare'
                imagePadding='p-[40px]'
                imageStyle='border border-[#2f2f2f] rounded-lg shadow-lg drop-shadow-lg'
                hoverGradient='to-[#802f26] from-[#522118]'
                description='Recipe sharing platform'
                image={RecipeMock}
                link='#'
              /> */}
              {/* <ProjectCard
                title='MediGuide'
                imagePadding='p-[80px]'
                hoverGradient='to-[#115885] from-[#072436]'
                description='Medical consultation platform'
                image={MediguideMock}
                link='#'
              /> */}
              <ProjectCard
                title='Stubu.AI'
                year='2024'
                imagePadding='md:p-[40px]'
                imageStyle='border border-[#2f2f2f] rounded-lg shadow-lg drop-shadow-lg'
                hoverGradient='to-cyan-800 from-[#0e1f47]'
                description='AI powered learning platform'
                image={StubuMock}
                link='#'
              />
            </div>
            <div className='w-full relative h-[1150px]'/>
          </div>
        </div>
      </div>
    );
}