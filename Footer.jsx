import { PiPlantDuotone } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 mt-20 rounded-lg">
    <div className="container px-4 md:px-6 mx-auto grid grid-cols-1 md:grid-cols-3 md:gap-36 gap-8">
      {/* About Section */}
      <div className="flex flex-col items-center md:items-start">
        <h4 className="font-bold text-lg mb-4 ">About Us</h4>
        <PiPlantDuotone size={32} className="text-green-600"/>
        <p className="text-gray-400 text-sm text-left md:text-left max-w-md mx-auto ">
          At MyPlants, we provide a wide variety of plants for your home and garden.
           Our mission is to make every space greener and more beautiful.
        </p>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col items-center md:items-start">
        <h4 className="font-bold text-lg mb-4">Quick Links</h4>
        <ul className="space-y-2 text-sm">
          <li><a href="#" className="text-gray-400 hover:text-white">Store</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">Gardens</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
          <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
        </ul>
      </div>

      {/* Contact Info */}
      <div className="flex flex-col items-center md:items-start">
        <h4 className="font-bold text-lg mb-4">Contact Us</h4>
        <p className="text-gray-400 text-sm">Email: info@myplants.com</p>
        <p className="text-gray-400 text-sm">Phone: +123 456 7890</p>
        <div className="flex space-x-4 mt-4">
          <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
      &copy; 2024 MyPlants. All Rights Reserved.
    </div>
  </footer>
  )
}

export default Footer