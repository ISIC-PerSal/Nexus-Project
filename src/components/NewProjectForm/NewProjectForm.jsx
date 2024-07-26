import React from 'react'

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

export default NewProjectForm