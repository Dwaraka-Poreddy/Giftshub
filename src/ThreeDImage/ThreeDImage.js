import React, { useState } from "react";
import "./ThreeDImage.css";

export default function ThreeDImage({ fbimg }) {
  return (
    <div
      style={{
        backgroundColor: "linear-gradient(125deg, #302015 0%, #1c1008 100%)"
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
