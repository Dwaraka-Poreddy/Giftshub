import React, { useState, useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
// import "./styles.css";
import Loader from "react-loader-spinner";
const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
  isPlaying: true,
  size: 270,
  strokeWidth: 4,
};

const timerProps1 = {
  isPlaying: true,
  size: 150,
  strokeWidth: 4,
};
const timerProps4 = {
  isPlaying: true,
  size: 180,
  strokeWidth: 4,
};
const renderTime = (dimension, time) => {
  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      <div>{dimension}</div>
    </div>
  );
};

const getTimeSeconds = (time) => (minuteSeconds - time / 1000) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

export default function CircleTimer({ Bday }) {
  const [loading, setloading] = useState(false);
  const startTime = 0;

  const endTime = Bday / 1000;
  console.log(endTime, "endtime");

  const remainingTime = endTime - startTime;
  console.log(remainingTime, "endtime_remaining");
  const days = Math.ceil(remainingTime / daySeconds);

  const daysDuration = days * daySeconds;
  // useEffect(() => {
  //   setTimeout(() => {
  //     setloading(false);
  //   }, 2000);
  // });
  return (
    <div>
      {remainingTime > 0 ? (
        <div
          style={{ display: "flex", justifyContent: "space-evenly" }}
          className="App"
        >
          <CountdownCircleTimer
            {...timerProps}
            colors={[["#7E2E84"]]}
            duration={daysDuration}
            initialRemainingTime={remainingTime}
          >
            {({ elapsedTime }) =>
              renderTime("days", getTimeDays(daysDuration - elapsedTime / 1000))
            }
          </CountdownCircleTimer>
          <CountdownCircleTimer
            {...timerProps1}
            colors={[["#00b4c6"]]}
            duration={daySeconds}
            initialRemainingTime={remainingTime % daySeconds}
            onComplete={(totalElapsedTime) => [
              remainingTime - totalElapsedTime > hourSeconds,
            ]}
          >
            {({ elapsedTime }) =>
              renderTime("hours", getTimeHours(daySeconds - elapsedTime / 1000))
            }
          </CountdownCircleTimer>
          <CountdownCircleTimer
            {...timerProps}
            colors={[["#EF798A"]]}
            duration={hourSeconds}
            initialRemainingTime={remainingTime % hourSeconds}
            onComplete={(totalElapsedTime) => [
              remainingTime - totalElapsedTime > minuteSeconds,
            ]}
          >
            {({ elapsedTime }) =>
              renderTime(
                "minutes",
                getTimeMinutes(hourSeconds - elapsedTime / 1000)
              )
            }
          </CountdownCircleTimer>
          <CountdownCircleTimer
            {...timerProps4}
            colors={[["#218380"]]}
            duration={minuteSeconds}
            initialRemainingTime={remainingTime % minuteSeconds}
            onComplete={(totalElapsedTime) => [
              remainingTime - totalElapsedTime > 0,
            ]}
          >
            {({ elapsedTime }) =>
              renderTime("seconds", getTimeSeconds(elapsedTime))
            }
          </CountdownCircleTimer>
        </div>
      ) : null}
    </div>
  );
}
