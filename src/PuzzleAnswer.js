import React, { useState } from "react";
import "./PuzzleAnswer.css";

export default function PuzzleAnswer({ bgimg }) {
  return (
    <div style={{ width: "500px", height: "600px" }} className="App">
      {/* <img src={bgimg} alt="0" /> */}
      <a
        class="puzzleframe"
        // style="--img:url(//images.unsplash.com/photo-1578188262493-80b9b9758ea4?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80)"

        href="//unsplash.com/photos/8bIFt7xq_uU"
        target="_blank"
      >
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>{" "}
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>{" "}
        <div
          style={{ backgroundImage: "url(" + bgimg + ")" }}
          class="cell"
        ></div>
      </a>
    </div>
  );
}
