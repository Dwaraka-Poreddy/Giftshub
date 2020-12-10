import React, { useState } from "react";

function NewsPaper({ head, para, fbimg }) {
  return (
    <div>
      <div style={{ display: "flex" }}>
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
                    fontSize: "45px",
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
