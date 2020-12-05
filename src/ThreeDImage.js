import React from "react";
import "./ThreeDImage.css";

export default function ThreeDImage({ image }) {
  return (
    <div
      style={{
        backgroundColor: "linear-gradient(125deg, #302015 0%, #1c1008 100%)",
      }}
    >
      <div style={{ paddingTop: "5%" }} className="ThreeDImage">
        <div class="tdexample">
          <div class="tdblock">
            <div style={{ overflow: "hidden" }} class="tdside -tdmain">
              <img
                src={image}
                alt=""
                style={{ height: "100%", marginLeft: "-10%" }}
              />
            </div>
            <div style={{ overflow: "hidden" }} class="tdside -tdleft">
              <img src={image} alt="" style={{ height: "100%" }} />
            </div>
          </div>
          <div class="tdblock">
            <div style={{ overflow: "hidden" }} class="tdside -tdmain">
              <img
                src={image}
                alt=""
                style={{ height: "100%", marginLeft: "-75%" }}
              />
            </div>
            <div style={{ overflow: "hidden" }} class="tdside -tdleft">
              <img
                src={image}
                alt=""
                style={{
                  height: "100%",
                  marginLeft: "-277%",
                  marginTop: "-1.2%",
                }}
              />
            </div>
          </div>
          <div class="tdblock">
            <div style={{ overflow: "hidden" }} class="tdside -tdmain">
              <img
                src={image}
                alt=""
                style={{ height: "100%", marginLeft: "-245%" }}
              />
            </div>
            <div style={{ overflow: "hidden" }} class="tdside -tdleft">
              <img
                src={image}
                alt=""
                style={{
                  height: "100%",
                  marginLeft: "-1130%",
                  marginTop: "1%",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
