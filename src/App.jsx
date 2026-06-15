import NavBar from "./components/NavBar.jsx";
import Hero from "./sections/Hero.jsx";
import ShowcaseSection from "./sections/ShowcaseSection.jsx";
import LogoSection from "./components/LogoSection.jsx";
import FeatureCards from "./sections/FeatureCards.jsx";
import ExperienceSection from "./sections/ExperienceSection.jsx";
import TechStack from "./sections/TechStack.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import Footer from "./sections/Footer.jsx";
import Contact from "./sections/Contact.jsx";
import Certificates from "./sections/Certificates.jsx";

const App = () => {
  return (
      <>
          <NavBar />
          <Hero />
          <ShowcaseSection />
          <LogoSection />
          <FeatureCards />
          <ExperienceSection />
          <TechStack />
          {/* <Testimonials />*/}
          <Certificates />
          <Contact />
          <Footer />
      </>
  )
}
export default App