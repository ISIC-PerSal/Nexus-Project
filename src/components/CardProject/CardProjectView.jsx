import React from 'react'
import BadgeCountryView from '../BadgeLocation/BadgeCountryView'

function CardProjectView({data}) {
    return (
        <>
  <div className="card w-100 mb-4 shadow-sm border-0 rounded">
    <img 
      src={data.imagen} 
      className="card-img-top rounded-top" 
      alt={data.project} 
      style={{objectFit: "cover", height: "200px"}}
    />
    <div className="card-body p-4">
      <h5 className="card-title text-dark fw-bold">{data.project}</h5>
      <BadgeCountryView data={data}/>
      <p className="card-text text-muted">{data.description}</p>
      <a href={data.url} className="btn btn-primary btn-block mt-3" target="_blank" rel="noopener noreferrer">
        Ir a la página oficial
      </a>
    </div>
  </div>
</>
    )
}

export default CardProjectView