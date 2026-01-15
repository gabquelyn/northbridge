import React from "react";
import Hero from "../components/atoms/Hero";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Metadata } from "next";
import AcademicExpectations from "./components/Expectiations";
import CAAPResidencyNotice from "./components/CAAPResidencyNotice";
import CAAPClosingSummary from "./components/Summary";

export const metadata: Metadata = {
  title: "Canadian Academic Alignment Program (CAAP)",

  description:
    "The Canadian Academic Alignment Program (CAAP) prepares international students for Canadian university success through structured academic alignment and skill development.",

  alternates: {
    canonical: "https://northbridgec.ca/caap",
  },

  openGraph: {
    title: "Canadian Academic Alignment Program (CAAP)",
    description:
      "An academic bridge program designed to align international students with Canadian university expectations.",
    url: "https://northbridgec.ca/caap",
  },
};

export default function CAAP() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOccupationalProgram",
            name: "Canadian Academic Alignment Program (CAAP)",
            description:
              "A structured academic bridge program designed to align international students with Canadian university expectations.",
            provider: {
              "@type": "EducationalOrganization",
              name: "Northbridge Collegiate",
              url: "https://northbridgec.ac",
            },
            educationalCredentialAwarded: "University Preparation",
            timeToComplete: "P6M",
            url: "https://northbridgec.ac/caap",
          }),
        }}
      />
      <Navigation />
      <Hero
        text={
          <>
            Align. Advance.
            <br />
          </>
        }
        typewrite="Complete."
        description={
          <p>
            CAAP is an academic alignment program designed to recognize prior
            learning and align students to Canadian academic expectations before
            they enter Grade 12
          </p>
        }
        image="bg-[url('/asset/toronto.jpg')]"
      />
      
      <AcademicExpectations />
      <CAAPClosingSummary />
      <CAAPResidencyNotice />
      <Footer />
    </div>
  );
}
