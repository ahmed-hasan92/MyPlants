import { showCaseItems } from "../constants"

showCaseItems

const ShowcaseSection = () => {
  return (
<section className='mt-20 mx-auto max-w-7xl'>
  <h2 className="text-3xl font-bold text-center font-manrope mb-8 border-t border-neutral-300 py-10">Explore Our Best-Selling Plants</h2>
  
  <div className="flex items-center justify-evenly space-x-5 overflow-x-auto scroll-m-3 mt-10 py-2">
    {showCaseItems.map((item, index) => (
      <div className="w-72 h-96 md:w-80 py-1 flex-shrink-0 group" key={index}>
        <div className="w-full h-full relative">
          <img src={item.itemPic} alt="itemPic" className="w-full h-full object-cover opacity-75 hover:opacity-100 rounded-lg shadow-lg shadow-neutral-400 " />
          
          <div className="absolute bottom-0 py-3 px-2 w-full bg-white bg-opacity-50 backdrop-blur-sm flex flex-col gap-3 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <h1 className="md:text-lg text-base font-lato">{item.itemName}</h1>
            <p className="text-green-800 font-semibold">{item.itemPrice} SAR</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

  )
}

export default ShowcaseSection

