import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import EditProjectView from "./EditProjectView";
import { useParams } from "react-router-dom";
import fetchGetProject from "../../util/project/fetchGetProject";

function EditProject() {
  const { idProject } = useParams();
  const [data, setData] = useState([]);
  const [project, setProject] = useState("");
  const[address, setAddress] =useState("");
  const[city, setCity] =useState("");
  const[clabe, setClabe] =useState("");
  const[country, setCountry] =useState("");
  const[email, setEmail] =useState("");
  const[id_project_pk, setId_project_pk] =useState("");
  const[id_user_fk, setId_user_fk] =useState("");
  const[name, setName] =useState("");
  const[ods1, setOds1] =useState("");

  const[ods2, setOds2] =useState("");

  const[ods3, setOds3] =useState("");

  const[ods4, setOds4] =useState("");

  const[ods5, setOds5] =useState("");

  const[ods6, setOds6] =useState("");

  const[ods7, setOds7] =useState("");
  const[ods8, setOds8] =useState("");
  const[ods9, setOds9] =useState("");

  const[ods10, setOds10] =useState("");

  const[ods11, setOds11] =useState("");

  const[ods12, setOds12] =useState("");

  const[ods13, setOds13] =useState("");
  const[ods14, setOds14] =useState("");
  const[ods15, setOds15] =useState("");
  const[ods16, setOds16] =useState("");
  const[ods17, setOds17] =useState("");


  
  useEffect(() => {
    const getDataProject = async () => {
      const currentUser = sessionStorage.getItem("id_user");
      if (permission == "Privado") {
        try {
          const data = await fetchGetProject(
            idProject,
            currentUser,
            "",
            "",
            ""
          );
          setData(data);
        } catch {}
      }
    };
    getDataProject();
  }, [idProject]);

  useEffect(() => {
    setProject(data.project);
  }, [data]);
  return{
    <>
  {data && data.project ? (
    <>
      <Navbar />
      <EditProjectView
        data={data}
        project={project}
        setProject={setProject}
        address={setAddress}
        city={setCity}
        clabe={setClabe}
country={setCountry}
email={setEmail}
name={setName}
ods1={setOds1}
ods2={setOds2}
ods3={setOds3}
ods4={setOds4}
ods5={setOds5}
ods6={setOds6}
ods7={setOds7}
ods8={setOds8}
ods9={setOds9}
ods10={setOds10}
ods11={setOds11}
ods12={setOds12}
ods13={setOds13}
ods14={setOds14}
ods15={setOds15}
ods16={setOds16}
ods17={setOds17}


      />
    </>
  ) : (
    <ErrorView />
  )}
}
}

export default EditProject;
