import React, { useEffect, useState } from "react";
import ProjectDetailsView from "./ProjectDetailsView";
import { useLocation, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import fetchGetProject from "../../util/project/fetchGetProject";
import ErrorView from "../Error/ErrorView";
import LoadingView from "../../components/Loading/LoadingView";
import isAuth from "../../util/isAuth";
import { useNexus } from "../../Hooks/useContext";
import imgDefault from "../../assets/Logo.png";
import PaisesProyecto from "../../util/location/PaisesProyecto";
import odsData from "../../util/odsData";
import getFlag from "../../util/data/getFlag";
import getRealVolunteers from "../../util/data/getRealVolunteers";

function ProjectDetails() {
  const { idProject } = useParams();
  const isLogin = isAuth();
  const location = useLocation();
  const statusProject =
    location.state != null ? location.state.statusProject : "";
  const { setSelected } = useNexus();
  const currentUser = sessionStorage.getItem("id_user");

  useEffect(() => {
    setSelected("Explorar");
  }, [setSelected]);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);


  const [formData, setFormData] = useState({
    leaderType: "",
    name: "",
    checkName: false,
    phone: "",
    email: "",
    checkEmail: false,
    rfc: "",
    checkRfc: false,
    clabe: "",
    checkClabe: false,
    project: "",
    volunteers: 1,
    description: "",
    projectType: "",
    donation: false,
    country: "Todos",
    state: [],
    zip: "",
    city: "",
    address: "",
    startDate: "",
    finishDate: "",
    urlProject: "",
    image: "",
    background: "",
    odsArray: [],
  });

  const typeUser = sessionStorage.getItem("type");

  async function fetchData() {
    setLoading(true);
    try {
      const dataP = await fetchGetProject(
        idProject,
        "",
        "",
        "",
        "",
        typeUser,
        statusProject ? statusProject : "Publicado,Activo,Finalizado"
      );
      setData(dataP);
    } catch (error) {
      console.error(error);
      setData(null);
    } finally {
      setLoading(false);
    }
  }

  const renderODS = () => {
    const activeODS = [];

    for (let i = 1; i <= 17; i++) {
      const odsKey = `ods${i}`;
      if (data[odsKey] == "1") {
        const odsItem = {
          id_ods: i,
          ods: odsData[i - 1].title,
        };
        activeODS.push(odsItem);
      }
    }

    setFormData((prev) => ({ ...prev, odsArray: activeODS }));
  };

  useEffect(() => {
    fetchData();
  }, [idProject]);

  useEffect(() => {
    if (data && Object.keys(data).length > 0) {
      setFormData({
        idProject: data.id_project_pk || "",
        leaderType: data.leader_type || "",
        name: data.name || "",
        checkName: data.checkName || false,
        phone: data.phone || "",
        email: data.email || "",
        checkEmail: data.checkEmail || false,
        rfc: data.rfc || "",
        checkRfc: data.checkRfc || false,
        clabe: data.clabe || "",
        checkClabe: data.checkClabe || false,
        project: data.project || "",
        volunteers: data.volunteers || 1,
        description: data.description || "",
        projectType: data.project_type || "",
        donation: data.donation || false,
        country: data.country || "Todos",
        state: data.state || [],
        zip: data.zip || "",
        city: data.city || "",
        address: data.address || "",
        startDate: data.start_date || "",
        finishDate: data.finish_date || "",
        urlProject: data.urlProject || "",
        image: data.image || imgDefault,
        background: data.background_image || "",
        odsArray: [],
      });
      renderODS();
    }
  }, [data]);

  if (loading) {
    return (
      <>
        <Navbar />
        <LoadingView />
      </>
    );
  }

  const bandera = (item) => {
    return getFlag(item);
  };

  return (
    <>
      {isLogin && data && Object.keys(data).length > 0 ? (
        <div>
          <Navbar />
          <ProjectDetailsView
            data={data}
            id={idProject}
            formData={formData}
            setFormData={setFormData}
            imgCountry={bandera(formData.country)}
          />
        </div>
      ) : (
        <ErrorView />
      )}
    </>
  );
}

export default ProjectDetails;