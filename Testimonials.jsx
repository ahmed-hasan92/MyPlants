import { testimonials } from "../constants"

testimonials
const Testimonials = () => {
  return (
    <section className='mt-20 mx-auto max-w-7xl'>
  <h2 className="text-3xl font-bold text-center font-manrope mb-8 border-t border-neutral-300 py-10">What Our Customers Say</h2>
  <div className="flex flex-wrap justify-center gap-10">
    {testimonials.map((testimonial, index) => (
      <div key={index} className="w-80 h-auto p-6 bg-gray-100 rounded-lg shadow-md shadow-neutral-400">
        <p className="italic">`{testimonial.quote}`</p>
        <p className="font-semibold text-green-700 mt-3">- {testimonial.customerName}</p>
      </div>
    ))}
  </div>
</section>

  )
}

export default Testimonials