import React, { useState, useEffect } from "react";
import AnimatedFrame from "../AnimatedFrames/AnimatedFrame";
import firebase from "../firebase";
import { Link } from "react-router-dom";
function LiveAnimatedFramePage({ match }) {
  const [fbimg1, setfbimg1] = useState("");
  const [fbimg2, setfbimg2] = useState("");
  const [title, settitle] = useState("");

  useEffect(() => {
    const todoRef = firebase
      .database()
      .ref("/AnimatedFrame/" + match.params.slug)
      .once("value")
      .then((snapshot) => {
        var img1 = snapshot.val().url1;
        setfbimg1(img1);
        var img2 = snapshot.val().url2;
        setfbimg2(img2);
        var title = snapshot.val().title;
        settitle(title);
      });
  }, []);

  return (
    <div>
      <header
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
      </header>
      <br />
      <br />

      <AnimatedFrame fbimg1={fbimg1} fbimg2={fbimg2} title={title} />
    </div>
  );
}

export default LiveAnimatedFramePage;
