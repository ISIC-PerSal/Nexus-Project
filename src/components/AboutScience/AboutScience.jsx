import React, { useEffect, useState } from "react";
import AboutScienceView from "./AboutScienceView";
import getArticles from "../../util/articles/getArticles";
import Navbar from "../../components/Navbar/Navbar";
import { useNexusContext } from "../../Hooks/useNexusContext";

function AboutScience() {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const { changeNavbarItem } = useNexusContext();

  useEffect(() => {
    changeNavbarItem("ConCiencia");
  }, [changeNavbarItem]);

  const getDataContent = async (title) => {
    try {
      const data = await getArticles(title);
      setData(data);
    } catch (error) {
      console.error("Error fetching news:", error);
      setDataNews([]);
    }
  };

  useEffect(() => {
    getDataContent(title);
  }, [title]);

  const handleReset = () => {
    setTitle("");
  };

  const handleSerch = (value) => {
    setTitle(value);
  };

  return (
    <>
      <Navbar />
      <AboutScienceView
        data={data}
        handleReset={handleReset}
        handleSerch={handleSerch}
        title={title}
      />
    </>
  );
}

export default AboutScience;
