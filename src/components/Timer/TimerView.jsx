import React from "react";

function TimerView({days, hours, minutes, seconds}) {
  return (
    <>
      <div className="timer d-flex">
        <p>Dias: {" " + days}</p>
        <p>Horas: {" " + hours}</p>
        <p>Minutos: {" " + minutes}</p>
        <p>Segundos: {" " + seconds}</p>
      </div>
    </>
  );
}

export default TimerView;
