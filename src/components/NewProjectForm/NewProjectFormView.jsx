import React from "react";

function NewProjectFormView() {
    return (
        <>
            <main>
                <form action="" className='container w-50 mt-3 p-3 border rounded border-secondary-subtle bg-gral'>
                    <div className="mb-3">
                        <label htmlFor="seccion-lider" className="form-label fw-bold fs-4">Datos del líder</label>
                        <div className="mb-3">
                            <label htmlFor="tipo-lider" class="form-label">Representante</label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Seleccione su tipo de representación </option>
                                <option value="1">Individuo</option>
                                <option value="2">Institución</option>
                                <option value="3">Empresa</option>
                                <option value="3">Organización</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="nombre-lider" className="form-label">Nombre del líder o representante</label>
                            <input type="text" class="form-control" id="nombre-lider"></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="telefono-lider" className="form-label">Número telefónico de contacto</label>
                            <input type="text" class="form-control" id="nombre-lider"></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="correo-lider" className="form-label">Dirección email de contacto</label>
                            <input type="text" class="form-control" id="correo-lider"></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="RFC-lider" className="form-label">RFC</label>
                            <label data-bs-toggle="tooltip" data-bs-placement="top"
                                data-bs-custom-class="custom-tooltip" data-bs-title="Para tener un seguimiento seguro de donativos financieros en temas legales, solicitamos este tipo de datos a nuestros usuarios. No se comparten con nadie más" className="info p-2">
                                ¿Por qué preguntamos esto?
                            </label>
                            <input type="text" class="form-control" id="RFC-lider"></input>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="seccion-proyecto" className="form-label fw-bold fs-4">Datos del proyecto</label>
                        <div className="mb-3">
                            <label htmlFor="nombre-proyecto" class="form-label">Nombre del proyecto</label>
                            <input type="text" class="form-control" id="nombre-proyecto"></input>
                        </div>
                        <div>
                            <label htmlFor="nombre-proyecto" class="form-label">Número de voluntarios</label>
                            <input type="text" class="form-control" id="nombre-proyecto"></input>
                        </div>
                        <div class="mb-3">
                            <label htmlFor="descripcion" className="form-label">Descripción</label>
                            <textarea class="form-control" id="descripcion" rows="3"></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="tipo-proyecto" class="form-label">Proyecto</label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Seleccione su tipo de proyecto</option>
                                <option value="1">Donación</option>
                                <option value="2">Campaña</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label htmlFor="direccion" className="form-label">Dirección</label>
                            <textarea class="form-control" id="direccion" rows="2"></textarea>
                        </div>
                        <div class="mb-3">
                            <label htmlFor="cp" className="form-label">Código postal</label>
                            <input type="number" class="form-control" id="cp" rows="2"></input>
                        </div>
                        <div class="mb-3">
                            <label htmlFor="municipio" className="form-label">Municipio</label>
                            <input class="form-control" id="municipio" rows="2"></input>
                        </div>
                        <div class="mb-3">
                            <label htmlFor="estado" className="form-label">Estado</label>
                            <input class="form-control" id="estado" rows="2"></input>
                        </div>
                        <div class="mb-3">
                            <label htmlFor="pais" className="form-label">País</label>
                            <input class="form-control" id="pais" rows="2"></input>
                        </div>
                        <div class="mb-3">
                            <label htmlFor="fecha-arranque" className="form-label">Fecha de arranque</label>
                            <input type="date" class="form-control" id="fecha-arranque" rows="2"></input>
                        </div>
                        <div class="mb-3">
                            <label htmlFor="fecha-inscripcion" className="form-label">Fecha límite de inscripción</label>
                            <input type="date" class="form-control" id="fecha-inscripcion" rows="2"></input>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="ods" className="form-label">ODS (s) que abarca</label>
                            <div className="d-flex">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                                <label className="form-check-label" for="flexCheckDefault">
                                    <img src="https://www.un.org/sustainabledevelopment/es/wp-content/uploads/sites/3/2016/01/S_SDG_Icons-01-01.jpg"
                                        alt=""
                                    ></img>
                                </label>
                            </div>
                        </div>
                    </div>
                </form>
            </main>
        </>
    )
}

export default NewProjectFormView;
