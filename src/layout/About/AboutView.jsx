import React from 'react'
import Navbar from '../../../componets/Navbar/Navbar'
import AboutSection from '../../componets/About/AboutSection'
import Poster from "../../assets/Poster.jpg";

function AboutView() {
  return (
    <>
     <Navbar/>
     <AboutSection/>
    <main>
      <div>
      
      <div>
        <div className='d-flex justify-content-center'>
          <h1>
            Acerca de nosotros
          </h1>
        </div>
        <hr /><p className='p-3 text-justify' >La creación de una plataforma que actúe como tablón de anuncios de proyectos e
        iniciativas comunitarias en pro de la Agenda 2030 es de gran relevancia para abordar la problemática de
        la centralización y difusión de proyectos relacionados con los Objetivos de Desarrollo Sostenible (ODS).
        Al enfocarnos en el Objetivo de Desarrollo Sostenible 17, “Alianzas para lograr los objetivos”, nuestra
        propuesta busca fortalecer la cooperación entre diferentes actores involucrados en el cumplimiento de la
        Agenda 2030.
        <br />
        Nexus Project busca permitir una mejor coordinación y colaboración entre promotores, voluntarios y
        patrocinadores, facilitando el acceso a información crucial sobre proyectos ODS en la comunidad. La
        difusión efectiva y la interacción entre estos grupos ayudarán a optimizar recursos, compartir
        conocimientos y potenciar el impacto de las iniciativas sostenibles.</p>
      </div>
      <div className='d-flex justify-content-center'>
        <img src={Poster} alt="" style={{ width: "800px" }} />
      </div>
      
    </div>
    </main>
    </>
  )

}

export default AboutView
