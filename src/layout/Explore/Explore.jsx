import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import ExploreView from "./ExploreView";
import fetchGetProject from "../../util/project/fetchGetProject";
import odsData from "../../util/odsData";
import { useNexus } from "../../Hooks/useContext";

function Explore() {
  const { setSelected } = useNexus();

  useEffect(() => {
    setSelected("Explorar");
  }, [setSelected]);

  
  const [dataProject, setDataProject] = useState([]);
  const [title, setTitle] = useState("");
  const [ods, setOds] = useState("0");
  const [country, setCountry] = useState("Todos");
  const [countrySearch, setCountrySearch] = useState("");


  const updatedOdsData = [
    { value: "0", label: "Todos" },
    ...odsData.map((item) => ({
      value: item.ods,
      label: item.ods + ". " + item.title,
    })),
  ];

  const handleODSChange = (event) => {
    if (event.value) {
      setOds(event.value);
    } else {
      setOds("0");
    }
  };
  const handleCountryChange = (event) => {
    if (event.label.props.children[1] == "Todos") {
      setCountrySearch("");
      setCountry("Todos");
    } else {
      setCountrySearch(event.label.props.children[1]);
      setCountry(event.label.props.children[1]);
    }
  };

  const handleReset = () => {
    setCountry("Todos");
    setCountrySearch("");
    setOds("0");
    setTitle("");
    fetchData("", "", "");
  };

  async function fetchData(projectInput, odsInput, countryInput) {
    try {
      const data = await fetchGetProject(
        "",
        "",
        projectInput,
        odsInput,
        countryInput
      );
      setDataProject(data);
    } catch (error) {
      console.error(error);
    } 
  }

  useEffect(() => {
    fetchData(title, ods, countrySearch);
  }, [title, ods, countrySearch]);

  return (
    <>
      <Navbar />
      <ExploreView
        dataProject={dataProject}
        title={title}
        setTitle={setTitle}
        ods={ods}
        setOds={setOds}
        odsArray={updatedOdsData}
        country={country}
        setCountry={setCountry}
        handleODSChange={handleODSChange}
        handleCountryChange={handleCountryChange}
        handleReset={handleReset}
      />
    </>
  );
}

export default Explore;