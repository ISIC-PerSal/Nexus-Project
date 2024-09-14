import React, { useEffect, useState } from "react";
import GoFeedView from "./GoFeedView";
import useIsJoined from "../../util/project/isJoined";
import fetchGetFeedByProject from "../../util/project/fetchGetFeedByProject";
import { useNavigate } from "react-router-dom";

function GoFeed({ idProject, idUser}) {
  const [status, setStatus] = useState("");
  const currentUser = sessionStorage.getItem("id_user");
  const isJoined = useIsJoined(idProject);
  const isOwner = currentUser == idUser;
  const navigate = useNavigate();

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
    window.location.href=`/feed/${idProject}`
  };
  return (
    <>
      <GoFeedView handleGoFeed={handleGoFeed} />
    </>
  );
}

export default GoFeed;
