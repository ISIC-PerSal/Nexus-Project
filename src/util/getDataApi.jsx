import React from "react";

async function getDataApi(url, body) {
  try {
    const credentials = btoa(
      `${sessionStorage.getItem("tk1")}:${sessionStorage.getItem("tk2")}`
    );
    console.log(credentials)

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${credentials}`,
      },
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error("Error en la petición");
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.error("Error: ", error.message);
    return null;
  }
}

export default getDataApi;
