import { useEffect, useState } from "react";
import fetchGetProject from "../project/fetchGetProject";
import useIsJoined from "../project/isJoined";

function useProjectPermissions(idProject) {
  const [permission, setPermission] = useState("");
  const [data, setData] = useState({});
  const currentUser = sessionStorage.getItem("id_user");

  useEffect(() => {
    const getDataproject = async () => {
      try {
        const dataProject = await fetchGetProject(idProject, "", "", "", "");
        setData(dataProject);
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };

    getDataproject();
  }, [idProject]);

  useEffect(() => {
    const determinePermission = async () => {
      const isJoined = await useIsJoined(idProject);
      const isOwner = currentUser == data.id_user_fk;

      if (isOwner) {
        setPermission("Privado");
      } else if (isJoined) {
        setPermission("Miembro");
      } else {
        setPermission("Publico");
      }
    };

    if (data.id_user_fk) {
      determinePermission();
    }
  }, [idProject, data, currentUser]);

  return permission;
}

export default useProjectPermissions;
