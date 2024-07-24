import React from 'react'
import logo from "../../assets/Logo.png"
import {Link} from "react-router-dom";
function NavbarGuestView({selected, setSelected}) {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-principal">
                <div className="container-fluid">
                    <a className="navbar-brand d-flex justify-content-center align-items-center text-white fw-bold fs-2" href="#">
                        <img src={logo} alt='' style={{ width: "50px" }} />
                        <span className='p-2'>Nexus Project</span>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link text-white fw-bold" aria-current="page" href="/Home" onClick={()=>setSelected("Noticias")}>
                                Noticias
                                <div className={selected=="Noticias"? "color-block":""}></div>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white fw-bold" href="#" onClick={()=>setSelected("Directorio")}>
                                    Directorio
                                    <div className={selected=="Directorio"? "color-block":""}></div>
                                    </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white fw-bold" href="/register" onClick={()=>setSelected("Registrar")}>
                                Registrar proyecto
                                <div className={selected=="Registrar"? "color-block":""}></div>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white fw-bold" href="#" onClick={()=>setSelected("Explorar")}>
                                    Explorar proyectos
                                    <div className={selected=="Explorar"? "color-block":""}></div>
                                    </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white fw-bold" href="#" onClick={()=>setSelected("Alianza")}>
                                    Alianza juvenil e infantil
                                    <div className={selected=="Alianza"? "color-block":""}></div>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white fw-bold" href="/about" onClick={()=>setSelected("Acerca")}>
                                    Acerca de nosotros
                                    <div className={selected=="Acerca"? "color-block":""}></div>
                                    </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='pe-5'>
                    <div className="btn-group">
                        <button type="button" className="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
                            ¡Participa!
                        </button>
                        <ul class="dropdown-menu dropdown-menu-lg-end">
                            <li><button className="dropdown-item" type="button">Iniciar sesión</button></li>
                            <li><button className="dropdown-item" type="button">Crear cuenta</button></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>

    )
}

export default NavbarGuestView