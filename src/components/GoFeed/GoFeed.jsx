import React, { useEffect, useState } from "react";
import GoFeedView from "./GoFeedView";
import fetchGetProjectsJoined from "../../util/project/fetchGetProjectsJoined";
import isJoined from "../../util/project/isJoined";
import useIsJoined from "../../util/project/isJoined";
import fetchGetFeedByProject from "../../util/project/fetchGetFeedByProject";

function GoFeed({ idProject, idUser }) {
  const [status, setStatus] = useState("");
  const currentUser = sessionStorage.getItem("id_user");
  const isJoined = useIsJoined(idProject);
  const isOwner = currentUser == idUser

  useEffect(() => {
    if (isOwner) {
      setStatus("Privado");
    } else if (isJoined) {
      setStatus("Miembro");
    } else {
      setStatus("Publico");
    }
  }, [idProject, idUser]);

  const handleGoFeed = async () => { 
  const body = {
    idProject: idProject,
    status: status,
    type: "",
  };
  try{
    const data = await fetchGetFeedByProject(body);
    console.log(data)
  }catch{}
};
  return (
    <>
      <GoFeedView
        handleGoFeed={handleGoFeed} />
    </>
  );
}

export default GoFeed;
