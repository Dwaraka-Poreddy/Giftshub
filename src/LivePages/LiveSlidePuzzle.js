import React, { useState, useEffect } from "react";
import SlidePuzzle from "../SlidePuzzle/SlidePuzzle";
import SlidePuzzleAnswer from "../SlidePuzzle/SlidePuzzleAnswer";
import firebase from "../firebase";
import "./LiveSlidePuzzle.css";

import { Link } from "react-router-dom";
function LiveAnimatedFramePage({ match }) {
  const [fbimg, setfbimg] = useState("");

  useEffect(() => {
    const todoRef = firebase
      .database()
      .ref("/SlidePuzzle/" + match.params.slug)
      .once("value")
      .then((snapshot) => {
        var img = snapshot.val().url;
        setfbimg(img);
      });
  }, []);

  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      {/* <header
        style={{ backgroundColor: "#70cff3", color: "#ffffff" }}
        class="header-area header-sticky"
      >
        <div class="container">
          <div class="row">
            <div class="col-12">
              <nav class="main-nav">
                <Link class="logo" to="/">
                  Gifts Hub
                </Link>

                <ul class="nav">
                  <li class="scroll-to-section">
                    <a href="#welcome" class="active">
                      Home
                    </a>
                  </li>
                  <li class="scroll-to-section">
                    <a href="#about">Combo</a>
                  </li>
                  <li class="scroll-to-section">
                    <a href="#services">Services</a>
                  </li>
                </ul>
                <a href="#menu" class="menu-trigger">
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header> */}
      <div class="container-fluid">
        <br />

        <center>
          <h1 className="example">Four days to go !!!</h1>
        </center>
        <br />
        <br />
        <div class="row">
          <div class="col-sm-2"></div>
          <div style={{ paddingLeft: "5px" }} class="col-sm-4">
            {" "}
            <center>
              <SlidePuzzle fbimg={fbimg} />
            </center>
          </div>
          <div style={{ paddingLeft: "5px" }} class="col-sm-4">
            <SlidePuzzleAnswer fbimg={fbimg} />
          </div>
          <div class="col-sm-2"></div>
        </div>
      </div>
      {/* <br />
      <br />
      <div style={{ backgroundColor: "#70cff3" }}>
        <div style={{ display: "flex" }}>
          <div style={{ flex: "0.2" }}></div>
          <div style={{ flex: "0.3" }}>
            <SlidePuzzle fbimg={fbimg} />
          </div>
          <div style={{ flex: "0.05" }}></div>
          <div style={{ flex: "0.3", marginTop: "5%" }}>
            <SlidePuzzleAnswer fbimg={fbimg} />
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default LiveAnimatedFramePage;
