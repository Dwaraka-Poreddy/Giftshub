import React, { useState, useEffect } from "react";
import NewsPaper from "../NewsPaper/NewsPaper";
import firebase from "../firebase";
import HeaderBtn from "../Studio/HeaderBtn";
import domtoimage from "dom-to-image-more";
import html2canvas from "html2canvas";
import { Link } from "react-router-dom";
import GetAppIcon from "@material-ui/icons/GetApp";
function LiveNewsPaperPage({ match }) {
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
  function handleMemeDownlod(el) {
    var canvas = document.getElementById("newspaper");
    html2canvas(canvas).then(function (canvas) {
      domtoimage
        .toBlob(document.getElementById("newspaper"))

        .then(function (base64image) {
          console.log();
          window.saveAs(base64image, "NewsPaper");
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
        <div id="newspaper" style={{ flex: "0.8" }}>
          <NewsPaper fbimg={fbimg} head={head} para={para} />
        </div>
      </div>
    </div>
  );
}

export default LiveNewsPaperPage;
