import React, { useState } from "react";
import InputForm from "../../components/FormControl/InputForm/InputForm";

function Prueba() {
  const defaultName = "Maria Luisa"; // Nombre por defecto
  const [name, setName] = useState(""); // Estado para el valor del input
  const [isChecked, setIsChecked] = useState(false); // Estado para el checkbox

  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    setIsChecked(isChecked);

    // Si se marca el checkbox, restablece el nombre por defecto
    if (isChecked) {
      setName(defaultName);
    }
  };

  const handleInputChange = (e) => {
    setName(e.target.value); // Actualiza el valor del input manualmente
  };

  return (
    <div>
      <input
        type="text"
        value={name} // Valor controlado por el estado
        onChange={handleInputChange} // Maneja el cambio en el input
        placeholder="Escribe tu nombre"
      />
      <div>
        <input
          type="checkbox"
          checked={isChecked} // Valor controlado por el estado del checkbox
          onChange={handleCheckboxChange} // Maneja el cambio en el checkbox
        />
        <label>Usar mi nombre por defecto</label>
      </div>
    </div>
  );
}

export default Prueba;
