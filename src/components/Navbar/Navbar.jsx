import React, { useState } from 'react'
import NavbarView from './NavbarView'

function Navbar() {
  const selected=()=>{
    return sessionStorage.getItem("seleccionado");
  };
  const setSelected=(opcion)=>{
    sessionStorage.setItem("seleccionado", opcion);
  };
  const logOff=()=>{
    window.location = "/";
  };
  return (
   <>
   <NavbarView logOff={logOff} selected={selected} setSelected={setSelected}/>
   </>
  );
}

export default Navbar;
