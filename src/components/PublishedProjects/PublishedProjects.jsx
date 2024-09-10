import React, { useEffect, useState } from "react";
import fetchGetProjectsByUser from "../../util/project/fetchGetProjectsByUser";
import PublishedProjectsView from "./PublishedProjectsView";
import { Navigate, useNavigate } from "react-router-dom";

function PublishedProjects({ idUser }) {
  const [dataProject, setDataProject] = useState([]);
  const navigate = useNavigate();

  async function fetchData(id, status, type) {
    const body = {
      idUser: id,
      status: status,
      type: type,
    };
    try {
      const data = await fetchGetProjectsByUser(body);
      setDataProject(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData(idUser, "Publicado", "Propio");
  }, [idUser]);

  // Define las funciones para manejar los botones
  function editProject(id) {
    //console.log("Edit project with ID:", id);
  }

  function addActivity(id, project) {
    navigate(`/add-activity?project=${id}`, { state: { data: project } });
  }

  function changeStatus(id) {
    //console.log("Change status for project with ID:", id);
  }

  return (
    <>
      <PublishedProjectsView
        dataProject={dataProject}
        edit={editProject}
        activity={addActivity}
        status={changeStatus}
      />
    </>
  );
}

export default PublishedProjects;