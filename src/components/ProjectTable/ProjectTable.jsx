import React, { useEffect, useState } from "react";
import fetchGetProjectsByUser from "../../util/project/fetchGetProjectsByUser";
import { useNavigate } from "react-router-dom";
import ProjectTableView from "./ProjectTableView";

function ProjectTable({ title = "", idUser, status, type }) {
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
    fetchData(idUser, status, type);
  }, [idUser]);

  function editProject(id) {
    navigate(`/edit/${id}`, { state: { statusProject: status} });
  }

  function addActivity(id, project) {
    navigate(`/add-activity?project=${id}`, { state: { data: project, typeProject: type } });
  }

  function explore(id) {
    navigate(`/explore/${id}`, { state: { statusProject: status } });
  }

  return (
    <>
      <ProjectTableView
        title={title}
        type={type}
        dataProject={dataProject}
        edit={editProject}
        activity={addActivity}
        explore={explore}
      />
    </>
  );
}

export default ProjectTable;
