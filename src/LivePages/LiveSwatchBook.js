import React, { useState, useEffect } from "react";
import SwatchBook from "../SwatchBook/SwatchBook";
import Loader from "react-loader-spinner";
import firebase from "../firebase";
import LiveNavBar from "../NavBars/LiveNavBar";
export default function LiveTicketDeck({ match }) {
  const [fbimg, setfbimg] = useState("");
  const [name, setname] = useState("");
  const [handscol, sethandscol] = useState("");
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
        var handscol = snapshot.val().handscol;
        sethandscol(handscol);
      });
    setloading(false);
  }, []);
  return (
    <div style={{ backgroundColor: "#70cff3", height: "100vh" }}>
      <LiveNavBar />
      <br />
      <br />
      <br />

      <div style={{ backgroundColor: "#70cff3" }}>
        {loading ? (
          <Loader
            type="BallTriangle"
            color="#00BFFF"
            height={100}
            width={100}
          />
        ) : (
          <div className="row">
            <div className="col-12">
              <SwatchBook
                name={name.toUpperCase()}
                fbimg={fbimg}
                handscol={handscol}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
