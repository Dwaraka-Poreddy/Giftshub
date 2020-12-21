import React, { useState, useEffect } from "react";
import Collage from "../Collage/Collage";
import Loader from "react-loader-spinner";
import firebase from "../firebase";
import { Link } from "react-router-dom";
export default function LiveCollagePage({ match }) {
  const [loading, setloading] = useState(false);
  const [fbimg1, setfbimg1] = useState("");
  const [fbimg2, setfbimg2] = useState("");
  const [fbimg3, setfbimg3] = useState("");
  const [fbimg4, setfbimg4] = useState("");
  const [fbimg5, setfbimg5] = useState("");
  const [fbimg6, setfbimg6] = useState("");
  const [fbimg7, setfbimg7] = useState("");
  const [fbimg8, setfbimg8] = useState("");
  const [fbimg9, setfbimg9] = useState("");
  useEffect(async () => {
    setloading(true);
    const todoRef = await firebase
      .database()
      .ref("/Collage/" + match.params.slug)
      .once("value")
      .then((snapshot) => {
        var img1 = snapshot.val().url1;

        setfbimg1(img1);
        var img2 = snapshot.val().url2;
        setfbimg2(img2);
        var img3 = snapshot.val().url3;
        setfbimg3(img3);
        var img4 = snapshot.val().url4;
        setfbimg4(img4);
        var img5 = snapshot.val().url5;
        setfbimg5(img5);
        var img6 = snapshot.val().url6;
        setfbimg6(img6);
        var img7 = snapshot.val().url7;
        setfbimg7(img7);
        var img8 = snapshot.val().url8;
        setfbimg8(img8);
        var img9 = snapshot.val().url9;
        setfbimg9(img9);
      });
    setloading(false);
  }, []);
  const func = () => {
    return (
      <Collage
        fbimg1={fbimg1}
        fbimg2={fbimg2}
        fbimg3={fbimg3}
        fbimg4={fbimg4}
        fbimg5={fbimg5}
        fbimg6={fbimg6}
        fbimg7={fbimg7}
        fbimg8={fbimg8}
        fbimg9={fbimg9}
      />
    );
  };
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
      <div>
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
              func()
            )}
          </div>
          <div style={{ flex: "0.15" }}></div>
        </div>
      </div>
    </div>
  );
}
