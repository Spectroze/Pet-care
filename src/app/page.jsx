import Home from './homepage/page'
import Services from './homepage/services/page'
import About from './homepage/about/page'
import Testimonial from './homepage/testimonial/page'
import Contact from './homepage/contact/page'

export default function landingpage() {
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <main className="flex-1">
                <Home />
                <Services />
                <About />
                <Testimonial />
                <Contact />
            </main>
        </div>
    )
}
