import AboutPreview from "./components/AboutPreview";
import ModelPreview from "./components/ModelPreview";
import Navigation from "./components/Navigation";
import Structure from "./components/Structure";
import Faq from "./components/Faq";
import Hero from "./components/atoms/Hero";
import Footer from "./components/Footer";
import Program from "./components/Program";
import { Metadata } from "next";

export const metadata = {
  title: "Canadian Academic Bridge Programs for University Success",

  description:
    "Northbridge Collegiate prepares international students for Canadian universities through structured academic bridge programs aligned with the Ontario Secondary School Diploma (OSSD).",

  alternates: {
    canonical: "https://northbridgec.ca/",
  },

  openGraph: {
    title: "Canadian Academic Bridge Programs | Northbridge Collegiate",
    description:
      "Academic bridge programs designed to prepare students from diverse educational backgrounds for Canadian university success.",
    url: "https://northbridgec.ca/",
  },
};

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
      <ModelPreview />
      <Program/>
      <Structure />
      <Faq />
      <Footer />
    </div>
  );
}
