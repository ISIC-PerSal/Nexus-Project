import React, { useState } from 'react'

function CardArticlesView({item, toggleDescription, isExpanded, hanldeOpenUrl}) {
    const tags = JSON.parse(item.tags)
  return (
    <>
        <div className="d-flex justify-content-center my-1">
      <div className="w-50 h-auto pe-3">
        <img src={item.image} className="img-fluid" alt="..." />
      </div>
      <div className="w-50">
        <h5 className="ms-2 fs-5">{item.title}</h5>
        <div className='d-flex flex-wrap'>
            {tags.map((item, index) => (
            <span key={index} className='badge bg-oficial-juvenil me-1 mb-1'>{item}</span>
            ))}
        </div>
        <p className="ms-2">
          {isExpanded
            ? item.description
            : `${item.description.slice(0, 100)}...`}
        </p>
        <button
          onClick={toggleDescription}
          className="btn btn-outline-secondary btn-sm m-2"
        >
          {isExpanded ? "Ver menos" : "Ver más"}
        </button>
        <a
          onClick={hanldeOpenUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Leer articulo completo
        </a>
      </div>
    </div>
    </>
  )
}

export default CardArticlesView