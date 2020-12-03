import React from "react";
import "./ThreeDImage.css";

export default function ThreeDImage() {
  return (
    <div
      style={{
        backgroundColor: "linear-gradient(125deg, #302015 0%, #1c1008 100%)",
      }}
    >
      <div style={{ paddingTop: "5%" }} className="ThreeDImage">
        <div class="tdexample">
          <div class="tdblock">
            <div class="tdside -tdmain"></div>
            <div class="tdside -tdleft"></div>
          </div>
          <div class="tdblock">
            <div class="tdside -tdmain"></div>
            <div class="tdside -tdleft"></div>
          </div>
          <div class="tdblock">
            <div class="tdside -tdmain"></div>
            <div class="tdside -tdleft"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
