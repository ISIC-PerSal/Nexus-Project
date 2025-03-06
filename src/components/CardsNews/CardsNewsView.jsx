import React, { useEffect, useState } from "react";
import CardNews from "../../components/CardNews/CardNews";
import Masonry from "react-responsive-masonry";
import NoDataView from "../../components/NoData/NoDataView";

function CardsNewsView({ data = [], columns = 2 }) {
  const [dataCard, setDataCard] = useState([]);

  useEffect(() => {
    setDataCard(data);
    console.log("Updated dataCard:", dataCard); 
  }, [data]); 

  return (
    <>
      {dataCard && dataCard.length > 0 ? (
        <Masonry columnsCount={columns} gutter="10px">
          {dataCard.map((item, index) => (
            <CardNews item={item} key={item.id_activity_pk || index} />
          ))}
        </Masonry>
      ) : (
        <NoDataView />
      )}
    </>
  );
}

export default CardsNewsView;
