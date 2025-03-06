import React from "react";
import CardArticles from "../../components/CardArticles/CardArticles";
import Pagination from "../../components/Pagination/Pagination";

function AboutScienceView({ data = [], handleReset, handleSerch, title }) {
  return (
    <>
      <main className="container w-75 p-3 border rounded border-secondary-subtle bg-gral my-3">
        <div className="mb-3 d-flex justify-content-between">
          <label className="form-label fw-bold fs-2">
            Divulgación Cientifica
          </label>
          <button
            type="button"
            className={`${
              sessionStorage.getItem("type") === "General" ||
              !sessionStorage.getItem("type")
                ? "bg-oficial"
                : "bg-oficial-juvenil"
            } btn text-white h-auto`}
            onClick={handleReset}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-arrow-clockwise"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"
              />
              <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466" />
            </svg>
          </button>
        </div>
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
            type="text"
            className="form-control"
            placeholder="Buscar documento por nombre..."
            value={title}
            onChange={(e) => handleSerch(e.target.value)}
          ></input>
        </div>
        <Pagination data={data} Component={CardArticles} />
      </main>
    </>
  );
}

export default AboutScienceView;
