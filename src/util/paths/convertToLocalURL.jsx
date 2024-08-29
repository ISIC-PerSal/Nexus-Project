import React from "react";

function convertToLocalURL(localPath) {
  const htdocsPath = "C:/xampp/htdocs/";
  const baseURL = "http://localhost/";
  const relativePath = localPath.slice(htdocsPath.length);
  return baseURL + relativePath.replace(/\\/g, "/");
}

export default convertToLocalURL;
