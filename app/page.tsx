import AboutPreview from "./components/AboutPreview";
import ModelPreview from "./components/ModelPreview";
import Navigation from "./components/Navigation";
import Structure from "./components/Structure";
import Faq from "./components/Faq";
import Hero from "./components/atoms/Hero";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div>
      <Navigation />
      <Hero
        text={
          <>
            Secure Your Place
            <br /> at a Top-Tier <br />
          </>
        }
        image="bg-[url('/asset/j.jpg')]"
        typewrite="Canadian University"
        transparent
        programs
        description={
          <p className="text-[1.4rem]">
            A Canadian University Prep Institution designed to align
            international students with the academic, cultural, and structural
            standards of Canadian post-secondary education.
          </p>
        }
      />
      <AboutPreview />
      {/* <ModelPreview /> */}
      <Structure />
      <Faq />
      <Footer />
    </div>
  );
}
