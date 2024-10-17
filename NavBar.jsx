import { PiPlantDuotone } from "react-icons/pi";
import { navItems } from "../constants";


const NavBar = () => {
  
  return (
    <nav className="sticky top-0   z-50  backdrop-blur-lg  font-lato  ">
<div className="container relative max-w-7xl mx-auto flex justify-between items-center border-b border-neutral-300 py-3">
  <div className="flex items-center flex-shrink-0 space-x-2">
<PiPlantDuotone size={32} className="text-green-700"/>
<h1 className="tracking-wide text-green-700 font-manrope font-semibold text-lg ">MyPlant</h1>
  </div>
  <ul className="md:flex items-center space-x-10 hidden">
{navItems.map((item,index)=>(
  <li className="text-base font-medium hover:text-green-700 hover:font-semibold hover:drop-shadow-md" key={index}>
    <a href={item.itemHref}>{item.itemLabel}</a>
  </li>
))}
  </ul>
<div className="hidden md:flex justify-end items-center space-x-5">
  <a href="#" className="font-base text-gray-700 hover:text-green-700  font-medium hover:font-semibold">Login</a>
  <a href="#" className="px-3 py-2 rounded-md bg-gradient-to-br from-green-600 to-green-700 text-white text-base font-medium hover:drop-shadow-md">Register</a>
</div>
</div>
    </nav>
  )
}

export default NavBar