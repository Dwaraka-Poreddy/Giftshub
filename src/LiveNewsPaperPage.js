import React, { useState, useEffect } from "react";
import NewsPaper from "./NewsPaper";
import firebase from "./firebase";
import { Link } from "react-router-dom";
function LiveAnimatedFramePage({ match }) {
  const [fbimg, setfbimg] = useState("");
  const [head, sethead] = useState("");
  const [para, setpara] = useState("");

  useEffect(() => {
    const todoRef = firebase
      .database()
      .ref("/NewsPaper/" + match.params.slug)
      .once("value")
      .then((snapshot) => {
        var img = snapshot.val().url;
        setfbimg(img);
        var head = snapshot.val().head;
        sethead(head);
        var para = snapshot.val().para;
        setpara(para);
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
      <div style={{ display: "flex" }}>
        <div style={{ flex: "0.1" }}></div>
        <div style={{ flex: "0.8" }}>
          <NewsPaper fbimg={fbimg} head={head} para={para} />
        </div>
      </div>
    </div>
  );
}

export default LiveAnimatedFramePage;
