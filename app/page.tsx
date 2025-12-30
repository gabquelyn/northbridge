import AboutPreview from "./components/AboutPreview";
import HeroSection from "./components/HeroSection";
import ModelPreview from "./components/ModelPreview";
import Navigation from "./components/Navigation";
import Structure from "./components/Structure";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div>
      <Navigation />
      <HeroSection />
      <AboutPreview />
      {/* <ModelPreview /> */}
      <Structure />
      <Faq />
      <Footer/>
    </div>
  );
}
