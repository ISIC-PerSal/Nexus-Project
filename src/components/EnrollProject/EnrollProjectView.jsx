import React from "react";

function EnrollProjectView({ idProject, idUser, handleEnroll, show, joinedUser }) {

  return (
    <>
      {
        (show =
          true && idUser !== sessionStorage.getItem("id_user") ? (
            <button className="fixed-footer" onClick={handleEnroll}>
              <div>
                <div className="w-100 d-flex justify-content-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="3vw"
                    height="3vw"
                    fill="currentColor"
                    className="bi bi-person-plus-fill me-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                    <path
                      fillRule="evenodd"
                      d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5"
                    />
                  </svg>
                </div>
                <div className="d-flex justify-content-center">Inscribirme</div>
              </div>
            </button>
          ) : (
            ""
          ))
      }
      {joinedUser ? (
        ""
      ) : (
        <button className="fixed-footer">
          <div>
            <div className="w-100 d-flex justify-content-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="3vw"
                height="3vw"
                fill="currentColor"
                className="bi bi-person-plus-fill me-2"
                viewBox="0 0 16 16"
              >
                <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                <path
                  fillRule="evenodd"
                  d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5"
                />
              </svg>
            </div>
            <div className="d-flex justify-content-center">
              Ya estás inscrito
            </div>
          </div>
        </button>
      )}
    </>
  );
}

export default EnrollProjectView;
