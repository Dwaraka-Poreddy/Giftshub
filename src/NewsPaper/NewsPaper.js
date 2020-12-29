import React, { useState } from "react";
import "./NewsPaper.css";
function NewsPaper({ head, para, fbimg, startDate }) {
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  // console.log(startDate, "startdate");
  // console.log(
  //   new Date(startDate).toLocaleDateString("en-US", options),
  //   "startdatetolocalestring"
  // );
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div style={{ backgroundColor: "#FFFFFF" }} id="newsPaper">
          <div>
            <img
              style={{
                width: "100%",
              }}
              src={require("../Images/white.png")}
              alt="Heading"
            />
          </div>
          <div style={{ display: "flex" }}>
            <div>
              <img
                style={{
                  width: "100%",
                }}
                src={require("../Images/the.png")}
                alt="Heading"
              />
            </div>
            <div style={{ display: "block" }}>
              <div>
                <p className="Newsdate">
                  {new Date(startDate).toLocaleDateString("en-US", options)}
                </p>
              </div>
              <div>
                <img
                  style={{
                    width: "80%",
                    marginLeft: "10px",
                    marginRight: "px",
                  }}
                  src={require("../Images/logo1.png")}
                  alt="Heading"
                />
              </div>
            </div>
            <div>
              <img
                style={{
                  width: "100%",
                }}
                src={require("../Images/Hindu.png")}
                alt="Heading"
              />
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div>
              <img
                style={{
                  width: "100%",
                }}
                src={require("../Images/tileLeft.png")}
                alt="Heading"
              />
            </div>
            <div>
              <img
                style={{
                  width: "90%",
                  marginLeft: "-40px",
                  marginTop: "1.65px",
                }}
                src={require("../Images/tileRight1.png")}
                alt="Heading"
              />
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div>
              <img
                style={{
                  width: "100%",
                }}
                src={require("../Images/ribbon.png")}
                alt="Heading"
              />
            </div>
          </div>{" "}
          <div style={{ display: "flex" }}>
            <img
              style={{ width: "15%" }}
              src={require("../Images/Left.png")}
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
                <h1 className="Newshead">{head}</h1>

                <img
                  style={{
                    width: "100%",
                    maxHeight: "550px",
                  }}
                  src={fbimg}
                  alt="MainImage"
                />

                <h2 className="Newspara">{para}</h2>

                <img
                  style={{ width: "100%" }}
                  src={require("../Images/Below.png")}
                  alt="Below"
                />
              </div>
            </div>
            <img
              style={{ width: "35%" }}
              src={require("../Images/Right.png")}
              alt="Right"
            />
          </div>
          <div>
            <img
              style={{ width: "100%" }}
              src={require("../Images/Below1.png")}
              alt="Below1"
            />
            <img
              style={{ width: "100%" }}
              src={require("../Images/Below2.png")}
              alt="Below2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsPaper;
