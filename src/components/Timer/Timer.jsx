import React, { useEffect, useState } from "react";
import TimerView from "./TimerView";

function Timer({ date }) {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const getTime = () => {
    if (Date.now() < Date.parse(date)) {
      const time = Date.now() - Date.parse(date);
      setDays(Math.abs(Math.floor(time / (1000 * 60 * 60 * 24))));
      setHours(Math.abs(Math.floor((time / (1000 * 60 * 60)) % 24)));
      setMinutes(Math.abs(Math.floor((time / 1000 / 60) % 60)));
      setSeconds(Math.abs(Math.floor((time / 1000) % 60)));
    } else {
      setDays(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(date), 1000);

    return () => clearInterval(interval);
  }, [date]);
  return (
    <>
      {Date.now() < Date.parse(date) ? (
        <TimerView
          days={days}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />
      ) : (
        <div className="fs-5 fw-bold text-center alert alert-warning m-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-exclamation-diamond-fill me-1"
            viewBox="0 0 16 16"
          >
            <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
          </svg>
          La vigencia de este evento ha expirado
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className="bi bi-exclamation-diamond-fill ms-1"
            viewBox="0 0 16 16"
          >
            <path d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
          </svg>
        </div>
      )}
    </>
  );
}

export default Timer;
