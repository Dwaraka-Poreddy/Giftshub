import React, { useState } from "react";
import "./EnvelopeGreetingCard.css";
export default function EnvelopeGreetingCard() {
  const [mainclass, setmainclass] = useState("new");
  const handlechangeclass = () => {
    if (mainclass === "new") {
      setmainclass("open");
    }
  };
  return (
    <div>
      <div
        onClick={() => {
          handlechangeclass();
        }}
        className={`envelope ${mainclass} `}
      >
        <div class="EnvelopeGreetingCardfront">
          <div class="EnvelopeGreetingCardmail">
            <p>Happy Birthday</p>
            <p>Click me</p>
          </div>
        </div>
        <div class="EnvelopeGreetingCardback">
          <div class="EnvelopeGreetingCardletter">
            <p>I hope your day is as amazing and fun as </p>
            <p>I am... </p>
            <p>HBD Older Sis</p>

            <div class="EnvelopeGreetingCardbox">
              <div class="EnvelopeGreetingCardcake">
                <div class="EnvelopeGreetingCardcandle">
                  <div class="EnvelopeGreetingCardfire"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="EnvelopeGreetingCardflip left-EnvelopeGreetingCardflip"></div>
          <div class="EnvelopeGreetingCardflip right-EnvelopeGreetingCardflip"></div>
          <div class="EnvelopeGreetingCardflip bottom-EnvelopeGreetingCardflip"></div>
          <div class="EnvelopeGreetingCardflip top-EnvelopeGreetingCardflip"></div>
        </div>
      </div>
    </div>
  );
}
