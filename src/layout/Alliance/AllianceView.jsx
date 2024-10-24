import React from 'react'
import childrensSection from "../../assets/Seccion_Niños.jpg";

function AllianceView() {
    return (
        <>
            <main className="bg-img py-3">
                <div className="container w-75 p-3 border rounded border-secondary-subtle bg-gral">
                    <div className='fs-3 fw-bold'>
                        Alianza juvenil e infantil
                    </div>
                    <div>
                        <p className='text-align-justify p-2'>
                            En Nexus Project creemos que todos los aliados aportan algo
                            a su causa cuando se les incluye sin barreras, y en este
                            mundo maravilloso coexistimos personas de todas las edades.
                            Los objetivos para una vida sostenible nos conciernen a todas y todos
                            por igual, por lo que, a través de una interfaz personalizada es que
                            adolescentes, niñas y niños pueden acceder a la red de iniciativas,
                            ser líderes o miembros, en un movimiento que por su lado es impulsado
                            por y para otros jóvenes e infantes.
                        </p>
                    </div>
                    <div className="d-flex justify-content-center mb-3">
                        <img
                            src={childrensSection}
                            alt="Poster del proyecto"
                            className="img-fluid shadow-lg rounded"
                            style={{ maxWidth: "800px", width: "100%" }}
                        />
                    </div>
                </div>
            </main>
        </>
    )
}

export default AllianceView