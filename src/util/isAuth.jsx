import React from "react";
function isAuth() {
  return sessionStorage.getItem("id_user") ;
}

export default isAuth;
