import React, { useEffect, useState } from "react";
import GoFeedView from "./GoFeedView";
import fetchGetProjectsJoined from "../../util/project/fetchGetProjectsJoined";
import isJoined from "../../util/project/isJoined";
import useIsJoined from "../../util/project/isJoined";

function GoFeed({ idProject }) {
  const [joinedUser, setJoinedUser] = useState(false);

  const isJoined = useIsJoined(idProject);

  


  const handleGoFeed = () => {};
  return (
    <>
      <GoFeedView />
    </>
  );
}

export default GoFeed;
