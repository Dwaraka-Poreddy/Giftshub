import React, { useState, useEffect } from "react";
import SlidePuzzle from "../SlidePuzzle/SlidePuzzle";
import SlidePuzzleAnswer from "../SlidePuzzle/SlidePuzzleAnswer";
import firebase from "../firebase";
import "./LiveSlidePuzzle.css";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";
function LiveAnimatedFramePage({ match }) {
  const [fbimg, setfbimg] = useState("");
  const [loading, setloading] = useState(false);
  useEffect(async () => {
    setloading(true);
    const todoRef = await firebase
      .database()
      .ref("/SlidePuzzle/" + match.params.slug)
      .once("value")
      .then((snapshot) => {
        var img = snapshot.val().url;
        setfbimg(img);
      });
    setloading(false);
  }, []);

  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      {/*  */}
      <div class="container-fluid">
        <br />

        <center>
          <h1 className="example">Four days to go !!!</h1>
        </center>
        <br />
        <br />

        {loading ? (
          <Loader
            type="BallTriangle"
            color="#00BFFF"
            height={100}
            width={100}
          />
        ) : (
          <div class="row">
            <div class="col-xl-2"></div>
            <div style={{ paddingLeft: "5px" }} class="col-xl-4">
              {" "}
              <center>
                <SlidePuzzle fbimg={fbimg} />
              </center>
            </div>
            <div style={{ paddingLeft: "5px" }} class="col-xl-4">
              <SlidePuzzleAnswer fbimg={fbimg} />
            </div>
            <div class="col-xl-2"></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default LiveAnimatedFramePage;
