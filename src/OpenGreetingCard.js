import React, { useState, useEffect } from "react";
import "./OpenGreetingCard.css";

export default function OpenGreetingCard() {
  const [openCard, setOpenCard] = useState("gc_carrd ");
  // function openCard() {
  //   var gc_carrd = document.getElementById("theCard");
  //   setTimeout(function () {
  //     gc_carrd.classList.toggle("open");

  //     setTimeout(function () {
  //       gc_carrd.classList.toggle("open");
  //       openCard();
  //     }, 10000);
  //   }, 3000);
  // }

  // openCard();

  const timer = () => {
    setTimeout(() => {
      setOpenCard("gc_carrd open");
      setTimeout(() => {
        setOpenCard("gc_carrd");
        timer();
      }, 10000);
    }, 3000);
  };

  useEffect(() => {
    timer();
  }, []);

  return (
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

              <div>
                <p>Here are some CSS gc_hearts for you</p>
              </div>
            </div>
          </div>
          <div class="gc_page gc_front">
            <div class="side gc_back red">Jobbies</div>
            <div class="side gc_front">
              <div>
                <p>
                  Roses are <span class="red">red</span>
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
  );
}
