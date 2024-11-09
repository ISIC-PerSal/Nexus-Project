import React from "react";
import odsData from "../../util/odsData";
import ods_en from "../../util/ods_en";


function BadgeODSView({
  item = {},
  idShow = false,
  showImage = false,
  showText = true,
  column = 0,
  spacing = 0,
}) {
  const widthCard = (value) => {
    switch (value) {
      case 5:
        return "20%";
      case 4:
        return "25%";
      case 3:
        return "33.33333333333333333333333333333333%";
      case 2:
        return "50%";
      case 1:
        return "100%";
      default:
        return "";
    }
  };

  const spacingCard = (value) => {
    switch (value) {
      case 5:
        return "p-5";
      case 4:
        return "p-4";
      case 3:
        return "p-3";
      case 2:
        return "p-2";
      case 1:
        return "p-1";
      default:
        return "";
    }
  };

  const idOds = item.id_ods - 1;
  const style = column != 0 ? { width: widthCard(column) } : {};
  const className =
    (column != 0 ? "d-flex flex-column " : "") +
    (spacing != 0 ? spacingCard(spacing) : "");

  return (
    <>
      <div className={className} style={style}>
        {idOds >= 0 && idOds < odsData.length && (
          <>
            {showText && (
              <span
                style={{ backgroundColor: odsData[idOds].color }}
                className="badge m-1 text-wrap"
              >
                {idShow ? `${item.id_ods}. ` : ""}
                {item.ods}
              </span>
            )}
            {showImage && <img src={ods_en[idOds].url} alt={item.ods} />}
          </>
        )}
      </div>
    </>
  );
}

export default BadgeODSView;
