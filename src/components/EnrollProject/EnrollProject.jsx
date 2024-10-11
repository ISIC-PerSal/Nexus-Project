import React, { useEffect, useState } from "react";
import EnrollProjectView from "./EnrollProjectView";
import fetchAddMemeber from "../../util/project/fetchAddMemeber";
import Swal from "sweetalert2";
import fetchGetProjectsJoined from "../../util/project/fetchGetProjectsJoined";
import { useNavigate } from "react-router-dom";

async function getProjectsJoined(idUser, idProject) {
  const data = await fetchGetProjectsJoined(idUser);
  const unido =
    data.find((projects) => projects.id_project_pk == idProject) || [];
  return unido.length ? false : true;
}

function EnrollProject({ idProject, idUser }) {
  const [isJoined, setIsJoined] = useState(false);
  const [joinedUser, setJoinedUser] = useState(false);
  const currentUser = sessionStorage.getItem("id_user");
  const navigate = useNavigate();
  const joinedProjects = async () => {
    const dataProjectsJoined = await fetchGetProjectsJoined(currentUser);
    if (dataProjectsJoined) {
      sessionStorage.setItem(
        "projects_joined",
        JSON.stringify(dataProjectsJoined)
      );
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const resul = await getProjectsJoined(currentUser, idProject);
      setIsJoined(resul);
    };

    fetchData();
    const joined = () => {
      const dataProjectsSession = JSON.parse(
        sessionStorage.getItem("projects_joined")
      );
      if (dataProjectsSession) {
        const joinedProject = dataProjectsSession.find(
          (item) => item.id_project_pk == idProject
        );
        if (joinedProject) {
          setJoinedUser(true);
        } else {
          setJoinedUser(false);
        }
      } else {
        setIsJoined(false);
      }
    };
    joinedProjects();
    joined();
  }, [idUser, idProject]);

  const handleEnroll = async () => {
    const body = {
      idUser: currentUser,
      idProject: idProject,
    };

    try {
      const data = await fetchAddMemeber(body);
      if (data.status == "Done") {
        joinedProjects();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Listo, ya eres parte de este proyecto!",
          showConfirmButton: false,
          timer: 1500,
          willClose: () => {
            window.location.href = `/explore/${idProject}`;
          },
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: "Ocurrió un error",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const handleEditProject=()=>{
    navigate(`/edit/${idProject}`);
  }

  return (
    <>
      <EnrollProjectView
        idProject={idProject}
        idUser={idUser}
        handleEnroll={handleEnroll}
        show={isJoined}
        joinedUser={joinedUser}
        currentUser={currentUser}
        handleEditProject={handleEditProject}
              />
    </>
  );
}

export default EnrollProject;
