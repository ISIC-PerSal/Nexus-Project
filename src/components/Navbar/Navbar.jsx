import React, { useState } from "react";
import NavbarView from "./NavbarView";

function Navbar() {
  const [selected, setSelected] = useState("Noticias")
  const logOff = () => {
    window.location = "/";
  };
  return (
    <>
      <NavbarView
        logOff={logOff}
        selected={selected}
        setSelected={setSelected}
      />
    </>
  );
}

export default Navbar;