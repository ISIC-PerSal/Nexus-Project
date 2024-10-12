import React, { useEffect, useState } from "react";
import MyProjectsView from "./MyProjectsView";
import Navbar from "../../components/Navbar/Navbar";
import { useNexus } from "../../Hooks/useContext";
import ProjectTable from "../../components/ProjectTable/ProjectTable";
import NoDataView from "../../components/NoData/NoDataView";

function MyProjects() {
  const { setSelected } = useNexus();
  const [selectedTab, setSelectedTab] = useState("Publicado");
  const [component, setComponent] = useState(
    <div className="animation">
      <NoDataView />
    </div>
  );

  useEffect(() => {
    setSelected("Yo");
  }, [setSelected]);

  const idUser = sessionStorage.getItem("id_user");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  useEffect(() => {
    const render = (
      <div key={selectedTab} className="fadeIn">
        {renderContent(selectedTab)}
      </div>
    );
    setComponent(render);
  }, [selectedTab]);

  const renderContent = (value) => {
    switch (value) {
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
            status={"Publicado"}
            type={"Miembro"}
          />
        );
      case "Inscrito-Activo":
        return (
          <ProjectTable
            title="Incritos Activos"
            idUser={idUser}
            status={"Activo"}
            type={"Miembro"}
          />
        );
      case "Inscrito-Finalizado":
        return (
          <ProjectTable
            title="Incritos Finalizados"
            idUser={idUser}
            status={"Finalizado"}
            type={"Miembro"}
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
        component={component}
      />
    </>
  );
}

export default MyProjects;