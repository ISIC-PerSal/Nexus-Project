import React from 'react';
import Select from 'react-select';
import Tooltip from '@mui/material/Tooltip';
function DirectoryView() {
    const paises = [
        {
            value: "1",
            label: (
                <div className="d-flex align-items-center">
                    <img
                        src="https://flagpedia.net/data/flags/h80/cl.webp"
                        alt="Chile"
                        style={{ width: '30px', height: '20px', marginRight: '8px' }}
                    />
                    Chile
                </div>
            )
        },
        {
            value: "2",
            label: (
                <div className="d-flex align-items-center">
                    <img
                        src="https://flagpedia.net/data/flags/h80/co.webp"
                        alt="Colombia"
                        style={{ width: '30px', height: '20px', marginRight: '8px' }}
                    />
                    Colombia
                </div>
            )
        },
        {
            value: "3",
            label: (
                <div className="d-flex align-items-center">
                    <img
                        src="https://flagpedia.net/data/flags/h80/gt.webp"
                        alt="México"
                        style={{ width: '30px', height: '20px', marginRight: '8px' }}
                    />
                    Guatemala
                </div>
            )
        },
        {
            value: "4",
            label: (
                <div className="d-flex align-items-center">
                    <img
                        src="https://flagpedia.net/data/flags/h80/hn.webp"
                        alt="Honduras"
                        style={{ width: '30px', height: '20px', marginRight: '8px' }}
                    />
                    Honduras
                </div>
            )
        },
        {
            value: "5",
            label: (
                <div className="d-flex align-items-center">
                    <img
                        src="https://flagpedia.net/data/flags/h80/mx.webp"
                        alt="México"
                        style={{ width: '30px', height: '20px', marginRight: '8px' }}
                    />
                    México
                </div>
            )
        },
        {
            value: "6",
            label: (
                <div className="d-flex align-items-center">
                    <img
                        src="https://flagpedia.net/data/flags/h80/pe.webp"
                        alt="Perú"
                        style={{ width: '30px', height: '20px', marginRight: '8px' }}
                    />
                    Perú
                </div>
            )
        },
        {
            value: "6",
            label: (
                <div className="d-flex align-items-center">
                    <img
                        src="https://flagpedia.net/data/flags/h80/ve.webp"
                        alt="Venezuela"
                        style={{ width: '30px', height: '20px', marginRight: '8px' }}
                    />
                    Venezuela
                </div>
            )
        },
    ];

    return (
        <>
            <main className='bg-img'>
                <div className='container w-50 mt-3 p-3 border rounded border-secondary-subtle bg-gral'>
                    <div className="mb-3">
                        <label htmlFor="seccion-lider" className="form-label fw-bold fs-2">Directorio</label>
                    </div>
                    <div className="container-cita p-3">
                        <div className="quote-box">
                            <div class="quote edu-au-vic-wa-nt-hand">
                                <svg className="mt-2" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-quote" viewBox="0 0 16 16">
                                    <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388q0-.527.062-1.054.093-.558.31-.992t.559-.683q.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612q0-.527.062-1.054.094-.558.31-.992.217-.434.559-.683.34-.279.868-.279V3q-.868 0-1.52.372a3.3 3.3 0 0 0-1.085.992 4.9 4.9 0 0 0-.62 1.458A7.7 7.7 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
                                </svg>
                                <blockquote>
                                    Nunca subestimes el poder de un grupo de personas comprometidas para cambiar el mundo. De hecho, es lo único que lo ha logrado.
                                </blockquote>
                            </div>
                            <div className="name">
                                <b>Margaret Mead</b>, antropóloga cultural estadounidense.
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="text-align-justify px-3">Nexus Project se fundamenta en los <b style={{ color: '#A63F52' }}>nexos</b> entre los miembros de una comunidad
                            para lograr objetivos por el bienestar común. En la sección <b>Directorio</b> hemos
                            reunido enlaces de contacto a aliados poderosos con los que nuestros usuarios podrían
                            amplificar el impacto de sus ideas si estos las conocieran.
                        </p>
                    </div>
                    {/*Divisor para seleccionar país al cual ajustar directorio*/}
                    <div className='p-4'>
                        <div>
                            <label>Seleccione un país</label>
                            <Select placeholder="--"
                                options={paises}
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <label className='w-100 p-1 fw-bold'style={{backgroundColor:"#C13B6C", color: 'white'}}>Filtrar por letra inicial</label>
                            <div class="d-flex flex-row mb-3">
                                <div class="p-2">A</div>
                                <div class="p-2">C</div>
                                <div class="p-2">I</div>
                                <div class="p-2">O</div>
                                <div class="p-2">P</div>
                                <div class="p-2">S</div>
                            </div>
                        </div>
                        <div>
                            <label className='w-100 p-1 fw-bold'style={{backgroundColor:"#173567", color: 'white'}}>Filtrar por ODS</label>
                            <div className='d-flex flex-row mb-3 mt-2'>
                                <Tooltip title="Fin de la pobreza">
                                    <button type="button" className=" icono-ods fw-bold" style={{ backgroundColor: "#EA1C2D" }}>01</button>
                                </Tooltip>
                                <Tooltip title="Hambre cero">
                                    <button type="button" className=" icono-ods fw-bold" style={{ backgroundColor: "#D3A028" }}>02</button>
                                </Tooltip>
                                <Tooltip title="Salud y bienestar">
                                    <button type="button" className=" icono-ods fw-bold" style={{ backgroundColor: "#3CA643" }}>03</button>
                                </Tooltip>
                                <Tooltip title="Educación de calidad">
                                    <button type="button" className=" icono-ods fw-bold" style={{ backgroundColor: "#C21E33" }}>04</button>
                                </Tooltip>
                                <Tooltip title="Igualdad de género">
                                    <button type="button" className=" icono-ods fw-bold" style={{ backgroundColor: "#EE402A" }}>05</button>
                                </Tooltip>
                                <Tooltip title="Agua limpia y saneamiento">
                                    <button type="button" className=" icono-ods fw-bold" style={{ backgroundColor: "#00ADD9" }}>06</button>
                                </Tooltip>
                                <Tooltip title="Energía asequible y no contaminante">
                                    <button type="button" className=" icono-ods fw-bold" style={{ backgroundColor: "#FCB712" }}>07</button>
                                </Tooltip>
                                <Tooltip title="Trabajo decente y crecimiento económico">
                                    <button type="button" className=" icono-ods fw-bold" style={{ backgroundColor: "#A21942" }}>08</button>
                                </Tooltip>
                                <Tooltip title="Industria, innovación e infraestructura">
                                    <button type="button" className=" icono-ods fw-bold" style={{ backgroundColor: "#F36D25" }}>09</button>
                                </Tooltip>
                                <Tooltip title="Reducción de las desigualdades">
                                    <button type="button" className=" icono-ods fw-bold" style={{ backgroundColor: "#E01383" }}>10</button>
                                </Tooltip>
                                <Tooltip title="Ciudades y comunidades sostenibles">
                                    <button type="button" className=" icono-ods fw-bold" style={{ backgroundColor: "#F89C25" }}>11</button>
                                </Tooltip>
                                <Tooltip title="Producción y consumo responsables">
                                    <button type="button" className=" icono-ods fw-bold" style={{ backgroundColor: "#CE8C29" }}>12</button>
                                </Tooltip>
                                <Tooltip title="Acción por el clima">
                                    <button type="button" className=" icono-ods fw-bold" style={{ backgroundColor: "#48773D" }}>13</button>
                                </Tooltip>
                                <Tooltip title="Vida submarina">
                                    <button type="button" className=" icono-ods fw-bold" style={{ backgroundColor: "#007DBC" }}>14</button>
                                </Tooltip>
                                <Tooltip title="Vida de ecosistemas terrestres">
                                    <button type="button" className="icono-ods fw-bold" style={{ backgroundColor: "#3DB048" }}>15</button>
                                </Tooltip>
                                <Tooltip title="Paz, justicia e instituciones sólidas">
                                    <button type="button" className=" icono-ods fw-bold" style={{ backgroundColor: "#02558B" }}>16</button>
                                </Tooltip>
                                <Tooltip title="Alianzas para lograr los objetivos">
                                    <button type="button" className=" icono-ods fw-bold" style={{ backgroundColor: "#183568" }}>17</button>
                                </Tooltip>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default DirectoryView;
