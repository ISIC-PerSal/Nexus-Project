import React, { useEffect, useState } from "react";
import CircularProgressBarView from "./CircularProgressBarView";
import getRealVolunteers from "../../util/data/getRealVolunteers";

function CircularProgressBar({ idProject, volunteers }) {
  const [realVolunteers, setRealVolunteers] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const [percentage, setPercentage] = useState(0);

  const fetchRealVolunteers = async (id) => {
    try {
      const response = await getRealVolunteers(id);
      const real = response.real_volunteers;
      setRealVolunteers(real);
    } catch (error) {
      console.error("Error fetching real volunteers:", error);
    }
  };

  useEffect(() => {
    fetchRealVolunteers(idProject);
  }, [idProject]);

  useEffect(() => {
    if (volunteers > 0) {
      setPercentage((realVolunteers / volunteers) * 100);
    }
  }, [realVolunteers, volunteers]);

  return (
    <>
      <CircularProgressBarView
        realVolunteers={realVolunteers}
        volunteers={volunteers}
        isHovered={isHovered}
        setIsHovered={setIsHovered}
        percentage={percentage}
        size={200}
        strokeWidth={50}
      />
    </>
  );
}

export default CircularProgressBar;
