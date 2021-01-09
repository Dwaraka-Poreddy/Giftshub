import React, { useState, useEffect } from "react";
import Calandar from "../Calandar/Calandar";
import Loader from "react-loader-spinner";
import firebase from "../firebase";
export default function LiveCalandar({ match }) {
  const [fbimg, setfbimg] = useState("");
  const [firstcol, setfirstcol] = useState("");
  const [secondcol, setsecondcol] = useState("");
  const [loading, setloading] = useState(true);
  useEffect(async () => {
    setloading(true);
    const todoRef = await firebase
      .database()
      .ref("/Calandar/" + match.params.slug)
      .once("value")
      .then((snapshot) => {
        var img = snapshot.val().url;
        setfbimg(img);
        var col1 = snapshot.val().firstcol;
        setfirstcol(col1);
        var col2 = snapshot.val().secondcol;
        setsecondcol(col2);
        setloading(false);
      });
  }, []);
  return (
    <div style={{ backgroundColor: "#70cff3", height: "100vh" }}>
      <br />
      <br />
      <div style={{ backgroundColor: "#70cff3" }}>
        <div style={{ display: "flex" }}>
          <div style={{ flex: "1" }}>
            {loading ? (
              <Loader
                type="BallTriangle"
                color="#00BFFF"
                height={100}
                width={100}
              />
            ) : (
              <Calandar fbimg={fbimg} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
