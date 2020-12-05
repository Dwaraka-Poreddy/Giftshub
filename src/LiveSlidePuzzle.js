import React, { useState, useEffect } from "react";
import SlidePuzzle from "./SlidePuzzle";
import SlidePuzzleAnswer from "./SlidePuzzleAnswer";
import Nav from "./Nav";
import firebase from "./firebase";

export default function LiveSlidePuzzle({ match }) {
  const [fbimg, setfbimg] = useState("");
  useEffect(() => {
    const todoRef = firebase
      .database()
      .ref("/SlidePuzzle/" + match.params.slug)
      .once("value")
      .then((snapshot) => {
        console.log(snapshot.val().url);
        var img = snapshot.val().url;

        setfbimg(img);
      });
  }, []);
  return (
    <div>
      <Nav />
      <div style={{ marginTop: "5px" }}>
        <SlidePuzzle fbimg={fbimg} />
        <SlidePuzzleAnswer fbimg={fbimg} />
      </div>
    </div>
  );
}
