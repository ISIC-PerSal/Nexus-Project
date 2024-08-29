import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import CardProjectView from "./CardProjectView";
import NoDataView from "../NoData/NoDataView";
import LoadingView from "../Loading/LoadingView";

function CardProject({ data }) {
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

  if (loading == true && !data) {
    return <NoDataView />;
  }

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = data.slice(indexOfFirstProject, indexOfLastProject);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <>
      <Stack spacing={0}>
        <Pagination
          className="d-flex justify-content-center"
          count={Math.ceil(data.length / projectsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
        />
        {currentProjects.map((project, index) => (
          <CardProjectView key={index} data={project} />
        ))}
        <Pagination
          className="d-flex justify-content-center"
          count={Math.ceil(data.length / projectsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
        />
      </Stack>
    </>
  );
}

export default CardProject;
