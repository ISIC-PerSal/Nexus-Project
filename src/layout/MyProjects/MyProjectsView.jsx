import React from "react";
import "./MyProjects.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ProjectTable from "../../components/ProjectTable/ProjectTable";

function MyProjectsView({ idUser, selectedTab, handleTabClick, component }) {
  return (
    <main className="pb-3 d-flex justify-content-center w-100 bg-img">
      <div className="container w-75 mt-3 p-3 border rounded border-secondary-subtle bg-gral">
        
        <div className={`${
                sessionStorage.getItem("type") === "General" || !sessionStorage.getItem("type")
                ?"bg-oficial"
                :"bg-oficial-juvenil"
              } d-flex justify-content-evenly`}>
          
          <button
            className={`tabs ${selectedTab === "Publicado" ? "tab-active" : ""} ${
              sessionStorage.getItem("type") === "General" || !sessionStorage.getItem("type")
                ? "tabs"
                : "tabs-juvenil"
            }`}
            onClick={() => handleTabClick("Publicado")}
          >
            Publicados
          </button>
          <button
            className={`tabs ${selectedTab === "Activo" ? "tab-active" : ""} ${
              sessionStorage.getItem("type") === "General" || !sessionStorage.getItem("type")
                ? "tabs"
                : "tabs-juvenil"
            }`}
            onClick={() => handleTabClick("Activo")}
          >
            Activos
          </button>
          <button
            className={`tabs ${selectedTab === "Finalizado" ? "tab-active" : ""} ${
              sessionStorage.getItem("type") === "General" || !sessionStorage.getItem("type")
                ? "tabs"
                : "tabs-juvenil"
            }`}
            onClick={() => handleTabClick("Finalizado")}
          >
            Finalizados
          </button>
          <button
            className={`tabs ${selectedTab === "Borrador" ? "tab-active" : ""} ${
              sessionStorage.getItem("type") === "General" || !sessionStorage.getItem("type")
                ? "tabs"
                : "tabs-juvenil"
            }`}
            onClick={() => handleTabClick("Borrador")}
          >
            Borradores
          </button>
          <button
            className={`tabs ${selectedTab === "Inscrito-Publicado" ? "tab-active" : ""} ${
              sessionStorage.getItem("type") === "General" || !sessionStorage.getItem("type")
                ? "tabs"
                : "tabs-juvenil"
            }`}
            onClick={() => handleTabClick("Inscrito-Publicado")}
          >
            Incritos Publicados
          </button>
          <button
            className={`tabs ${selectedTab === "Inscrito-Activo" ? "tab-active" : ""} ${
              sessionStorage.getItem("type") === "General" || !sessionStorage.getItem("type")
                ? "tabs"
                : "tabs-juvenil"
            }`}
            onClick={() => handleTabClick("Inscrito-Activo")}
          >
            Incritos Activos
          </button>
          <button
            className={`tabs ${selectedTab === "Inscrito-Finalizado" ? "tab-active" : ""} ${
              sessionStorage.getItem("type") === "General" || !sessionStorage.getItem("type")
                ? "tabs"
                : "tabs-juvenil"
            }`}
            onClick={() => handleTabClick("Inscrito-Finalizado")}
          >
            Incritos Finalizados
          </button>
        </div>
        <div>{component}</div>
      </div>
    </main>
  );
}

export default MyProjectsView;
