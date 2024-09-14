import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import ProjectFeedView from "./ProjectFeedView";
import { useNexus } from "../../Hooks/useContext";
import { useParams } from "react-router-dom";
import useProjectPermissions from "../../Hooks/useProjectPermissions";
import fetchGetFeedByProject from "../../util/project/fetchGetFeedByProject";
import fetchGetProject from "../../util/project/fetchGetProject";

function ProjectFeed() {
  const { setSelected } = useNexus();
  const { idProject } = useParams();
  const permission = useProjectPermissions(idProject);
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
    const fetchData = async () => {
      const getDataProject = async () => {
        try {
          const dataP = await fetchGetProject(idProject, "", "", "");
          setDataProject(dataP);
        } catch (error) {
          console.error(error);
        }
      };
      getDataProject();
      const body = {
        idProject: idProject,
        status: "Privado",
        type: "",
      };
      const feedProject = await getFeedProject(body);
      setData(feedProject);
    };

    if (permission) {
      fetchData();
    }
  }, [idProject, permission]);

  return (
    <>
      <Navbar />
      <ProjectFeedView data={data} project={dataProject} />
    </>
  );
}

export default ProjectFeed;
