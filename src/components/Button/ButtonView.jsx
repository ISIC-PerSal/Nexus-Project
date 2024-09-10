import React from "react";

function ButtonView({
  bgColor = "#C13B6C",
  text = "Boton",
  handleAcivity = () => {},
}) {
  return (
    <>
      <a
        class="btn text-white w-100 p-1"
        style={{ backgroundColor: bgColor }}
        onClick={handleAcivity}
      >
        {text}
      </a>
    </>
  );
}

export default ButtonView;
