import React from 'react'
import Poster from "../../assets/Poster.jpg";
import Navbar from '../../components/Navbar/Navbar';
import AboutSection from '../../components/About/AboutSection';

function AboutView({handleLanguage}) {
  return (
    <>
    <AboutSection handleLanguage={handleLanguage}/>
    </>
  )

}

export default AboutView
