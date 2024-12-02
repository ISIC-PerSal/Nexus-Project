import React from "react";
import CardNews from "../../components/CardNews/CardNews";
import Masonry from "react-responsive-masonry";
import NoDataView from "../../components/NoData/NoDataView";
import "./Home.css"
import { useNavigate } from "react-router-dom";

function HomeView({ data = [] }) {
  const dataImage = data.filter(
    (item, index) => Array.isArray(item.files) && item.files.length >= 1
  );
  const maxItems = dataImage.length >= 5 ? 5 : dataImage.length;
  const images = dataImage.slice(0, maxItems).map((item) => item);
  console.log(data);
  const Navidate = useNavigate();

  const handleToFeedContent = (id, code) => {
    Navidate(`/feed/${id}/${code}`);
  };
  return (
    <>
      <main className="bg-img py-3">
        <div className="container w-75 p-3 border rounded border-secondary-subtle bg-gral">
        <label className="form-label fw-bold fs-2">
            Noticias recientes
          </label>
          <div id="carouselExampleInterval" 
            class="carousel slide mb-5"
            style={{height:"vh-50"}}
            data-bs-ride="carousel">
            <div class="carousel-inner">
              {
                images.map((item, index)=>(
                  <div 
                  key={index} 
                  class="carousel-item active" 
                  data-bs-interval="10000"
                  onClick={(e)=>handleToFeedContent(
                    item.id_project_fk,
                    item.code_project
                  )}
                  >                  
                <img 
                src={item.files[0].url} 
                class="d-block w-100" 
                alt="..."
                ></img>
              </div>
                ))
              }
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          {data && data.length > 0 ? (
            <Masonry columnsCount={2} gutter="10px">
              {data.map((item, index) => (
                <CardNews
                  item={item}
                  key={item.code_project || index}
                  id={item.code_project}
                  title={true} />
              ))}
            </Masonry>
          ) : (
            <NoDataView />
          )}
        </div>
      </main>
      {/* <div
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
      </div> */}
    </>
  );
}

export default HomeView;
