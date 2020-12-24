import React, { useState, useEffect } from "react";
import "./OpenGreetingCard.css";

export default function OpenGreetingCard({ fbimg, text1, text2, maintext }) {
  const [openCard, setOpenCard] = useState("gc_carrd ");

  const timer = () => {
    setTimeout(() => {
      setOpenCard("gc_carrd open");

      setTimeout(() => {
        setOpenCard("gc_carrd");
        timer();
      }, 15000);
    }, 3000);
  };

  useEffect(() => {
    timer();
  }, []);

  return (
    <div>
      <div className="gc_mainCard">
        <section class="gc_containerr">
          <div className={openCard} id="theCard">
            <div class="gc_page gc_back">
              <div class="side gc_back">Jobbies</div>
              <div class="side gc_front">
                <div class="gc_hearts">
                  <div class="gc_heart"></div>
                  <div class="gc_heart"></div>
                  <div class="gc_heart"></div>
                  <div class="gc_heart"></div>
                  <div class="gc_heart"></div>
                  <div class="gc_heart"></div>
                  <div class="gc_heart"></div>
                </div>

                <div style={{ overflow: "hidden" }}>
                  <p>{text1}</p>
                  <p> {text2}</p>
                </div>
              </div>
            </div>
            <div class="gc_page gc_front">
              <div class="side gc_back red">
                <img style={{ width: "100%" }} src={fbimg} alt="" />
              </div>
              <div style={{ overflow: "hidden" }} class="side gc_front">
                <div>
                  <p>
                    {maintext} <span class="red">red</span>
                  </p>
                  <p>
                    Violets are <span class="blue">blue</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
