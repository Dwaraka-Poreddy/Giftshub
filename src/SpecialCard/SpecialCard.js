import React from "react";
import "./SpecialCard.css";
function SpecialCard({ fbimg, head1, para, head2 }) {
  return (
    <div style={{ flex: "0.8", alignItems: "center" }}>
      <br />
      <br />
      <div class="container">
        <center>
          <h1>Hover the card below !!!</h1>
        </center>
        <div class="row">
          <div class="col "></div>
          <div style={{ paddingLeft: "25px" }} class="col ">
            <div
              style={{
                backgroundImage: "url(" + fbimg + ")",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",

                overflow: "hidden",
              }}
              class="specialcard"
            >
              <div class="img">
                {" "}
                <span style={{ backgroundImage: "url(" + fbimg + ")" }}></span>
                <span style={{ backgroundImage: "url(" + fbimg + ")" }}></span>
                <span style={{ backgroundImage: "url(" + fbimg + ")" }}></span>
                <span style={{ backgroundImage: "url(" + fbimg + ")" }}></span>
              </div>
              <div class="specialcontent">
                <h2
                  style={{
                    marginTop: "10px",
                    marginBottom: "0",
                    color: "#ffffff",
                  }}
                >
                  {head1}
                </h2>
                <h2
                  style={{
                    marginTop: "15px",
                    fontFamily: "East Sea Dokdo cursive",
                    marginBottom: "20px",
                    color: "#ffffff",
                  }}
                >
                  {head2}
                </h2>
                <h4
                  style={{
                    fontFamily: "East Sea Dokdo cursive",
                    color: "#ffffff",
                  }}
                >
                  {para}
                </h4>
              </div>
            </div>
          </div>
          <div class="col "></div>
        </div>
      </div>
      ;
    </div>
  );
}

export default SpecialCard;
