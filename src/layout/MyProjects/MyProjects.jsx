import React, { useEffect, useState } from "react";
import MyProjectsView from "./MyProjectsView";
import Navbar from "../../components/Navbar/Navbar";
import { useNexus } from "../../Hooks/useContext";
import ProjectTable from "../../components/ProjectTable/ProjectTable";

function MyProjects() {
  const { setSelected } = useNexus();
  const [selectedTab, setSelectedTab] = useState("Publicado");

  useEffect(() => {
    setSelected("Yo");
  }, [setSelected]);

  const idUser = sessionStorage.getItem("id_user");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    console.log(renderContent(tab))
  };

  const renderContent = () => {
    switch (selectedTab) {
      case "Publicado":
        return (
          <ProjectTable
            title={"Proyectos publicados"}
            idUser={idUser}
            status={"Publicado"}
            type={"Propio"}
          />
        );
      case "Activo":
        return (
          <ProjectTable
            title="Proyectos activos"
            idUser={idUser}
            status={"Activo"}
            type={"Propio"}
          />
        );
      case "Finalizado":
        return (
          <ProjectTable
            title="Proyectos finalizados"
            idUser={idUser}
            status={"Finalizado"}
            type={"Propio"}
          />
        );
      case "Borrador":
        return (
          <ProjectTable
            title="Proyectos en borrador"
            idUser={idUser}
            status={"Borrador"}
            type={"Propio"}
          />
        );
      case "Inscrito-Publicado":
        return (
          <ProjectTable
            title="Incritos Publicados"
            idUser={idUser}
            status={"Inscrito-Publicado"}
            type={"Inscrito"}
          />
        );
      case "Inscrito-Activo":
        return (
          <ProjectTable
            title="Incritos Activos"
            idUser={idUser}
            status={"Inscrito-Activo"}
            type={"Inscrito"}
          />
        );
      case "Inscrito-Finalizado":
        return (
          <ProjectTable
            title="Incritos Finalizados"
            idUser={idUser}
            status={"Inscrito-Finalizado"}
            type={"Inscrito"}
          />
        );
      default:
        return <div>Seleccione una opción</div>;
    }
  };

  return (
    <>
      <Navbar />
      <MyProjectsView
        idUser={idUser}
        selectedTab={selectedTab}
        handleTabClick={handleTabClick}
      />
    </>
  );
}

export default MyProjects;