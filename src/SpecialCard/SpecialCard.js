import React from "react";
import "./SpecialCard.css";
function SpecialCard({ fbimg, head1, para, head2 }) {
  return (
    <div style={{ flex: "0.8", alignItems: "center" }}>
      <center>
        <div
          style={{
            backgroundImage: "url(" + fbimg + ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",

            overflow: "hidden",
          }}
          class="card"
        >
          <div class="img">
            {" "}
            <span style={{ backgroundImage: "url(" + fbimg + ")" }}></span>
            <span style={{ backgroundImage: "url(" + fbimg + ")" }}></span>
            <span style={{ backgroundImage: "url(" + fbimg + ")" }}></span>
            <span style={{ backgroundImage: "url(" + fbimg + ")" }}></span>
          </div>
          <div class="content">
            <h2>{head1}</h2>
            <h2>{head2} </h2>
            <h4>{para}</h4>
          </div>
        </div>
      </center>
    </div>
  );
}

export default SpecialCard;
