import AboutPreview from "./components/AboutPreview";
import ModelPreview from "./components/ModelPreview";
import Footer from "./components/Footer";
import Program from "./components/Program";
import Application from "./components/Application";
import Blog from "./components/Blog";
import NorthbridgeAcademicNav from "./components/StickyNav";
import StickyHero from "./components/atoms/StickyHero";
import FlipBook from "./components/FlipBook";

export const metadata = {
  title:
    "Northbridge Collegiate | Canadian University-Prep High School in Lagos, Nigeria",

  description:
    "Northbridge Collegiate is a Canadian secondary school in Lagos, Nigeria preparing students aged 15-19 for Grades 11-12, OSSD, and university success through academic alignment.",

  alternates: {
    canonical: "https://northbridgec.ca/",
  },
};

export default function Home() {
  return (
    <div>
      <NorthbridgeAcademicNav />
      <StickyHero
        text={
          <>
            Prepare for Canada's
            <br />
          </>
        }
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
      <Blog />
      {/* <FlipBook/> */}
      <Footer />
    </div>
  );
}
