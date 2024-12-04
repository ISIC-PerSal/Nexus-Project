import React from "react";
import logo from "../../assets/Logo.png";
import "./Navbar.css";
import SelectLanguage from "../SelectLanguage/SelectLanguage";
function NavbarView({
  handleOption = () => {},
  selectedOption,
  isLogin = false,
  type = "General",
  handleLogOut,
  language,
  setLanguage,
  handleLanguage
}) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg ${
          type == "General" ? "bg-principal" : "bg-juvenil"
        } sticky-top z-99`}
      >
        <div className="container-fluid">
          <a
            className="navbar-brand d-flex justify-content-center align-items-center text-white fw-bold fs-2"
            onClick={() => handleOption("Noticias")}
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
                  onClick={() => handleOption("Noticias")}
                >
                  {handleLanguage("news")}
                  <div
                    className={
                      selectedOption == "Noticias" ? "color-block" : ""
                    }
                  ></div>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white fw-bold"
                  onClick={() => handleOption("Directorio")}
                >
                  {handleLanguage("directory")}
                  <div
                    className={
                      selectedOption == "Directorio" ? "color-block" : ""
                    }
                  ></div>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white fw-bold"
                  onClick={() => handleOption("Registrar")}
                >
                  {handleLanguage("register_p")}
                  <div
                    className={
                      selectedOption == "Registrar" ? "color-block" : ""
                    }
                  ></div>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white fw-bold"
                  onClick={() => handleOption("Explorar")}
                >
                  {handleLanguage("explore")}
                  <div
                    className={
                      selectedOption == "Explorar" ? "color-block" : ""
                    }
                  ></div>
                </a>
              </li>
              {type == "General" ? (
                <li className="nav-item">
                  <a
                    className="nav-link text-white fw-bold"
                    onClick={() => handleOption("Alianza")}
                  >
                    {handleLanguage("alliance")}
                    <div
                      className={
                        selectedOption == "Alianza" ? "color-block" : ""
                      }
                    ></div>
                  </a>
                </li>
              ) : (
                <li className="nav-item">
                  <a
                    className="nav-link text-white fw-bold"
                    onClick={() => handleOption("ConCiencia")}
                  >
                    {handleLanguage("conscience")}
                    <div
                      className={
                        selectedOption == "ConCiencia" ? "color-block" : ""
                      }
                    ></div>
                  </a>
                </li>
              )}
              <li className="nav-item">
                <a
                  className="nav-link text-white fw-bold"
                  onClick={() => handleOption("Acerca")}
                >
                  {handleLanguage("aboutUs")}
                  <div
                    className={selectedOption == "Acerca" ? "color-block" : ""}
                  ></div>
                </a>
              </li>
              {isLogin ? (
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-white fw-bold "
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
                    {handleLanguage("me")}
                  </a>
                  <div
                    className={selectedOption == "Yo" ? "color-block" : ""}
                  ></div>{" "}
                  <ul className="dropdown-menu dropdown-menu-end bg-gral">
                    <li>
                      <a
                        className="dropdown-item text-dark"
                        type="button"
                        onClick={() => handleOption("Mi perfil")}
                      >
                        {handleLanguage("profile")}
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item text-dark"
                        type="button"
                        onClick={() => handleOption("Mis proyectos")}
                      >
                        {handleLanguage("project")}
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item text-dark"
                        type="button"
                        onClick={() => handleOption("Soporte")}
                      >
                        {handleLanguage("support")}
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item text-dark"
                        type="button"
                        onClick={handleLogOut}
                      >
                        {handleLanguage("logOut")}
                      </a>
                    </li>
                  </ul>
                </li>
              ) : (
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-white fw-bold"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {handleLanguage("participate")}
                  </a>
                  <div
                    className={selectedOption == "Yo" ? "color-block" : ""}
                  ></div>{" "}
                  <ul className="dropdown-menu dropdown-menu-end bg-gral">
                    <li>
                      <a
                        className="dropdown-item text-dark"
                        type="button"
                        onClick={() => handleOption("Login")}
                      >
                        {handleLanguage("login")}
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item text-dark"
                        type="button"
                        onClick={() => handleOption("Register")}
                      >
                        {handleLanguage("register")}
                      </a>
                    </li>
                  </ul>
                </li>
              )}
            </ul>
          </div>
          <SelectLanguage
            language={language}
            setLanguage={setLanguage}
          />
        </div>
      </nav>
    </>
  );
}

export default NavbarView;
