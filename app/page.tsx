import AboutPreview from "./components/AboutPreview";
import ModelPreview from "./components/ModelPreview";
import Navigation from "./components/Navigation";
import Hero from "./components/atoms/Hero";
import Footer from "./components/Footer";
import Program from "./components/Program";
import { Metadata } from "next";
import Application from "./components/Application";

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
        text={<>Prepare for Canada's</>}
        image="bg-[url('/asset/girll.jpg')]"
        typewrite="Leading Universities "
        transparent
        programs
        description={
          <p>
            Northbridge Collegiate is a Canadian high school delivering Ontario
            curriculum-based secondary education, preparing students for success
            across borders and beyond.
          </p>
        }
      />
      <AboutPreview />
      <ModelPreview />
      <Program />
      <Application />
      <Footer />
    </div>
  );
}
