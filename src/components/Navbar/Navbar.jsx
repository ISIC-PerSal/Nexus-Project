import React, { useEffect, useState } from "react";
import NavbarView from "./NavbarView";
import { useNexus } from "../../Hooks/useContext";
import isAuth from "../../util/isAuth";
import { useNavigate } from "react-router-dom";
import { useNexusContext } from "../../Hooks/useNexusContext";
import NavbarTranslator from "./NavbarTranslator";
import Cookies from "js-cookie";

function Navbar() {
  const isLogin = isAuth();
  const typeUser = sessionStorage.getItem("type") || "General";

  const navigate = useNavigate();
  const { selectedOption, changeNavbarItem, language, changeLanguage } =
    useNexusContext();
    
  const handleLanguage = (field, position) => {
    const item = NavbarTranslator[language];
    if (position == undefined) {
      return item[field];
    } else {
      const positionValue = item[field];
      return positionValue[position];
    }
  };

  const handleOption = (option) => {
    changeNavbarItem(option);
    switch (option) {
      case "Noticias":
        window.location.href="/home";
        break;
      case "Directorio":
        window.location.href="/directory";
        break;
      case "Registrar":
        window.location.href="/new-project";
        break;
      case "Explorar":
        window.location.href="/explore";
        break;
      case "Alianza":
        window.location.href="/alliance";
        break;
      case "Acerca":
        window.location.href="/about";
        break;
      case "Mi perfil":
        changeNavbarItem("Yo");
        window.location.href="/profile";
        break;
      case "Mis proyectos":
        changeNavbarItem("Yo");
        window.location.href="/my-projects";
        break;
      case "Soporte":
        changeNavbarItem("Yo");
        window.location.href="/support";
        break;
      case "ConCiencia":
        changeNavbarItem("ConCiencia");
        window.location.href="/aboutscience";
        break;
      case "Login":
        changeNavbarItem("Yo");
        window.location.href="/login";
        break;
      case "Register":
        changeNavbarItem("Yo");
        window.location.href="/register";
        break;
      default:
        break;
    }
  };

  const handleLogOut = () => {
    changeNavbarItem("Noticias");
    window.location.href="/";
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
        handleLanguage={handleLanguage}
      />
    </>
  );
}

export default Navbar;
