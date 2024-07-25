import React from 'react'

function NewProjectForm() {
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
  return (
    <>NewProjectForm</>
  )
}

export default NewProjectForm