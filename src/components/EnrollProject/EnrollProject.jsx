import React, { useEffect, useState } from "react";
import EnrollProjectView from "./EnrollProjectView";
import fetchAddMemeber from "../../util/project/fetchAddMemeber";
import Swal from "sweetalert2";
import fetchGetProjectsJoined from "../../util/project/fetchGetProjectsJoined";

async function getProjectsJoined(idUser, idProject) {
  const data = await fetchGetProjectsJoined(idUser);
  const unido = data.find((projects) => projects.id_project_pk == idProject);
  return unido ? true : false;
}

function EnrollProject({ idProject, idUser }) {
  const [isJoined, setIsJoined] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const resul = await getProjectsJoined(idUser, idProject);
      setIsJoined(resul);
    };

    fetchData();
  }, [idUser, idProject]);
  const handleEnroll = async () => {
    const body = {
      idUser: idUser,
      idProject: idProject,
    };
    try {
      const data = await fetchAddMemeber(body);
      if (data.status == "Done") {
        Swal.fire({
          title: "Listo!",
          text: "Ya eres parte de este proyecto!",
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: "Ocurrio un error",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {}
  };

  return (
    <>
      <EnrollProjectView
        idProject={idProject}
        idUser={idUser}
        handleEnroll={handleEnroll}
        show={isJoined}
      />
    </>
  );
}

export default EnrollProject;
