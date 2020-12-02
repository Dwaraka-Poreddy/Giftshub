import React from "react";
import "./SpecialCard.css";

export default function SplitWallImage() {
  return (
    <div className="splitwallimage">
      <section>
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/portrait.jpg"
          alt=""
        />
        <article>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </article>
      </section>
    </div>
  );
}
