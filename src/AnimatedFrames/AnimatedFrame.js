import React, { useState } from "react";
import "./AnimatedFrame.css";

export default function AnimatedFrame({ fbimg1, fbimg2, title }) {
  return (
    <div className="AnimatedApp" style={{ backgroundColor: "#70cff3" }}>
      <div
        style={{
          backgroundImage: "url(" + fbimg2 + ")",
          backgroundColor: "#70cff3",
        }}
        class="w"
      >
        <div style={{ backgroundImage: "url(" + fbimg1 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg1 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg1 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg1 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg1 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg1 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg1 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg1 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg1 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg1 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg1 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg1 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg1 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg1 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg1 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg1 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg1 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg1 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg1 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg1 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg1 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg1 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg1 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg1 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg1 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg1 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg1 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg1 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg1 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg1 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg1 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg1 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg1 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg1 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg1 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg1 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg1 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg1 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg1 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg1 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg1 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg1 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg1 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg1 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg1 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg1 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg1 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg1 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg1 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg1 + ")" }} class="i"></div>

        <div class="h">
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  );
}
