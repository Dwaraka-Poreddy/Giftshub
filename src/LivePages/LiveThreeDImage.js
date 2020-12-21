import React, { useState, useEffect } from "react";
import ThreeDImage from "../ThreeDImage/ThreeDImage";
import Loader from "react-loader-spinner";
import firebase from "../firebase";
import { Link } from "react-router-dom";
export default function LiveThreeDImage({ match }) {
  const [fbimg, setfbimg] = useState("");
  const [firstcol, setfirstcol] = useState("");
  const [secondcol, setsecondcol] = useState("");
  const [loading, setloading] = useState(false);
  useEffect(async () => {
    setloading(true);
    const todoRef = await firebase
      .database()
      .ref("/ThreeDImage/" + match.params.slug)
      .once("value")
      .then((snapshot) => {
        var img = snapshot.val().url;
        setfbimg(img);
        var col1 = snapshot.val().firstcol;
        setfirstcol(col1);
        var col2 = snapshot.val().secondcol;
        setsecondcol(col2);
      });
    setloading(false);
  }, []);
  return (
    <div style={{ backgroundColor: "#70cff3", height: "100vh" }}>
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
      <div style={{ backgroundColor: "#70cff3" }}>
        <div style={{ display: "flex" }}>
          <div style={{ flex: "0.15" }}></div>
          <div style={{ flex: "0.7" }}>
            {loading ? (
              <Loader
                type="BallTriangle"
                color="#00BFFF"
                height={100}
                width={100}
              />
            ) : (
              <ThreeDImage
                firstcol={firstcol}
                secondcol={secondcol}
                fbimg={fbimg}
              />
            )}
          </div>
          <div style={{ flex: "0.15" }}></div>
        </div>
      </div>
    </div>
  );
}
