<<<<<<< HEAD
import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import fondoNexus from '../../assets/nexus.png';
import SocialMediaView from '../../components/SocialMedia/SocialMediaView';
=======
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import fondoNexus from "../../assets/nexus.png";
>>>>>>> luisa

function HomeView() {
  return (
    <>
      <div
        className="m-3 p-5 rounded shadow-lg d-flex align-items-center justify-content-center"
        style={{ backgroundColor: "rgb(253, 229, 230)" }}
      >
        <div className="text-center">
          <img
            src={fondoNexus}
            alt="Fondo Nexus"
            className="img-fluid rounded-circle shadow"
            style={{
              width: "380px",
              height: "380px",
              objectFit: "cover",
              margin: "0 auto",
            }}
          />
        </div>
        <div className="d-flex flex-column justify-content-start ps-3">
          <h1
            className="display-4 fw-bold mb-3"
            style={{
              fontFamily: "Arial, sans-serif",
              color: "rgb(130, 91, 89)",
              textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
            }}
          >
            Bienvenid@s a
          </h1>
          <div className="d-flex align-items-center">
            <h1
              className="fw-bold me-2"
              style={{
                fontFamily: "Arial, sans-serif",
                color: "rgb(194, 76, 90)",
                textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
                fontSize: "8rem",
              }}
            >
              Nexus
            </h1>
            <h1
              className="fw-bold"
              style={{
                fontFamily: "Arial, sans-serif",
                color: "rgb(234, 79, 151)",
                textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
                fontSize: "8rem",
              }}
            >
              Project
            </h1>
          </div>
        </div>
      </div>
      <div className="justify-content-center">
        "<video src="../assets/7.Feed.mp4" loop controls></video>
      </div>
      
    </>
  );
}

export default HomeView;
