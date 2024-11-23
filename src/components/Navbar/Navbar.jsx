import React, { useEffect, useState } from "react";
import NavbarView from "./NavbarView";
import isAuth from "../../util/isAuth";
import { useNavigate } from "react-router-dom";
import { useNexusContext } from "../../Hooks/useNexusContext";
import Cookies from "js-cookie";

function Navbar() {
  const isLogin = isAuth();
  const typeUser = sessionStorage.getItem("type") || "General";

  const navigate = useNavigate();
  const { selectedOption, changeNavbarItem, language, changeLanguage } =
    useNexusContext();

  const handleOption = (option) => {
    changeNavbarItem(option);
    switch (option) {
      case "Noticias":
        navigate("/home");
        break;
      case "Directorio":
        navigate("/directory");
        break;
      case "Registrar":
        navigate("/new-project");
        break;
      case "Explorar":
        navigate("/explore");
        break;
      case "Alianza":
        navigate("/alliance");
        break;
      case "Acerca":
        navigate("/about");
        break;
      case "Mi perfil":
        changeNavbarItem("Yo");
        navigate("/profile");
        break;
      case "Mis proyectos":
        changeNavbarItem("Yo");
        navigate("/my-projects");
        break;
      case "Soporte":
        changeNavbarItem("Yo");
        navigate("/support");
        break;
      case "Login":
        changeNavbarItem("Yo");
        navigate("/login");
        break;
      case "Register":
        changeNavbarItem("Yo");
        navigate("/register");
        break;
      default:
        break;
    }
  };

  const handleLogOut = () => {
    changeNavbarItem("Noticias");
    window.location.replace("/");
  };
  return (
    <>
      <NavbarView
        handleOption={handleOption}
        selectedOption={selectedOption}
        isLogin={isLogin}
        type={typeUser}
        handleLogOut={handleLogOut}
        language={language}
        setLanguage={changeLanguage}
      />
    </>
  );
}

export default Navbar;
