import React, { useEffect, useState } from "react";
import EditProjectView from "./EditProjectView";
import Navbar from "../../components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import fetchGetProject from "../../util/project/fetchGetProject";
import ErrorView from "../Error/ErrorView";

function EditProject() {
  const { idProject } = useParams();
  const [data, setData] = useState([]);

  const [project, setProject] = useState("");
  const [image, setImage] = useState("");
  const [leader_type, setLeader_type] = useState("");
  const [name, setName] = useState("");
  const [checkName, setCheckName] = useState(false);
  const [email, setEmail] = useState("");
  const [checkEmail, setCheckEmail] = useState(false);
  const [checkRfc, setCheckRfc] = useState(false);
  const [clabe, setClabe] = useState(false);
  const [checkClabe, setCheckClabe] = useState(false);
  const [description, setDescription] = useState("");
  const [donation, setDonation] = useState(false);
  const [donationVerify, setDonationVerify] = useState(false);
  const [country, setCountry] = useState("Todos");
  const [city, setCity] = useState("Todos");
  const [address, setAddress] = useState("Todos");
  const [startDate, setStartDate] = useState("");
  const [finishDate, setFinishDate] = useState("");
  const [ods1, setOds1] = useState("");
  const [ods2, setOds2] = useState("");
  const [ods3, setOds3] = useState("");
  const [ods4, setOds4] = useState("");
  const [ods5, setOds5] = useState("");
  const [ods6, setOds6] = useState("");
  const [ods7, setOds7] = useState("");
  const [ods8, setOds8] = useState("");
  const [ods9, setOds9] = useState("");
  const [ods10, setOds10] = useState("");
  const [ods11, setOds11] = useState("");
  const [ods12, setOds12] = useState("");
  const [ods13, setOds13] = useState("");
  const [ods14, setOds14] = useState("");
  const [ods15, setOds15] = useState("");
  const [ods16, setOds16] = useState("");
  const [ods17, setOds17] = useState("");
  const [phone, setPhone] = useState("");
  const [projectType, setProjectType] = useState("");
  const [rfc, setRfc] = useState("");
  const [state, setState] = useState("");
  const [status, setStatus] = useState("");
  const [url, setUrl] = useState("");
  const [volunteers, setVolunteers] = useState("");
  const [zip, setZip] = useState("");
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
  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    const odsNumber = id.replace("ods", "");
    setCheckedOds((prevState) => ({
      ...prevState,
      [odsNumber]: checked,
    }));
  };
  const handleSetOds = (id, value) => {
    const odsNumber = `ods${id}`;

    setCheckedOds((prevState) => ({
      ...prevState,
      [odsNumber]: value,
    }));
  };

  useEffect(() => {
    const getDataProject = async () => {
      const currentUser = sessionStorage.getItem("id_user");
      try {
        const data = await fetchGetProject(idProject, currentUser, "", "", "");
        setData(data);
      } catch { }
    };
    getDataProject();
  }, [idProject]);

  useEffect(() => {
    if (data && data.project) {
      setProject(data.project || "");
      setImage(data.image || "");
      setLeader_type(data.leader_type || "");
      setName(data.name || "");
      handleSetOds(1, data.ods1);
      handleSetOds(2, data.ods2);
      handleSetOds(3, data.ods3);
      handleSetOds(4, data.ods4);
      handleSetOds(5, data.ods5);
      handleSetOds(6, data.ods6);
      handleSetOds(7, data.ods7);
      handleSetOds(8, data.ods8);
      handleSetOds(9, data.ods9);
      handleSetOds(10, data.ods10);
      handleSetOds(11, data.ods11);
      handleSetOds(12, data.ods12);
      handleSetOds(13, data.ods13);
      handleSetOds(14, data.ods14);
      handleSetOds(15, data.ods15);
      handleSetOds(16, data.ods16);
      handleSetOds(17, data.ods17);
      setPhone(data.phone || "");
      setProject(data.project || "");
      setProjectType(data.project_type || "");
      setRfc(data.rfc || "");
      setStartDate(data.start_date || "");
      setState(data.state || "");
      setStatus(data.status || "");
      setUrl(data.url || "");
      setVolunteers(data.volunteers || "");
      setZip(data.zip || "");

    }
  }, [data]);

  return (
    <>
      {data && data.project ? (
        <>
          <Navbar />
          <EditProjectView
            data={data}
            project={project}
            setProject={setProject}
            image={image}
            setImage={setImage}
            leader_type={leader_type}
            setLeader_type={setLeader_type}
            name={name}
            setName={setName}
            checkName={checkName}
            setCheckName={setCheckName}
            email={email}
            setEmail={setEmail}
            checkEmail={checkEmail}
            setCheckEmail={setCheckEmail}
            checkRfc={checkRfc}
            setCheckRfc={setCheckRfc}
            clabe={clabe}
            setClabe={setClabe}
            checkClabe={checkClabe}
            setCheckClabe={setCheckClabe}
            description={description}
            setDescription={setDescription}
            donation={donation}
            setDonation={setDonation}
            country={country}
            setCountry={setCountry}
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
            phone={phone}
            setPhone={setPhone}
            projectType={projectType}
            setProjectType={setProjectType}
            rfc={rfc}
            setRfc={setRfc}
            state={state}
            setState={setState}
            status={status}
            setStatus={setStatus}
            url={url}
            setUrl={setUrl}
            volunteers={volunteers}
            setVolunteers={setVolunteers}
            zip={zip}
            setZip={setZip}
            checkedOds={checkedOds}
            handleCheckboxChange={handleCheckboxChange}
          />
        </>
      ) : (
        <ErrorView />
      )}
    </>
  );
}

export default EditProject;
