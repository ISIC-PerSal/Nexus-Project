import React from "react";
import ProjectTable from "../../components/ProjectTable/ProjectTable";
import "./MyProjects.css";

function MyProjectsView({ idUser, selectedTab, handleTabClick }) {
  

  return (
    <main className="py-3 d-flex justify-content-center w-100 bg-img">
      <div className="container w-75 mt-3 p-3 border rounded border-secondary-subtle bg-gral">
        <div className="d-flex justify-content-evenly bg-oficial">
          <button
            className={`tabs ${
              selectedTab === "Publicado" ? "tab-active" : ""
            }`}
            onClick={() => handleTabClick("Publicado")}
          >
            Publicados
          </button>
          <button
            className={`tabs ${selectedTab === "Activo" ? "tab-active" : ""}`}
            onClick={() => handleTabClick("Activo")}
          >
            Activos
          </button>
          <button
            className={`tabs ${
              selectedTab === "Finalizado" ? "tab-active" : ""
            }`}
            onClick={() => handleTabClick("Finalizado")}
          >
            Finalizados
          </button>
          <button
            className={`tabs ${selectedTab === "Borrador" ? "tab-active" : ""}`}
            onClick={() => handleTabClick("Borrador")}
          >
            Borradores
          </button>
          <button
            className={`tabs ${
              selectedTab === "Inscrito-Publicado" ? "tab-active" : ""
            }`}
            onClick={() => handleTabClick("Inscrito-Publicado")}
          >
            Incritos Publicados
          </button>
          <button
            className={`tabs ${
              selectedTab === "Inscrito-Activo" ? "tab-active" : ""
            }`}
            onClick={() => handleTabClick("Inscrito-Activo")}
          >
            Incritos Activos
          </button>
          <button
            className={`tabs ${
              selectedTab === "Inscrito-Finalizado" ? "tab-active" : ""
            }`}
            onClick={() => handleTabClick("Inscrito-Finalizado")}
          >
            Incritos Finalizados
          </button>
        </div>
      </div>
    </main>
  );
}

export default MyProjectsView;
