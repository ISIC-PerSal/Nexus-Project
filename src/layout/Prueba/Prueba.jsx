import React, { useState } from "react";
import InputForm from "../../components/FormControl/InputForm/InputForm";

function Prueba() {
  const [nombre, setNombre] = useState("");
  function click() {
    console.log(nombre);
  }
  return (
    <>
      <main className="py-3 bg-img">
        <form
          action=""
          className="container w-50 mt-3 p-3 border rounded border-secondary-subtle bg-gral"
        >
          <InputForm
            label={"Ejemplo"}
            value={nombre}
            getValue={setNombre}
            type={"text"}
          />
          <button onClick={click} type="button">
            Ver valores
          </button>
        </form>
      </main>
    </>
  );
}

export default Prueba;
