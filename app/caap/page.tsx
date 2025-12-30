import React from "react";
import Hero from "./components/Hero";
import Navigation from "../components/Navigation";
import Canadaian from "./components/Canadaian";
import Reason from "./components/Reason";
import Footer from "../components/Footer";
import Graduands from "./components/Graduands";
import Bridge from "./components/Bridge";
import Message from "./components/Message";
export default function CAAP() {
  return (
    <div>
      <Navigation />
      <Hero />
      <Canadaian />
      <Reason />
      <Graduands />
      <Bridge />
      <Message />
      <Footer />
    </div>
  );
}
