import React, { useState } from "react";

export default function App({ text, name, fbimg }) {
  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  return (
    <div>
      <div>
        <center>
          <div
            style={{
              width: "600px",
              height: "800px",
              display: "block",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundImage: "url(" + fbimg + ")",
              border: "20px solid #e90606",
              boxShadow: "inset 0 0 0 2px #ffffff",
              marginBottom: "20px",
            }}
          >
            <div style={{ textAlign: "right" }}>
              {" "}
              <p
                style={{
                  color: "#000",
                  marginTop: "-20px",
                  fontWeight: "bold",
                }}
              >
                {date}
              </p>
            </div>

            <img
              style={{ width: "85%", marginTop: "2%" }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Time_Magazine_logo.svg/1280px-Time_Magazine_logo.svg.png"
              alt="time"
            />

            <div
              style={{
                marginLeft: "2%",
                marginRight: "2%",
                marginTop: "20%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  float: "left",
                  textAlign: "left",
                  width: "45%",
                  overflow: "hidden",
                }}
              >
                <h1
                  style={{
                    color: "#ffffff",
                    fontSize: "2.2rem",
                    fontFamily: "Times New Roman",
                    fontWeight: "500",
                    marginBottom: "0",
                    lineHeight: "1",
                  }}
                >
                  THE
                </h1>
                <h1
                  style={{
                    color: "#ffffff",
                    fontSize: "2.2rem",
                    fontFamily: "Times New Roman",
                    fontWeight: "500",
                    lineHeight: "1",
                    borderBottom: "2px solid ",
                    paddingBottom: "10px",
                    marginBottom: "2px",
                  }}
                >
                  {text}
                </h1>
                <h1
                  style={{
                    color: "#e9e77e",
                    fontSize: "2.2rem",
                    fontFamily: "Times New Roman",
                    fontWeight: "500",
                    lineHeight: "1",
                    borderTop: "2px solid #ffffff",
                  }}
                >
                  {name}
                </h1>
              </div>
              <div style={{ float: "right", textAlign: "right" }}>
                <h1
                  style={{
                    color: "#e9e77e",
                    fontSize: "2rem",
                    fontFamily: "Roboto Slab",
                    fontWeight: "500",
                    marginBottom: "5px",
                    transform: "scale(1,1.5)",
                  }}
                >
                  HOT
                </h1>
                <h1
                  style={{
                    color: "#e90606",
                    fontSize: "3rem",
                    fontFamily: "Roboto Slab",
                    fontWeight: "500",
                    marginBottom: "10px",
                    transform: "scale(1,1.4)",
                    WebkitTextStroke: "1px #ffffff",
                  }}
                >
                  BUZZ
                </h1>
                <img
                  style={{
                    marginTop: "2%",
                    width: "80px",
                    backgroundColor: "#ffffff",
                  }}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/UPC-A-036000291452.svg/1200px-UPC-A-036000291452.svg.png"
                  alt="time"
                />
              </div>
            </div>
          </div>
        </center>
      </div>
    </div>
  );
}
