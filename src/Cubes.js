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

    cube.style.webkitTransform =
      "rotateX(" + xRand + "deg) rotateY(" + yRand + "deg)";
    cube.style.transform =
      "rotateX(" + xRand + "deg) rotateY(" + yRand + "deg)";
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
          <div
            style={{
              backgroundImage: "url(" + img1 + ")",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              overflow: "hidden",
              // backgroundPosition: "center",
              // backgroundSize: "cover",
              // backgroundRepeat: "no-repeat",

              // overflow: "hidden"
            }}
            class="front"
          ></div>
          <div
            style={{
              backgroundImage: "url(" + img1 + ")",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              overflow: "hidden",
            }}
            class="back"
          ></div>
          <div
            style={{
              backgroundImage: "url(" + img1 + ")",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              overflow: "hidden",
            }}
            class="right"
          ></div>
          <div
            style={{
              backgroundImage: "url(" + img1 + ")",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              overflow: "hidden",
            }}
            class="left"
          ></div>
          <div
            style={{
              backgroundImage: "url(" + img1 + ")",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              overflow: "hidden",
            }}
            class="top"
          ></div>
          <div
            style={{
              backgroundImage: "url(" + img1 + ")",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              overflow: "hidden",
            }}
            class="bottom"
          ></div>
        </div>
      </section>
    </div>
  );
}
