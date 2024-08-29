import React, { useEffect } from "react";
import DirectoryView from "./DirectoryView";
import Navbar from "../../components/Navbar/Navbar";
import isAuth from "../../util/isAuth";
import { useNexus } from "../../Hooks/useContext";
function Directory() {
  const { setSelected } = useNexus();

  useEffect(() => {
    setSelected("Directorio");
  }, [setSelected]);
  return (
    <>
      <Navbar />
      <DirectoryView />
    </>
  );
}

export default Directory;
