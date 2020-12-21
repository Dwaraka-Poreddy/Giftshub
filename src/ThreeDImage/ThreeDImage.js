import React, { useState } from "react";
import "./ThreeDImage.css";

export default function ThreeDImage({ fbimg, firstcol, secondcol }) {
  // const [firstcol, setfirstcol] = useState("#302015");
  // const [secondcol, setsecondcol] = useState("#1c1008");
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to right, ${firstcol}, ${secondcol})`,
      }}
    >
      <div style={{ paddingTop: "5%" }} className="ThreeDImage">
        <div class="tdexample">
          <div class="tdblock">
            <div
              style={{ backgroundImage: "url(" + fbimg + ")" }}
              class="tdside -tdmain"
            ></div>
            <div
              style={{ backgroundImage: "url(" + fbimg + ")" }}
              class="tdside -tdleft"
            ></div>
          </div>
          <div class="tdblock">
            <div
              style={{ backgroundImage: "url(" + fbimg + ")" }}
              class="tdside -tdmain"
            ></div>
            <div
              style={{ backgroundImage: "url(" + fbimg + ")" }}
              class="tdside -tdleft"
            ></div>
          </div>
          <div class="tdblock">
            <div
              style={{ backgroundImage: "url(" + fbimg + ")" }}
              class="tdside -tdmain"
            ></div>
            <div
              style={{ backgroundImage: "url(" + fbimg + ")" }}
              class="tdside -tdleft"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
