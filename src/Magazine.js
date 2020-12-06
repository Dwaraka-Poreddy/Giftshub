import React, { useState } from "react";

export default function App({ head1, head2, fbimg }) {
  // const [head1, sethead1] = useState("THE");
  // const [head2, setheas2] = useState("UNSTOPPABLE");
  // const [fbimg, setfbimg] = useState(require("../src/Images/Magazine.png"));

  var today = new Date();
  var date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  return (
    <div>
      <div>
        <center>
          <div
            style={{
              // width: "800px",
              // height: "1050px",
              display: "block",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundImage: "url(" + fbimg + ")",
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
                  {head1}
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
                  {head2}
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
                {/* <h1>SPIN</h1> */}
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
                <h1 style={{ fontSize: "4em", color: "#e90606" }}> MS</h1>
                <h1 style={{ fontSize: "4em", color: "#e90606" }}> DHONI</h1>
              </div>
            </div>
          </div>
        </center>
      </div>
    </div>
  );
}
