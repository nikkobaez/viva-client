import Hero from "./Hero"
import Steps from "./Steps"
import About from "./About"
import Testimonials from "./Testimonials"
import Brands from "./Brands"
import Stats from "./Stats"
import News from "./News"
import Careers from "./Careers"

const Main = () => {
    return (
        <main className='bg-white mx-auto max-w-[1920px] overflow-hidden'>
            <Hero />
            <Steps />
            <About />
            <Testimonials />
            <Brands />
            <Stats />
            <News />
            <Careers />
        </main>
    )
}

export default Main