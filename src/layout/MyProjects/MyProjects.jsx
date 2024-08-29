import React, { useEffect } from "react";
import MyProjectsView from "./MyProjectsView";
import Navbar from "../../components/Navbar/Navbar";
import { useNexus } from "../../Hooks/useContext";

function MyProjects() {
  const { setSelected } = useNexus();

  useEffect(() => {
    setSelected("Yo");
  }, [setSelected]);
  return (
    <>
      <Navbar />
      <MyProjectsView />
    </>
  );
}
 
export default MyProjects;
