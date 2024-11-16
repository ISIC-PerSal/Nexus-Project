import React, { useEffect, useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";

import "./InputForm.css";

function InputForm({
  label = "Label",
  disable = false,
  value = "",
  getValue = () => {},
  type = "text",
  placeholder = "",
  tooltip = false,
  tooltipText = "gfhghdf",
  icon = <></>,
  maxLength = 500,
  minLength = 1,
  allowNegative = false,
  showOperators = false,
  showLabel = true,
  showInput = true,
  warningText = "Formato inválido.",
  minWarningText = `El valor debe tener al menos ${minLength} caracteres.`,
}) {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [data, setData] = useState("");

  useEffect(() => {
    setData(value);
  }, [value]);

  const handleChange = (e) => {
    let inputValue = e.target.value;

    if (inputValue.length > maxLength) {
      inputValue = inputValue.slice(0, maxLength);
    }

    if (type === "number" || type === "tel") {
      const regex = allowNegative ? /^-?\d*$/ : /^\d*$/;
      if (!regex.test(inputValue)) {
        return;
      }
    }

    if (type === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(inputValue)) {
        setError(true);
        setErrorMessage(warningText);
      } else {
        setError(false);
        setErrorMessage("");
      }
    } else {
      if (inputValue.length < minLength) {
        setError(true);
        setErrorMessage(minWarningText);
      } else if (inputValue.length > maxLength) {
        setError(true);
        setErrorMessage(warningText);
      } else {
        setError(false);
        setErrorMessage("");
      }
    }

    setData(inputValue);
    getValue(inputValue);
  };

  const handleIncrement = () => {
    let newValue = (data ? parseInt(data) : 0) + 1;
    setData(newValue);
    getValue(newValue);
  };

  const handleDecrement = () => {
    let newValue = (data ? parseInt(data) : 0) - 1;
    if (!allowNegative && newValue < 0) {
      newValue = 0;
    }
    setData(newValue);
    getValue(newValue);
  };

  const classNameInput =
    type == "number" && showOperators == true ? "w-75" : "w-100";
  const classNameOperator =
    type == "number" && showOperators ? "container-operator-btn" : "";
  return (
    <>
      <div className="d-flex">
        <div className={`mb-3 ${classNameInput}`}>
          {showLabel ? (
            <label htmlFor={label} className="form-label">
              {label}{" "}
              {tooltip ? <Tooltip title={tooltipText}>{icon}</Tooltip> : ""}
            </label>
          ) : (
            ""
          )}
          {showInput ? (
            <input
              disabled={disable}
              type={type === "number" ? "number" : type}
              placeholder={placeholder}
              maxLength={maxLength}
              minLength={minLength}
              className={`form-control ${error ? "is-invalid" : ""}`}
              id={label}
              value={value}
              onChange={handleChange}
            />
          ) : (
            ""
          )}
          {error && <div className="invalid-feedback">{errorMessage}</div>}
        </div>
        {showOperators && type == "number" ? (
          <div className={`mb-3 ${classNameOperator}`}>
            {
              //Boton de menos
            }
            <button
              className="operator-btn"
              type="button"
              onClick={handleDecrement}
              disabled={data <= 0 && !allowNegative}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-dash-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z" />
              </svg>
            </button>
            {
              // Boton de mas
            }
            <button
              className="operator-btn"
              type="button"
              onClick={handleIncrement}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-plus-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
              </svg>
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default InputForm;
