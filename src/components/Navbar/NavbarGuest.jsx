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
>>>>>>>>> Temporary merge branch 2
   </>
  );
}

export default NavbarGuest