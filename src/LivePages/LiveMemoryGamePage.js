import React, { useState, useEffect } from "react";
import MemoryGame from "../MemoryGame/MemoryGame";
import Loader from "react-loader-spinner";
import firebase from "../firebase";
import { Link } from "react-router-dom";
export default function LiveMemoryGamePage({ match }) {
  const [fbimg1, setfbimg1] = useState("");
  const [fbimg2, setfbimg2] = useState("");
  const [fbimg3, setfbimg3] = useState("");
  const [fbimg4, setfbimg4] = useState("");
  const [fbimg5, setfbimg5] = useState("");
  const [fbimg6, setfbimg6] = useState("");
  const [bestscore, setbestscore] = useState("");
  const [loading, setloading] = useState(false);
  const [nscore, setnscore] = useState(0);

  const handleFireBaseUpload = (n) => {
    const todoRef = firebase.database().ref("MemoryGame/" + match.params.slug);
    const todo = {
      score: n,
    };
    todoRef.update(todo);
  };

  const setnewscore = async (e) => {
    setnscore(e);
    if (nscore < bestscore) {
      alert("you scored better than your previous one! keep playing");
      setbestscore(nscore);
      handleFireBaseUpload(e);
    }
  };
  useEffect(async () => {
    setloading(true);
    const todoRef = await firebase
      .database()
      .ref("/MemoryGame/" + match.params.slug)
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
        var scr = snapshot.val().score;
        setbestscore(scr);
      });
    setloading(false);
  }, []);
  return (
    <div style={{ backgroundColor: "#70cff3", height: "100vh" }}>
      <header
        style={{ backgroundColor: "#70cff3", color: "#ffffff" }}
        class="header-area header-sticky"
      >
        {/* {JSON.stringify(nscore)}
        {JSON.stringify(bestscore)} */}
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

      <div>
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-3"></div>
            <div class="col-lg-6">
              {loading ? (
                <Loader
                  type="BallTriangle"
                  color="#00BFFF"
                  height={100}
                  width={100}
                />
              ) : (
                <MemoryGame
                  fbimg1={fbimg1}
                  fbimg2={fbimg2}
                  fbimg3={fbimg3}
                  fbimg4={fbimg4}
                  fbimg5={fbimg5}
                  fbimg6={fbimg6}
                  setnewscore={setnewscore}
                />
              )}
            </div>
          </div>
          <div class="col-lg-3"></div>
        </div>
      </div>
    </div>
  );
}
