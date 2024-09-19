import React, { useState } from "react";
import NavbarView from "./NavbarView";
import { useNexus } from "../../Hooks/useContext";
import isAuth from "../../util/isAuth";

function Navbar() {
  const { selected, setSelected } = useNexus();
  const isLogin = isAuth();
  const typeUser = sessionStorage.getItem("type") || "General"

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
  return (
    <>
      <NavbarView
        handleOption={handleOption()}
        selected={selected}
        isLogin={isLogin}
        type = {typeUser}
      />
    </>
  );
}

export default Navbar;
