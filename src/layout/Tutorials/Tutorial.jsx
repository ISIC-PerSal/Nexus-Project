import React from "react";
import Navbar from "../../components/Navbar/Navbar";

function Tutorials() {
    return (
        <>
            <Navbar />
            <div className="container w-75 mgit t-3 p-3 mb-3 border rounded border-secondary-subtle bg-gral">
                <h1>Tutoriales</h1>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                            >
                                ¿Cómo registro mi proyecto?
                            </button>
                        </h2>
                        <div
                            id="collapseOne"
                            className="accordion-collapse collapse show"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                <p>
                                    Tutoriales Registro de proyecto Estar aquí significa que darás
                                    ese gran paso para convocar a tu comunidad por una causa
                                    impactante, ¡felicitaciones por ser el agente de cambio líder!
                                    Este instructivo te guiará paso a paso para completar el
                                    formulario de registro de tu campaña o proyecto ciudadano
                                    relacionado con los Objetivos de Desarrollo Sostenible (ODS),
                                    después de leerlo asegúrate de reunir toda esta información
                                    para proceder a la sección correspondiente en el sitio.
                                    <h4>Paso 1: Datos del líder</h4>
                                    <h5>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            class="bi bi-person-circle"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                                            <path
                                                fill-rule="evenodd"
                                                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                                            />
                                        </svg>
                                        Tipo de representante
                                    </h5>
                                    En este campo debes seleccionar el tipo de representante que
                                    eres o representa tu iniciativa. Las opciones son:
                                    <ul>
                                        <li>
                                            <b>Individuo: </b>Si eres una persona que actúa en nombre
                                            propio.
                                        </li>
                                        <li>
                                            <b>Institución:</b> Instituciones educativas o
                                            comunitarias.
                                        </li>
                                        <li>
                                            <b>Empresa:</b> Si representas a una empresa privada.
                                        </li>
                                        <li>
                                            <b>Organización:</b> Si representas a una organización sin
                                            fines de lucro, asociación civil, etc.
                                        </li>
                                    </ul>
                                    <h5>Nombre del líder</h5>
                                    Escribe el nombre completo de la persona que lidera el
                                    proyecto o campaña. Este será el contacto principal para
                                    cualquier comunicación relacionada con la iniciativa. Es
                                    relevante no usar sobrenombres o algún dato que no concuerde
                                    con su información personal legal en este contexto, para
                                    evitar problemáticas judiciales sobre identidad, legalidad y
                                    transparencia detrás de las iniciativas.
                                    <br></br>
                                    Puedes activar el checkbox inferior a este campo para usar
                                    automáticamente los datos pertinentes al formulario (nombre
                                    completo) que ingresaste al crear tu cuenta.
                                    <br></br>
                                    <br></br>
                                    <h5>Número de teléfono y correo electrónico de contacto</h5>
                                    Ingresa tu número de teléfono y tu correo electrónico como
                                    líder o persona de contacto. Asegúrate de que esta información
                                    sea correcta, ya que será utilizada para comunicarse contigo.
                                    <br></br>
                                    Puedes activar el checkbox inferior a este campo para usar
                                    automáticamente los datos pertinentes al formulario (correo
                                    electrónico) que ingresaste al crear tu cuenta.
                                    <br></br>
                                    <br></br>
                                    <h4>Paso 2: Datos del proyecto</h4>
                                    <h5>Nombre del proyecto</h5>
                                    Escribe el nombre oficial de tu proyecto o campaña. Este debe
                                    ser claro, descriptivo y reflejar el propósito de tu
                                    iniciativa. Por ejemplo:
                                    <ul>
                                        <li>
                                            "Campaña de reforestación urbana en la Ciudad de México".
                                        </li>
                                        <li>
                                            "Proyecto de educación ambiental para niños en zonas
                                            rurales".
                                        </li>
                                        <li>
                                            "Iniciativa de reciclaje comunitario en Buenos Aires".
                                        </li>
                                    </ul>
                                    Es importante enfatizar que si el proyecto a publicar tiene un
                                    nombre registrado y/o está relacionado a un tipo de
                                    evento/campaña que lleva numerosas ediciones, puedas validar
                                    tu autoría o representación oficial en tu ciudad. Si piensas
                                    realizar este proceso aún, te recomendamos completar la
                                    difusión en la página posterior a que se apruebe.
                                    <br></br>
                                    <br></br>
                                    <h5>Imagen descriptiva del proyecto (opcional)</h5>
                                    Si cuentas con material gráfico que se considere el emblema de
                                    tu campaña, este es el espacio donde puedes cargarlo. Puedes
                                    dejarlo vacío si no cuentas con alguna imagen alusiva al
                                    momento de hacer el registro y modificarlo más adelante desde
                                    borradores o después de publicarlo. Respetemos a los otros
                                    usuarios: evita cargar imágenes que no te pertenecen, alegan
                                    mensajes/representaciones con discursos de odio, información
                                    falsa o no están para nada relacionadas. El sitio se permite
                                    eliminarlas si infringen los términos de este.
                                    <br></br>
                                    <br></br>
                                    <h5>URL del proyecto (opcional)</h5>
                                    Si tu proyecto cuenta con un sitio web o una página en alguna
                                    red social puedes compartirlo para que las personas
                                    interesadas en participar puedan saber más de la trayectoria
                                    de este o encontrar todavía más detalles. Copia el enlace y
                                    pégalo en este campo del formulario. Puedes dejarlo vacío si
                                    no cuentas con alguna imagen alusiva al momento de hacer el
                                    registro y modificarlo más adelante desde borradores o después
                                    de publicarlo.
                                    <br></br>
                                    Respetemos a los otros usuarios: evita cargar enlaces a sitios
                                    que no te pertenecen, información falsa o no estén para nada
                                    relacionadas. El sitio se permite eliminarlos si infringen los
                                    términos de este. Número de voluntarios
                                    <br></br>
                                    <br></br>
                                    <h5>Número de voluntarios</h5>
                                    <br></br>
                                    <br></br>
                                    <h5>Descripción del proyecto</h5>
                                    En este campo, describe de manera clara y concisa en qué
                                    consiste tu proyecto o campaña. Incluye:
                                    <ul>
                                        <li>Objetivos principales.</li>
                                        <li>Actividades planeadas.</li>
                                        <li>Población beneficiada.</li>
                                        <li>Impacto esperado.</li>
                                    </ul>
                                    <b>
                                        Nota: Limita tu descripción a un máximo de 500 palabras.
                                    </b>
                                    <br></br>
                                    <br></br>
                                    <h5>Tipo de proyecto</h5>
                                    <br></br>
                                    <br></br>
                                    <h5>País</h5>
                                    Selecciona el país donde se desarrollará principalmente el
                                    proyecto o campaña. Si es internacional, elige el país de
                                    origen o el principal.
                                    <br></br>
                                    <br></br>
                                    <h5>Estado/Provincia/Región</h5>
                                    <br></br>
                                    <br></br>
                                    <h5>Municipio</h5>
                                    <br></br>
                                    <br></br>
                                    <h5>Código postal</h5>
                                    <br></br>
                                    <br></br>
                                    <h5>Fecha de arranque y fecha límite de inscripción</h5>
                                    <br></br>
                                    <br></br>
                                    <h5>Dirección</h5>
                                    Proporciona la dirección física donde se llevará a cabo el
                                    proyecto o la sede principal de la organización. Si es una
                                    campaña virtual, esto no aplica.
                                    <br></br>
                                    <br></br>
                                    <h5> Selección del ODS</h5>
                                    Selecciona el Objetivo de Desarrollo Sostenible (ODS) al que
                                    pertenece tu proyecto. Puedes elegir uno o varios de los
                                    siguientes:
                                    <ul>
                                        <li>ODS 1: Fin de la pobreza</li>
                                        <li>ODS 2: Hambre cero</li>
                                        <li>ODS 3: Salud y bienestar</li>
                                        <li>ODS 4: Educación de calidad</li>
                                        <li>ODS 5: Igualdad de género</li>
                                        <li>ODS 6: Agua limpia y saneamiento</li>
                                        <li>ODS 7: Energía asequible y no contaminante</li>
                                        <li>ODS 8: Trabajo decente y crecimiento económico</li>
                                        <li>ODS 9: Industria, innovación e infraestructura</li>
                                        <li>ODS 10: Reducción de las desigualdades</li>
                                        <li>ODS 11: Ciudades y comunidades sostenibles</li>
                                        <li>ODS 12: Producción y consumo responsables</li>
                                        <li>ODS 13: Acción por el clima</li>
                                        <li>ODS 14: Vida submarina</li>
                                        <li>ODS 15: Vida de ecosistemas terrestres</li>
                                        <li>ODS 16: Paz, justicia e instituciones sólidas</li>
                                        <li>ODS 17: Alianzas para lograr los objetivos</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                            >
                                ¿Cómo sé a qué ODS pertenece mi proyecto?
                            </button>
                        </h2>
                        <div
                            id="collapseTwo"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                <p>
                                    ¿Necesitas orientación para determinar en qué ODS encasillar
                                    tu idea?
                                    <br></br>
                                    <div className="rounded m-2 p-3" style={{ backgroundColor: "#ffc8c8 " }}>
                                        <h3 style={{ color: "#ffffff  " , backgroundColor:"#b70412 " }}>
                                        <img src="https://ods.dnp.gov.co/static/imgs/SDG-icons/svg/notext/SDG-icon-1.svg"></img>
                                        ODS 1: Fin de la pobreza</h3>
                                        <br></br>
                                        <b style={{ color: "#b70412" }}> Descripción oficial: </b>
                                        Poner fin a la pobreza en todas sus
                                        formas y en todo el mundo. Ejemplos de iniciativas:
                                        <ol>
                                            <li>
                                                1. Campaña de microcréditos para emprendedores:
                                                Proporcionar préstamos pequeños a personas de bajos
                                                recursos para que inicien negocios locales.{" "}
                                            </li>
                                            <li>
                                                2. Programa de donación de alimentos y ropa: Recolectar y
                                                distribuir alimentos y ropa en comunidades vulnerables.{" "}
                                            </li>
                                            <li>
                                                3. Talleres de capacitación laboral: Ofrecer cursos
                                                gratuitos para mejorar las habilidades laborales de
                                                personas en situación de pobreza.{" "}
                                            </li>
                                        </ol>
                                    </div>
                                    <br></br>
                                    <b>ODS 2: Hambre cero</b>
                                    <br></br>
                                    Descripción oficial: Poner fin al hambre, lograr la seguridad
                                    alimentaria, mejorar la nutrición y promover la agricultura
                                    sostenible. Ejemplos de iniciativas:
                                    <ol>
                                        <li>
                                            1. Huertos comunitarios: Crear espacios para cultivar
                                            alimentos en zonas urbanas o rurales con escasez de
                                            recursos.{" "}
                                        </li>
                                        <li>
                                            2. Banco de alimentos: Recolectar excedentes de alimentos
                                            de supermercados y restaurantes para distribuirlos a
                                            familias necesitadas.{" "}
                                        </li>
                                        <li>
                                            3. Campañas de educación nutricional: Enseñar a
                                            comunidades sobre alimentación saludable y aprovechamiento
                                            de recursos locales.{" "}
                                        </li>
                                    </ol>
                                    <br></br>
                                    <b>ODS 3: Salud y bienestar</b>
                                    <br></br>
                                    Descripción oficial: Garantizar una vida sana y promover el
                                    bienestar para todos en todas las edades. Ejemplos de
                                    iniciativas:
                                    <ol>
                                        <li>
                                            1. Ferias de salud gratuitas: Ofrecer chequeos médicos,
                                            vacunación y charlas sobre prevención de enfermedades.{" "}
                                        </li>
                                        <li>
                                            2. Campañas de donación de sangre: Organizar jornadas para
                                            fomentar la donación voluntaria de sangre.{" "}
                                        </li>
                                        <li>
                                            3. Programas de salud mental: Brindar talleres y apoyo
                                            psicológico a personas en situaciones de estrés o
                                            depresión.{" "}
                                        </li>
                                    </ol>
                                    <br></br>
                                    <b>ODS 4: Educación de calidad</b>
                                    <br></br>
                                    Descripción oficial: Garantizar una educación inclusiva,
                                    equitativa y de calidad, y promover oportunidades de
                                    aprendizaje durante toda la vida. Ejemplos de iniciativas:
                                    <ol>
                                        <li>
                                            1. Bibliotecas móviles: Llevar libros y materiales
                                            educativos a comunidades rurales o marginadas.
                                        </li>
                                        <li>
                                            2. Tutorías gratuitas para niños: Ofrecer clases de
                                            refuerzo escolar en matemáticas, lectura y ciencias.
                                        </li>
                                        <li>
                                            3. Campañas de alfabetización: Enseñar a leer y escribir a
                                            adultos que no tuvieron acceso a la educación.{" "}
                                        </li>
                                    </ol>
                                    <br></br>
                                    <b>
                                        ODS 5: Igualdad de género<br></br>
                                    </b>
                                    Descripción oficial: Lograr la igualdad de género y empoderar
                                    a todas las mujeres y niñas. Ejemplos de iniciativas:
                                    <ol>
                                        <li>
                                            1. Talleres de empoderamiento femenino: Capacitar a
                                            mujeres en habilidades de liderazgo y emprendimiento.{" "}
                                        </li>
                                        <li>
                                            2. Campañas contra la violencia de género: Concientizar y
                                            brindar recursos para prevenir y denunciar la violencia
                                            doméstica.{" "}
                                        </li>
                                        <li>
                                            3. Programas de equidad en el trabajo: Promover la
                                            igualdad salarial y oportunidades laborales para mujeres.{" "}
                                        </li>
                                    </ol>
                                    <br></br>
                                    <b>ODS 6: Agua limpia y saneamiento</b>
                                    <br></br>
                                    Descripción oficial: Garantizar la disponibilidad y la gestión
                                    sostenible del agua y el saneamiento para todos. Ejemplos de
                                    iniciativas:
                                    <ol>
                                        <li>
                                            1. Instalación de filtros de agua: Proporcionar sistemas
                                            de purificación de agua en comunidades sin acceso a agua
                                            potable.{" "}
                                        </li>
                                        <li>
                                            2. Campañas de limpieza de ríos: Organizar jornadas para
                                            retirar basura y contaminantes de fuentes de agua.{" "}
                                        </li>
                                        <li>
                                            3. Talleres de higiene y saneamiento: Enseñar prácticas de
                                            higiene personal y manejo de residuos.{" "}
                                        </li>
                                    </ol>
                                    <br></br>
                                    <b>ODS 7: Energía asequible y no contaminante</b>
                                    <br></br>
                                    Descripción oficial: Garantizar el acceso a una energía
                                    asequible, segura, sostenible y moderna. Ejemplos de
                                    iniciativas:
                                    <ol>
                                        <li>
                                            1. Instalación de paneles solares: Llevar energía solar a
                                            comunidades rurales sin acceso a electricidad.{" "}
                                        </li>
                                        <li>
                                            2. Campañas de eficiencia energética: Promover el uso de
                                            bombillas LED y electrodomésticos de bajo consumo.{" "}
                                        </li>
                                        <li>
                                            3. Talleres de energías renovables: Capacitar a
                                            comunidades en el uso de energías limpias como la solar o
                                            eólica.{" "}
                                        </li>
                                    </ol>
                                    <br></br>
                                    <b>ODS 8: Trabajo decente y crecimiento económico</b>
                                    <br></br>
                                    Descripción oficial: Promover el crecimiento económico
                                    sostenido, inclusivo y sostenible, el empleo pleno y
                                    productivo, y el trabajo decente para todos. Ejemplos de
                                    iniciativas:
                                    <ol>
                                        <li>
                                            1. Ferias de empleo: Conectar a personas desempleadas con
                                            empresas que ofrecen oportunidades laborales.{" "}
                                        </li>
                                        <li>
                                            2. Programas de emprendimiento juvenil: Apoyar a jóvenes
                                            para que inicien sus propios negocios.{" "}
                                        </li>
                                        <li>
                                            3. Campañas por derechos laborales: Concientizar sobre
                                            condiciones de trabajo justas y seguras.{" "}
                                        </li>
                                    </ol>
                                    <br></br>
                                    <b>ODS 9: Industria, innovación e infraestructura</b>
                                    <br></br>
                                    Descripción oficial: Construir infraestructuras resilientes,
                                    promover la industrialización inclusiva y sostenible, y
                                    fomentar la innovación. Ejemplos de iniciativas:
                                    <ol>
                                        <li>
                                            1. Talleres de tecnología para comunidades: Enseñar a usar
                                            herramientas digitales y fomentar la innovación local.{" "}
                                        </li>
                                        <li>
                                            2. Proyectos de infraestructura comunitaria: Construir
                                            puentes, caminos o sistemas de transporte en zonas
                                            rurales.{" "}
                                        </li>
                                        <li>
                                            3. Campañas de reciclaje tecnológico: Recolectar y
                                            reciclar dispositivos electrónicos para reducir desechos.{" "}
                                        </li>
                                    </ol>
                                    <br></br>
                                    <b>ODS 10: Reducción de las desigualdades</b>
                                    <br></br>
                                    Descripción oficial: Reducir la desigualdad en y entre los
                                    países. Ejemplos de iniciativas:
                                    <ol>
                                        <li>
                                            1. Programas de inclusión para personas con discapacidad:
                                            Crear espacios accesibles y oportunidades laborales.{" "}
                                        </li>
                                        <li>
                                            2. Campañas contra la discriminación: Promover la
                                            tolerancia y el respeto hacia grupos marginados.{" "}
                                        </li>
                                        <li>
                                            3. Talleres de derechos humanos: Educar a comunidades
                                            sobre igualdad y justicia social.{" "}
                                        </li>
                                    </ol>
                                    <br></br>
                                    <b>ODS 11: Ciudades y comunidades sostenibles</b>
                                    <br></br>
                                    Descripción oficial: Lograr que las ciudades y los
                                    asentamientos humanos sean inclusivos, seguros, resilientes y
                                    sostenibles. Ejemplos de iniciativas:
                                    <ol>
                                        <li>
                                            1. Campañas de movilidad sostenible: Fomentar el uso de
                                            bicicletas y transporte público.{" "}
                                        </li>
                                        <li>
                                            2. Proyectos de áreas verdes urbanas: Crear parques y
                                            jardines comunitarios en zonas densamente pobladas.{" "}
                                        </li>
                                        <li>
                                            3. Iniciativas de reciclaje comunitario: Organizar
                                            sistemas de separación y reciclaje de residuos.{" "}
                                        </li>
                                    </ol>
                                    <br></br>
                                    <b>ODS 12: Producción y consumo responsables</b>
                                    <br></br>
                                    Descripción oficial: Garantizar modalidades de consumo y
                                    producción sostenibles. Ejemplos de iniciativas:
                                    <ol>
                                        <li>
                                            1. Ferias de trueque: Promover el intercambio de bienes
                                            usados para reducir el consumo.{" "}
                                        </li>
                                        <li>
                                            2. Campañas contra el desperdicio de alimentos: Educar
                                            sobre cómo aprovechar mejor los alimentos.{" "}
                                        </li>
                                        <li>
                                            3. Talleres de economía circular: Enseñar a reutilizar y
                                            reciclar materiales.{" "}
                                        </li>
                                    </ol>
                                    <br></br>
                                    <b>ODS 13: Acción por el clima</b>
                                    <br></br>
                                    Descripción oficial: Adoptar medidas urgentes para combatir el
                                    cambio climático y sus efectos. Ejemplos de iniciativas:
                                    <ol>
                                        <li>
                                            1. Reforestación comunitaria: Plantar árboles en áreas
                                            deforestadas o urbanas.
                                        </li>
                                        <li>
                                            2. Campañas de reducción de huella de carbono: Promover el
                                            uso de transporte sostenible y energías limpias.
                                        </li>
                                        <li>
                                            3. Talleres de adaptación al cambio climático: Capacitar a
                                            comunidades para enfrentar sequías, inundaciones, etc.
                                        </li>
                                    </ol>
                                    <br></br>
                                    <b>ODS 14: Vida submarina</b>
                                    <br></br>
                                    <b>Descripción oficial: </b>Conservar y utilizar sosteniblemente los
                                    océanos, los mares y los recursos marinos. Ejemplos de
                                    iniciativas:
                                    <ol>
                                        <li>
                                            1. Limpieza de playas: Organizar jornadas para retirar
                                            plásticos y desechos de costas.
                                        </li>
                                        <li>
                                            2. Campañas de protección de arrecifes: Concientizar sobre
                                            la importancia de los ecosistemas marinos.
                                        </li>
                                        <li>
                                            3. Programas de pesca sostenible: Promover prácticas
                                            responsables entre comunidades pesqueras.
                                        </li>
                                    </ol>
                                    <br></br>
                                    <div className="rounded m-2 p-3" style={{ backgroundColor: "#b7ffa5" }}>
                                        <h5 style={{ color: "#ffffff", backgroundColor:"#56c02b" }}>
                                        <img src="https://ods.dnp.gov.co/static/imgs/SDG-icons/svg/notext/SDG-icon-15.svg"></img>
                                        ODS 15: Vida de ecosistemas terrestres</h5>
                                        <br></br>
                                        <b style={{ color: "#1b7106" }}>Descripción oficial: </b>Gestionar sosteniblemente los bosques,luchar contra la desertificación, detener e invertir la
                                        degradación de las tierras y detener la pérdida de biodiversidad.
                                        <br></br>
                                        <a href="" target="_blank">Conoce más</a>
                                        <br></br><br></br>
                                        <b style={{ color: "#1b7106" }}>Ejemplos de iniciativas:</b>
                                        <ol>
                                            <li>
                                                <img src="https://ods.dnp.gov.co/static/imgs/targets/15/15.5.png" width={60} height={60} className="m-2"></img>
                                                <b>1. Proyectos de conservación de especies: </b>Proteger animales en peligro de extinción.
                                            </li>

                                            <li>
                                                <img src="https://ods.dnp.gov.co/static/imgs/targets/15/15.2.png" width={60} height={60} className="m-2"></img>
                                                <b>2. Campañas de reforestación:</b> Restaurar bosques y áreas naturales degradadas.
                                            </li>
                                            <li>
                                                <img src="https://ods.dnp.gov.co/static/imgs/targets/15/15.b.png" width={60} height={60} className="m-2"></img>
                                                <b>3. Talleres de agricultura sostenible:</b> Enseñar prácticas agrícolas que no dañen el suelo.
                                            </li>
                                        </ol>
                                    </div>
                                    <div className="rounded m-2 p-3" style={{ backgroundColor: "#9cc3ec " }}>
                                        <h5 style={{ color: "#133f6e " }}>
                                        <img src="https://sdgs.un.org/sites/default/files/goals/image_logo_clean10008_48.jpg"></img>
                                        ODS 16: Paz, justicia e instituciones sólidas</h5>
                                        <br></br>
                                        <b style={{ color: "#133f6e " }}>Descripción oficial:</b>
                                        Promover sociedades pacíficas e inclusivas, facilitar el acceso a la justicia y construir
                                        instituciones eficaces e inclusivas.
                                        <br></br><br></br>
                                        <b style={{ color: "#133f6e " }}>Ejemplos de iniciativas:</b>
                                        <ol>
                                            <li>
                                                <img src="https://ods.dnp.gov.co/static/imgs/targets/16/16.6.png" width={60} height={60} className="m-2"></img>
                                                <b>1. Campañas de transparencia gubernamental:</b> Promover la
                                                rendición de cuentas y la lucha contra la corrupción.
                                            </li>
                                            <li>
                                                <img src="https://ods.dnp.gov.co/static/imgs/targets/16/16.7.png" width={60} height={60} className="m-2"></img>
                                                <b>2. Programas de mediación comunitaria:</b> Resolver conflictos locales a través del diálogo.
                                            </li>
                                            <li>
                                                <img src="https://ods.dnp.gov.co/static/imgs/targets/16/16.b.png" width={60} height={60} className="m-2"></img>
                                                <b>3. Talleres de derechos ciudadanos:</b> Educar sobre cómo participar en procesos democráticos.
                                            </li>
                                        </ol>
                                    </div>
                                    <br></br>
                                    <b>ODS 17: Alianzas para lograr los objetivos</b>
                                    <br></br>
                                    <b>Descripción oficial:</b> Fortalecer los medios de implementación y
                                    revitalizar la Alianza Mundial para el Desarrollo Sostenible.
                                    Ejemplos de iniciativas:
                                    <ol>
                                        <li>
                                            1. Redes de colaboración entre ONGs: Unir esfuerzos para
                                            proyectos de impacto colectivo.
                                        </li>
                                        <li>
                                            2. Campañas de voluntariado internacional: Conectar a
                                            voluntarios de diferentes países para trabajar en
                                            proyectos globales.
                                        </li>
                                        <li>
                                            3. Foros de intercambio de buenas prácticas: Compartir
                                            experiencias exitosas entre comunidades.
                                        </li>
                                    </ol>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                            >
                                ¿Qué tipo de contenido puedo publicar en Nexus Project?
                            </button>
                        </h2>
                        <div
                            id="collapseThree"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                <p>
                                    El formulario en{" "}
                                    <b className="text-primary" style={{ color: "#F272A" }}>
                                        <a
                                            className="text-primary"
                                            style={{ decoration: "none" }}
                                            href="/new-project"
                                        >
                                            Registrar proyecto
                                        </a>
                                    </b>{" "}
                                    se inclina a la inscripción de{" "}
                                    <b>
                                        iniciativas ciudadanas o proyectos comunitarios alineados
                                        con el desarrollo de la localidad, de la mano con el impulso
                                        al cumplimiento de las metas de los{" "}
                                        <a
                                            className="text-primary"
                                            target="_blank"
                                            href="https://www.un.org/sustainabledevelopment/es/objetivos-de-desarrollo-sostenible/"
                                        >
                                            Objetivos de Desarrollo Sustentable
                                        </a>
                                    </b>
                                    .
                                    <br />
                                    <br />
                                    Propuestas basadas en la colaboración de todos los civiles
                                    posibles, en pro del bienestar colectivo: como la creación de
                                    huertos, campañas de reforestación, talleres gratuitos de
                                    capacitaciones, cruzadas de alfabetización y salud sin costo,
                                    limpieza de playas, y en general actividades masivas enfocadas
                                    al progreso sostenible. Es importante recalcar que Nexus
                                    Project NO se plantea como un sitio para que proyectos más
                                    complejos basados en prototipos COMERCIALES en aras de ser
                                    industrializados, encuentren inversiones.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseFour"
                                aria-expanded="false"
                                aria-controls="collapseFour"
                            >
                                ¿Qué hago si mi comunidad no aparece en los listados?
                            </button>
                        </h2>
                        <div
                            id="collapseFour"
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                <p>
                                    Si tu comunidad no se encuentra para seleccionar en el
                                    formulario o incluso hemos cometido un error al escribirlo o
                                    representarlo gráficamente, por favor
                                    <a
                                        className="text-primary"
                                        href="mailto:nexus.project.supp@gmail.com"
                                    >
                                        {" "}
                                        contáctanos
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Tutorials;