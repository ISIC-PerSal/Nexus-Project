import React from 'react'
import childrensSection from "../../assets/Seccion_Niños.jpg";
import childrensSection_juve from "../../assets/juvenil.jpg";
import childrensSection_juve_2 from "../../assets/juvenil_2.jpg";

function AllianceView({handleLanguage}) {
    return (
        <>
            <main className="bg-img py-3">
                <div className="container w-75 p-3 border rounded border-secondary-subtle bg-gral">
                    <div className='fs-3 fw-bold'>
                        {handleLanguage("title")}
                    </div>
                    <div>
                        <p className='text-align-justify p-2'>
                        {handleLanguage("description")}
                        </p>
                    </div>

                    <div>
                        <h3>
                            {handleLanguage("Q1")}
                        </h3>
                        <p>
                            {handleLanguage("desc2")}
                        </p>
                        <h3>{handleLanguage("Q2")}</h3>
                        <p>
                            {handleLanguage("desc3")}
                            <br></br>
                            <br></br>
                            <ul>
                                <li>
                                    {handleLanguage("desc3_1")}
                                </li>
                                <br></br>
                                <li>
                                    {handleLanguage("desc3_2")}
                                </li>
                            </ul>
                        </p>
                    </div>

                    <div className="d-flex justify-content-center mb-3 pt-2">
                        <img
                            src={childrensSection_juve_2}
                            alt="Poster del proyecto"
                            className="img-fluid shadow-lg rounded"
                            style={{ maxWidth: "800px", width: "100%" }}
                        />
                    </div>
                    <div className="d-flex justify-content-center mb-3 pt-3">
                        <img
                            src={childrensSection_juve}
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