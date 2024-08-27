import React from 'react'
import BadgeCountryView from '../BadgeLocation/BadgeCountryView';

function CardProjectView({data}) {
    return (
        <>
            <div className="card w-100 mb-3">
                <img src={data.imagen} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{data.project}</h5>
                    <p className="card-text">{data.description}</p>
                    <BadgeCountryView data={data}/>
                    <a href={data.url} className="btn btn-primary">Ir a la pagina oficial</a>
                </div>
            </div>
        </>
    )
}

export default CardProjectView;