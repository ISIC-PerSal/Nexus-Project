import React, { useEffect } from "react";
import HomeView from "./HomeView";
import { useNexus } from "../../Hooks/useContext";
import Navbar from "../../components/Navbar/Navbar";
import UnderConstructionView from "../../components/UnderConstruction/UnderConstructionView";

function Home() {
  const { setSelected } = useNexus();
  const typeUser = sessionStorage.getItem("type");

  useEffect(() => {
    setSelected("Noticias");
  }, [setSelected]);
  return (
    <>
      <Navbar />
      {typeUser == "General" ? <HomeView /> : <UnderConstructionView />}
    </>
  );
}

export default Home;