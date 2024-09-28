import React, { useEffect, useRef, useState } from "react";
import NewProjectFormView from "./NewProjectFormView";
import Swal from "sweetalert2";
import { handleImageUpload, handleUpload } from "../../util/files/handleImage";
import fetchNewProject from "../../util/project/fetchNewProject";
import convertToLocalURL from "../../util/paths/convertToLocalURL";
import { useNavigate } from "react-router-dom";
function NewProjectForm() {
  const navigate = useNavigate();
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
  const [volunteers, setVolunteers] = useState(1);
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

    setCheckedOds((prevState) => ({
      ...prevState,
      [odsNumber]: checked,
    }));
  };

  useEffect(() => {
    if (
      projectType != "Iniciativa Virtual" &&
      zip.trim().length > 4 &&
      address.trim().length > 0
    ) {
      setProjectTypeVerify(true);
    } else if (projectType == "Iniciativa Virtual") {
      setZip("");
      setAddress("");
      setProjectTypeVerify(true);
    } else {
      setProjectTypeVerify(false);
    }

    if (
      donation == true &&
      rfc.trim().length > 11 &&
      clabe.trim().length > 17
    ) {
      setDonationVerify(true);
    } else if (donation == false) {
      setRfc("");
      setClabe("");
      setDonationVerify(true);
    }
  }, [projectType, donation]);

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
    setStatus("Borrador");
    try {
      const data = await fetchNewProject({ ...body, status: "Borrador" });
      if (data.status == "Done") {
        Swal.fire({
          title: "Exito!",
          text: "Se ha guardado el project en borrador!",
          icon: "success",
          confirmButtonText: "Ver proyecto",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate(`/my-projects`);
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
              navigate(`/explore/${data.new_id}`);
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
  useEffect(() => {
    if (checkName) {
      setName(
        `${sessionStorage.getItem("name")} ${sessionStorage.getItem(
          "lastName"
        )}`
      );
    } else {
      setName("");
    }
  }, [checkName]);
  useEffect(() => {
    if (checkEmail) {
      setEmail(`${sessionStorage.getItem("email")}`);
    } else {
      setEmail("");
    }
  }, [checkEmail]);
  useEffect(() => {
    if (checkRfc) {
      setRfc(`${sessionStorage.getItem("rfc")}`);
    } else {
      setRfc("");
    }
  }, [checkRfc]);
  useEffect(() => {
    if (checkClabe) {
      setClabe(`${sessionStorage.getItem("clabe")}`);
    } else {
      setClabe("");
    }
  }, [checkClabe]);
  return (
    <>
      <NewProjectFormView
        leaderType={leaderType}
        setLeaderType={setLeaderType}
        name={name}
        setName={setName}
        checkName={checkName}
        setCheckName={setCheckName}
        phone={phone}
        setPhone={setPhone}
        email={email}
        setEmail={setEmail}
        checkEmail={checkEmail}
        setCheckEmail={setCheckEmail}
        rfc={rfc}
        setRfc={setRfc}
        checkRfc={checkRfc}
        setCheckRfc={setCheckRfc}
        clabe={clabe}
        setClabe={setClabe}
        checkClabe={checkClabe}
        setCheckClabe={setCheckClabe}
        project={project}
        setProject={setProject}
        urlProject={urlProject}
        setUrlProject={setUrlProject}
        volunteers={volunteers}
        setVolunteers={setVolunteers}
        description={description}
        setDescription={setDescription}
        projectType={projectType}
        setProjectType={setProjectType}
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
      />
    </>
  );
}

export default NewProjectForm;
