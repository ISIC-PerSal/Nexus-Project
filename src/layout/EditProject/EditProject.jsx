import React, { useEffect, useState } from "react";
import EditProjectView from "./EditProjectView";
import Navbar from "../../components/Navbar/Navbar";
import { useLocation, useParams } from "react-router-dom";
import fetchGetProject from "../../util/project/fetchGetProject";
import ErrorView from "../Error/ErrorView";
import NewProjectForm from "../../components/NewProjectForm/NewProjectForm";
import { data } from "jquery";

function EditProject() {
  const { idProject } = useParams();
  const location = useLocation();
  const statusProject =
    location.state != null ? location.state.statusProject : "";
  const [dataEdit, setDataEdit] = useState({});

  useEffect(() => {
    const getDataProject = async () => {
      const currentUser = sessionStorage.getItem("id_user");
      try {
        const data = await fetchGetProject(
          idProject,
          currentUser,
          "",
          "",
          "",
          "",
          statusProject
        );

        const transformedData = {
          address: data.address,
          city: data.city,
          clabe: data.clabe,
          country: data.country,
          description: data.description,
          donation: data.donation === 1 ? true : false,
          email: data.email,
          finishDate: data.finish_date,
          idUser: data.id_user_fk,
          image: data.image,
          leaderName: data.name || "",
          leaderType: data.leader_type || "",
          ods1: data.ods1 === 1,
          ods2: data.ods2 === 1,
          ods3: data.ods3 === 1,
          ods4: data.ods4 === 1,
          ods5: data.ods5 === 1,
          ods6: data.ods6 === 1,
          ods7: data.ods7 === 1,
          ods8: data.ods8 === 1,
          ods9: data.ods9 === 1,
          ods10: data.ods10 === 1,
          ods11: data.ods11 === 1,
          ods12: data.ods12 === 1,
          ods13: data.ods13 === 1,
          ods14: data.ods14 === 1,
          ods15: data.ods15 === 1,
          ods16: data.ods16 === 1,
          ods17: data.ods17 === 1,
          phone: data.phone || "",
          project: data.project || "",
          projectType: data.project_type || "",
          rfc: data.rfc || "",
          startDate: data.start_date || "",
          state: data.state || "",
          status: data.status || "",
          urlProject: data.url || "",
          volunteers: data.volunteers || 0,
          zip: data.zip || "",
        };

        setDataEdit(transformedData);
        console.log(transformedData);
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };

    getDataProject();
    console.log(idProject);
    console.log(statusProject);
  }, [idProject, statusProject]);

  return (
    <>
      {dataEdit && dataEdit.project != "" ? (
        <>
          <Navbar />
          <NewProjectForm dataEdit={dataEdit} />
        </>
      ) : (
        <ErrorView />
      )}
    </>
  );
}

export default EditProject;
