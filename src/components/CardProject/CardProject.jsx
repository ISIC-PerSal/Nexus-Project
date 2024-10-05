import React from "react";
import CardProjectView from "./CardProjectView";
import Pagination from "../Pagination/Pagination";

function CardProject({ data }) {
  return (
    <>
      <Pagination data={data} Component={CardProjectView} />
    </>
  );
}

export default CardProject;
