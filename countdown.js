import React, { useEffect, useState } from "react";
// import "./Countdown.css";
import { Box } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { isMobile } from "react-device-detect";

export const Countdown = () => {
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  useEffect(() => {
    const target = new Date("November 3, 2021 19:00 UTC").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = target - now;
      if (distance < 0) {
        clearInterval(interval);
      } else {
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        if (hours < 10) {
          setHours("0" + hours.toString());
        } else {
          setHours(hours.toString());
        }
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        if (minutes < 10) {
          setMinutes("0" + minutes.toString());
        } else {
          setMinutes(minutes.toString());
        }
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        if (seconds < 10) {
          setSeconds("0" + seconds.toString());
        } else {
          setSeconds(seconds.toString());
        }
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>{hours} : {minutes} : {seconds}</h1>
    </div>
  );
};
