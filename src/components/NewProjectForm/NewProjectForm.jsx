import React, { useState } from "react";
import NewProjectFormView from "./NewProjectFormView";

function NewProjectForm() {
  function validarDatos(){
    console.log("first")
  };
  return (
   <>
   <NewProjectFormView validarDatos={validarDatos}/>
   </>
  )
}

export default NewProjectForm;
