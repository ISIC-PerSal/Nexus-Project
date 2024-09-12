import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import ProjectFeedView from "./ProjectFeedView";
import { useNexus } from "../../Hooks/useContext";
import { useParams } from "react-router-dom";
import useProjectPermissions from "../../Hooks/useProjectPermissions";
import fetchGetFeedByProject from "../../util/project/fetchGetFeedByProject";

function ProjectFeed() {
  const { setSelected } = useNexus();
  const { idProject } = useParams();
  const permission = useProjectPermissions(idProject);
  const [data, setData] = useState([]);

  const getDataProject = async (body) => {
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
    const fetchData = async () => {
      const body = {
        idProject: idProject,
        status: "Privado",
        type: "",
      };
      console.log(body)
      const dataProject = await getDataProject(body);
      setData(dataProject);
    };

    if (permission) {
      fetchData();
    }
  }, [idProject, permission]);

  return (
    <>
      <Navbar />
      <ProjectFeedView data={data} />
    </>
  );
}

export default ProjectFeed;
