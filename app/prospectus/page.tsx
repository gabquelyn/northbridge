import React from "react";
import NorthbridgeAcademicNav from "../components/StickyNav";
import Footer from "../components/Footer";
import LeafletFlip from "../components/FlipBook";
import CoverPage from "../components/flipbook/CoverPage";
import Image from "next/image";
import NorthbridgeRoadmap from "../components/flipbook/RoadMap";
export default function Prospectus() {
  const pages = [
    <CoverPage image="bg-[url('/asset/hall.jpg')]">
      <div className="relative flex flex-col items-center justify-between  h-full py-[24%]  z-10">
        <div className="w-15 md:w-20 h-15 md:h-20 p-1 rounded-full bg-white shadow-lg">
          <div className="relative w-full h-full rounded-full overflow-hidden">
            <Image
              src="/asset/logo2.png"
              fill
              className="object-contain"
              alt="Northbridge Logo"
            />
          </div>
        </div>

        <div className="text-white md:text-2xl flex flex-col items-center">
          <p>Northbridge Collegiate</p>
          <p className="text-[#479DA5]">Parent Prospectus</p>
        </div>
      </div>
    </CoverPage>,
    <div className="p-8 md:p-15 bg-white h-full flex flex-col md:gap-5 text-justify text-xs md:text-[1rem]">
      <p className="md:text-2xl text-[#479DA5] font-bold md:mb-6 mb-2">
        Founder's Message
      </p>
      <p>
        Northbridge Collegiate was founded out of a clear conviction: the most
        consequential work in education happens at points of transition.
        Northbridge exists to intervene thoughtfully at this critical point.
      </p>

      <p>
        Our focus on senior secondary education is intentional. We concentrate
        our expertise where students face the greatest academic and personal
        complexity. Northbridge Collegiate was intentionally designed to operate
        at the most pivotal stage of a student's development. By focusing
        exclusively on Grades 12 and 12 (years that shape academic trajectories,
        personal identity, and future opportunity), we build strong academic and
        personal foundations at the point where decisions carry lifelong impact.
      </p>
      <p>
        Through structured academic preparation, purpose-led career exploration,
        leadership development, ethical formation, and civic responsibility,{" "}
        <span className="hidden md:inline">
          our approach integrates rigorous senior secondary education with
          intentional formation—developing students who think critically, act
          responsibly, and engage the world with clarity and purpose.
        </span>
      </p>
      <p className="hidden md:block">
        Northbridge Collegiate exists to help students understand not only where
        they are going, but who they are becoming.
      </p>
      <p className="hidden md:block text-right">— Founder, Northbridge Collegiate</p>
    </div>,

    <div className="p-8 md:p-15 bg-white h-full flex flex-col md:gap-8 text-justify text-xs md:text-[1rem]">
      <p className="md:hidden">
        our approach integrates rigorous senior secondary education with
        intentional formation—developing students who think critically, act
        responsibly, and engage the world with clarity and purpose.
      </p>
      <p className="md:hidden">
        Northbridge Collegiate exists to help students understand not only where
        they are going, but who they are becoming.
      </p>
      <p className="text-right md:hidden">— Founder, Northbridge Collegiate</p>
<NorthbridgeRoadmap/>
    </div>,
  ];
  return (
    <div>
      <NorthbridgeAcademicNav />
      <LeafletFlip pages={pages} />
      <Footer />
    </div>
  );
}
