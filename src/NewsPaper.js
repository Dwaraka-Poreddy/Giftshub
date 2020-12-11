import React, { useState } from "react";

function NewsPaper({ head, para, fbimg, startDate }) {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div style={{ backgroundColor: "#FFFFFF" }} id="newsPaper">
          {/* <div>
            <img
              style={{
                width: "100%",
              }}
              src={require("../src/Images/Heading.png")}
              alt="Heading"
            />
          </div> */}
          <div>
            <img
              style={{
                width: "100%",
              }}
              src={require("../src/Images/white.png")}
              alt="Heading"
            />
          </div>
          <div style={{ display: "flex" }}>
            <div>
              <img
                style={{
                  width: "100%",
                }}
                src={require("../src/Images/the.png")}
                alt="Heading"
              />
            </div>
            <div style={{ display: "block" }}>
              <div
                style={{
                  fontFamily: "Roboto Slab', serif",
                  fontWeight: "600",
                  fontSize: "12px",
                }}
              >
                {" "}
                Wednesday, December 12, 2020
                {/* {new Date(startDate).toString()} */}
                {/* {startDate.toString} */}
                {/* <p style={{ fontSize: "15px" }}>{startDate}</p> */}
              </div>
              <div>
                <img
                  style={{
                    width: "80%",
                    marginLeft: "10px",
                    marginRight: "px",
                  }}
                  src={require("../src/Images/logo1.png")}
                  alt="Heading"
                />
              </div>
            </div>
            <div>
              <img
                style={{
                  width: "100%",
                }}
                src={require("../src/Images/Hindu.png")}
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
                src={require("../src/Images/tileLeft.png")}
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
                src={require("../src/Images/tileRight1.png")}
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
                src={require("../src/Images/ribbon.png")}
                alt="Heading"
              />
            </div>
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
                    fontSize: "38px",
                    fontFamily: "oxford",
                    fontWeight: "500",
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
                  src={fbimg}
                  alt="MainImage"
                />

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
    </div>
  );
}

export default NewsPaper;
