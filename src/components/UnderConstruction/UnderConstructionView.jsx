import React from "react";

function UnderConstructionView() {
  return (
    <>
      <main className="bg-img py-3">
        <div className="container w-50 p-3 border rounded border-secondary-subtle bg-gral">
          <div className="text-center">
            <h1 className="text-dark">Estamos trabajando en ello</h1>
            <div className="my-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="99"
                height="99"
                fill="currentColor"
                className="bi bi-hammer"
                viewBox="0 0 16 16"
              >
                <path d="M9.972 2.508a.5.5 0 0 0-.16-.556l-.178-.129a5 5 0 0 0-2.076-.783C6.215.862 4.504 1.229 2.84 3.133H1.786a.5.5 0 0 0-.354.147L.146 4.567a.5.5 0 0 0 0 .706l2.571 2.579a.5.5 0 0 0 .708 0l1.286-1.29a.5.5 0 0 0 .146-.353V5.57l8.387 8.873A.5.5 0 0 0 14 14.5l1.5-1.5a.5.5 0 0 0 .017-.689l-9.129-8.63c.747-.456 1.772-.839 3.112-.839a.5.5 0 0 0 .472-.334" />
              </svg>
            </div>
            <p className="lead ">Por favor, vuelva más tarde.</p>
          </div>
        </div>
      </main>
    </>
  );
}

export default UnderConstructionView;
