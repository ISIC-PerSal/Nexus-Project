import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import Grid from "@mui/material/Grid";
import SelectCountry from "../SelectCountry/SelectCountry";
import SelectState from "../SelectState/SelectState";
import SelectCity from "../SelectCity/SelectCity";
import InputForm from "../FormControl/InputForm/InputForm";
import SelectForm from "../FormControl/SelectForm/SelectForm";
import "./NewProjectForm.css";

function NewProjectFormView({
  checkName,
  checkEmail,
  checkRfc,
  checkClabe,
  volunteers,
  setVolunteers,
  donation,
  setDonation,
  handleCheckboxChange,
  handleSaveNewProject,
  handleSaveDraftProject,
  handleImageUpload,
  setSelectedFile,
  fileInputRef,
  dataForm,
  handleChangeDataForm,
  handleLanguage,
  handleCheckboxNameChangeCheck,
  handleInputNameChange,
  handleCheckboxEmailChangeCheck,
  handleInputEmailChange,
  handleCheckboxRfcChangeCheck,
  handleInputRfcChange,
  handleCheckboxClabeChangeCheck,
  handleInputClabeChange,
  odsArray,
}) {
  const longText = `¿Por qué preguntamos esto?: Para tener un seguimiento seguro de donativos financieros en temas legales, solicitamos este tipo de datos a nuestros usuarios. No se comparten con nadie más.`;
  const donacion = `Al autorizar la recepción de donativos, permites al voluntariado contactarte para contribuir en especie o financieramente a tu causa. Datos como tu CLABE serán visibles para ellos.`;
  const helpIcon = (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-info-square-fill"
        viewBox="0 0 16 16"
      >
        <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm8.93 4.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
      </svg>
    </>
  );
  return (
    <>
      <main className="py-3 bg-img">
        <form
          action=""
          className="container w-50 mt-3 p-3 border rounded border-secondary-subtle bg-gral"
        >
          <div className="mb-3">
            <label htmlFor="seccion-lider" className="form-label fw-bold fs-4">
              {handleLanguage("formName")}
            </label>
            <SelectForm
              value={dataForm.leaderType}
              label={handleLanguage("representative")}
              getValue={(value) => handleChangeDataForm(value, "leaderType")}
              options={handleLanguage("representativeArray")}
            />
            <InputForm
              label={handleLanguage("leaderName")}
              type={"text"}
              value={dataForm.leaderName}
              getValue={(value) => handleInputNameChange(value)}
            />
            <div className="form-check" style={{ marginTop: "-1rem" }}>
              <input
                className="form-check-input mb-3"
                type="checkbox"
                checked={checkName}
                onChange={(e) =>
                  handleCheckboxNameChangeCheck(e.target.checked)
                }
                id="flexCheckDefault"
              ></input>
              <label
                className="form-check-label text-body-secondary"
                htmlFor="flexCheckDefault"
              >
                {handleLanguage("checkFullName")}
              </label>
            </div>
            <InputForm
              label={handleLanguage("contactPhone")}
              value={dataForm.phone}
              getValue={(value) => handleChangeDataForm(value, "phone")}
              type={"tel"}
              minLength={10}
              maxLength={10}
              warningText="Ingrese un número telefonico válido"
            />
            <InputForm
              label={handleLanguage("contactEmail")}
              value={dataForm.email}
              getValue={(value) => handleInputEmailChange(value, "email")}
              type="email"
              warningText="Ingresa un correo electrónico válido"
            />
            <div className="form-check" style={{ marginTop: "-1rem" }}>
              <input
                className="form-check-input"
                type="checkbox"
                checked={checkEmail}
                onChange={(e) =>
                  handleCheckboxEmailChangeCheck(e.target.checked)
                }
                id="checkEmail"
              ></input>
              <label
                className="form-check-label text-body-secondary"
                htmlFor="checkEmail"
              >
                {handleLanguage("checkContactEmail")}
              </label>
            </div>
          </div>
          <div className="mb-3">
            <label
              htmlFor="seccion-proyecto"
              className="form-label fw-bold fs-4"
            >
              {handleLanguage("formProject")}
            </label>
            <InputForm
              label={handleLanguage("projectName")}
              type={"text"}
              value={dataForm.project}
              getValue={(value) => handleChangeDataForm(value, "project")}
            />
            </div>
            <div className="mb-3">
              <label
                htmlFor="img-proyecto d-flex flex-wrap"
                className="form-label"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-file-earmark-image"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.502 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                  <path d="M14 14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zM4 1a1 1 0 0 0-1 1v10l2.224-2.224a.5.5 0 0 1 .61-.075L8 11l2.157-3.02a.5.5 0 0 1 .76-.063L13 10V4.5h-2A1.5 1.5 0 0 1 9.5 3V1z" />
                </svg>
                {`${handleLanguage("descriptiveImg")}`}{" "}
                <i>{` (${handleLanguage("optional")})`}</i>
              </label>
              <input
                type="file"
                className="form-control"
                id="img-proyecto"
                onChange={(e) => handleImageUpload(e, setSelectedFile)}
                ref={fileInputRef}
              ></input>
            </div>
            <InputForm
              label={
                <>
                  {handleLanguage("projectUrl")}{" "}
                  <i>
                    {"("}
                    {handleLanguage("optional")}
                    {")"}
                  </i>
                </>
              }
              type="text"
              value={dataForm.urlProject}
              getValue={(value) => {
                handleChangeDataForm(value, "urlProject");
              }}
            />
            <InputForm
              label={handleLanguage("numVolunteers")}
              type={"number"}
              value={volunteers}
              getValue={(value) => setVolunteers(value)}
              maxLength={5}
              showOperators={true}
            />
            <div className="mb-3">
              <label htmlFor="descripcion" className="form-label">
                {handleLanguage("description")}
              </label>
              <textarea
                className="form-control"
                id="descripcion"
                rows="3"
                value={dataForm.description}
                onChange={(e) =>
                  handleChangeDataForm(e.target.value, "description")
                }
              ></textarea>
            </div>
            <SelectForm
              label={handleLanguage("projectType")}
              getValue={(value) => handleChangeDataForm(value, "projectType")}
              options={handleLanguage("projectArray")}
            />
            <div className="mb-3">
              <div className="form-check">
                <label
                  className="form-check-label text-body-secondary"
                  htmlFor="checkDonations"
                >
                  {handleLanguage("checkDonation")}
                </label>
                <Tooltip title={donacion}>
                  <HelpCenterIcon />
                </Tooltip>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="checkDonations"
                  checked={donation}
                  onChange={(e) => setDonation(e.target.checked)}
                ></input>
              </div>
            </div>
            <InputForm
              label={handleLanguage("rfc")}
              type={"text"}
              value={dataForm.rfc}
              getValue={(value) => handleChangeDataForm(value, "rfc")}
              minLength={11}
              maxLength={13}
              icon={<HelpCenterIcon />}
              tooltip={true}
              tooltipText={longText}
            />
            <div
              className={`mb-3 mx-5 ${donation == true ? "show" : "no-show"}`}
            >
              <InputForm
                label={handleLanguage("rfc")}
                type={"text"}
                value={dataForm.rfc}
                getValue={(value) => handleInputRfcChange(value)}
                minLength={11}
                maxLength={13}
                icon={<HelpCenterIcon />}
                tooltip={true}
                tooltipText={longText}
              />
              <div className="form-check" style={{ marginTop: "-1rem" }}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={checkRfc}
                  onChange={(e) =>
                    handleCheckboxRfcChangeCheck(e.target.checked)
                  }
                  id="checkRfc"
                ></input>
                <label
                  className="form-check-label text-body-secondary"
                  htmlFor="checkRfc"
                >
                  {handleLanguage("checkRfc")}
                </label>
              </div>
            </div>
            <div
              className={`mb-3 mx-5 ${donation == true ? "show" : "no-show"}`}
            >
              <InputForm
                label={handleLanguage("clabe")}
                type={"number"}
                value={dataForm.clabe}
                getValue={(value) => handleInputClabeChange(value)}
                minLength={18}
                maxLength={18}
                icon={<HelpCenterIcon />}
                tooltip={true}
                tooltipText={longText}
              />
              <div className="form-check" style={{ marginTop: "-1rem" }}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={checkClabe}
                  onChange={(e) =>
                    handleCheckboxClabeChangeCheck(e.target.checked)
                  }
                  id="checkClabe"
                ></input>
                <label
                  className="form-check-label text-body-secondary"
                  htmlFor="checkClabe"
                >
                  {handleLanguage("checkClabe")}
                </label>
              </div>
            </div>
            <SelectCountry
              label={handleLanguage("country")}
              country={dataForm.country}
              setCountry={(value) => handleChangeDataForm(value, "country")}
            />
            <SelectState
              label={handleLanguage("state")}
              state={dataForm.state}
              setState={(value) => handleChangeDataForm(value, "state")}
              country={dataForm.country}
            />
            <SelectCity
              label={handleLanguage("city")}
              city={dataForm.city}
              setCity={(value) => handleChangeDataForm(value, "city")}
              country={dataForm.country}
              state={dataForm.state}
            />
            <div
              className={`${
                dataForm.projectType == handleLanguage("projectArray", 2)
                  ? "no-show"
                  : "show"
              }`}
            >
              <InputForm
                label={handleLanguage("zip")}
                type="number"
                value={dataForm.zip}
                getValue={(value) => handleChangeDataForm(value, "zip")}
                minLength={5}
                maxLength={5}
              />
            </div>
            <div
              className={`mb-3  ${
                dataForm.projectType == handleLanguage("projectArray", 2)
                  ? "no-show"
                  : "show"
              }`}
            >
              <label htmlFor="direccion" className="form-label">
                {handleLanguage("address")}{" "}
              </label>
              <textarea
                className="form-control"
                id="direccion"
                rows="2"
                value={dataForm.address}
                onChange={(e) =>
                  handleChangeDataForm(e.target.value, "address")
                }
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="fecha-arranque" className="form-label">
                {handleLanguage("startDate")}
              </label>
              <input
                type="date"
                className="form-control"
                id="fecha-arranque"
                rows="2"
                value={dataForm.startDate}
                onChange={(e) =>
                  handleChangeDataForm(e.target.value, "startDate")
                }
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="fecha-inscripcion" className="form-label">
                {handleLanguage("finishDate")}
              </label>
              <input
                type="date"
                className="form-control"
                id="fecha-inscripcion"
                rows="2"
                value={dataForm.finishDate}
                onChange={(e) =>
                  handleChangeDataForm(e.target.value, "finishDate")
                }
              ></input>
            </div>
            <div className="mb-3">
              <label htmlFor="ods" className="form-label">
                {handleLanguage("ods")}
              </label>
              <Grid container spacing={2}>
                {odsArray.map((item, index) => (
                  <Grid key={index} item xs={3}>
                    <div key={index} className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={`ods${item.ods}`}
                        checked={dataForm[`ods${item.ods}`] || false}
                        onChange={handleCheckboxChange}
                      ></input>
                      <label
                        className="form-check-label"
                        htmlFor={`ods${item.ods}`}
                      >
                        <img src={item.url} className="w-100" alt=""></img>
                      </label>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </div>
          </div>
          <div className="w-100 d-flex">
            <div className="w-50 pe-2">
              <button
                onClick={handleSaveNewProject}
                type="button"
                className="btn btn-danger w-100"
              >
                Publicar proyecto
              </button>
            </div>
            <div className="w-50 ps-2">
              <button
                onClick={handleSaveDraftProject}
                type="button"
                className="btn bg-secondary w-100 text-white"
              >
                Guardar borrador
              </button>
            </div>
          </div>
        </form>
      </main>
    </>
  );
}

export default NewProjectFormView;
