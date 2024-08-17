import React from 'react'
import Tooltip from '@mui/material/Tooltip';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
function NewProjectFormView({ leaderType, setLeaderType, name, setName, checkName, setCheckName, phone, setPhone, email, setEmail,
    checkEmail, setCheckEmail, rfc, setRfc, checkRfc, setCheckRfc, clabe, setClabe, checkClabe,
    setCheckClabe, project, setProject, volunteers, setVolunteers, description, setDescription, typeProject,
    setTypeProject, donation, setDonation, country, setCountry, state, setState, zip, setZip, city, setCity, address, setAddress, 
    startDate, setStartDate, finishDate, setFinishDate, ods1, setOds1, ods2, setOds2, ods3, setOds3, ods4,
    setOds4, ods5, setOds5, ods6,
    setOds6,
    ods7,
    setOds7,
    ods8,
    setOds8,
    ods9,
    setOds9,
    ods10,
    setOds10,
    ods11,
    setOds11,
    ods12,
    setOds12,
    ods13,
    setOds13,
    ods14,
    setOds14,
    ods15,
    setOds15,
    ods16,
    setOds16,
    ods17,
    setOds17,
    handleSaveNewProject }) {

    const longText = `¿Por qué preguntamos esto?: Para tener un seguimiento seguro de donativos financieros en temas legales, solicitamos este tipo de datos a nuestros usuarios. No se comparten con nadie más`;
    const donacion = `Al autorizar la recepción de donativos, permites al voluntariado contactarte para contribuir en especie o financieramente a tu causa. Datos como tu CLABE serán visibles para ellos`;
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
            <main className='py-3 bg-img'>
                <form action="" className='container w-50 mt-3 p-3 border rounded border-secondary-subtle bg-gral'>
                    <div className="mb-3">
                        <label htmlFor="seccion-lider" className="form-label fw-bold fs-4">Datos del líder</label>
                        <div className="mb-3">
                            <label htmlFor="tipo-lider" className="form-label">Representante</label>
                            <select className="form-select" aria-label="Default select example"
                                defaultValue={leaderType} onChange={(e) => setLeaderType(e.target.value)}>
                                <option value={0}>Seleccione su tipo de representación </option>
                                <option value={"Individuo"}>Individuo</option>
                                <option value={"Institución"}>Institución</option>
                                <option value={"Empresa"}>Empresa</option>
                                <option value={"Organización"}>Organización</option>
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="nombre-lider" className="form-label">Nombre del líder o representante</label>
                            <input type="text" className="form-control" id="nombre-lider"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            ></input>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    checked={checkName}
                                    onChange={(e) => setCheckName(e.target.checked)}
                                    id="flexCheckDefault"
                                ></input>
                                <label className="form-check-label text-body-secondary" htmlFor="flexCheckDefault">
                                    Usar mi nombre completo
                                </label>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="telefono-lider" className="form-label">Número telefónico de contacto</label>
                            <input
                                type="tel"
                                maxLength={10}
                                minLength={10}
                                className="form-control"
                                id="telefono-lider"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}>
                            </input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="correo-lider" className="form-label" required>Dirección email de contacto</label>
                            <input
                                type="email"
                                className="form-control"
                                id="correo-lider"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            ></input>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    checked={checkEmail}
                                    onChange={(e) => setCheckEmail(e.target.checked)}
                                    id="checkEmail"
                                ></input>
                                <label
                                    className="form-check-label text-body-secondary"
                                    htmlFor="checkEmail"
                                >
                                    Usar mi correo electronico
                                </label>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="RFC-lider" className="form-label me-1">RFC</label>
                            <Tooltip title={longText}>
                                <HelpCenterIcon />
                            </Tooltip>
                            <input
                                type="text"
                                className="form-control"
                                id="RFC-lider"
                                value={rfc}
                                onChange={(e) => setRfc(e.target.value)}
                            ></input>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    checked={checkRfc}
                                    onChange={(e) => setCheckRfc(e.target.checked)}
                                    id="checkRfc"
                                    maxLength={13} minLength={12}
                                ></input>
                                <label
                                    className="form-check-label text-body-secondary"
                                    htmlFor="checkRfc"
                                >
                                    Usar mi RFC
                                </label>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="CLABE-lider" className="form-label me-1">CLABE interbancaria</label>
                            <Tooltip title={longText}>
                                <HelpCenterIcon />
                            </Tooltip>
                            <input
                                type="text"
                                className="form-control"
                                id="CLABE-lider"
                                value={clabe}
                                onChange={(e) => setClabe(e.target.value)}
                                maxLength={18} minLength={18}
                            ></input>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    checked={checkClabe}
                                    onChange={(e) => setCheckClabe(e.target.checked)}
                                    id="checkClabe"
                                ></input>
                                <label
                                    className="form-check-label text-body-secondary"
                                    htmlFor="checkClabe"
                                >
                                    Usar mi CLABE
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="seccion-proyecto" className="form-label fw-bold fs-4">Datos del proyecto</label>
                        <div className="mb-3">
                            <label htmlFor="nombre-proyecto" className="form-label">Nombre del proyecto</label>
                            <input
                                type="text"
                                className="form-control"
                                id="nombre-proyecto"
                                value={project}
                                onChange={(e) => setProject(e.target.value)}
                            ></input>
                        </div>
                        <div>
                            <label htmlFor="nombre-proyecto" className="form-label">Número de voluntarios</label>
                            <input
                                type="number"
                                className="form-control"
                                id="nombre-proyecto"
                                min={1}
                                value={volunteers}
                                onChange={(e) => setVolunteers(e.target.value)}
                            ></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="descripcion" className="form-label">Descripción</label>
                            <textarea
                                className="form-control"
                                id="descripcion"
                                rows="3"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            ></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="tipo-proyecto" className="form-label" >Proyecto</label>
                            <select className="form-select" aria-label="Default select example"
                            defaultValue={typeProject} onChange={(e) => setTypeProject(e.target.value)}>
                                <option value={0}>Seleccione su tipo de proyecto</option>
                                <option value={"Campaña Presencial"}>Campaña Presencial</option>
                                <option value={"Iniciativa Virtual"}>Iniciativa Virtual</option>
                                <option value={"Proyecto Hibrido"}>Proyecto Hibrido</option>
                            </select>
                        </div>
                        <div className='mb-3'>
                            <div className="form-check">
                                 <label
                                    className="form-check-label text-body-secondary"
                                    htmlFor="checkDonations"
                                >
                                    Estoy de acuerdo en recibir donativos para mi proyecto
                                </label>
                                <Tooltip title={donacion}>
                                    <HelpCenterIcon />
                                </Tooltip>   
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="checkDonations"
                                    value={donation}
                                    onChange={(e)=>setDonation(e.target.checked)}
                                ></input>
                            </div>
                        </div>
                        <div className={`mb-3 mx-5 ${donation == true ? "show" : "no-show"}`}>
                            <label htmlFor="RFC-lider" className="form-label me-1">RFC</label>
                            <Tooltip title={longText}>
                                <HelpCenterIcon />
                            </Tooltip>
                            <input
                                type="text"
                                className="form-control"
                                id="RFC-lider"
                                value={rfc}
                                onChange={(e) => setRfc(e.target.value)}
                            ></input>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    checked={checkRfc}
                                    onChange={(e) => setCheckRfc(e.target.checked)}
                                    id="checkRfc"
                                    maxLength={13} minLength={12}
                                ></input>
                                <label
                                    className="form-check-label text-body-secondary"
                                    htmlFor="checkRfc"
                                >
                                    Usar mi RFC
                                </label>
                            </div>
                        </div>
                        <div className={`mb-3 mx-5 ${donation == true ? "show" : "no-show"}`}>
                            <label htmlFor="CLABE-lider" className="form-label me-1">CLABE interbancaria</label>
                            <Tooltip title={longText}>
                                <HelpCenterIcon />
                            </Tooltip>
                            <input
                                type="text"
                                className="form-control"
                                id="CLABE-lider"
                                value={clabe}
                                onChange={(e) => setClabe(e.target.value)}
                                maxLength={18} minLength={18}
                            ></input>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    checked={checkClabe}
                                    onChange={(e) => setCheckClabe(e.target.checked)}
                                    id="checkClabe"
                                ></input>
                                <label
                                    className="form-check-label text-body-secondary"
                                    htmlFor="checkClabe"
                                >
                                    Usar mi CLABE
                                </label>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="pais" className="form-label">País</label>
                            <input
                                className="form-control"
                                id="pais"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                            ></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="estado" className="form-label">Estado</label>
                            <input
                                className="form-control"
                                id="estado"
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                            ></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="cp" className="form-label">Código postal</label>
                            <input
                                type="number"
                                className="form-control"
                                id="cp"
                                value={zip}
                                onChange={(e) => setZip(e.target.value)}
                            ></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="municipio" className="form-label">Municipio</label>
                            <input
                                className="form-control"
                                id="municipio"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            ></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="direccion" className="form-label">Dirección</label>
                            <textarea
                                className="form-control"
                                id="direccion"
                                rows="2"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            ></textarea>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="fecha-arranque" className="form-label">Fecha de arranque</label>
                            <input
                                type="date"
                                className="form-control"
                                id="fecha-arranque"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                            ></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="fecha-inscripcion" className="form-label">Fecha límite de inscripción</label>
                            <input
                                type="date"
                                className="form-control"
                                id="fecha-inscripcion"
                                value={finishDate}
                                onChange={(e) => setFinishDate(e.target.value)}
                            ></input>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="ods" className="form-label">ODS (s) que abarca</label>
                            <Grid container spacing={2}>
                                {
                                    ods.map((item, index) => (
                                        <Grid key={index} item xs={3}>
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
                    <button onClick={handleSaveNewProject} type="button" className="btn btn-danger w-100">Enviar datos</button>
                </form>
            </main>
        </>
    )
}

export default NewProjectFormView;
