import React, { useState } from 'react'
import NavbarGuestView from './NavbarGuestView';

function NavbarGuest() {
  const selected=()=>{
    return sessionStorage.getItem("seleccionado");
  };
  const setSelected=(opcion)=>{
    sessionStorage.setItem("seleccionado", opcion);
  };
  return (
   <>
   <NavbarGuestView  selected={selected} setSelected={setSelected}/>
   </>
  );
}

export default NavbarGuest