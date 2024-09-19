import React from "react";

function EditProjectView({ data, project, setProject }) {
  data,
    project,
    setProject,
    image,
    setImage,
    leader_type,
    setLeader_type,
    name,
    setName,
    ods1,
    setOds1,
    ods2,
    setOds2,
    ods3,
    setOds3,
    ods4,
    setOds4,
    ods5,
    setOds5,
    ods6,
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
    phone,
    setPhone,
    projectType,
    setProjectType,
    rfc,
    setRfc,
    startDate,
    setStartDate,
    state,
    setState,
    status,
    setStatus,
    url,
    setUrl,
    volunteers,
    setVolunteers,
    zip,
    setZip;
  return (
    <>
      <main className="py-3 container w-50 mt-3 p-3 border rounded border-secondary-subtle bg-gral">
        <h1>Editar Projecto</h1>
        <form action="">
          <div className="mb-3">
            <label htmlFor="nombre-proyecto" className="form-label">
              Nombre del líder o representante
            </label>
            <input
              type="text"
              className="form-control"
              id="nombre-proyecto"
              value={project}
              onChange={(e) => setProject(e.target.value)}
            ></input>
          </div>
        </form>
      </main>
    </>
  );
}

export default EditProjectView;
