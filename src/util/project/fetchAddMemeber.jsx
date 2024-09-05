import React from "react";
import getDataApi from "../getDataApi";
const API_NEXUS_PROJECT = import.meta.env.VITE_API_NEXUS_PROJECT_DATABASE;

async function fetchAddMemeber(body) {
  const url = `${API_NEXUS_PROJECT}/project/addMember.php`;
  try {
    const data = await getDataApi(url, body);
    return data;
  } catch (error) {
    console.error("Error: ", error.message);
    return null;
  }
}

export default fetchAddMemeber;
