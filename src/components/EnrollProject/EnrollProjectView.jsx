import React from "react";

function EnrollProjectView({
  idProject,
  idUser,
  handleEnroll,
  show,
  joinedUser,
  currentUser,
  handleEditProject,
}) {


  if (idUser == currentUser) {
    return (
      <button
        className="fixed-footer"
        style={{ backgroundColor: "#AE2C3A" }}
        onClick={handleEditProject}
      >
        <div>
          <div className="w-100 d-flex justify-content-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="3vw"
              height="3vw"
              fill="currentColor"
              className="bi bi-pencil-square"
              viewBox="0 0 16 16"
            >
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
              <path
                fillRule="evenodd"
                d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
              />
            </svg>
          </div>
          <div className="d-flex justify-content-center">Editar</div>
        </div>
      </button>
    );
  }
  if (joinedUser) {
    return (
      <button
        className="fixed-footer"
        style={{ backgroundColor: "#009C71" }}
        disabled
      >
        <div>
          <div className="w-100 d-flex justify-content-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="3vw"
              height="3vw"
              fill="currentColor"
              className="bi bi-person-fill-check"
              viewBox="0 0 16 16"
            >
              <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
              <path d="M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4" />
            </svg>
          </div>
          <div className="d-flex justify-content-center">Ya estás inscrito</div>
        </div>
      </button>
    );
  }

  if (idUser !== currentUser && !joinedUser) {
    return (
      <button className="fixed-footer" onClick={handleEnroll}>
        <div>
          <div className="w-100 d-flex justify-content-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="3vw"
              height="3vw"
              fill="currentColor"
              className="bi bi-person-fill-add"
              viewBox="0 0 16 16"
            >
              <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
              <path d="M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4" />
            </svg>
          </div>
          <div className="d-flex justify-content-center">Inscribirme</div>
        </div>
      </button>
    );
  }

  return null;
}

export default EnrollProjectView;
