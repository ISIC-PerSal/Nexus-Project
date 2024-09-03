import React, { useRef, useEffect } from 'react';
import './timerstyle.scss';
import flipAnimation from './flipAnimation';

function TimerView({ days, hours, minutes, seconds }) {
  const daysRef1 = useRef(null);
  const daysRef2 = useRef(null);
  const hoursRef1 = useRef(null);
  const hoursRef2 = useRef(null);
  const minutesRef1 = useRef(null);
  const minutesRef2 = useRef(null);
  const secondsRef1 = useRef(null);
  const secondsRef2 = useRef(null);

  useEffect(() => {
    flipAnimation(daysRef1);
    flipAnimation(daysRef2);
    flipAnimation(hoursRef1);
    flipAnimation(hoursRef2);
    flipAnimation(minutesRef1);
    flipAnimation(minutesRef2);
    flipAnimation(secondsRef1);
    flipAnimation(secondsRef2);
  }, [days, hours, minutes, seconds]);

  return (
    <div className="wrap">
      <div className="countdown">
        <div className="bloc-time days">
          <span className="count-title">Días</span>
          <div className="figure days days-1" ref={daysRef1}>
            <span className="top">{Math.floor(days / 10)}</span>
            <span className="top-back">
              <span>{Math.floor(days / 10)}</span>
            </span>
            <span className="bottom">{Math.floor(days / 10)}</span>
            <span className="bottom-back">
              <span>{Math.floor(days / 10)}</span>
            </span>
          </div>
          <div className="figure days days-2" ref={daysRef2}>
            <span className="top">{days % 10}</span>
            <span className="top-back">
              <span>{days % 10}</span>
            </span>
            <span className="bottom">{days % 10}</span>
            <span className="bottom-back">
              <span>{days % 10}</span>
            </span>
          </div>
        </div>

        <div className="bloc-time hours">
          <span className="count-title">Horas</span>
          <div className="figure hours hours-1" ref={hoursRef1}>
            <span className="top">{Math.floor(hours / 10)}</span>
            <span className="top-back">
              <span>{Math.floor(hours / 10)}</span>
            </span>
            <span className="bottom">{Math.floor(hours / 10)}</span>
            <span className="bottom-back">
              <span>{Math.floor(hours / 10)}</span>
            </span>
          </div>
          <div className="figure hours hours-2" ref={hoursRef2}>
            <span className="top">{hours % 10}</span>
            <span className="top-back">
              <span>{hours % 10}</span>
            </span>
            <span className="bottom">{hours % 10}</span>
            <span className="bottom-back">
              <span>{hours % 10}</span>
            </span>
          </div>
        </div>

        <div className="bloc-time minutes">
          <span className="count-title">Minutos</span>
          <div className="figure minutes minutes-1" ref={minutesRef1}>
            <span className="top">{Math.floor(minutes / 10)}</span>
            <span className="top-back">
              <span>{Math.floor(minutes / 10)}</span>
            </span>
            <span className="bottom">{Math.floor(minutes / 10)}</span>
            <span className="bottom-back">
              <span>{Math.floor(minutes / 10)}</span>
            </span>
          </div>
          <div className="figure minutes minutes-2" ref={minutesRef2}>
            <span className="top">{minutes % 10}</span>
            <span className="top-back">
              <span>{minutes % 10}</span>
            </span>
            <span className="bottom">{minutes % 10}</span>
            <span className="bottom-back">
              <span>{minutes % 10}</span>
            </span>
          </div>
        </div>

        <div className="bloc-time seconds">
          <span className="count-title">Segundos</span>
          <div className="figure seconds seconds-1" ref={secondsRef1}>
            <span className="top">{Math.floor(seconds / 10)}</span>
            <span className="top-back">
              <span>{Math.floor(seconds / 10)}</span>
            </span>
            <span className="bottom">{Math.floor(seconds / 10)}</span>
            <span className="bottom-back">
              <span>{Math.floor(seconds / 10)}</span>
            </span>
          </div>
          <div className="figure seconds seconds-2" ref={secondsRef2}>
            <span className="top">{seconds % 10}</span>
            <span className="top-back">
              <span>{seconds % 10}</span>
            </span>
            <span className="bottom">{seconds % 10}</span>
            <span className="bottom-back">
              <span>{seconds % 10}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimerView;
