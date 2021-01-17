import React, { useState, useEffect } from "react";
import SlidePuzzle from "../SlidePuzzle/SlidePuzzle";
import SlidePuzzleAnswer from "../SlidePuzzle/SlidePuzzleAnswer";
import firebase from "../firebase";
import { toast } from "react-toastify";
import "./LiveSlidePuzzle.css";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";
function LiveAnimatedFramePage({ match }) {
  const [fbimg, setfbimg] = useState("");
  const [loading, setloading] = useState(false);
  const [bestscore, setbestscore] = useState();
  const [puzzlescore, setpuzzlescore] = useState(0);
  const handlepuzzlescore = (e) => {
    setpuzzlescore(e);
    if (e < bestscore) {
      const todoRef = firebase
        .database()
        .ref("SlidePuzzle")
        .child(match.params.slug);
      const todo = {
        url: fbimg,
        best_score: e,
      };
      var newKey = todoRef.update(todo);
      setbestscore(e);
      toast.success("You bet your previous best score, Keep playing!");
    }
  };
  useEffect(async () => {
    setloading(true);
    const todoRef = await firebase
      .database()
      .ref("/SlidePuzzle/" + match.params.slug)
      .once("value")
      .then((snapshot) => {
        var img = snapshot.val().url;
        setfbimg(img);
        var bestscore = snapshot.val().best_score;
        setbestscore(bestscore);
      });

    setloading(false);
  }, []);

  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      {/*  */}
      <div class="container-fluid">
        <br />
        <center>
          <h1 className="example">
            {bestscore != 100000 && <h2>Best Score: {bestscore}</h2>}
          </h1>
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
          <div>
            <center> </center>
            <div class="row">
              <div class="col-xl-2"></div>
              <div style={{ paddingLeft: "5px" }} class="col-xl-4">
                {" "}
                <center>
                  <SlidePuzzle
                    handlepuzzlescore={handlepuzzlescore}
                    fbimg={fbimg}
                  />
                </center>
              </div>
              <div style={{ paddingLeft: "5px" }} class="col-xl-4">
                <SlidePuzzleAnswer fbimg={fbimg} />
              </div>
              <div class="col-xl-2"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default LiveAnimatedFramePage;
