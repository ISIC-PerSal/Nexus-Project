import React from "react";
import CardProject from "../../components/CardProject/CardProject";

function ExploreView({ dataProject, title, setTitle, ods, setOds }) {
  return (
    <>
      <main className="bg-img py-3">
        <div className="container w-50 p-3 border rounded border-secondary-subtle bg-gral">
          <div className="mb-3">
            <label className="form-label fw-bold fs-2">
              Explorar proyectos
            </label>
          </div>
          <div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </span>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                className="form-control"
              ></input>
            </div>
          </div>
          {dataProject.map((item, index) => (
            <CardProject data={item} key={index} />
          ))}
        </div>
      </main>
    </>
  );
}

export default ExploreView;
