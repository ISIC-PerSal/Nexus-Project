import React, { useState } from "react";
import DirectoryView from "./DirectoryView";
import NavbarGuest from "../../components/Navbar/NavbarGuest";
import isAuth from "../../util/isAuth";
import Navbar from "../../components/Navbar/Navbar";

function Directory() {
  const isLogin = isAuth();
  const [ods, setOds] = useState("Todos");
  const [pais, setPais] = useState("Todos");
  const [directoryData, setDirectoryData] = useState("");
  return (
    <>
      {isLogin ? <Navbar /> : <NavbarGuest />}
      <DirectoryView 

      />
    </>
  );
}

export default Directory;
