import React, { useState } from "react";
import { Link } from "react-router-dom";
import Btn from "./Btn";
import HeaderBtn from "./HeaderBtn";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
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
      margin: theme.spacing(0),
    },
  },
  input: {
    display: "none",
  },
}));

export default function App() {
  const [imgSource, setImgSource] = useState(
    require("../src/Images/Magazine.png")
  );
  const secclasses = secuseStyles();
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  function handleMemeDownlod(el) {
    var canvas = document.getElementById("magazine");
    html2canvas(canvas).then(function (canvas) {
      domtoimage
        .toBlob(document.getElementById("magazine"))

        .then(function (base64image) {
          window.saveAs(base64image, "magazine");
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
            <input
              accept="image/* "
              className={secclasses.input}
              id="LocalfileInput"
              name="LocalfileInput"
              // multiple
              type="file"
              onChange={(event) => {
                setImgSource(window.URL.createObjectURL(event.target.files[0]));
                console.log(window.URL.createObjectURL(event.target.files[0]));
              }}
            />
            <label htmlFor="LocalfileInput">
              <HeaderBtn Icon={ViewModuleIcon} title="Background Image" />
            </label>
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
      <div style={{ margin: "10px auto" }}>
        <center>
          <div
            id="magazine"
            style={{
              width: "650px",
              height: "850px",
              display: "block",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundImage: "url(" + imgSource + ")",
              border: "20px solid #e90606",
              marginBottom: "20px",
            }}
          >
            <div style={{ textAlign: "right" }}>
              {" "}
              <p
                style={{
                  color: "#000",
                  marginTop: "-15px",
                  fontWeight: "bold",
                }}
              >
                {date}
              </p>
            </div>

            <img
              style={{ width: "50%", marginTop: "5%" }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Time_Magazine_logo.svg/1280px-Time_Magazine_logo.svg.png"
              alt="time"
            />
            <div style={{ display: "flex" }}>
              <div
                style={{
                  textAlign: "left",
                  marginLeft: "2%",
                  marginTop: "90%",
                  flex: 0.5,
                }}
              >
                <h1
                  style={{
                    color: "#ffffff",

                    fontSize: "40px",
                    fontFamily: "Roboto Slab",
                    fontWeight: "600",
                  }}
                >
                  <EditableText text="THE" />
                </h1>
                <h1
                  style={{
                    color: "#eeca00",
                    marginTop: "2%",
                    fontSize: "40px",
                    fontFamily: "Roboto Slab",
                    fontWeight: "600",
                  }}
                >
                  <EditableText text=" UNSTOPPABLE" />
                </h1>
              </div>
              <div
                style={{
                  color: "#fff",
                  marginTop: "45%",
                  textAlign: "right",
                  marginRight: "2%",
                  fontFamily: "sans-serif",
                  fontSize: "0.75em",
                  flex: 0.5,
                }}
              >
                <h1 style={{ color: "#e90606" }}>CRICKET</h1>
                <h1>WHY CAN'T WE</h1>
                <h1>PLAY SPIN</h1>
                <h1>SPIN</h1>
                <h1>ANYMORE?</h1>
                {/* <h1 style={{ color: "#e90606" }}>CINEMA</h1>
                <h1>DEATH BY</h1>
                <h1>ICE CREAM</h1>
                <h1>IN PAKISTAN</h1> */}
                <hr
                  style={{ width: "50%", marginLeft: "48%", marginRight: "2%" }}
                />
                <h1 style={{ color: "#e90606" }}>MUSIC</h1>
                <h1>END OF THE</h1>
                <h1>USTAD ERA</h1>
                <h1>THE</h1>

                <h1>LONELINESS OF</h1>
                <hr
                  style={{ width: "28%", marginLeft: "70%", marginRight: "2%" }}
                />
                <h1 style={{ fontSize: "4em", color: "#e90606" }}>
                  {" "}
                  <EditableText text="MS" />
                </h1>
                <h1 style={{ fontSize: "4em", color: "#e90606" }}>
                  {" "}
                  <EditableText text="DHONI" />
                </h1>
              </div>
            </div>
          </div>
        </center>
      </div>
    </div>
  );
}
