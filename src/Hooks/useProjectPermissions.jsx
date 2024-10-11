import { useEffect, useState } from "react";
import useIsJoined from "../util/project/isJoined";
import fetchGetProject from "../util/project/fetchGetProject"
function useProjectPermissions(idProject, status) {
  const [permission, setPermission] = useState("");
  const [data, setData] = useState({});
  const currentUser = sessionStorage.getItem("id_user");

  const isJoined = useIsJoined(idProject);

  useEffect(() => {
    const getDataproject = async () => {
      try {
        const dataProject = await fetchGetProject(idProject, "", "", "", "", "", status ? status : "Publicado,Activo,Finalizado");
        setData(dataProject);
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };

    getDataproject();
  }, [idProject]);

  useEffect(() => {
    const determinePermission = async () => {
      console.log(data.id_user_fk)
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
  }, [idProject, data, currentUser, isJoined]);

  return permission;
}

export default useProjectPermissions;
