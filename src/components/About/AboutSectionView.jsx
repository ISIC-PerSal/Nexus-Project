import React from "react";
import Poster from "../../assets/Poster.jpg";

function AboutView() {
  return (
    <main className="px-5 pt-3 pb-3">
      <div className="container bg-light bg-gradient p-5 rounded shadow-lg">
        <div className="row">
          <div className="col text-center">
            <h1 className="display-4 fw-bold mb-4">Acerca de nosotros</h1>
            <hr className="w-50 mx-auto" />
            <p className="p-3 text-justify lead">
              La creación de una plataforma que actúe como tablón de anuncios de
              proyectos e iniciativas comunitarias en pro de la Agenda 2030 es de
              gran relevancia para abordar la problemática de la centralización y
              difusión de proyectos relacionados con los Objetivos de Desarrollo
              Sostenible (ODS). Al enfocarnos en el Objetivo de Desarrollo
              Sostenible 17, “Alianzas para lograr los objetivos”, nuestra
              propuesta busca fortalecer la cooperación entre diferentes actores
              involucrados en el cumplimiento de la Agenda 2030.
              <br /><br />
              Nexus Project busca permitir una mejor coordinación y colaboración
              entre promotores, voluntarios y patrocinadores, facilitando el
              acceso a información crucial sobre proyectos ODS en la comunidad. La
              difusión efectiva y la interacción entre estos grupos ayudarán a
              optimizar recursos, compartir conocimientos y potenciar el impacto
              de las iniciativas sostenibles.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <img src={Poster} alt="Poster del proyecto" className="img-fluid shadow-lg rounded" style={{ maxWidth: "800px" }} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default AboutView;
