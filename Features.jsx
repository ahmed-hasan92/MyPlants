import { TbPlant2 } from "react-icons/tb"


const Features = () => {
  return (
    <section className="mt-20  max-w-7xl mx-auto">
  <h2 className="text-3xl font-bold text-center font-manrope mb-8 border-t border-neutral-300 py-10">Why Choose MyPlants?</h2>
  <div className="grid md:grid-cols-3 gap-12 font-lato mt-10 ">
    <div className="text-center ">
      <TbPlant2 size={50} className="text-green-600 mx-auto mb-4" />
      <h3 className="text-xl font-semibold mb-2">Eco-Friendly</h3>
      <p className="text-gray-600 text-center ">Our plants are grown using sustainable methods that protect the environment.</p>
    </div>
    <div className="text-center">
      <TbPlant2 size={50} className="text-green-600 mx-auto mb-4" />
      <h3 className="text-xl font-semibold mb-2">Easy Maintenance</h3>
      <p className="text-gray-600 text-center">Plants that are simple to take care of, even for beginners.</p>
    </div>
    <div className="text-center">
      <TbPlant2 size={50} className="text-green-600 mx-auto mb-4" />
      <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
      <p className="text-gray-600 text-center">Get your plants delivered right to your door within days.</p>
    </div>
  </div>
</section>
  )
}

export default Features