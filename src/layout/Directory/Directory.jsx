import React, { useEffect } from "react";
import DirectoryView from "./DirectoryView";
import Navbar from "../../components/Navbar/Navbar";
import { useNexusContext } from "../../Hooks/useNexusContext";
function Directory() {
  const { changeNavbarItem } = useNexusContext();
  useEffect(() => {
    changeNavbarItem("Directorio");
  }, [changeNavbarItem]);
  return (
    <>
      <Navbar />
      <DirectoryView />
    </>
  );
}

export default Directory;
