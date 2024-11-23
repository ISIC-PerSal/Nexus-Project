import React, { useEffect, useRef, useState } from "react";
import NewProjectFormView from "./NewProjectFormView";
import Swal from "sweetalert2";
import { handleImageUpload, handleUpload } from "../../util/files/handleImage";
import fetchNewProject from "../../util/project/fetchNewProject";
import convertToLocalURL from "../../util/paths/convertToLocalURL";
import { useNavigate } from "react-router-dom";
import { useNexusContext } from "../../Hooks/useNexusContext";
function NewProjectForm() {
  const navigate = useNavigate();
  const { userId, userData } = useNexusContext();
  console.log(userId);
  console.log(userData);
  const [dataForm, setDataForm] = useState({
    idUser: sessionStorage.getItem("id_user"),
    leaderType: "",
    leaderName: "",
    phone: "",
    email: "",
  });

  const [leaderType, setLeaderType] = useState(0);
  const [name, setName] = useState("");
  const [checkName, setCheckName] = useState(false);
  const [email, setEmail] = useState("");
  const [checkEmail, setCheckEmail] = useState(false);
  const [rfc, setRfc] = useState("");
  const [checkRfc, setCheckRfc] = useState(false);
  const [clabe, setClabe] = useState("");
  const [checkClabe, setCheckClabe] = useState(false);

  const [project, setProject] = useState("");
  const [volunteers, setVolunteers] = useState(1);
  const [description, setDescription] = useState("");
  const [projectType, setProjectType] = useState("");
  const [donation, setDonation] = useState(false);

  const [donationVerify, setDonationVerify] = useState(false);
  const [projectTypeVerify, setProjectTypeVerify] = useState(false);
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageURL, setImageURL] = useState("");

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    const odsNumber = id.replace("ods", "");

    setDataForm((prevState) => ({
      ...prevState,
      [`ods${odsNumber}`]: checked,
    }));
  };

  useEffect(() => {
    if (dataForm.projectType != handleLanguage("projectArray", 2)) {
      if (
        dataForm.zip.trim().length > 4 &&
        dataForm.address.trim().length > 0
      ) {
        setProjectTypeVerify(true);
      } else {
        setProjectTypeVerify(false);
      }
    } else if (dataForm.projectType == handleLanguage("projectArray", 2)) {
      setProjectTypeVerify(true);
      handleChangeDataForm("", "zip");
      handleChangeDataForm("", "address");
    }
  }, [dataForm.projectType, dataForm.zip, dataForm.address]);

  useEffect(() => {
    if (dataForm.donation === true) {
      if (dataForm.rfc.length > 11 && dataForm.clabe.length > 17) {
        setDonationVerify(true);
      } else {
        setDonationVerify(false);
      }
    } else {
      setDonationVerify(true);
    }
  }, [dataForm.donation, dataForm.rfc, dataForm.clabe]);

  const handleSaveDraftProject = async (e) => {
    e.preventDefault();
    console.log(dataForm);
    console.log(body);
    // if (project.trim() != "") {
    //   setStatus("Borrador");
    //   try {
    //     const data = await fetchNewProject({ ...body, status: "Borrador" });
    //     if (data.status == "Done") {
    //       Swal.fire({
    //         title: "Exito!",
    //         text: "Se ha guardado el proyecto en borrador!",
    //         icon: "success",
    //         confirmButtonText: "Ver proyecto",
    //       }).then((result) => {
    //         if (result.isConfirmed) {
    //           navigate(`/explore/${data.new_id}`, {
    //             state: { statusProject: "Borrador" },
    //           });
    //         } else {
    //           window.location.href = "/new-project";
    //         }
    //       });
    //     } else {
    //       Swal.fire({
    //         title: "Error!",
    //         text: "Ocurrio un error",
    //         icon: "error",
    //         confirmButtonText: "OK",
    //       });
    //     }
    //   } catch (err) {
    //     Swal.fire({
    //       title: "Error!",
    //       text: "Ocurrio un error",
    //       icon: "error",
    //       confirmButtonText: "OK",
    //     });
    //   }
    // } else {
    //   Swal.fire({
    //     position: "top-end",
    //     icon: "info",
    //     title: "Introduzca un título al proyecto",
    //     showConfirmButton: false,
    //     timer: 1000,
    //   });
    // }
  };
  const handleSaveNewProject = async (e) => {
    e.preventDefault();
    setStatus("Publicado");
    if (selectedFile) {
      handleUpload(selectedFile, setImageURL);
    } else {
      setImageURL("");
    }
    const regex = new RegExp(/^[0-9]*$/);
    if (
      leaderType != 0 &&
      name.trim() != "" &&
      email.trim() != "" &&
      regex.test(clabe) &&
      phone.trim().length > 9 &&
      regex.test(phone) &&
      project.trim() != "" &&
      volunteers >= 0 &&
      description.trim() != "" &&
      projectType != 0 &&
      donationVerify == true &&
      projectTypeVerify == true &&
      country != "" &&
      country != "Todos" &&
      state != "" &&
      city != "" &&
      startDate != "" &&
      finishDate != ""
    ) {
      try {
        const data = await fetchNewProject({ ...body, status: "Publicado" });
        if (data.status == "Done") {
          Swal.fire({
            title: "Exito!",
            text: "Se ha guardado el proyecto en borrador!",
            icon: "success",
            confirmButtonText: "Ver proyecto",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate(`/explore/${data.new_id}`, {
                state: { statusProject: "Borrador" },
              });
            } else {
              window.location.href = "/new-project";
            }
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: "Ocurrio un error",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      } catch (err) {
        Swal.fire({
          title: "Error!",
          text: "Ocurrio un error",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } else {
      Swal.fire({
        position: "top-end",
        icon: "info",
        title: "Introduzca un título al proyecto",
        showConfirmButton: false,
        timer: 1000,
      });
    }
  };
  const handleSaveNewProject = async (e) => {
    e.preventDefault();
    handleChangeDataForm("Publicado", "status");

    if (selectedFile) {
      handleUpload(selectedFile, setImageURL);
    } else {
      setImageURL("");
    }
    handleChangeDataForm(imageURL, "image");

    const validationResult = validationDataForm();

    if (validationResult.isValid) {
      try {
        const data = await fetchNewProject({
          ...dataForm,
          status: "Publicado",
        });
        console.log(data);
        if (data.status == "Done") {
          Swal.fire({
            title: "Exito!",
            text: "Proyecto registrado!",
            icon: "success",
            confirmButtonText: "Ver proyecto",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate(`/explore/${data.new_id}`, {
                state: { statusProject: "Publicado" },
              });
            } else {
              window.location.href = "/new-project";
            }
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: "Ocurrió un error",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      } catch (err) {
        Swal.fire({
          title: "Error!",
          text: "Ocurrió un error",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } else {
      setMessageError(validationResult.errorMessage);
      Swal.fire({
        position: "top-end",
        icon: "info",
        title: validationResult.errorMessage,
        showConfirmButton: false,
        timer: 1000,
      });
    }
  };

  const handleChangeDataForm = (value, name) => {
    setDataForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleChangeCheckBox = (value, setCheckFunction, propertyName) => {
    setCheckFunction(value);
    if (value) {
      switch (propertyName) {
        case "name":
          handleChangeDataForm(
            `${sessionStorage.getItem("name")} ${sessionStorage.getItem(
              "lastName"
            )}`,
            "name"
          );
          break;

        default:
          break;
      }
    }
    // if (checkName) {
    //   setName(
    //     `${sessionStorage.getItem("name")} ${sessionStorage.getItem(
    //       "lastName"
    //     )}`
    //   );
    // } else {
    //   setName("");
    // }
  };

  return (
    <>
      <NewProjectFormView
        checkName={checkName}
        setCheckName={setCheckName}
        checkEmail={checkEmail}
        setCheckEmail={setCheckEmail}
        checkRfc={checkRfc}
        setCheckRfc={setCheckRfc}
        clabe={clabe}
        setClabe={setClabe}
        checkClabe={checkClabe}
        setCheckClabe={setCheckClabe}
        volunteers={volunteers}
        setVolunteers={setVolunteers}
        donation={donation}
        setDonation={setDonation}
        country={country}
        setCountry={setCountry}
        state={state}
        setState={setState}
        zip={zip}
        setZip={setZip}
        city={city}
        setCity={setCity}
        address={address}
        setAddress={setAddress}
        startDate={startDate}
        setStartDate={setStartDate}
        finishDate={finishDate}
        setFinishDate={setFinishDate}
        checkedOds={checkedOds}
        handleCheckboxChange={handleCheckboxChange}
        handleSaveNewProject={handleSaveNewProject}
        handleSaveDraftProject={handleSaveDraftProject}
        handleImageUpload={handleImageUpload}
        setSelectedFile={setSelectedFile}
        fileInputRef={fileInputRef}
        dataForm={dataForm}
        handleChangeDataForm={handleChangeDataForm}
        handleChangeCheckBox={handleChangeCheckBox}
      />
    </>
  );
}

export default NewProjectForm;
