import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import ProjectActivityView from "./ProjectActivityView";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { handleUpload } from "../../util/files/handleImage";
import fetchAddActivity from "../../util/project/fetchAddActivity";
import ErrorView from "../Error/ErrorView";

function ProjectActivity() {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const id = queryParams.get("project");

  const location = useLocation();
  const { data } = location.state || { data: "" };
  const type =
    location.state != null ? location.state.typeProject : "";

  const [project, setProject] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [typeProjects, setTypeProjects] = useState("");
  const [statusProject, setStatusProject] = useState("");
  const [contentProject, setContentProject] = useState("");
  const [imageUrls, setImageUrls] = useState([]);

  const activityType = [
    { value: "Noticia", label: "Noticia" },
    { value: "Actividad", label: "Actividad" },
  ];

  const activityStatus = [
    { value: "Publico", label: "Público" },
    { value: "Miembros", label: "Miembros" },
    { value: "Privado", label: "Privado" },
  ];

  useEffect(() => {
    if (data) {
      setProject(data);
    }
  }, [id]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + selectedFiles.length > 3) {
      Swal.fire({
        title: "Limite de imágenes",
        text: "Solo se pueden subir hasta 3 imágenes.",
        icon: "warning",
      });
      return;
    }
    setSelectedFiles([...selectedFiles, ...files]);
  };

  const removeFile = (index) => {
    const newFiles = selectedFiles.filter((_, i) => i !== index);
    setSelectedFiles(newFiles);
  };

  const uploadFiles = async () => {
    const urls = [];
    for (const file of selectedFiles) {
      const url = await new Promise((resolve) => {
        handleUpload(file, (uploadedUrl) => resolve(uploadedUrl));
      });
      if (url) {
        urls.push(url);
      }
    }
    return urls;
  };

  const handleSaveActivity = async () => {
    if (
      typeProjects.value &&
      statusProject &&
      contentProject != "<p><br data-cke-filler='true'></p>" &&
      contentProject != "<h2><br data-cke-filler='true'></h2>"
    ) {
      const editorElement = document.querySelector(".ck-content");
      const content = editorElement?.innerHTML || "";
      const imageUrls = await uploadFiles();
      setImageUrls(imageUrls);

      const body = {
        idProject: id,
        idUser: sessionStorage.getItem("id_user"),
        type: typeProjects.value,
        status: statusProject.value,
        content: content,
        files: imageUrls,
      };

      try {
        const data = await fetchAddActivity(body);
        if (data.status == "Done") {
          Swal.fire({
            title: "Exito!",
            text: "El registro se ha creado!",
            icon: "success",
            confirmButtonText: "Ver proyecto",
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = "/explore/" + id;
            } else {
              window.location.href = "/add-activity?project=" + id;
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
      } catch (error) {
        console.error(error);
      }
    } else if (
      typeProjects.value == "" ||
      typeProjects.value == null ||
      typeProjects.value == undefined
    ) {
      Swal.fire({
        position: "top-end",
        icon: "info",
        title: "Seleccione una opción el tipo de proyecto",
        showConfirmButton: false,
        timer: 1000,
      });
    } else if (
      statusProject.value == "" ||
      statusProject.value == null ||
      statusProject.value == undefined
    ) {
      Swal.fire({
        position: "top-end",
        icon: "info",
        title: "Seleccione una opción el estado del proyecto",
        showConfirmButton: false,
        timer: 1000,
      });
    } else if (
      contentProject == "<p><br data-cke-filler='true'></p>" &&
      contentProject == "<h2><br data-cke-filler='true'></h2>"
    ) {
      Swal.fire({
        position: "top-end",
        icon: "info",
        title: "No deje el contenido de la actividad vacia",
        showConfirmButton: false,
        timer: 1000,
      });
    }
  };

  return (
    <>
      {
        type == "Propio" && data!="" ? (
          <>
            <Navbar />
            <ProjectActivityView
              project={project}
              setProject={setProject}
              typeProjects={typeProjects}
              setTypeProjects={setTypeProjects}
              statusProject={statusProject}
              setStatusProject={setStatusProject}
              contentProject={contentProject}
              setContentProject={setContentProject}
              activityType={activityType}
              activityStatus={activityStatus}
              selectedFiles={selectedFiles}
              handleSaveActivity={handleSaveActivity}
              handleFileChange={handleFileChange}
              removeFile={removeFile}
            />
          </>
        ) : (
          <ErrorView />
        )}
    </>
  );
}

export default ProjectActivity;
