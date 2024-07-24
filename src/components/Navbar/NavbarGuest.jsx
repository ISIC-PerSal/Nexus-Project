import React, { useState } from 'react'
import NavbarGuestView from './NavbarGuestView';

function NavbarGuest() {
<<<<<<< HEAD

  return (
   <>
   <NavbarGuestView/>
=======
  const selected=()=>{
    return sessionStorage.getItem("seleccionado");
  };
  const setSelected=(opcion)=>{
    sessionStorage.setItem("seleccionado", opcion);
  };
  return (
   <>
   <NavbarGuestView  selected={selected} setSelected={setSelected}/>
>>>>>>> 0bc403436f8d6eb448ebe6605fa848e56f26fa8c
   </>
  );
}

export default NavbarGuest