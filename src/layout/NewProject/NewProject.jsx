import React, { useEffect } from 'react'
import NewProjectView from './NewProjectView'
import { useNexus } from '../../Hooks/useContext';

function NewProject() {
  const { setSelected } = useNexus();

  useEffect(() => {
    setSelected("Registrar");
  }, [setSelected]);
  return (
    <>
    <NewProjectView/>
    </>
  )
}

export default NewProject