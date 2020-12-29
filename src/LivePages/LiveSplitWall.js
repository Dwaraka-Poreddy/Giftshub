import React, { useState, useEffect } from "react";
import SplitWallImage from "../SplitWallImage/SplitWallImage";
import Loader from "react-loader-spinner";
import firebase from "../firebase";
import { Link } from "react-router-dom";

export default function LiveSplitWall({ match }) {
  const [fbimg, setfbimg] = useState("");
  const [loading, setloading] = useState(false);
  useEffect(async () => {
    setloading(true);
    const todoRef = await firebase
      .database()
      .ref("/SplitWall/" + match.params.slug)
      .once("value")
      .then((snapshot) => {
        var img = snapshot.val().url;
        setfbimg(img);
      });
  }, []);
  return (
    <div style={{ backgroundColor: "#70cff3", height: "100vh" }}>
      <br />
      <br />
      <div style={{ backgroundColor: "#70cff3" }}>
        <div style={{ display: "flex" }}>
          <div style={{ flex: "0.15" }}></div>
          <div style={{ flex: "0.7" }}>
            {loading ? (
              <Loader
                type="BallTriangle"
                color="#00BFFF"
                height={100}
                width={100}
              />
            ) : (
              <SplitWallImage fbimg={fbimg} />
            )}
          </div>
          <div style={{ flex: "0.15" }}></div>
        </div>
      </div>
    </div>
  );
}
