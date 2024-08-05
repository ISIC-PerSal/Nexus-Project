import React from 'react'
import odsData from '../../util/odsData';

function BadgeODSView({item}) {
  return (
    <>
    <span style={{ backgroundColor: odsData[item.id_ods - 1].color }} className="badge">
              {item.ods}
            </span>
    </>
  );
}

export default BadgeODSView