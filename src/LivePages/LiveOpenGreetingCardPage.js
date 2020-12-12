import React, { useState, useEffect } from "react";
import OpenGreetingCard from "../OpenGreetingCard/OpenGreetingCard";
import firebase from "../firebase";
import { Link } from "react-router-dom";
function LiveAnimatedFramePage({ match }) {
  const [fbimg, setfbimg] = useState("");
  const [text1, settext1] = useState("");
  const [text2, settext2] = useState("");
  const [maintext, setmaintext] = useState("e");

  useEffect(() => {
    const todoRef = firebase
      .database()
      .ref("/OpenGreetingCard/" + match.params.slug)
      .once("value")
      .then((snapshot) => {
        var img = snapshot.val().url;
        setfbimg(img);

        var title1 = snapshot.val().text1;
        settext1(title1);
        var title2 = snapshot.val().text2;
        settext2(title2);
        var MainTitle = snapshot.val().maintext;
        setmaintext(MainTitle);
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

      <OpenGreetingCard
        fbimg={fbimg}
        text1={text1}
        text2={text2}
        maintext={maintext}
      />
    </div>
  );
}

export default LiveAnimatedFramePage;
