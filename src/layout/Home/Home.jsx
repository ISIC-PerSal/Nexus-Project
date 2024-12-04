import React, { useEffect, useState } from "react";
import HomeView from "./HomeView";
import Navbar from "../../components/Navbar/Navbar";
import UnderConstructionView from "../../components/UnderConstruction/UnderConstructionView";
import { useNexusContext } from "../../Hooks/useNexusContext";
import FooterView from "../../components/Footer/FooterView";
import fetchGetNewsByUser from "../../util/project/fetchGetNewsByUser";
import NoDataView from "../../components/NoData/NoDataView";
import fondoNexus from "../../assets/nexus.png";
import MainTranslator from "../Main/MainTranslator";

function Home() {
  const typeUser = sessionStorage.getItem("type");
  const { changeNavbarItem } = useNexusContext();
  const { language } = useNexusContext();

  const handleLanguage = (field, position) => {
    const item = MainTranslator[language];
    if (position == undefined) {
      return item[field];
    } else {
      const positionValue = item[field];
      return positionValue[position];
    }
  };

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
      {dataNews && dataNews.length>0 ? (
        <HomeView data={dataNews} />
      ) : (
        <>
        <div
        className="m-3 p-5 rounded shadow-lg d-flex align-items-center justify-content-center"
        style={{ backgroundColor: "rgb(253, 229, 230)" }}
      >
        <div className="text-center">
          <img
            src={fondoNexus}
            alt="Fondo Nexus"
            className="img-fluid rounded-circle shadow"
            style={{
              width: "380px",
              height: "380px",
              objectFit: "cover",
              margin: "0 auto",
            }}
          />
        </div>
        <div className="d-flex flex-column justify-content-start ps-3">
          <h1
            className="display-4 fw-bold mb-3"
            style={{
              fontFamily: "Arial, sans-serif",
              color: "rgb(130, 91, 89)",
              textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
            }}
          >
            {handleLanguage("title")}
          </h1>
          <div className="d-flex align-items-center">
            <h1
              className="fw-bold me-2"
              style={{
                fontFamily: "Arial, sans-serif",
                color: "rgb(194, 76, 90)",
                textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
                fontSize: "8rem",
              }}
            >
              Nexus
            </h1>
            <h1
              className="fw-bold"
              style={{
                fontFamily: "Arial, sans-serif",
                color: "rgb(234, 79, 151)",
                textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
                fontSize: "8rem",
              }}
            >
              Project
            </h1>
          </div>
        </div>
      </div>
        </>
      )}
    </>
  );
}

export default Home;
