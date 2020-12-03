import React from "react";

export default function SplitWallImage() {
  return (
    <div>
      <section
        style={{
          width: "80%",
          margin: "0 auto",
          lineHeight: "0",
          position: "relative",
        }}
      >
        <img
          style={{ width: "60%", marginTop: "10%" }}
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/portrait.jpg"
          alt=""
        />
        <article
          style={{
            position: "absolute",
            top: "0",
            width: "100%",
            backgroundColor: "white",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gridGap: "20px",
            mixBlendMode: "lighten",
          }}
        >
          <div style={{ background: "black", height: "25.3vw" }}></div>
          <div
            style={{ background: "black", height: "25.3vw", gridColumn: "2/4" }}
          ></div>
          <div style={{ background: "black", height: "25.3vw" }}></div>
          <div style={{ background: "black", height: "25.3vw" }}></div>
          <div style={{ background: "black", height: "25.3vw" }}></div>
        </article>
      </section>
    </div>
  );
}
