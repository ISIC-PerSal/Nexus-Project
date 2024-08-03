import React from 'react'
import odsData from '../../util/odsData';

function CardODSView({item, toggleDescription, isExpanded}) {
    return (
        <div key={item.id} className="d-flex justify-content-center my-1">
          <div className="w-50 h-auto">
            <img src={item.imagen} className="img-fluid" alt="..." />
          </div>
          <div className="w-50">
            <h5 className="fs-5">{item.nombre}</h5>
            <span style={{ backgroundColor: odsData[item.id_ods - 1].color }} className="badge">
              {item.ods}
            </span>
            <p>
              {isExpanded ? item.descripcion : `${item.descripcion.slice(0, 100)}...`}
            </p>
            <button onClick={toggleDescription} className="btn btn-outline-secondary btn-sm m-2">
              {isExpanded ? 'Ver menos' : 'Ver más'}
            </button>
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Visitar portal en línea
            </a>
          </div>
        </div>
      );
}

export default CardODSView