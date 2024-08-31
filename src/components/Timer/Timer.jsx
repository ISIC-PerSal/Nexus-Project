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
        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
      } else {
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    }
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
        "La fecha ha concluido"
        </div>
      )}
      <TimerView />
    </>
  );
}

export default Timer;
