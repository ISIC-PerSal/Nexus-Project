function EditProjectView({ data, updateProjectData }) {
  const handleChange = (field) => (event) => {
    updateProjectData(field, event.target.value);
  };
  console.log(data);
  return (
    <>
      <main className="py-3 container w-50 mt-3 p-3 border rounded border-secondary-subtle bg-gral">
        <h1>Editar Projecto</h1>
        <form action="">
          <div className="mb-3">
            <label htmlFor="nombre-lider" className="form-label">
              Nombre del líder o representante
            </label>
            <input
              type="text"
              className="form-control"
              id="nombre-lider"
              value={data.project}
              onChange={(e) => handleChange("project")}
            ></input>
          </div>
        </form>
      </main>
    </>
  );
}

export default EditProjectView;
