import React, { useEffect } from "react";
import NewProjectView from "./NewProjectView";
import { useNexusContext } from "../../Hooks/useNexusContext";

function NewProject() {
  const { changeNavbarItem } = useNexusContext();
  useEffect(() => {
    changeNavbarItem("Registrar");
  }, [changeNavbarItem]);
  return (
    <>
      <NewProjectView />
    </>
  );
}

export default NewProject;
