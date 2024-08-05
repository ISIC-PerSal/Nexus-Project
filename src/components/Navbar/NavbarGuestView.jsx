import React from "react";
import logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
function NavbarGuestView({ handleLogin }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-principal">
        <div className="container-fluid">
          <a
            className="navbar-brand d-flex justify-content-center align-items-center text-white fw-bold fs-2"
            href="#"
          >
            <img src={logo} alt="" style={{ width: "50px" }} />
            <span className="p-2">Nexus Project</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link text-white fw-bold"
                  aria-current="page"
                  href="/Home"
                >
                  Noticias
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white fw-bold" href="/directory">
                  Directorio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white fw-bold" href="/register">
                  Registrar proyecto
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white fw-bold" href="#">
                  Explorar proyectos
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white fw-bold" href="/alliance">
                  Alianza juvenil e infantil
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white fw-bold" href="/about">
                  Acerca de nosotros
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pe-5">
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-light dropdown-toggle"
              data-bs-toggle="dropdown"
              data-bs-display="static"
              aria-expanded="false"
            >
              ¡Participa!
            </button>
            <ul className="dropdown-menu dropdown-menu-lg-end">
              <li>
                <a className="dropdown-item" type="button" href="/login">
                  Iniciar sesión
                </a>
              </li>
              <li>
                <a className="dropdown-item" type="button" href="/register">
                  Crear cuenta
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarGuestView;
