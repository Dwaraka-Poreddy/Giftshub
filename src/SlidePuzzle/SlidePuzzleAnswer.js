import React, { useState } from "react";
import "./SlidePuzzleAnswer.css";

export default function PuzzleAnswer({ fbimg }) {
  return (
    <div
      style={{
        width: "400px",
        height: "400px",
        fontSize: "1.17em",
        fontWeight: "old"
      }}
      className="App"
    >
      <h3
        style={{
          marginLeft: "-100px",
          marginBottom: "30px",
          boxSizing: "border-box",
          display: "block"
        }}
      >
        Hover over me for image
      </h3>
      {/* <img src={fbimg} alt="0" /> */}
      <div class="puzzleframe">
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>{" "}
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>{" "}
        <div
          style={{ backgroundImage: "url(" + fbimg + ")" }}
          class="cell"
        ></div>
      </div>
      <br />
      <center>
        <a
          style={{
            marginLeft: "-20%",
            textDecoration: "none",
            fontSize: "25px",
            fontFamily: "Roboto, sans-serif",
            color: "#337ab7"
          }}
          href="https://www.youtube.com/watch?v=EtXE08bOVZM"
        >
          How to Solve
        </a>
      </center>
    </div>
  );
}
