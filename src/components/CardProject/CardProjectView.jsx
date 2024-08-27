import React from 'react'
import BadgeCountryView from '../BadgeLocation/BadgeCountryView';

function CardProjectView({ data }) {

    return (
        <>
            <div className="card w-100 mb-3">
                <img src={data.image} className="card-img" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{data.project}</h5>
                    <BadgeCountryView data={data}/>
                    <p className="card-text">{data.description}</p>
                    <a href={data.url} className="btn btn-primary">Ir a la página oficial</a>
                </div>
            </div>
        </>
    );
}

export default CardProjectView