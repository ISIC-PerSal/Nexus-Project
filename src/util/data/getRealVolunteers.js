import React from "react";
import fetchGetRealVolunteersByProject from "../project/fetchGetRealVolunteersByProject";

export default async function getRealVolunteers(id) {
  const body = {
    idProject: id,
  };
  try {
    const data = await fetchGetRealVolunteersByProject(body);
    return data;
  } catch {
    return null;
  }
}
