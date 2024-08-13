import React from "react";
import MainView from "./MainView";

function Main() {
  sessionStorage.clear();
  return (
    <>
      <MainView />
    </>
  );
}

export default Main;
