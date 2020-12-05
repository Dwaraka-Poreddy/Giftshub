import React, { useState } from "react";
import "./Cubes.css";

export default function App() {
  const min = 1;
  const max = 24;
  const cube = document.getElementById("cube");
  const [img1, setImg1] = useState(
    "https://images.unsplash.com/photo-1528642474498-1af0c17fd8c3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw=&auto=format&fit=crop&w=1950&q=80"
  );
  const [img2, setImg2] = useState(
    "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
  );
  const [img3, setImg3] = useState(
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60"
  );
  const [img4, setImg4] = useState(
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
  );
  const [img5, setImg5] = useState(
    "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
  );
  const [img6, setImg6] = useState(
    "https://images.unsplash.com/photo-1473172707857-f9e276582ab6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
  );
  function handleClick() {
    const min = 1;
    const max = 24;
    const cube = document.getElementById("cube");
    var xRand = getRandom(max, min);
    var yRand = getRandom(max, min);

    // cube.style.webkitTransform = " rotateY(" + yRand + "deg)";
    // cube.style.transform =
    //   "rotateX(" + xRand + "deg) rotateY(" + yRand + "deg)";
  }

  function getRandom(max, min) {
    return (Math.floor(Math.random() * (max - min)) + min) * 90;
  }

  return (
    <div className="App">
      <section class="cubecontainer">
        <div
          onClick={() => {
            handleClick();
          }}
          id="cube"
        >
          <div class="heart3d">
            <div class="boom">
              <div
                style={{
                  opacity: "0.85",
                  backgroundImage: "url(" + img1 + ")",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  overflow: "hidden",
                  height: "175px",
                  width: "175px",
                  borderRadius: "10px",
                }}
                class="front bob"
              ></div>
              <div
                style={{
                  opacity: "0.85",
                  backgroundImage: "url(" + img2 + ")",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  overflow: "hidden",
                  height: "175px",
                  width: "175px",
                  borderRadius: "10px",
                }}
                class="back bob"
              ></div>
              <div
                style={{
                  opacity: "0.85",
                  backgroundImage: "url(" + img3 + ")",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  overflow: "hidden",
                  height: "175px",
                  width: "175px",
                  borderRadius: "10px",
                }}
                class="right bob"
              ></div>
              <div
                style={{
                  opacity: "0.85",
                  backgroundImage: "url(" + img4 + ")",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  overflow: "hidden",
                  height: "175px",
                  width: "175px",
                  borderRadius: "10px",
                }}
                class="left  bob"
              ></div>
              <div
                style={{
                  opacity: "0.85",
                  backgroundImage: "url(" + img5 + ")",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  overflow: "hidden",
                  height: "175px",
                  width: "175px",
                  borderRadius: "10px",
                }}
                class="top bob"
              ></div>
              <div
                style={{
                  opacity: "0.85",
                  backgroundImage: "url(" + img6 + ")",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  overflow: "hidden",
                  height: "175px",
                  width: "175px",
                  borderRadius: "10px",
                }}
                class="bottom bob"
              ></div>
            </div>
            <div class="rib1"></div>
            <div class="rib2"></div>
            <div class="rib3"></div>
            <div class="rib4"></div>
            <div class="rib5"></div>
            <div class="rib6"></div>
            <div class="rib7"></div>
            <div class="rib8"></div>
            <div class="rib9"></div>
            <div class="rib10"></div>
            <div class="rib11"></div>
            <div class="rib12"></div>
            <div class="rib13"></div>
            <div class="rib14"></div>
            <div class="rib15"></div>

            <div class="rib16"></div>
            <div class="rib17"></div>
            <div class="rib18"></div>
            <div class="rib19"></div>
            <div class="rib20"></div>
            <div class="rib21"></div>
            <div class="rib22"></div>
            <div class="rib23"></div>
            <div class="rib24"></div>
            <div class="rib25"></div>
            <div class="rib26"></div>
            <div class="rib27"></div>
            <div class="rib28"></div>
            <div class="rib29"></div>
            <div class="rib30"></div>
            <div class="rib31"></div>
            <div class="rib32"></div>
            <div class="rib33"></div>
            <div class="rib34"></div>
            <div class="rib35"></div>
            <div class="rib36"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
