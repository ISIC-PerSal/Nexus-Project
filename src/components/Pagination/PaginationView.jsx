import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import NoDataView from "../NoData/NoDataView";

function PaginationView({
  data,
  currentPage,
  currentProjects,
  handlePageChange,
  projectsPerPage,
  Component,
}) {
  return (
    <Stack spacing={0}>
      <Pagination
        className="d-flex justify-content-center"
        count={Math.ceil(data.length / projectsPerPage)}
        page={currentPage}
        onChange={handlePageChange}
      />
      {currentProjects.length > 0 ? (
        currentProjects.map((project, index) => (
          <Component key={index} data={project} />
        ))
      ) : (
        <NoDataView />
      )}
      <Pagination
        className="d-flex justify-content-center"
        count={Math.ceil(data.length / projectsPerPage)}
        page={currentPage}
        onChange={handlePageChange}
      />
    </Stack>
  );
}

export default PaginationView;
