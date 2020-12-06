import React, { useState, useEffect } from "react";
import Magazine from "./Magazine";
import firebase from "./firebase";
import HeaderBtn from "./HeaderBtn";
import domtoimage from "dom-to-image-more";
import html2canvas from "html2canvas";
import { Link } from "react-router-dom";
import GetAppIcon from "@material-ui/icons/GetApp";
function LiveMagazinePage({ match }) {
  const [fbimg, setfbimg] = useState("");
  const [head1, sethead1] = useState("");
  const [head2, sethead2] = useState("");

  useEffect(() => {
    const todoRef = firebase
      .database()
      .ref("/Magazine/" + match.params.slug)
      .once("value")
      .then((snapshot) => {
        var img = snapshot.val().url;
        setfbimg(img);
        var head1 = snapshot.val().head1;
        sethead1(head1);
        var head2 = snapshot.val().head2;
        sethead2(head2);
      });
  }, []);

  function handleMemeDownlod(el) {
    var canvas = document.getElementById("magazine");
    html2canvas(canvas).then(function (canvas) {
      domtoimage
        .toBlob(document.getElementById("magazine"))

        .then(function (base64image) {
          console.log();
          window.saveAs(base64image, "magazine");
        });
    });
  }

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
                {/* <li>
                  <center>
                    <div
                      style={{
                        width: "200px",
                      }}
                    >
                      <HeaderBtn
                        handleClick={() => {
                          handleMemeDownlod(this);
                        }}
                        Icon={GetAppIcon}
                        title="Download image"
                      />
                    </div>
                  </center>
                </li> */}
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
          <Magazine fbimg={fbimg} head1={head1} head2={head2} />
        </div>
      </div>
    </div>
  );
}

export default LiveMagazinePage;
