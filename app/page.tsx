import AboutPreview from "./components/AboutPreview";
import ModelPreview from "./components/ModelPreview";
import Navigation from "./components/Navigation";
import Hero from "./components/atoms/Hero";
import Footer from "./components/Footer";
import Program from "./components/Program";
import Application from "./components/Application";
import Blog from "./components/Blog";
import NorthbridgeAcademicNav from "./components/StickyNav";
import StickyHero from "./components/atoms/StickyHero";

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

      <NorthbridgeAcademicNav/>
      <StickyHero
        text={<>Prepare for Canada's<br/></>}
        image="bg-[url('/asset/girll.jpg')] scale-x-[-1]"
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
      <Blog/>
      <Footer />
    </div>
  );
}
