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

const secuseStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(0)
    }
  },
  input: {
    display: "none"
  }
}));

export default function App() {
  const [isMousedOver, setIsMousedOver] = useState(false);
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
    <div>
      <div className="allheader">
        <div className="header">
          <div className="header__left">
            <Link to="/">
              {/* <Avatar className="header__logo" alt="logo" src="" /> */}
              <Btn className="header__leftStepper" title="Main page" />
            </Link>
          </div>

          <p>GiftCard Generator</p>
          <div style={{ display: "flex" }} className="header__right">
            <Btn
              handleClick={() => handleMemeDownlod(this)}
              title="Export Image"
            />
          </div>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ width: "7%" }}></div>
        <div
          style={{ backgroundColor: "#FFFFFF", width: "86%" }}
          id="newsPaper"
        >
          <div>
            <img
              style={{
                width: "100%"
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
                backgroundColor: "#ffffff"
              }}
            >
              <div>
                <h1
                  style={{
                    fontSize: "4.8rem",
                    fontFamily: "oxford",
                    fontWeight: "400",
                    margin: "5px"
                  }}
                >
                  <EditableText text=" World's Best Couple" />
                </h1>
                <input
                  accept="image/* "
                  className={secclasses.input}
                  id="LocalfileInput"
                  name="LocalfileInput"
                  type="file"
                  onChange={(event) => {
                    setImgSource(
                      window.URL.createObjectURL(event.target.files[0])
                    );
                  }}
                />
                <label htmlFor="LocalfileInput">
                  <img
                    onMouseEnter={() => setIsMousedOver(true)}
                    onMouseLeave={() => setIsMousedOver(false)}
                    style={{
                      width: "100%",
                      maxHeight: "550px",
                      border: isMousedOver ? "2px dashed " : null
                    }}
                    src={imgSource}
                    alt="MainImage"
                  />
                </label>

                {/* <img
                style={{ width: "100%" }}
                src="https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/images%2Fmatheus-ferrero-ODMNSWjel_I-unsplash.jpg?alt=media&token=a08aa147-491e-49cd-9061-d32abb09f6b0"
                alt="MainImage"
              /> */}
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
    </div>
  );
}
