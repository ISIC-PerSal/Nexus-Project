import React from "react";
import CardNews from "../../components/CardNews/CardNews";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import NoDataView from "../../components/NoData/NoDataView";

function ProjectFeedView({ data = [], project }) {
  const background = project.background_image || "";
  const image = project.image || "";
  const title = project.project || "";
  const owner = project.name || "";

  const backgroundImg = `url(${background})`;

  const profileImg = `url(${image})`;
  const defaultStyle = {
    backgroundColor: "white",
    width: "18vw",
    height: "18vw",
    borderRadius: "100%",
    backgroundSize: "cover",
  };
  const dynamicStyle = image ? { backgroundImage: profileImg } : {};
  return (
    <>
      <main className="container w-75 p-3  my-3 border rounded border-secondary-subtle bg-gral">
        <div className="custom-grid-container">
          <div className="cover-photo">
            {background ? (
              <div
                className="w-100 h-100 border rounded border-secondary-subtle z-1"
                style={{
                  backgroundImage: backgroundImg,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            ) : (
              <div
                className="w-100 border rounded border-secondary-subtle z-1"
                style={{
                  backgroundColor: "#ECECEC",
                  width: "100%",
                  height: "100%",
                }}
              ></div>
            )}
          </div>
          <div className="profile-photo">
            <div style={{ ...defaultStyle, ...dynamicStyle }}></div>
          </div>
          <div className="project_information">
            <div className="">
              <span className="label-title">{title}</span>
            </div>
            <div className="">
              <label className="">Por:</label>
              <p className="">{owner}</p>
            </div>
          </div>
        </div>
        <div className="mt-5">
          {data.length > 0 ? (
            <Masonry columnsCount={2} gutter="10px">
              {data.map((item, index) => (
                <CardNews item={item} key={index} />
              ))}
            </Masonry>
          ) : (
            <NoDataView />
          )}
        </div>
      </main>
    </>
  );
}

export default ProjectFeedView;
