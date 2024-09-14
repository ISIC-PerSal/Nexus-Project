import React, { useEffect, useState } from "react";
import EditProjectView from "./EditProjectView";
import Navbar from "../../components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import fetchGetProject from "../../util/project/fetchGetProject";
import ErrorView from "../Error/ErrorView";

function EditProject() {
  const { idProject } = useParams();

  const [projectData, setProjectData] = useState({
    address: "",
    background_image: "",
    city: "",
    clabe: "",
    country: "",
    created_at: "",
    description: "",
    donation: "",
    email: "",
    finish_date: "",
    id_project_pk: "",
    id_user_fk: "",
    image: "",
    leader_type: "",
    name: "",
    ods1: "",
    ods2: "",
    ods3: "",
    ods4: "",
    ods5: "",
    ods6: "",
    ods7: "",
    ods8: "",
    ods9: "",
    ods10: "",
    ods11: "",
    ods12: "",
    ods13: "",
    ods14: "",
    ods15: "",
    ods16: "",
    ods17: "",
    phone: "",
    project: "",
    project_type: "",
    rfc: "",
    start_date: "",
    state: "",
    status: "",
    url: "",
    volunteers: "",
    zip: "",
  });

  const updateProjectData = (field, value) => {
    setProjectData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  useEffect(() => {
    const getDataProject = async () => {
      const currentUser = sessionStorage.getItem("id_user");
      try {
        const data = await fetchGetProject(idProject, currentUser, "", "", "");
        setProjectData(data);
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };
    getDataProject();
  }, [idProject]);

  return (
    <>
      {projectData ? (
        <>
          <Navbar />
          <EditProjectView
            data={projectData}
            updateProjectData={updateProjectData}
          />
        </>
      ) : (
        <ErrorView />
      )}
    </>
  );
}

export default EditProject;
