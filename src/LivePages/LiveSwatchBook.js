import React, { useState, useEffect } from "react";
import SwatchBook from "../SwatchBook/SwatchBook";
import Loader from "react-loader-spinner";
import firebase from "../firebase";

export default function LiveTicketDeck({ match }) {
  const [fbimg, setfbimg] = useState("");
  const [name, setname] = useState("");

  const [loading, setloading] = useState(false);
  useEffect(async () => {
    setloading(true);
    const todoRef = await firebase
      .database()
      .ref("/SwatchBook/" + match.params.slug)
      .once("value")
      .then((snapshot) => {
        var img = snapshot.val().url;
        setfbimg(img);
        var name = snapshot.val().name;
        setname(name);

        setloading(false);
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
              <SwatchBook name={name} fbimg={fbimg} />
            )}
          </div>
          <div style={{ flex: "0.15" }}></div>
        </div>
      </div>
    </div>
  );
}
