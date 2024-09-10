import React, { useEffect, useState } from "react";
import DataTable from "datatables.net-react";
import DT from "datatables.net-dt";
import "datatables.net-select-dt";
import "datatables.net-responsive-dt";

DataTable.use(DT);
function PublishedProjectsView({ dataProject, edit, activity, status }) {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const formattedData = dataProject.map((project) => [
      logoProject(project.image),
      project.project,
      project.project_type,
      `<button class="btn-edit btn bg-oficial text-white w-auto py-1 px-3" data-id="${project.id_project_pk}">Editar</button>`,
      `<button class="btn-activity btn bg-azul text-white w-auto py-1 px-3" data-id="${project.id_project_pk}" data-project="${project.project}">Nueva</button>`,
    ]);

    setTableData(formattedData);
  }, [dataProject]);

  const logoProject = (imageUrl) => {
    return `<img src="${imageUrl}" alt="" style="width: 120px; height: auto;" />`;
  };

  useEffect(() => {
    const table = document.querySelector(".dataTable");

    const handleButtonClick = (event) => {
      const target = event.target;
      const id = target.dataset.id;
      const project = target.dataset.project;

      if (target.matches(".btn-edit")) {
        edit(id);
      } else if (target.matches(".btn-activity")) {
        activity(id, project)
      } else if (target.matches(".btn-status")) {
        status(id);
      }
    };

    if (table) {
      table.addEventListener("click", handleButtonClick);

      return () => {
        table.removeEventListener("click", handleButtonClick);
      };
    }
  }, [edit, activity, status]);

  const tableOptions = {
    language: {
      lengthMenu: "Mostrar _MENU_ registros por página",
      search: "Buscar:",
      zeroRecords: "No se encontraron registros coincidentes",
      info: "Mostrando _START_ a _END_ de _TOTAL_ registros",
      infoEmpty: "Mostrando 0 a 0 de 0 registros",
      infoFiltered: "(filtrado de _MAX_ registros en total)",
    },
    columns: [
      { title: "Logo" },
      { title: "Proyecto" },
      { title: "Tipo" },
      { title: "Editar" },
      { title: "Actividad" },
    ],
  };

  return (
    <div className="dataTable">
      <label className="form-label fw-bold fs-2">Proyectos publicados</label>
      <DataTable data={tableData} options={tableOptions} className="display" />
    </div>
  );
}

export default PublishedProjectsView;
