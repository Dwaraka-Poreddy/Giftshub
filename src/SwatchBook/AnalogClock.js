import React from "react";
import "./AnalogClock.css";
import $ from "jquery";
export default function AnalogClock({ fbimg, name, handscol }) {
  function updateClock(hours, minutes, seconds) {
    var hourDegrees = hours * 30 + minutes * 0.5;
    var minuteDegrees = minutes * 6;
    var secondDegrees = seconds * 6;
    console.log(hourDegrees, minuteDegrees, secondDegrees);
    $("#AnalogClock_hour-hand").css({
      transform: `rotate(${hourDegrees - 90}deg)`,
    });
    $("#AnalogClock_minute-hand").css({
      transform: `rotate(${minuteDegrees - 90}deg)`,
    });
    $("#AnalogClock_second-hand").css({
      transform: `rotate(${secondDegrees - 90}deg)`,
    });
  }
  setClockWithCurrentTime();
  function setClockWithCurrentTime() {
    var date = new Date();

    var hours = ((date.getHours() + 11) % 12) + 1;
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    console.log(date, hours, minutes, seconds);
    updateClock(hours, minutes, seconds);
  }
  setInterval(setClockWithCurrentTime, 1000);
  return (
    <div className="AnalogClock_maindiv">
      <section
        style={{
          backgroundImage: "url(" + fbimg + ")",
        }}
        className="AnalogClock_section"
      >
        {/* <div style={{ color: "#ffffff" }} class="AnalogClock_label">
          {name}
        </div> */}
        <div style={{ background: handscol }} id="AnalogClock_hour-hand"></div>
        <div
          style={{ background: handscol }}
          id="AnalogClock_second-hand"
        ></div>
        <div
          style={{ background: handscol }}
          id="AnalogClock_minute-hand"
        ></div>
        <div class="AnalogClock_hour12"></div>
        <div class="AnalogClock_hour1"></div>
        <div class="AnalogClock_hour2"></div>
        <div class="AnalogClock_hour3"></div>
        <div class="AnalogClock_hour4"></div>
        <div class="AnalogClock_hour5"></div>
      </section>
    </div>
  );
}
