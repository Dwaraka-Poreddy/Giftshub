import React, { useState } from "react";
import "./AnimatedFrame.css";

export default function AnimatedFrame({ fbimg }, { head1 }) {
  const [fbimg1, setfbimg1] = useState(
    "https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/images%2FMagazine.jpg6f345292-7a7e-4cb9-bd0e-defd03d91f32?alt=media&token=0a638603-5d5b-4031-aff5-78dd9aff85b6"
  );
  const [fbimg2, setfbimg2] = useState(
    "http://unsplash.imgix.net/reserve/de9uL9L7RSmzV4SAoAO5_Lauren%20and%20Winona%20Under%20a%20pass-1.jpg?fit=crop&fm=jpg&h=1500&q=75&w=2400"
  );
  return (
    <div className="App">
      <div style={{ backgroundImage: "url(" + fbimg + ")" }} class="w">
        <div style={{ backgroundImage: "url(" + fbimg2 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg2 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg2 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg2 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg2 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg2 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg2 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg2 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg2 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg2 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg2 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg2 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg2 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg2 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg2 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg2 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg2 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg2 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg2 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg2 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg2 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg2 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg2 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg2 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg2 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg2 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg2 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg2 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg2 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg2 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg2 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg2 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg2 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg2 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg2 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg2 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg2 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg2 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg2 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg2 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg2 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg2 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg2 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg2 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg2 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg2 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg2 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg2 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg2 + ")" }} class="i"></div>
        <div style={{ backgroundImage: "url(" + fbimg2 + ")" }} class="i"></div>

        <div class="h">
          <h1>{head1}</h1>
        </div>
      </div>
    </div>
  );
}
