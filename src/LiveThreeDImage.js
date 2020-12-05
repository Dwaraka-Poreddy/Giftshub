import React, { useState, useEffect } from "react";
import ThreeDImage from "./ThreeDImage";
import Nav from "./Nav";
import firebase from "./firebase";

export default function LiveThreeDImage({ match }) {
  const [fbimg, setfbimg] = useState("");
  useEffect(() => {
    const todoRef = firebase
      .database()
      .ref("/ThreeDImage/" + match.params.slug)
      .once("value")
      .then((snapshot) => {
        var img = snapshot.val().url;
        setfbimg(img);
      });
  }, []);
  return (
    <div>
      <Nav />
      <div style={{ marginTop: "5px" }}>
        <ThreeDImage image={fbimg} />
      </div>
    </div>
  );
}
