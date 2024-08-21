import React from "react";
import SelectCountryView from "./SelectCountryView";
import Chile from "../../util/location/Chile";
import Argentina from "../../util/location/Argentina";
import Belice from "../../util/location/Belice";
import Bolivia from "../../util/location/Bolivia";
import Brasil from "../../util/location/Brasil";
import CostaRica from "../../util/location/CostaRica";
import Cuba from "../../util/location/Cuba";
import Colombia from "../../util/location/Colombia";
import Ecuador from "../../util/location/Ecuador";
import Guatemala from "../../util/location/Guatemala";
import ElSalvador from "../../util/location/ElSalvador";
import Honduras from "../../util/location/Honduras";
import Uruguay from "../../util/location/Uruguay";
import Mexico from "../../util/location/Mexico";
import Nicaragua from "../../util/location/Nicaragua";
import Panama from "../../util/location/Panama";
import Peru from "../../util/location/Peru";
import RepublicaDominicana from "../../util/location/RepublicaDominicana";
import Venezuela from "../../util/location/Venezuela";
import Paraguay from "../../util/location/Paraguay";

function SelectCountry({ country, setCountry, setEstados }) {
  const handleCountryChange = (selectedCountry) => {
    setCountry(selectedCountry.label.props.children[1]);

    switch (selectedCountry.value) {
      case "0":
        setEstados([]);
        break;
      case "1":
        setEstados(Argentina);
        break;
      case "2":
        setEstados(Belice);
      case "3":
        setEstados(Bolivia);
        break;
      case "4":
        setEstados(Brasil);
        break;
      case "5":
        setEstados(Chile);
        break;
      case "6":
        setEstados(Colombia);
        break;
      case "7":
        setEstados(CostaRica);
        break;
      case "8":
        setEstados(Cuba);
        break;
      case "9":
        setEstados(Ecuador);
        break;
      case "10":
        setEstados(ElSalvador);
        break;
      case "11":
        setEstados(Guatemala);
        break;
      case "12":
        setEstados(Honduras);
        break;
      case "13":
        setEstados(Mexico);
        break;
      case "14":
        setEstados(Nicaragua);
        break;
      case "15":
        setEstados(Panama);
        break;
      case "16":
        setEstados(Paraguay);
        break;
      case "17":
        setEstados(Peru);
        break;
      case "18":
        setEstados([]);
        break;
      case "19":
        setEstados(RepublicaDominicana);
        break;
      case "20":
        setEstados(Uruguay);
        break;
      case "21":
        setEstados(Venezuela);
        break;
      default:
        setEstados([]);
        break;
    }
  };
  return (
    <>
      <SelectCountryView
        handleCountryChange={handleCountryChange}
        country={country}
      />
    </>
  );
}

export default SelectCountry;
