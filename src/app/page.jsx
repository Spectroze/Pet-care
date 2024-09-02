import Home from "./home/page";
import Services from "./services/page";
import About from "./about/page";
import Testimonial from "./testimonial/page";
import Contact from "./contact/page";

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
  );
}
