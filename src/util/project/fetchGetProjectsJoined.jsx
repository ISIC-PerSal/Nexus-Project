import React from "react";
import getDataApi from "../getDataApi";
const API_NEXUS_PROJECT = import.meta.env.VITE_API_NEXUS_PROJECT_DATABASE;

async function fetchGetProjectsJoined(id) {
  const url = `${API_NEXUS_PROJECT}/project/getProjectsJoined.php?idUser=${id}`;
  try {
    const data = await getDataApi(url, "");
    return data;
  } catch (error) {
    console.error("Error: ", error.message);
    return null;
  }
}

export default fetchGetProjectsJoined;
