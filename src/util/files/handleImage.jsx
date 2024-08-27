// imageHandlers.js
import Swal from "sweetalert2";

const API_NEXUS_PROJECT = import.meta.env.VITE_API_NEXUS_PROJECT_DATABASE;
const url = `${API_NEXUS_PROJECT}/files/imageUpload.php`;

export const handleImageUpload = (e, setSelectedFile) => {
  const file = e.target.files[0];
  if (file && file.type === "image/jpeg") {
    setSelectedFile(file);
  } else {
    Swal.fire({
      title: "Extensión del archivo",
      text: "Por favor, sube una imagen en formato JPG.",
      icon: "error",
    });
    e.target.value = "";
  }
};

export const handleUpload = async (selectedFile, setImageURL) => {
  if (!selectedFile) {
    return;
  }

  const formData = new FormData();
  formData.append("image", selectedFile);

  try {
    const response = await fetch(url, {
      // Asegúrate de que `url` esté definido
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    if (data.url) {
      setImageURL(data.url);
    } else {
      console.error("No URL returned from server");
    }
  } catch (error) {
    console.error("Error al subir la imagen:", error);
  }
};