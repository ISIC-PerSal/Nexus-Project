import React, { useEffect, useState } from "react";
import HomeView from "./HomeView";
import Navbar from "../../components/Navbar/Navbar";
import UnderConstructionView from "../../components/UnderConstruction/UnderConstructionView";
import { useNexusContext } from "../../Hooks/useNexusContext";
import FooterView from "../../components/Footer/FooterView";
import fetchGetNewsByUser from "../../util/project/fetchGetNewsByUser";

function Home() {
  const typeUser = sessionStorage.getItem("type");
  const { changeNavbarItem } = useNexusContext();

  useEffect(() => {
    changeNavbarItem("Noticias");
  }, [changeNavbarItem]);
  const [dataNews, setDataNews] = useState([]);

  useEffect(() => {
    const getDataContent = async () => {
      const body = {
        idUser: sessionStorage.getItem("id_user"),
      };
      try {
        const data = await fetchGetNewsByUser(body);
        console.log(data)
        setDataNews(data);
      } catch (error) {
        console.error("Error fetching news:", error);
        setDataNews([]);
      }
    };
    getDataContent();
  }, [changeNavbarItem]);

  return (
    <>
      <Navbar />
      {typeUser == "General" ? (
        <HomeView data={dataNews} />
      ) : (
        <UnderConstructionView />
      )}
    </>
  );
}

export default Home;
