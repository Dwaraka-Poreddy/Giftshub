import React, { useState, useEffect } from "react";
import "./ThreeDCarousel.css";

export default function ThreeDCarousel({
  fbimg1,
  fbimg2,
  fbimg3,
  fbimg4,
  fbimg5,
  fbimg6,
}) {
  const [radius, setradius] = useState(240);
  const [ospinanimation, setospinanimation] = useState();
  var autoRotate = true; // auto rotate or not
  var rotateSpeed = -60; // unit: seconds/360 degrees
  setTimeout(init, 100);

  var odrag = document.getElementById("drag-container");
  var ospin = document.getElementById("spin-container");
  var aImg = document.getElementsByClassName("imgcls");
  var aEle = [...aImg];

  function init(delayTime) {
    for (var i = 0; i < aEle.length; i++) {
      aEle[i].style.transform =
        "rotateY(" +
        i * (360 / aEle.length) +
        "deg) translateZ(" +
        radius +
        "px)";
      aEle[i].style.transition = "transform 1s";
      aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + "s";
    }
  }

  function applyTranform(obj) {
    // Constrain the angle of camera (between 0 and 180)
    if (tY > 180) tY = 180;
    if (tY < 0) tY = 0;

    // Apply the angle
    obj.style.transform = "rotateX(" + -tY + "deg) rotateY(" + tX + "deg)";
  }

  function playSpin(yes) {
    ospin.style.animationPlayState = yes ? "running" : "paused";
  }

  var desX = 0,
    desY = 0,
    tX = 0,
    tY = 10;

  // setup events
  document.onpointerdown = function (e) {
    clearInterval(odrag.timer);
    e = e || window.event;
    var sX = e.clientX,
      sY = e.clientY;

    this.onpointermove = function (e) {
      e = e || window.event;
      var nX = e.clientX,
        nY = e.clientY;
      desX = nX - sX;
      desY = nY - sY;
      tX += desX * 0.1;
      tY += desY * 0.1;
      applyTranform(odrag);
      sX = nX;
      sY = nY;
    };

    this.onpointerup = function (e) {
      odrag.timer = setInterval(function () {
        desX *= 0.95;
        desY *= 0.95;
        tX += desX * 0.1;
        tY += desY * 0.1;
        applyTranform(odrag);
        playSpin(false);
        if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
          clearInterval(odrag.timer);
          playSpin(true);
        }
      }, 17);
      this.onpointermove = this.onpointerup = null;
    };

    return false;
  };

  document.onmousewheel = function (e) {
    e = e || window.event;
    var d = e.wheelDelta / 20 || -e.detail;
    setradius(radius + d);
    init(1);
  };

  return (
    <div className="App">
      <div id="drag-container">
        <div style={{ width: "120px", height: "170px" }} id="spin-container">
          <img className="imgcls" src={fbimg1} alt="" />
          <img className="imgcls" src={fbimg2} alt="" />
          <img className="imgcls" src={fbimg3} alt="" />
          <img className="imgcls" src={fbimg4} alt="" />
          <img className="imgcls" src={fbimg5} alt="" />
          <img className="imgcls" src={fbimg6} alt="" />

          <img
            className="imgcls"
            src="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />

          <p>3D Tiktok Carousel</p>
        </div>

        <div
          style={{ height: radius * 3 + "px", width: radius * 3 + "px" }}
          id="ground"
        ></div>
      </div>
    </div>
  );
}
