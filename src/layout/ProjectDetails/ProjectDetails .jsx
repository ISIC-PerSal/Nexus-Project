import React, { useEffect, useState } from "react";
import ProjectDetailsView from "./ProjectDetailsView";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import fetchGetProject from "../../util/project/fetchGetProject";
import ErrorView from "../Error/ErrorView";
import LoadingView from "../../components/Loading/LoadingView";
import isAuth from "../../util/isAuth";
import { useNexus } from "../../Hooks/useContext";

function ProjectDetails() {
  const { idProject } = useParams();
  const isLogin = isAuth();
  const { setSelected } = useNexus();

  useEffect(() => {
    setSelected("Explorar");
  }, [setSelected]);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [leaderType, setLeaderType] = useState("");
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
  const [image, setImage] = useState("");

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
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageURL, setImageURL] = useState("");

  async function fetchData() {
    setLoading(true);
    try {
      const dataP = await fetchGetProject(idProject, "", "", "");
      setData(dataP);
    } catch (error) {
      console.error(error);
      setData(null);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [idProject]);

  useEffect(() => {
    if (data && Object.keys(data).length > 0) {
      setLeaderType(data.leader_type || "");
      setName(data.name || "");
      setCheckName(data.checkName || false);
      setPhone(data.phone || "");
      setEmail(data.email || "");
      setCheckEmail(data.checkEmail || false);
      setRfc(data.rfc || "");
      setCheckRfc(data.checkRfc || false);
      setClabe(data.clabe || "");
      setCheckClabe(data.checkClabe || false);
      setProject(data.project || "");
      setVolunteers(data.volunteers || 1);
      setDescription(data.description || "");
      setProjectType(data.project_type || "");
      setDonation(data.donation || false);
      setCountry(data.country || "Todos");
      setState(data.state || []);
      setZip(data.zip || "");
      setCity(data.city || "");
      setAddress(data.address || "");
      setStartDate(data.start_date || "");
      setFinishDate(data.finish_date || "");
      setUrlProject(data.urlProject || "");
      setImage(data.image || "");
    }
  }, [data]);

  if (loading) {
    return (
      <>
        <Navbar />
        <LoadingView />
      </>
    );
  }

  return (
    <>
      {isLogin && data && Object.keys(data).length > 0 ? (
        <div>
          <Navbar />
          <ProjectDetailsView
            id={idProject}
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
            image={image}
            setImage={setImage}
          />
        </div>
      ) : (
        <ErrorView />
      )}
    </>
  );
}

export default ProjectDetails;