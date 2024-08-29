import React, { useEffect } from "react";
import AllianceView from "./AllianceView";
import Navbar from "../../components/Navbar/Navbar";
import { useNexus } from "../../Hooks/useContext";

function Alliance() {
  const { setSelected } = useNexus();

  useEffect(() => {
    setSelected("Alianza");
  }, [setSelected]);
  return (
    <>
      <Navbar />
      <AllianceView />
    </>
  );
}

export default Alliance;
