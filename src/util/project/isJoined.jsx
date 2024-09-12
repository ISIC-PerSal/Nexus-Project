import { useState, useEffect } from "react";

function useIsJoined(idProject) {
  const [isJoined, setIsJoined] = useState(false);
  const currentUser = sessionStorage.getItem("id_user");

  useEffect(() => {
    const joined = () => {
      const dataProjectsSession = JSON.parse(
        sessionStorage.getItem("projects_joined")
      );
      if (dataProjectsSession) {
        const joinedProject = dataProjectsSession.find(
          (item) => item.id_project_pk == idProject
        );
        if (joinedProject) {
          setIsJoined(true);
        } else {
          setIsJoined(false);
        }
      } else {
        setIsJoined(false);
      }
    };
    joined();
  }, [idProject, currentUser]);

  return isJoined;
}

export default useIsJoined;
