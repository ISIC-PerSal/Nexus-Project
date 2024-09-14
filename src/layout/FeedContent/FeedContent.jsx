import React, { useEffect, useState } from "react";
import FeedContentView from "./FeedContentView";
import fetchGetFeedContent from "../../util/project/fetchGetFeedContent";
import Navbar from "../../components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import { getStatusIcon } from "../../util/Icons/getStatusIcon";

function FeedContent() {
  const { idProject, feed } = useParams();
  const [dataFeed, setDataFeed] = useState({});

  const statusIcon = getStatusIcon(dataFeed.status);

  const getDate = () => {
    const dateSplit = dataFeed.created_at?.split(" ")[0];
    const dateArray = dateSplit?.split("-");
    return dateArray ? dateArray[2] + "/" + dateArray[1] + "/" + dateArray[0] : "";
  };

  const getTime = () => {
    return dataFeed.created_at?.split(" ")[1];
  };

  useEffect(() => {
    const getDataContent = async () => {
      const body = {
        idProject: idProject,
        code: feed,
      };
      try {
        const data = await fetchGetFeedContent(body);
        setDataFeed(data);
      } catch {}
    };
    getDataContent();
  }, [idProject, feed]);

  return (
    <>
      <Navbar />
      <FeedContentView
        data={dataFeed}
        statusIcon={statusIcon}
        time={getTime()}
        date={getDate()}
      />
    </>
  );
}

export default FeedContent;
