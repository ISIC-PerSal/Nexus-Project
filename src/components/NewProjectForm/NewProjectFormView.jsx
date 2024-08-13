import React from 'react'
import Tooltip from '@mui/material/Tooltip';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
function NewProjectFormView({ validarDatos }) {
    const longText = `¿Por qué preguntamos esto?: Para tener un seguimiento seguro de donativos financieros en temas legales, solicitamos este tipo de datos a nuestros usuarios. No se comparten con nadie más`;
    const ods = [
        {
            url: "http://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2016/01/S_SDG_Icons-01-01.jpg",
            ods: 1,
        },
        {
            url: "http://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2016/01/S_SDG_Icons-01-02.jpg",
            ods: 2,
        },
        {
            url: "http://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2016/01/S_SDG_Icons-01-03.jpg",
            ods: 3,
        },
        {
            url: "http://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2016/01/S_SDG_Icons-01-04.jpg",
            ods: 4,
        },
        {
            url: "http://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2016/01/S_SDG_Icons-01-05.jpg",
            ods: 5,
        },
        {
            url: "http://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2016/01/S_SDG_Icons-01-06.jpg",
            ods: 6,
        },
        {
            url: "http://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2016/01/S_SDG_Icons-01-07.jpg",
            ods: 7,
        },
        {
            url: "http://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2016/01/S_SDG_Icons-01-08.jpg",
            ods: 8,
        },
        {
            url: "https://www.un.org/sustainabledevelopment/wp-content/uploads/sites/3/2015/09/S_SDG_Icons-01-09.jpg",
            ods: 9,
        },
        {
            url: "http://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2016/01/S_SDG_Icons-01-10.jpg",
            ods: 10,
        },
        {
            url: "http://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2016/01/S_SDG_Icons-01-11.jpg",
            ods: 11,
        },
        {
            url: "https://www.un.org/sustainabledevelopment/wp-content/uploads/sites/3/2015/09/S_SDG_Icons-01-12.jpg",
            ods: 12,
        },
        {
            url: "http://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2016/01/S_SDG_Icons-01-13.jpg",
            ods: 13,
        },
        {
            url: "http://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2016/01/S_SDG_Icons-01-14.jpg",
            ods: 14,
        },
        {
            url: "http://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2016/01/S_SDG_Icons-01-15.jpg",
            ods: 15,
        },
        {
            url: "http://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2016/01/S_SDG_Icons-01-16.jpg",
            ods: 16,
        },
        {
            url: "http://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2016/01/S_SDG_Icons-01-17.jpg",
            ods: 17,
        }
    ];
    return (
        <>
            <main className='py-3'>
                <form action="" className='container w-50 mt-3 p-3 border rounded border-secondary-subtle bg-gral'>
                    <div className="mb-3">
                        <label htmlFor="seccion-lider" className="form-label fw-bold fs-4">Datos del líder</label>
                        <div className="mb-3">
                            <label htmlFor="tipo-lider" className="form-label">Representante</label>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Seleccione su tipo de representación </option>
                                <option value="1">Individuo</option>
                                <option value="2">Institución</option>
                                <option value="3">Empresa</option>
                                <option value="3">Organización</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="nombre-lider" className="form-label">Nombre del líder o representante</label>
                            <input type="text" className="form-control" id="nombre-lider"></input>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value=""
                                    id="flexCheckDefault"
                                ></input>
                                <label className="form-check-label text-body-secondary" htmlFor="flexCheckDefault">
                                    Usar mi nombre completo
                                </label>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="telefono-lider" className="form-label">Número telefónico de contacto</label>
                            <input type="text" className="form-control" id="nombre-lider"></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="correo-lider" className="form-label" required>Dirección email de contacto</label>
                            <input type="email" className="form-control" id="correo-lider"></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="RFC-lider" className="form-label me-1">RFC</label>
                            <Tooltip title={longText}>
                                <HelpCenterIcon />
                            </Tooltip>
                            <input type="text" className="form-control" id="RFC-lider"></input>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="seccion-proyecto" className="form-label fw-bold fs-4">Datos del proyecto</label>
                        <div className="mb-3">
                            <label htmlFor="nombre-proyecto" className="form-label">Nombre del proyecto</label>
                            <input type="text" className="form-control" id="nombre-proyecto"></input>
                        </div>
                        <div>
                            <label htmlFor="nombre-proyecto" className="form-label">Número de voluntarios</label>
                            <input type="number" className="form-control" id="nombre-proyecto"></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="descripcion" className="form-label">Descripción</label>
                            <textarea className="form-control" id="descripcion" rows="3"></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="tipo-proyecto" className="form-label">Proyecto</label>
                            <select className="form-select" aria-label="Default select example">
                                <option selected>Seleccione su tipo de proyecto</option>
                                <option value="1">Donación</option>
                                <option value="2">Campaña</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="direccion" className="form-label">Dirección</label>
                            <textarea className="form-control" id="direccion" rows="2"></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="cp" className="form-label">Código postal</label>
                            <input type="number" className="form-control" id="cp" rows="2"></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="municipio" className="form-label">Municipio</label>
                            <input className="form-control" id="municipio" rows="2"></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="estado" className="form-label">Estado</label>
                            <input className="form-control" id="estado" rows="2"></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="pais" className="form-label">País</label>
                            <input className="form-control" id="pais" rows="2"></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="fecha-arranque" className="form-label">Fecha de arranque</label>
                            <input type="date" className="form-control" id="fecha-arranque" rows="2"></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="fecha-inscripcion" className="form-label">Fecha límite de inscripción</label>
                            <input type="date" className="form-control" id="fecha-inscripcion" rows="2"></input>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="ods" className="form-label">ODS (s) que abarca</label>
                            <Grid container spacing={2}>
                                {
                                    ods.map((item, index) => (
                                        <Grid item xs={3}>
                                            <div key={index} className="form-check">
                                                <input className="form-check-input" type="checkbox" id={`ods${item.ods}`}></input>
                                                <label className="form-check-label" htmlFor={`ods${item.ods}`}>
                                                    <img src={item.url}
                                                        className='w-100'
                                                        alt=""
                                                    ></img>
                                                </label>
                                            </div>
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        </div>
                    </div>
                    <button onClick={validarDatos} type="button" className="btn btn-danger w-100">Enviar datos</button>
                </form>
            </main>
        </>
    )
}

export default NewProjectFormView;
