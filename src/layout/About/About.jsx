import React, { useEffect } from "react";
import AboutView from "./AboutView";
import Navbar from "../../components/Navbar/Navbar";
import { useNexus } from "../../Hooks/useContext";

function About() {
  const { setSelected } = useNexus();

  useEffect(() => {
    setSelected("Acerca");
  }, [setSelected]);
  return (
    <>
    <Navbar/>
    <AboutView />
    </>
  );
}

export default About;