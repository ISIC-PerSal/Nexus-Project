import React from "react";
import getDataApi from "../getDataApi";
const API_NEXUS_PROJECT = import.meta.env.VITE_API_NEXUS_PROJECT_DATABASE;

async function fetchGetProject(
  id = "",
  idUser = "",
  title = "",
  ods = "",
  country = ""
) {
  const url = `${API_NEXUS_PROJECT}/project/getProject.php?id=${id}&&idUser=${idUser}&&title=${title}&&ods=${ods}&&country=${country}`;
  try {
    const data = await getDataApi(url, "");
    return data;
  } catch (error) {
    console.error("Error: ", error.message);
    return null;
  }
}

export default fetchGetProject;
