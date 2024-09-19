import React, { useState } from "react";
import NavbarView from "./NavbarView";
import { useNexus } from "../../Hooks/useContext";
import isAuth from "../../util/isAuth";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const { selected, setSelected } = useNexus();
  const isLogin = isAuth();
  const typeUser = sessionStorage.getItem("type") || "General";

  const navigate = useNavigate();

  const handleOption = (option) => () => {
    setSelected(option);
    switch (option) {
      case "Noticias":
        window.location = "/home";
        break;
      case "Directorio":
        window.location = "/home";
        break;
      case "Registrar":
        window.location = "/new-project";
        break;
      case "Explorar":
        window.location = "/home";
        break;
      case "Alianza":
        window.location = "/home";
        break;
      case "Acerca":
        window.location = "/about";
        break;
      default:
        break;
    }
  };

  const handleLogOut = () => {
    window.location.replace("/")
  };
  return (
    <>
      <NavbarView
        handleOption={handleOption()}
        selected={selected}
        isLogin={isLogin}
        type={typeUser}
        handleLogOut={handleLogOut}
      />
    </>
  );
}

export default Navbar;
