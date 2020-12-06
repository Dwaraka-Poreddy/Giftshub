import React, { useState, useEffect } from "react";
import SplitWallImage from "./SplitWallImage";
import Nav from "./Nav";
import firebase from "./firebase";

export default function LiveSplitWall({ match }) {
  const [fbimg, setfbimg] = useState("");
  useEffect(() => {
    const todoRef = firebase
      .database()
      .ref("/SplitWall/" + match.params.slug)
      .once("value")
      .then((snapshot) => {
        var img = snapshot.val().url;
        setfbimg(img);
      });
  }, []);
  return (
    <div>
      {/* <Nav /> */}
      <br />
      <br />
      <br />
      <div style={{ marginTop: "5px" }}>
        <SplitWallImage fbimg={fbimg} />
      </div>
    </div>
  );
}
