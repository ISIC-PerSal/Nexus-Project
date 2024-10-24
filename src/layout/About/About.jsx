import React, { useEffect } from "react";
import AboutView from "./AboutView";
import Navbar from "../../components/Navbar/Navbar";
import { useNexusContext } from "../../Hooks/useNexusContext";

function About() {
  const { changeNavbarItem } = useNexusContext();
  useEffect(() => {
    changeNavbarItem("Acerca");
  }, [changeNavbarItem]);
  return (
    <>
    <Navbar/>
    <AboutView />
    </>
  );
}

export default About;