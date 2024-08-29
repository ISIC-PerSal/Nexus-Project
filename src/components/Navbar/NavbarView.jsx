import React from "react";
import logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

function NavbarView({ handleOption, selected, isLogin = false, setSelected }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-principal sticky-top z-99">
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
                  onClick={() => handleOption("Noticias")}
                >
                  Noticias
                  <div
                    className={selected === "Noticias" ? "color-block" : ""}
                  ></div>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white fw-bold"
                  href="/directory"
                  onClick={() => handleOption("Directorio")}
                >
                  Directorio
                  <div
                    className={selected === "Directorio" ? "color-block" : ""}
                  ></div>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white fw-bold"
                  href="/new-project"
                  onClick={() => handleOption("Registrar")}
                >
                  Registrar proyecto
                  <div
                    className={selected === "Registrar" ? "color-block" : ""}
                  ></div>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white fw-bold"
                  href="/explore"
                  onClick={() => handleOption("Explorar")}
                >
                  Explorar proyectos
                  <div
                    className={selected === "Explorar" ? "color-block" : ""}
                  ></div>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white fw-bold"
                  href="/alliance"
                  onClick={() => handleOption("Alianza")}
                >
                  Alianza juvenil e infantil
                  <div
                    className={selected === "Alianza" ? "color-block" : ""}
                  ></div>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white fw-bold"
                  href="/about"
                  onClick={() => handleOption("Acerca")}
                >
                  Acerca de nosotros
                  <div
                    className={selected === "Acerca" ? "color-block" : ""}
                  ></div>
                </a>
              </li>
              {isLogin ? (
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-white fw-bold"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-person-circle me-1"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                      <path
                        fillRule="evenodd"
                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                      />
                    </svg>
                    Yo
                  </a>
                  <div className={selected == "Yo" ? "color-block" : ""}></div>{" "}
                  <ul className="dropdown-menu dropdown-menu-end bg-gral">
                    <li>
                      <a
                        href="/profile"
                        className="dropdown-item"
                        type="button"
                      >
                        Mi perfil
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        type="button"
                        href="/my-projects"
                      >
                        Mis proyectos
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" type="button" href="/">
                        Cerrar sesión
                      </a>
                    </li>
                  </ul>
                </li>
              ) : (
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-white fw-bold"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    ¡Participa!
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end bg-gral">
                    <li>
                      <a className="dropdown-item" type="button" href="/login">
                        Iniciar sesión
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        type="button"
                        href="/register"
                      >
                        Crear cuenta
                      </a>
                    </li>
                  </ul>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarView;
