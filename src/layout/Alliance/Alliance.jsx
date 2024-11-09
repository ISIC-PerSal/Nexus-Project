import React, { useEffect } from "react";
import AllianceView from "./AllianceView";
import Navbar from "../../components/Navbar/Navbar";
import { useNexusContext } from "../../Hooks/useNexusContext";

function Alliance() {
  const { changeNavbarItem } = useNexusContext();
  useEffect(() => {
    changeNavbarItem("Alianza");
  }, [changeNavbarItem]);
  return (
    <>
      <Navbar />
      <AllianceView />
    </>
  );
}

export default Alliance;
