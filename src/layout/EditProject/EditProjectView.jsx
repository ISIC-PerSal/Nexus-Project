import React from "react";

function EditProjectView({ data, project, setProject }) {
  console.log(data);
  return (
    <>
      <main className="py-3 container w-50 mt-3 p-3 border rounded border-secondary-subtle bg-gral">
        <h1>Editar Projecto</h1>
        <form
          action=""
        >
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
