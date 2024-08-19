import React, { useEffect, useState } from "react";
import NewProjectFormView from "./NewProjectFormView";
import Swal from "sweetalert2";

function NewProjectForm() {
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
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [startDate, setStartDate] = useState("");
  const [finishDate, setFinishDate] = useState("");

  const [ods1, setOds1] = useState(false);
  const [ods2, setOds2] = useState(false);
  const [ods3, setOds3] = useState(false);
  const [ods4, setOds4] = useState(false);
  const [ods5, setOds5] = useState(false);
  const [ods6, setOds6] = useState(false);
  const [ods7, setOds7] = useState(false);
  const [ods8, setOds8] = useState(false);
  const [ods9, setOds9] = useState(false);
  const [ods10, setOds10] = useState(false);
  const [ods11, setOds11] = useState(false);
  const [ods12, setOds12] = useState(false);
  const [ods13, setOds13] = useState(false);
  const [ods14, setOds14] = useState(false);
  const [ods15, setOds15] = useState(false);
  const [ods16, setOds16] = useState(false);
  const [ods17, setOds17] = useState(false);
  const [donationVerify, setDonationVerify] = useState(false);
  const [projectTypeVerify, setProjectTypeVerify] = useState(false);
  const [estados, setEstados] = useState([]);
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
  }, [projectType]);
  const body = {
    leaderType: leaderType,
    name: name,
    phone: phone,
    emai: email,
    rfc: rfc,
    clabe: clabe,
    project: project,
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
  };
  const handleSaveNewProject = (e) => {
    e.preventDefault();
    const regex = new RegExp(/^[0-9]*$/);
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
      projectTypeVerify == true
    ) {
      console.log(body)
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
      } else if (clabe.trim().length < 18 && regex.test(clabe) == true && donation == true) {
        Swal.fire({
          position: "top-end",
          icon: "info",
          title: "Verifique los datos de la CLABE",
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
      } else if (address.trim().length<1 && projectType != "Iniciativa Virtual") {
        Swal.fire({
          position: "top-end",
          icon: "info",
          title: "Verifique los datos de la dirección",
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
        ods1={ods1}
        setOds1={setOds1}
        ods2={ods2}
        setOds2={setOds2}
        ods3={ods3}
        setOds3={setOds3}
        ods4={ods4}
        setOds4={setOds4}
        ods5={ods5}
        setOds5={setOds5}
        ods6={ods6}
        setOds6={setOds6}
        ods7={ods7}
        setOds7={setOds7}
        ods8={ods8}
        setOds8={setOds8}
        ods9={ods9}
        setOds9={setOds9}
        ods10={ods10}
        setOds10={setOds10}
        ods11={ods11}
        setOds11={setOds11}
        ods12={ods12}
        setOds12={setOds12}
        ods13={ods13}
        setOds13={setOds13}
        ods14={ods14}
        setOds14={setOds14}
        ods15={ods15}
        setOds15={setOds15}
        ods16={ods16}
        setOds16={setOds16}
        ods17={ods17}
        setOds17={setOds17}
        handleSaveNewProject={handleSaveNewProject}
        estados={estados}
        setEstados={setEstados}
      />
    </>
  );
}

export default NewProjectForm;
