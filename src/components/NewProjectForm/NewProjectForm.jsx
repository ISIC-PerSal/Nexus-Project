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
  const { language } = useNexusContext();

  const [messageError, setMessageError] = useState("")

  const [dataForm, setDataForm] = useState({
    idUser: sessionStorage.getItem("id_user"),
    leaderType: "",
    leaderName: "",
    phone: "",
    email: "",
  });


  useEffect(() => {
    if (Object.keys(dataEdit).length > 0) {
      setDataForm((prevDataForm) => ({
        ...prevDataForm,
        ...dataEdit,
      }));
    }
  }, [dataEdit]);

  const [odsArray, setOdsArray] = useState([]);


  const defaultName =
    sessionStorage.getItem("name") + " " + sessionStorage.getItem("lastName");


  const defaultEmail = sessionStorage.getItem("email");
  const defaultRfc = sessionStorage.getItem("rfc");
  const defaultClabe = sessionStorage.getItem("clabe");
  const typeUser = sessionStorage.getItem("type");

  useEffect(() => {
    if (typeUser == "Juvenil") {
      setDonation(true);
    }
  }, [typeUser]);

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
    if (project.trim() != "") {
     setStatus("Borrador");
    try {
         const data = await fetchNewProject({ ...body, status: "Borrador" });
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

    Swal.fire({
      title: "Informacion",
      html: `
      Al dar clic en Publicar acepta nuestros <b>Términos y condiciones </b>    
    `,
      icon: "info",
      showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: "Publicar",
  denyButtonText: `Guardar como borrador`
    }).then((result) => {
      if (result.isConfirmed) {
        handleSaveConfirmed();
      } else if (result.isDenied) {
        handleSaveDraftProject(e);
      }
    });
  };

  const handleSaveConfirmed= async()=>{
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
  }


  const handleChangeDataForm = (value, name) => {
    setDataForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  const handleLanguage = (field, position) => {
    const item = NewProjectFormTranslator[language];
    if (position == undefined) {
      return item[field];
    } else {
      const positionValue = item[field];
      return positionValue[position];
    }
  };


  const handleCheckboxNameChangeCheck = (value) => {
    setCheckName(value);
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


  const handleCheckboxEmailChangeCheck = (value) => {
    setCheckEmail(value);
    if (value) {
      setEmail(defaultEmail);
    }
  };


  const handleCheckboxRfcChangeCheck = (value) => {
    setCheckRfc(value);
    if (value) {
      setRfc(defaultRfc);
    }
  };
  const handleCheckboxClabeChangeCheck = (value) => {
    setCheckClabe(value);
    if (value) {
      setClabe(defaultClabe);
    }
  };


  useEffect(() => {
    const resetName = () => {
      if (checkName) {
        setName(defaultName);
      }
    };
    resetName();
  }, [checkName]);


  useEffect(() => {
    const resetEmail = () => {
      if (checkEmail) {
        setEmail(defaultEmail);
      }
    };
    resetEmail();
  }, [checkEmail]);


  useEffect(() => {
    const resetRfc = () => {
      if (checkRfc) {
        setRfc(defaultRfc);
      }
    };
    resetRfc();
  }, [checkRfc]);


  useEffect(() => {
    const resetClabe = () => {
      if (checkClabe) {
        setClabe(defaultClabe);
      }
    };
    resetClabe();
  }, [checkClabe]);


  const handleInputNameChange = (value) => {
    if (checkName) {
      setCheckName(false);
    }
    setName(value);
  };


  const handleInputEmailChange = (value) => {
    if (checkEmail) {
      setCheckEmail(false);
    }
    setEmail(value);
  };


  const handleInputRfcChange = (value) => {
    if (checkRfc) {
      setCheckRfc(false);
    }
    setRfc(value);
  };


  const handleInputClabeChange = (value) => {
    if (checkClabe) {
      setCheckClabe(false);
    }
    setClabe(value);
  };


  useEffect(() => {
    handleChangeDataForm(name, "leaderName");
  }, [name]);


  useEffect(() => {
    handleChangeDataForm(email, "email");
  }, [email]);


  useEffect(() => {
    handleChangeDataForm(rfc, "rfc");
  }, [rfc]);
  useEffect(() => {
    handleChangeDataForm(clabe, "clabe");
  }, [clabe]);
  useEffect(() => {
    handleChangeDataForm(volunteers, "volunteers");
  }, [volunteers]);


  useEffect(() => {
    const switchOdsArray = (language) => {
      switch (language) {
        case "spanish":
          return ods_es;
        case "english":
          return ods_en;
        default:
          break;
      }
    };
    setOdsArray(switchOdsArray(language));
  }, [language]);


  useEffect(() => {
    handleChangeDataForm(donation, "donation");
  }, [donation]);

  const messageErrorSwal = (message) => {
    setMessageError(message);
  };

  const validationDataForm = () => {
    const regex = new RegExp(/^[0-9]*$/);
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const odsValues = [
      dataForm.ods1,
      dataForm.ods2,
      dataForm.ods3,
      dataForm.ods4,
      dataForm.ods5,
      dataForm.ods6,
      dataForm.ods7,
      dataForm.ods8,
      dataForm.ods9,
      dataForm.ods10,
      dataForm.ods11,
      dataForm.ods12,
      dataForm.ods13,
      dataForm.ods14,
      dataForm.ods15,
      dataForm.ods16,
      dataForm.ods17,
    ];


    const oneOds = odsValues.some((value) => value === true);
    let errorMessage = "";


    const leaderTypeVerification =
      dataForm.leaderType !== "" &&
      dataForm.leaderType !== handleLanguage("representativeArray", 0);
    if (leaderTypeVerification == false) {

    }
    const leaderNameVerification = dataForm.leaderName.trim() !== "";
    const emailVerification =
      emailRegex.test(dataForm.email) && dataForm.email.trim() !== "";
    const donationVerification = donationVerify;
    const phoneVerification =
      dataForm.phone.trim().length > 9 && regex.test(dataForm.phone);
    const projectVerification = dataForm.project.trim() !== "";
    const descriptionVerification = dataForm.description.trim() !== "";
    const projectTypeVerification =
      dataForm.projectType !== "" &&
      dataForm.projectType !== handleLanguage("projectArray", 0);
    const countryVerification =
      dataForm.country !== "" && dataForm.country !== "Todos";
    const stateVerification = dataForm.state !== "";
    const cityVerification = dataForm.city !== "";
    const startDateVerification = dataForm.startDate !== "";
    const finishDateVerification = dataForm.finishDate !== "";

    switch (true) {
      case !leaderTypeVerification:
        errorMessage = "Seleccione una opción para el tipo de representante";
        break;
      case !leaderNameVerification:
        errorMessage =
          "Verifique los datos del nombre del líder o representante";
        break;
      case !phoneVerification:
        errorMessage = "Verifique los datos del número telefónico";
        break;
      case !emailVerification:
        errorMessage =
          "Verifique los datos del correo del líder o representante";
        break;
      case !projectVerification:
        errorMessage = "Verifique los datos del nombre del proyecto";
        break;
      case !descriptionVerification:
        errorMessage = "La descripción del proyecto no puede estar vacía";
        break;
      case !projectTypeVerification:
        errorMessage = "Por favor, seleccione una opción en tipo de proyecto";
        break;
      case !donationVerification:
        errorMessage = "Verifique los datos del RFC y/o CLABE";
        break;
      case !countryVerification:
        errorMessage = "Verifique los datos del país";
        break;
      case !stateVerification:
        errorMessage = "Verifique los datos del estado/provincia/región";
        break;
      case !cityVerification:
        errorMessage = "Verifique los datos del municipio";
        break;
      case (dataForm.projectType == handleLanguage("projectArray", 1) ||
        dataForm.projectType == handleLanguage("projectArray", 3)) &&
        dataForm.zip.trim() == "":
        errorMessage = "Verifique los datos del código postal";
        break;
      case (dataForm.projectType === handleLanguage("projectArray", 1) ||
        dataForm.projectType === handleLanguage("projectArray", 3)) &&
        (!dataForm.address || dataForm.address.trim().length === 0):
        errorMessage = "Verifique los datos de la dirección";
        break;
      case !startDateVerification:
        errorMessage = "Verifique los datos de la fecha de arranque";
        break;
      case !finishDateVerification:
        errorMessage = "Verifique los datos de la fecha límite de inscripción";
        break;
      case !oneOds:
        errorMessage = "Por favor seleccione al menos un ODS";
        break;
      default:
        break;
    }
     if (checkName) {
       setName(
         `${sessionStorage.getItem("name")} ${sessionStorage.getItem(
           "lastName"
         )}`
       );
     } else {
       setName("");
     }
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



