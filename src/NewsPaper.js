import React, { useState } from "react";
import { Link } from "react-router-dom";
import Btn from "./Btn";
import { Avatar } from "@material-ui/core";
import Canvas from "react-canvas-js";
import domtoimage from "dom-to-image-more";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import EditableText from "./EditableText";
import { makeStyles } from "@material-ui/core/styles";
import HeaderBtn from "./HeaderBtn";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import InputBase from "@material-ui/core/InputBase";
import CreateIcon from "@material-ui/icons/Create";
import GetAppIcon from "@material-ui/icons/GetApp";
const secuseStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(0),
    },
  },
  input: {
    display: "none",
  },
}));

export default function App() {
  const [head, sethead] = useState(
    "Ms. Super Girl wins the coolest  friend of the year award 2020 "
  );
  const [para, setpara] = useState("It's getting closer, 5 days to go !!!");
  const [imgSource, setImgSource] = useState(
    require("../src/Images/MainImage.png")
  );
  const secclasses = secuseStyles();

  function handleMemeDownlod(el) {
    var canvas = document.getElementById("newsPaper");
    html2canvas(canvas).then(function (canvas) {
      domtoimage
        .toBlob(document.getElementById("newsPaper"))

        .then(function (base64image) {
          window.saveAs(base64image, "newspaper");
        });
    });
  }
  return (
    <div style={{ backgroundColor: "#70cff3" }}>
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
      <br />
      <br />

      <div style={{ display: "flex" }}>
        <div style={{ flex: "0.05" }}></div>
        <div style={{ flex: "0.7" }}>
          <div style={{ backgroundColor: "#FFFFFF" }} id="newsPaper">
            <div>
              <img
                style={{
                  width: "100%",
                }}
                src={require("../src/Images/Heading.png")}
                alt="Heading"
              />
            </div>
            <div style={{ display: "flex" }}>
              <img
                style={{ width: "15%" }}
                src={require("../src/Images/Left.png")}
                alt="Left"
              />
              <div
                style={{
                  width: "50%",
                  textAlign: "center",
                  backgroundColor: "#ffffff",
                }}
              >
                <div>
                  <h1
                    style={{
                      textAlign: "justify",
                      fontSize: "40px",
                      fontFamily: "oxford",
                      fontWeight: "400",
                      margin: "5px",
                    }}
                  >
                    {head}
                  </h1>

                  <img
                    style={{
                      width: "100%",
                      maxHeight: "550px",
                    }}
                    src={imgSource}
                    alt="MainImage"
                  />

                  {/* <img
                style={{ width: "100%" }}
                src="https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/images%2Fmatheus-ferrero-ODMNSWjel_I-unsplash.jpg?alt=media&token=a08aa147-491e-49cd-9061-d32abb09f6b0"
                alt="MainImage"
              /> */}
                  <h1
                    style={{
                      fontSize: "28px",
                      fontFamily: "oxford",
                      fontWeight: "400",
                      margin: "10px 5px",
                    }}
                  >
                    {para}
                  </h1>

                  <img
                    style={{ width: "100%" }}
                    src={require("../src/Images/Below.png")}
                    alt="Below"
                  />
                </div>
              </div>
              <img
                style={{ width: "35%" }}
                src={require("../src/Images/Right.png")}
                alt="Right"
              />
            </div>
            <div>
              <img
                style={{ width: "100%" }}
                src={require("../src/Images/Below1.png")}
                alt="Below1"
              />
              <img
                style={{ width: "100%" }}
                src={require("../src/Images/Below2.png")}
                alt="Below2"
              />
            </div>
          </div>
        </div>
        <div style={{ flex: "0.05" }}></div>
        <div
          style={{
            backgroundColor: "#009dd9",
            justifyContent: "center",
            alignItems: "center",
            flex: "0.2",
            height: "222vh",
          }}
        >
          <div style={{ marginTop: "50%", justifyContent: "center" }}>
            <input
              accept="image/* "
              className={secclasses.input}
              id="LocalfileInput"
              name="LocalfileInput"
              // multiple
              type="file"
              onChange={(event) => {
                setImgSource(window.URL.createObjectURL(event.target.files[0]));
              }}
            />
            <label htmlFor="LocalfileInput">
              <HeaderBtn Icon={ViewModuleIcon} title="Background Image" />
            </label>
            <div
              style={{ width: "80%", marginLeft: "10%" }}
              className="RightSideBar2__Btn"
            >
              <CreateIcon
                style={{
                  margin: "0 10px 0 5px",
                  color: "#ffffff",
                  fontSize: "large",
                }}
              />
              <InputBase
                className="RightSideBar2__Btn"
                multiline
                style={{
                  color: "#068dc0",
                  margin: "0",
                  backgroundColor: "#ffffff",
                  width: "100%",
                }}
                value={head}
                onChange={(e) => {
                  sethead(e.target.value);
                }}
              />
            </div>
            <div
              style={{ width: "80%", marginLeft: "10%" }}
              className="RightSideBar2__Btn"
            >
              <CreateIcon
                style={{
                  margin: "0 10px 0 5px",
                  color: "#ffffff",
                  fontSize: "large",
                }}
              />
              <InputBase
                className="RightSideBar2__Btn"
                multiline
                style={{
                  color: "#068dc0",
                  margin: "0",
                  backgroundColor: "#ffffff",
                  width: "100%",
                }}
                value={para}
                onChange={(e) => {
                  setpara(e.target.value);
                }}
              />
            </div>
            <center>
              <div style={{ width: "55%", marginTop: "20px" }}>
                <HeaderBtn
                  handleClick={() => {
                    handleMemeDownlod(this);
                  }}
                  Icon={GetAppIcon}
                  title="Download Image"
                />
              </div>
            </center>
          </div>
        </div>
      </div>
      <footer style={{ backgroundColor: "#70cff3", color: "#ffffff" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12 col-sm-12">
              <p className="copyright">
                Copyright © 2020 Gift's Hub Company . Design:{" "}
                <a rel="nofollow" href="https://templatemo.com">
                  Gift's Hub
                </a>
              </p>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12">
              <ul className="social">
                <li>
                  <a href="#">
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-rss" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-dribbble" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
