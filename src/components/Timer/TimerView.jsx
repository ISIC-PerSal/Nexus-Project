import React from "react";

function TimerView({ days, hours, minutes, seconds }) {
  return (
    <>
      <div className="d-flex w-100 shadow bg-oficial text-white">
        <div className="d-flex flex-column w-25 p-2">
          <div className="w-100 d-flex justify-content-center bg-oficial-darker fs-2 fw-bold ">
            {days}
          </div>
          <div className="w-100 d-flex justify-content-center  fs-5 fw-bold">
            Días
          </div>
        </div>
        <div className="fs-2 fw-bold ">:</div>
        <div className="d-flex flex-column w-25 p-2">
          <div className="w-100 d-flex justify-content-center bg-oficial-darker fs-2 fw-bold">
            {hours}
          </div>
          <div className="w-100 d-flex justify-content-center fs-5 fw-bold">
            Horas
          </div>
        </div>
        <div className="fs-2 fw-bold ">:</div>
        <div className="d-flex flex-column w-25 p-2">
          <div className="w-100 d-flex justify-content-center bg-oficial-darker fs-2 fw-bold">
            {minutes}
          </div>
          <div className="w-100 d-flex justify-content-center fs-5 fw-bold">
            Minutos
          </div>
        </div>
        <div className="fs-2 fw-bold ">:</div>

        <div className="d-flex flex-column w-25 p-2">
          <div className="w-100 d-flex justify-content-center bg-oficial-darker fs-2 fw-bold">
            {seconds}
          </div>
          <div className="w-100 d-flex justify-content-center fs-5 fw-bold">
            Segundos
          </div>
        </div>
      </div>
    </>
  );
}

export default TimerView;
