import React, { useState } from "react";
import NewProjectFormView from "./NewProjectFormView";

function NewProjectForm() {
  const [name, setName] = useState(sessionStorage.getItem("name"))
  return (
   <>
   <NewProjectFormView name={name} setName={setName}/>
   </>
  )
}

export default NewProjectForm;
