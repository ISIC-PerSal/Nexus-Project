import Swal from "sweetalert2";


const API_NEXUS_PROJECT = import.meta.env.VITE_API_NEXUS_PROJECT_DATABASE;
const url = `${API_NEXUS_PROJECT}/files/imageUpload.php`;
export const handleImageUpload = (e, setSelectedFile) => {
  const file = e.target.files[0];


  if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
    setSelectedFile(file);
  } else {
    Swal.fire({
      title: "Formato no válido",
      text: "Por favor, sube una imagen en formato JPG o PNG.",
      icon: "error",
    });
    e.target.value = "";
  }
};


export const handleUpload = async (selectedFile, setImageURL) => {
  if (!selectedFile) {
    Swal.fire({
      title: "Error",
      text: "No has seleccionado ninguna imagen.",
      icon: "warning",
    });
    return null;
  }


  const formData = new FormData();
  formData.append("image", selectedFile);


  try {
    console.log("Enviando imagen al servidor:", formData);
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });


    if (!response.ok) {
      throw new Error(`Error en la subida (${response.status})`);
    }


    const data = await response.json();
    console.log("Respuesta del servidor:", data);


    if (data.url) {
      setImageURL(data.url);
      return data.url;
    } else {
      Swal.fire({
        title: "Error en la subida",
        text: "El servidor no devolvió una URL válida.",
        icon: "error",
      });
      return null;
    }
  } catch (error) {
    console.error("Error al subir la imagen:", error);
    Swal.fire({
      title: "Error de conexión",
      text: "No se pudo conectar con el servidor. Intenta de nuevo.",
      icon: "error",
    });
    return null;
  }
};



