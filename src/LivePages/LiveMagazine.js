import React, { useState, useEffect } from "react";
import Magazine from "../Magazine/Magazine";
import firebase from "../firebase";
import HeaderBtn from "../Studio/HeaderBtn";
import domtoimage from "dom-to-image-more";
import html2canvas from "html2canvas";
import { Link } from "react-router-dom";
import GetAppIcon from "@material-ui/icons/GetApp";
import Loader from "react-loader-spinner";
function LiveMagazine({ match }) {
  const [fbimg, setfbimg] = useState("");
  const [text, settext] = useState("");
  const [name, setname] = useState("");
  const [loading, setloading] = useState(false);
  useEffect(async () => {
    setloading(true);
    const todoRef = await firebase
      .database()
      .ref("/Magazine/" + match.params.slug)
      .once("value")
      .then((snapshot) => {
        var img = snapshot.val().url;
        setfbimg(img);
        var text = snapshot.val().text;
        settext(text);
        var name = snapshot.val().name;
        setname(name);
      });
    setloading(false);
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
          {loading ? (
            <Loader
              type="BallTriangle"
              color="#00BFFF"
              height={100}
              width={100}
            />
          ) : (
            <Magazine fbimg={fbimg} text={text} name={name} />
          )}
        </div>
      </div>
    </div>
  );
}

export default LiveMagazine;
