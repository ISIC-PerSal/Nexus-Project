import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import ProjectFeedView from "./ProjectFeedView";
import { useNexus } from "../../Hooks/useContext";
import { useLocation, useParams } from "react-router-dom";
import useProjectPermissions from "../../Hooks/useProjectPermissions";
import fetchGetFeedByProject from "../../util/project/fetchGetFeedByProject";
import fetchGetProject from "../../util/project/fetchGetProject";
import useIsJoined from "../../util/project/isJoined";

function ProjectFeed() {
  const { setSelected } = useNexus();
  const { idProject } = useParams();
  const location = useLocation();
  const statusProject =
    location.state != null ? location.state.statusProject : "";
  const permission = useProjectPermissions(idProject, statusProject);
  const [data, setData] = useState([]);
  const [dataProject, setDataProject] = useState({});

  const getFeedProject = async (body) => {
    try {
      const data = await fetchGetFeedByProject(body);
      return data;
    } catch (error) {
      console.error("Ocurrió un error:", error);
      return [];
    }
  };

  useEffect(() => {
    setSelected("Explorar");
  }, [setSelected]);

  useEffect(() => {
    const getDataProject = async () => {
      try {
        const dataP = await fetchGetProject(
          idProject,
          "",
          "",
          "",
          "",
          "",
          statusProject ? statusProject : "Publicado,Activo,Finalizado"
        );
        setDataProject(dataP);
      } catch (error) {
        console.error(error);
      }
    };
    getDataProject();
    const fetchData = async () => {
      const body = {
        idProject: idProject,
        status: permission,
        type: "",
      };
      const feedProject = await getFeedProject(body);
      setData(feedProject);
    };

    if (permission) {
      fetchData();
    }
    console.log(permission)
  }, [idProject, permission]);

  return (
    <>
      <Navbar />
      <ProjectFeedView data={data} project={dataProject} />
    </>
  );
}

export default ProjectFeed;
