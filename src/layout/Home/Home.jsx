import React, { useEffect } from "react";
import HomeView from "./HomeView";
import { useNexus } from "../../Hooks/useContext";

function Home() {
  const { setSelected } = useNexus();

  useEffect(() => {
    setSelected("Noticias");
  }, [setSelected]);
  return (
    <>
      <HomeView />
    </>
  );
}

export default Home;
