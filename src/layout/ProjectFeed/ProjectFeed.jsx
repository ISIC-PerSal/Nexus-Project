import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import ProjectFeedView from "./ProjectFeedView";
import { useNexus } from "../../Hooks/useContext";

function ProjectFeed() {
  const { setSelected } = useNexus();

  useEffect(() => {
    setSelected("Explorar");
  }, [setSelected]);
  return (
    <>
      <Navbar />
      <ProjectFeedView />
    </>
  );
}

export default ProjectFeed;
