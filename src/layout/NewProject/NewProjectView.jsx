import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import NewProjectForm from '../../components/NewProjectForm/NewProjectForm'
import FooterView from '../../components/Footer/FooterView'

function NewProjectView() {
  return (
    <>
      <Navbar />
      <NewProjectForm/>
      <FooterView/>
    </>
  )
}

export default NewProjectView