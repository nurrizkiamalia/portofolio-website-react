import '../../index.css'
import Navbar from '../../component/Navbar'
import Hero from '../../component/Hero'
import About from '../../component/About'
import RecentWork from '../../component/RecentWork'
import Projects from '../../component/Projects'
import Testimonial from '../../component/Testimonial'
import  Footer from '../../component/Footer'
import ResponsiveNavbar from '../../component/ResponsiveNavbar'

export default function Profile(){
    
    return(
        <>
            <ResponsiveNavbar />
            <Navbar />
            <Hero />
            <About />
            <RecentWork />
            <Projects />
            <Testimonial />
            <Footer />
        </>
    )
}