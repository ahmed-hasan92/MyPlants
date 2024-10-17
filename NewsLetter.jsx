
const NewsLetter = () => {
  return (
    <section className='mt-32 mx-auto max-w-7xl   shadow-lg shadow-neutral-400 border border-neutral-300 bg-neutral-100 p-10 rounded-lg'>
  <h2 className="text-3xl font-bold text-center font-manrope mb-8">Join Our Community</h2>
  <p className="text-center text-gray-700 mb-5">Sign up for our newsletter to get exclusive deals and expert tips on plant care!</p>
  <form className="flex flex-col items-center gap-5">
    <input type="email" className="w-80 p-3 rounded-lg border border-gray-300" placeholder="Enter your email" />
    <button type="submit" className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold">Subscribe</button>
  </form>
</section>
  )
}

export default NewsLetter