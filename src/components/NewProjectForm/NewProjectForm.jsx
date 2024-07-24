import React from 'react'
import NewProjectFormView from './NewProjectFormView'

function NewProjectForm() {
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
  return (
   <>
   <NewProjectFormView/>
   </>
  )
}

export default NewProjectForm