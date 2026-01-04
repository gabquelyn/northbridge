import React from "react";
import Hero from "../components/atoms/Hero";
import Navigation from "../components/Navigation";
import Canadaian from "./components/Canadaian";
import Reason from "./components/Reason";
import Footer from "../components/Footer";
import Graduands from "./components/Graduands";
import Bridge from "./components/Bridge";
import Message from "./components/Message";
import { Metadata } from "next";

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
            Your First Step to Success in Canada: <br />
          </>
        }
        typewrite="Align. Complete. Advance."
        image="bg-[url('/asset/toronto.jpg')]"
      />
      <Canadaian />
      <Reason />
      <Graduands />
      <Bridge />
      <Message />
      <Footer />
    </div>
  );
}
