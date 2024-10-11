import React, { useEffect, useState } from "react";
import PaginationView from "./PaginationView";
import NoDataView from "../NoData/NoDataView";
import LoadingView from "../Loading/LoadingView";
import { components } from "react-select";

function Pagination({ data, Component }) {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 8;

  useEffect(() => {
    if (data) {
      setLoading(false);
    }
  }, [data]);

  useEffect(() => {
    setCurrentPage(1);
  }, [data]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  if (loading) {
    return <LoadingView />;
  }

  if (!data || data.length === 0) {
    return <NoDataView />;
  }

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = data.slice(indexOfFirstProject, indexOfLastProject);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };
  const valor = currentProjects.map(proyecto => proyecto.country)
  return (
    <PaginationView
      data={data}
      currentPage={currentPage}
      currentProjects={currentProjects}
      handlePageChange={handlePageChange}
      projectsPerPage={projectsPerPage}
      Component={Component}
    />
  );
}

export default Pagination;
