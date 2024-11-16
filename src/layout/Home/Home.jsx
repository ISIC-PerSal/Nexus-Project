import React, { useEffect } from "react";
import HomeView from "./HomeView";
import Navbar from "../../components/Navbar/Navbar";
import UnderConstructionView from "../../components/UnderConstruction/UnderConstructionView";
import { useNexusContext } from "../../Hooks/useNexusContext";
import FooterView from "../../components/Footer/FooterView";

function Home() {
  const typeUser = sessionStorage.getItem("type");
  const { changeNavbarItem } = useNexusContext();

  useEffect(() => {
    changeNavbarItem("Noticias");
  }, [changeNavbarItem]);
  return (
    <>
      <Navbar />
      {typeUser == "General" ? <HomeView /> : <UnderConstructionView />}
    </>
  );
}

export default Home;
