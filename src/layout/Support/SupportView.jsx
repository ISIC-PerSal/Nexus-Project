import React from 'react'

function SupportView() {
  return (
    <>
      <main className="px-5 pt-3 pb-3">
        <div className="container bg-light bg-gradient p-5 rounded shadow-lg">
          <div className='fs-1 p-2'>
            <svg className="m-2" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-question-circle-fill" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247m2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
            </svg>
            Preguntas frecuentes/ FAQs
          </div>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  ¿Qué puedo hacer en Nexus Project?
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body">
               <p>
                Si tienes una idea que puede cambiar tu comunidad y/o se alinean con los <a className="text-primary" href="https://www.un.org/sustainabledevelopment/es/objetivos-de-desarrollo-sostenible/" target="_blank">Objetivos para el Desarrollo Sustentable
                </a> planteados por la <a className="text-primary" href="https://www.un.org/sustainabledevelopment/es/2015/09/la-asamblea-general-adopta-la-agenda-2030-para-el-desarrollo-sostenible/" target="_blank">Agenda 2030</a>,
                este es el espacio correcto. Nexus Project se encarga de ser su tablón de anuncios de modo que no pasen desapercibidas como podría suceder en otros 
                ecosistemas virtuales no centralizados o especializados en este ámbito. Puedes ser un líder <a className="text-primary" href="/new-project">registrando</a> detalladamente toda la dinámica de tu proyecto y luego
                ver a tus solidarios voluntarios venir a ella, o bien ser uno de ellos para proyectos ajenos que puedes <a className="text-primary" href="/explore">explorar</a> en su respectiva sección. Todo usuario interesado
                en <a className="text-primary" href="/login">iniciar sesión</a> con el objetivo de ser un agente de cambio en el lugar en el que vive y conectarle con
                su grupo ideal que aspira convertirse en un opulente frente cooperativo a la obra es todo lo que busca prestar este sitio.
               </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  ¿Qué implica cada rol?
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                 <p>Ser <strong>líder</strong> significa tomar la representación del colectivo que se intende  conseguir para el cumplimiento del proyecto. 
                  Es el nombre en el que recae la organización de la iniciativa, ¡es todo un orgullo y responsabilidad!. Nexus Project invita a todas y todos estos valientes 
                  líderes comprometidos a cambiar sus comunidades y les ofrece herramientas para pasar la voz a todos los importantes miembros del siguiente rol.
                 <br></br>
                 <br></br>
                 Una de las fuerzas que movilizan cambios de gran impacto en una población es la civil; Un <strong>voluntario</strong> tiene con su participación
                 el poder de lograr que una idea que no sólo lo beneficia a él se haga realidad. Los voluntarios son todos los ciudadanos interesados en sumarse a 
                 causas en favor del desarrollo social. Algunas manos para ayudar, apoyo económico o en especie, ¡todo cuenta!. Tan valiosos como los líderes, son 
                 personas valerosas y altruistas, ¡anímate a <a className="text-primary" href="/explore">encontrar un proyecto</a> que te necesita!.
                 </p>
              </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  ¿Qué tipo de contenido puedo publicar en Nexus Project?
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <p>
                    El formulario en <b className="text-primary" style={{color : "#F272A"}}><a className="text-primary" style={{decoration: "none"}} href='/new-project'>Registrar proyecto
                    </a></b> se inclina a la inscripción de <b>iniciativas ciudadanas o proyectos comunitarios alineados con el desarrollo de la localidad, de la mano con el impulso 
                      al cumplimiento de las metas de los <a className="text-primary" target='_blank' href='https://www.un.org/sustainabledevelopment/es/objetivos-de-desarrollo-sostenible/'>
                      Objetivos de Desarrollo Sustentable</a></b>.
                    <br/><br/>
                    Propuestas basadas en la colaboración de todos los civiles posibles, en pro del bienestar colectivo: como la creación de huertos, campañas de reforestación, talleres gratuitos de capacitaciones, cruzadas de alfabetización y salud sin costo, limpieza de playas, y en general actividades masivas enfocadas al progreso sostenible.
                    Es importante recalcar que Nexus Project NO se plantea como un sitio para que proyectos más complejos basados en prototipos COMERCIALES en aras de ser industrializados, encuentren inversiones.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  ¿Qué hago si mi comunidad no aparece en los listados?
                </button>
              </h2>
              <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <p>Si tu comunidad no se encuentra para seleccionar en el formulario o incluso hemos cometido un error al escribirlo o representarlo gráficamente, por favor 
                    <a className="text-primary" href="mailto:nexus.project.supp@gmail.com"> contáctanos</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default SupportView