import Features from "../components/Features"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import NavBar from "../components/NavBar"
import NewsLetter from "../components/NewsLetter"
import ShowcaseSection from "../components/ShowcaseSection"
import Testimonials from "../components/Testimonials"


const LandingPage = () => {
  return (
    <main className="px-4 md:px-6 lg:px-8 xl:px-12  py-1 ">
        <NavBar/>
        <Hero/>
        <Features/>
        <ShowcaseSection/>
        <Testimonials/>
        <NewsLetter/>
        <Footer/>
        
    </main>
  )
}

export default LandingPage