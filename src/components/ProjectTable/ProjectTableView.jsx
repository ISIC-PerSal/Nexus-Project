import React, { useEffect, useState } from "react";
import DataTable from "datatables.net-react";
import DT from "datatables.net-dt";
import "datatables.net-select-dt";
import "datatables.net-responsive-dt";
import logoDefault from "../../assets/nexus.png";
import "./ProjectTable.css"

DataTable.use(DT);
function ProjectTableView({
  title = "",
  type = "",
  dataProject,
  edit,
  activity,
  explore,
}) {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const formattedData = dataProject.map((project) => [
      logoProject(project.image),
      project.project,
      project.project_type,
      `<div class="dropdown">
  <button
    class="btn bg-oficial text-white dropdown-toggle"
    type="button"
    id="dropdownMenuButton"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    Herramientas
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
  ${
    type == "Propio"
      ? `<li>
      <button
        class="btn-edit btn dropdown-item"
        data-id="${project.id_project_pk}"
        data-project="${project.project}"
      >
        Editar
      </button>
    </li>`
      : ""
  }
  ${
    type == "Propio"
      ? `<li>
      <button
        class="btn-activity btn dropdown-item"
        data-id="${project.id_project_pk}"
        data-project="${project.project}"
      >
        Nueva actividad
      </button>
    </li>`
      : ""
  }
    <li>
      <button
        class="btn-explore btn dropdown-item"
        data-id="${project.id_project_pk}"
        data-project="${project.project}"
      >
        Ver
      </button>
    </li>
  </ul>
</div>
`,
    ]);

    setTableData(formattedData);
  }, [dataProject]);

  const logoProject = (imageUrl) => {
    return imageUrl
      ? `<img src="${imageUrl}" alt="" style="width: 120px; height: auto;" />`
      : `<img src="${logoDefault}" alt="" style="width: 120px; height: auto;" />`;
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
        activity(id, project);
      } else if (target.matches(".btn-explore")) {
        explore(id);
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
      { title: "Herramientas" },
    ],
  };

  return (
    <>
      <div className="dataTable-custom">
        <div className="dataTable">
          <label className="form-label fw-bold fs-2">{title}</label>
          <DataTable
            data={tableData}
            options={tableOptions}
            className="display"
          />
        </div>
      </div>
    </>
  );
}

export default ProjectTableView;
