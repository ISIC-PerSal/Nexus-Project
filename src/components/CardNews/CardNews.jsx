import React from "react";
import CardNewsView from "./CardNewsView";
import { useNavigate } from "react-router-dom";
import { getStatusIcon } from "../../util/Icons/getStatusIcon";

function CardNews({ item }) {
  const statusIcon = getStatusIcon(item.status);
  const Navidate = useNavigate();

  const handleToFeedContent = () => {
    Navidate(`/feed/${item.id_project_fk}/${item.code_project}`);
  };
  return (
    <CardNewsView
      item={item}
      statusIcon={statusIcon}
      handleToFeedContent={handleToFeedContent}
    />
  );
}

export default CardNews;
