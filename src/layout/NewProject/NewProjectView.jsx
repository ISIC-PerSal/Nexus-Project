import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import NewProjectFormView from '../../components/NewProjectForm/NewProjectFormView'
import NewProjectForm from '../../components/NewProjectForm/NewProjectForm'

function NewProjectView() {
  return (
    <>
      <Navbar />
      <NewProjectForm/>
    </>
  )
}

export default NewProjectView