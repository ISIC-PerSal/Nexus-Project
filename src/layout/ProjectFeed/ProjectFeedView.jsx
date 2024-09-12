import React from "react";
import CardNews from "../../components/CardNews/CardNews";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import NoDataView from "../../components/NoData/NoDataView";

function ProjectFeedView({ data = [] }) {
  console.log(data)
  return (
    <>
      <main className="container w-75 p-3  my-3 border rounded border-secondary-subtle bg-gral">
        {data.length ? (
          <Masonry columnsCount={3} gutter="10px">
            {data.map((item, index) => (
              <CardNews item={item} key={index} />
            ))}
          </Masonry>
        ) : (
          <NoDataView />
        )}
      </main>
    </>
  );
}

export default ProjectFeedView;
