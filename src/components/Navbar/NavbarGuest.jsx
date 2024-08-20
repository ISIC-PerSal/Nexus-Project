import React, { useState } from 'react'
import NavbarGuestView from './NavbarGuestView';

function NavbarGuest() {
<<<<<<< HEAD
  const selected=()=>{
    return sessionStorage.getItem("seleccionado");
  };
  const setSelected=(opcion)=>{
    sessionStorage.setItem("seleccionado", opcion);
  };
  return (
   <>
   <NavbarGuestView  selected={selected} setSelected={setSelected}/>
=======

  return (
   <>
   <NavbarGuestView/>
>>>>>>> 1ea2ee58cf3a6f2f53fabd91aff755732ba793df
   </>
  );
}

export default NavbarGuest