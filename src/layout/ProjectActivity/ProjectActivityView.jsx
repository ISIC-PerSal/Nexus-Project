import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import {
  ClassicEditor,
  Bold,
  Essentials,
  Heading,
  Indent,
  IndentBlock,
  Italic,
  Link,
  List,
  MediaEmbed,
  Paragraph,
  Table,
  Undo,
} from "ckeditor5";
import $ from "jquery";

import "ckeditor5/ckeditor5.css";

import Select from "react-select";

function ProjectActivityView({
  project,
  setProject,
  typeProjects,
  setTypeProjects,
  statusProject,
  setStatusProject,
  contentProject,
  setContentProject,
  activityType,
  activityStatus,
  selectedFiles,
  handleSaveActivity,
  handleFileChange,
  removeFile,
}) {
  return (
    <>
      <main className="container w-75  my-3 p-3 border rounded border-secondary-subtle bg-gral">
        <div className="mb-3">
          <label htmlFor="seccion-lider" className="form-label fw-bold fs-3">
            Registro de actividades
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="nombre-lider" className="form-label">
            Proyecto
          </label>
          <input
            type="text"
            className="form-control"
            id="nombre-lider"
            value={project}
            onChange={(e) => setProject(e.target.value)}
            disabled={true}
          ></input>
        </div>
        <div className="mb-3 d-flex w-100">
          <div className="w-50 pe-3">
            <label className="form-label">Tipo</label>
            <Select
              placeholder="--"
              options={activityType}
              value={typeProjects}
              onChange={(selectedOption) => setTypeProjects(selectedOption)}
            />
          </div>
          <div className="w-50 ps-3">
            <label className="form-label">Estado</label>
            <Select
              placeholder="--"
              options={activityStatus}
              value={statusProject}
              onChange={(selectedOption) => setStatusProject(selectedOption)}
            />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Contenido</label>
          <CKEditor
            editor={ClassicEditor}
            config={{
              toolbar: [
                "undo",
                "redo",
                "|",
                "heading",
                "|",
                "bold",
                "italic",
                "|",
                "link",
                "|",
                "bulletedList",
                "numberedList",
                "indent",
                "outdent",
              ],
              plugins: [
                Bold,
                Essentials,
                Heading,
                Indent,
                IndentBlock,
                Italic,
                Link,
                List,
                Paragraph,
                Undo,
              ],
              initialData: "<h1>Título</h1><p>Contenido</p>",
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image-upload" className="form-label">
            Galeria (Max 3 imágenes)
          </label>
          <div className="">
            {selectedFiles.map((file, index) => (
              <div
                key={index}
                className="d-flex align-items-start justify-content-between mb-2 bg-body-secondary p-1"
              >
                <img
                  src={URL.createObjectURL(file)}
                  alt={`preview-${index}`}
                  style={{ width: "80%", marginRight: "10px" }}
                />
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeFile(index)}
                >
                  Eliminar
                </button>
              </div>
            ))}
          </div>
          <input
            type="file"
            className="form-control"
            id="image-upload"
            multiple
            onChange={handleFileChange}
            accept="image/*"
          />
        </div>
        <button
          className="btn bg-oficial text-white w-100 mt-3"
          onClick={handleSaveActivity}
        >
          {" "}
          Guardar{" "}
        </button>
      </main>
    </>
  );
}

export default ProjectActivityView;
