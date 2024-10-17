
import heroPic from '../assets/Blooming-bro.svg'
import { TbPlant2 } from "react-icons/tb";


const Hero = () => {
  return (
    <div className="mx-auto md:grid md:grid-cols-2     mt-20 rounded-lg  max-w-7xl lg:h-[calc(100vh-150px)]  overflow-hidden    ">
      <div className="h-2/3  rounded-r-xl rot my-auto md:text-start text-center flex flex-col justify-center items-center px-4 ">
<h1 className='lg:flex items-center mr-auto gap-2 px-2 py-1 border border-neutral-300 rounded-full mb-1 hidden'>Amazing plants for better looking houses <TbPlant2 size={18} className='text-green-600 drop-shadow-md'/> </h1>
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-800 mb-4 font-manrope ">Welcome to <span className='bg-gradient-to-r from-green-600 to-green-800 text-transparent bg-clip-text'>MyPlants</span> </h1>
      <p className="text-lg max-w-7xl text-gray-700">
  Discover a variety of plants to bring life into your home. Whether you are a seasoned gardener or just starting, we have the perfect plant for you!
</p>
<div className='flex flex-col w-full md:flex-row md:gap-4 gap-5  mt-7 md:mt-5 md:items-start items-center   mr-auto'>
<a href="#" className='px-3 py-2 w-full md:w-auto   bg-green-600 text-white text-base font-medium hover:shadow-sm hover:shadow-neutral-500 rounded-lg'>Start shopping</a>
  <a href="#" className='px-3 py-2 w-full md:w-auto    border border-neutral-400 text-base font-medium hover:shadow-sm hover:shadow-neutral-500 rounded-lg'>Learn more</a>
  
</div>

      </div>
      <div className='h-full'>
        <img src={heroPic} alt="hero pic"  className='object-cover w-full h-full'/>
      </div>
    </div>
  )
}

export default Hero