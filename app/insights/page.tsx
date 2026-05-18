import React from 'react'
import Blog from '../components/Blog'
import NorthbridgeAcademicNav from "../components/StickyNav";
import Footer from '../components/Footer';
export default function page() {
  return (
    <div>
      <NorthbridgeAcademicNav/>
      <Blog/>
      <Footer/>
    </div>
  )
}
