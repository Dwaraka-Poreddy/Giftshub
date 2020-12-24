import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SlidePuzzle from "../SlidePuzzle/SlidePuzzle";
import SlidePuzzleAnswer from "../SlidePuzzle/SlidePuzzleAnswer";
import firebase from "../firebase";
import "./ScheduledLiveSlidePuzzle.css";
import Loader from "react-loader-spinner";
import ScheduledLiveNav from "./SchdeuledLiveNav";
function ScheduledLiveSlidePuzzle({ match }) {
  let dispatch = useDispatch();
  const [fbimg, setfbimg] = useState("");
  const database = firebase.firestore();
  const [Livelinks, setLivelinks] = useState("");
  const [loading, setloading] = useState(false);
  const [dataurl, setdataurl] = useState([]);
  const [today, settoday] = useState();
  async function getDoc() {
    const snapshot = await database
      .collection("Livelinks")
      .doc(match.params.slug)
      .get();
    const data = snapshot.data();
    setLivelinks(data);
    data.array_data.map((item, index) => {
      if (item.id == "puzzle") {
        settoday(index);
        dispatch({
          type: "ACTIVE_STEP",
          payload: { day: index + 1 },
        });
      }
      dataurl[index] = item.url;
    });
  }
  useEffect(() => {
    getDoc();
  }, []);
  useEffect(() => {
    setloading(true);
    const todoRef = firebase
      .database()
      .ref("/SlidePuzzle/" + match.params.id)
      .once("value")
      .then((snapshot) => {
        var img = snapshot.val().url;
        setfbimg(img);
        setloading(false);
      });
  }, []);
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    var difference =
      +new Date(Livelinks.Bday_date) -
      +new Date() -
      19800000 -
      86400000 * today;
    console.log(difference, "difference");
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });
  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      <ScheduledLiveNav slug={match.params.slug} />

      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-1"></div>
          <div class="col-lg-10">
            {loading ? (
              <Loader
                type="BallTriangle"
                color="#00BFFF"
                height={100}
                width={100}
              />
            ) : (
              <div>
                {timerComponents.length ? (
                  <h5 className="example"> {timerComponents} to go !!! </h5>
                ) : (
                  <div class="row">
                    <div style={{ paddingLeft: "5px" }} class="col-lg-6">
                      {" "}
                      <center>
                        <SlidePuzzle fbimg={fbimg} />
                      </center>
                    </div>
                    <div class="col-lg-1"></div>
                    <div style={{ paddingLeft: "5px" }} class="col-lg-5">
                      <center>
                        <SlidePuzzleAnswer fbimg={fbimg} />
                      </center>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          <div class="col-lg-1"></div>
        </div>
      </div>
    </div>
  );
}

export default ScheduledLiveSlidePuzzle;
