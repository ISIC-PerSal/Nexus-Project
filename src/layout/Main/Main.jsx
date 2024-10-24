import React, { useEffect } from "react";
import MainView from "./MainView";
import { useNexusContext } from "../../Hooks/useNexusContext";

function Main() {
  sessionStorage.clear();
  const { changeNavbarItem } = useNexusContext();
  useEffect(() => {
    changeNavbarItem("Noticias");
  }, [changeNavbarItem]);

  return (
    <>
      <MainView />
    </>
  );
}

export default Main;
