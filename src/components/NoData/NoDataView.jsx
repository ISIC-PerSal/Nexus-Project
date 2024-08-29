import React from "react";

function NoDataView() {
  return (
    <div
      className="w-100 d-flex justify-content-center align-items-center my-3 p-5"
      style={{
        color: "#6c757d",
        fontSize: "1.25rem",
        fontStyle: "italic",
        backgroundColor:"#E9ECEF"
      }}
    >
      Sin datos
    </div>
  );
}

export default NoDataView;
