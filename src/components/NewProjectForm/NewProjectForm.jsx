import React, { useEffect, useRef, useState } from "react";
import NewProjectFormView from "./NewProjectFormView";
import Swal from "sweetalert2";
import { handleImageUpload, handleUpload } from "../../util/files/handleImage";
import fetchNewProject from "../../util/project/fetchNewProject";
import convertToLocalURL from "../../util/paths/convertToLocalURL";
import { useNavigate } from "react-router-dom";
import { useNexusContext } from "../../Hooks/useNexusContext";
import NewProjectFormTranslator from "./NewProjectFormTranslator";
import ods_en from "../../util/ods_en";
import ods_es from "../../util/ods_es";

function NewProjectForm({ dataEdit = {} }) {
  const navigate = useNavigate();
  const { language } = useNexusContext();

  const [dataForm, setDataForm] = useState({
    idUser: sessionStorage.getItem("id_user"),
    leaderType: "",
    leaderName: "",
    phone: "",
    email: "",
    rfc: "",
    clabe: "",
    project: "",
    image: "",
    urlProject: "",
    volunteers: 0,
    description: "",
    projectType: "",
    donation: "",
    country: "",
    state: "",
    zip: "",
    city: "",
    address: "",
    startDate: "",
    finishDate: "",
    ods1: false,
    ods2: false,
    ods3: false,
    ods4: false,
    ods5: false,
    ods6: false,
    ods7: false,
    ods8: false,
    ods9: false,
    ods10: false,
    ods11: false,
    ods12: false,
    ods13: false,
    ods14: false,
    ods15: false,
    ods16: false,
    ods17: false,
  });

  useEffect(() => {
    if (Object.keys(dataEdit).length > 0) {
      setDataForm((prevDataForm) => ({
        ...prevDataForm,
        ...dataEdit, // Sobrescribe valores en dataForm con los de dataEdit
      }));
    }
  }, [dataEdit]);
  const [odsArray, setOdsArray] = useState([]);

  const defaultName =
    sessionStorage.getItem("name") + " " + sessionStorage.getItem("lastName");

  const defaultEmail = sessionStorage.getItem("email");
  const defaultRfc = sessionStorage.getItem("rfc");
  const defaultClabe = sessionStorage.getItem("clabe");

  const [leaderType, setLeaderType] = useState(0);
  const [name, setName] = useState("");
  const [checkName, setCheckName] = useState(false);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [checkEmail, setCheckEmail] = useState(false);
  const [rfc, setRfc] = useState("");
  const [checkRfc, setCheckRfc] = useState(false);
  const [clabe, setClabe] = useState("");
  const [checkClabe, setCheckClabe] = useState(false);

  const [project, setProject] = useState("");
  const [volunteers, setVolunteers] = useState(0);
  const [description, setDescription] = useState("");
  const [projectType, setProjectType] = useState("");
  const [donation, setDonation] = useState(false);
  const [country, setCountry] = useState("Todos");
  const [state, setState] = useState([]);
  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [startDate, setStartDate] = useState("");
  const [finishDate, setFinishDate] = useState("");
  const [urlProject, setUrlProject] = useState("");
  const [status, setStatus] = useState("");

  const [checkedOds, setCheckedOds] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
    9: false,
    10: false,
    11: false,
    12: false,
    13: false,
    14: false,
    15: false,
    16: false,
    17: false,
  });
  const [donationVerify, setDonationVerify] = useState(false);
  const [projectTypeVerify, setProjectTypeVerify] = useState(false);
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageURL, setImageURL] = useState("");

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    const odsNumber = id.replace("ods", "");

    // Actualiza el estado de dataForm para el ODS correspondiente
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

  const body = {
    idUser: sessionStorage.getItem("id_user"),
    leaderType: leaderType,
    name: name,
    phone: phone,
    email: email,
    rfc: rfc,
    clabe: clabe,
    project: project,
    image: imageURL ? convertToLocalURL(imageURL) : "",
    urlProject: urlProject,
    volunteers: volunteers,
    description: description,
    projectType: projectType,
    donation: donation,
    country: country,
    state: state,
    zip: zip,
    city: city,
    address: address,
    startDate: startDate,
    finishDate: finishDate,
    ods1: checkedOds[1] || false,
    ods2: checkedOds[2] || false,
    ods3: checkedOds[3] || false,
    ods4: checkedOds[4] || false,
    ods5: checkedOds[5] || false,
    ods6: checkedOds[6] || false,
    ods7: checkedOds[7] || false,
    ods8: checkedOds[8] || false,
    ods9: checkedOds[9] || false,
    ods10: checkedOds[10] || false,
    ods11: checkedOds[11] || false,
    ods12: checkedOds[12] || false,
    ods13: checkedOds[13] || false,
    ods14: checkedOds[14] || false,
    ods15: checkedOds[15] || false,
    ods16: checkedOds[16] || false,
    ods17: checkedOds[17] || false,
  };

  const handleSaveDraftProject = async (e) => {
    e.preventDefault();
    console.log(validationDataForm())
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
      if (leaderType == 0) {
        Swal.fire({
          position: "top-end",
          icon: "info",
          title: "Seleccione una opción para el tipo de representante",
          showConfirmButton: false,
          timer: 1000,
        });
      } else if (name.trim() == "") {
        Swal.fire({
          position: "top-end",
          icon: "info",
          title: "Verifique los datos del nombre del líder o representante",
          showConfirmButton: false,
          timer: 1000,
        });
      } else if (phone.trim().length < 10 || regex.test(phone) == false) {
        Swal.fire({
          position: "top-end",
          icon: "info",
          title: "Verifique los datos del numero telefónico",
          showConfirmButton: false,
          timer: 1000,
        });
      } else if (email.trim() == "") {
        Swal.fire({
          position: "top-end",
          icon: "info",
          title: "Verifique los datos del correo del líder o representante",
          showConfirmButton: false,
          timer: 1000,
        });
      } else if (project.trim() == "") {
        Swal.fire({
          position: "top-end",
          icon: "info",
          title: "Verifique los datos del nombre del proyecto",
          showConfirmButton: false,
          timer: 1000,
        });
      } else if (volunteers < 1) {
        Swal.fire({
          position: "top-end",
          icon: "info",
          title: "El número de voluntarios no admite números negativos",
          showConfirmButton: false,
          timer: 1000,
        });
      } else if (description.trim() == "") {
        Swal.fire({
          position: "top-end",
          icon: "info",
          title: "La descripción del proyecto no puede estar vacía",
          showConfirmButton: false,
          timer: 1000,
        });
      } else if (projectType == "" || projectType == "0") {
        Swal.fire({
          position: "top-end",
          icon: "info",
          title: "Por favor, seleccione una opción en tipo de proyecto",
          showConfirmButton: false,
          timer: 1000,
        });
      } else if (rfc.trim().length < 12 && donation == true) {
        Swal.fire({
          position: "top-end",
          icon: "info",
          title: "Verifique los datos del RFC",
          showConfirmButton: false,
          timer: 1000,
        });
      } else if (
        clabe.trim().length < 18 &&
        regex.test(clabe) == true &&
        donation == true
      ) {
        Swal.fire({
          position: "top-end",
          icon: "info",
          title: "Verifique los datos de la CLABE",
          showConfirmButton: false,
          timer: 1000,
        });
      } else if (country == "" || country == null || country == "Todos") {
        Swal.fire({
          position: "top-end",
          icon: "info",
          title: "Verifique los datos del país",
          showConfirmButton: false,
          timer: 1000,
        });
      } else if (state == "" || state == null) {
        Swal.fire({
          position: "top-end",
          icon: "info",
          title: "Verifique los datos del estado/provincia/región",
          showConfirmButton: false,
          timer: 1000,
        });
      } else if (city == "" || city == null) {
        Swal.fire({
          position: "top-end",
          icon: "info",
          title: "Verifique los datos del municipio",
          showConfirmButton: false,
          timer: 1000,
        });
      } else if (zip.trim() < 5 && projectType != "Iniciativa Virtual") {
        Swal.fire({
          position: "top-end",
          icon: "info",
          title: "Verifique los datos del código postal",
          showConfirmButton: false,
          timer: 1000,
        });
      } else if (
        address.trim().length < 1 &&
        projectType != "Iniciativa Virtual"
      ) {
        Swal.fire({
          position: "top-end",
          icon: "info",
          title: "Verifique los datos de la dirección",
          showConfirmButton: false,
          timer: 1000,
        });
      } else if (startDate == "" || startDate == null) {
        Swal.fire({
          position: "top-end",
          icon: "info",
          title: "Verifique los datos de la fecha de arranque",
          showConfirmButton: false,
          timer: 1000,
        });
      } else if (finishDate == "" || finishDate == null) {
        Swal.fire({
          position: "top-end",
          icon: "info",
          title: "Verifique los datos de la fecha límite de inscripción",
          showConfirmButton: false,
          timer: 1000,
        });
      }
    }
  };

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
      setName(defaultName);
    }
  };

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
          return [];
      }
    };
    setOdsArray(switchOdsArray(language));
  }, [language]);

  useEffect(() => {
    handleChangeDataForm(donation, "donation");
  }, [donation]);

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

    const leaderTypeVerification =
      dataForm.leaderType !== "" &&
      dataForm.leaderType !== handleLanguage("representativeArray", 0);
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
    const countryStateCityVerification =
      dataForm.country !== "" &&
      dataForm.country !== "Todos" &&
      dataForm.state !== "" &&
      dataForm.city !== "";
    const datesVerification =
      dataForm.startDate !== "" && dataForm.finishDate !== "";
    return (
      leaderTypeVerification &&
      leaderNameVerification &&
      projectTypeVerification &&
      emailVerification &&
      phoneVerification &&
      donationVerification &&
      projectVerification &&
      descriptionVerification &&
      countryStateCityVerification &&
      datesVerification &&
      oneOds
    );
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
        checkedOds={checkedOds}
        handleSaveNewProject={handleSaveNewProject}
        handleSaveDraftProject={handleSaveDraftProject}
        handleImageUpload={handleImageUpload}
        setSelectedFile={setSelectedFile}
        fileInputRef={fileInputRef}
        dataForm={dataForm}
        handleChangeDataForm={handleChangeDataForm}
        handleLanguage={handleLanguage}
        handleCheckboxNameChangeCheck={handleCheckboxNameChangeCheck}
        handleInputNameChange={handleInputNameChange}
        handleCheckboxEmailChangeCheck={handleCheckboxEmailChangeCheck}
        handleInputEmailChange={handleInputEmailChange}
        handleCheckboxRfcChangeCheck={handleCheckboxRfcChangeCheck}
        handleInputRfcChange={handleInputRfcChange}
        handleCheckboxClabeChangeCheck={handleCheckboxClabeChangeCheck}
        handleInputClabeChange={handleInputClabeChange}
        odsArray={odsArray}
        handleCheckboxChange={handleCheckboxChange}
      />
    </>
  );
}

export default NewProjectForm;
