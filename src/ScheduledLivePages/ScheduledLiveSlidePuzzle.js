import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SlidePuzzle from "../SlidePuzzle/SlidePuzzle";
import SlidePuzzleAnswer from "../SlidePuzzle/SlidePuzzleAnswer";
import firebase from "../firebase";
import "./ScheduledLiveSlidePuzzle.css";
import Loader from "react-loader-spinner";
import CircleTimer from "./CircleTimer";
import ScheduledLiveNav from "./SchdeuledLiveNav";
function ScheduledLiveSlidePuzzle({ match }) {
  let dispatch = useDispatch();
  const [fbimg, setfbimg] = useState("");
  const database = firebase.firestore();
  const [Livelinks, setLivelinks] = useState("");
  const [loading, setloading] = useState(false);
  const [dataurl, setdataurl] = useState([]);
  const [today, settoday] = useState();
  const [score, setscore] = useState(10);
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
        setscore(item.score);
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
      86400000 * (dataurl.length - today);
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

  // useEffect(() => {
  //   setTimeout(() => {
  //     setTimeLeft(calculateTimeLeft());
  //   }, 1000);
  // });
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
  const handlescore = (sr) => {
    setscore(sr);
  };
  return (
    <div style={{ backgroundColor: "#ffffff" }}>
      <ScheduledLiveNav slug={match.params.slug} />

      {JSON.stringify(score)}
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
                {new Date(Livelinks.Bday_date) -
                  +new Date() -
                  19800000 -
                  86400000 * (dataurl.length - today - 1) >
                0 ? (
                  <div>
                    <h5 className="example"> This Gift opens in </h5>
                    <CircleTimer
                      Bday={
                        +new Date(Livelinks.Bday_date) -
                        +new Date() -
                        19800000 -
                        86400000 * (dataurl.length - today - 1)
                      }
                    />
                  </div>
                ) : (
                  <>
                    <center>
                      {" "}
                      {dataurl.length - today - 1 == 0 ? (
                        <h1 className="example">The Big day is here !!!</h1>
                      ) : dataurl.length - today - 1 == 1 ? (
                        <h1 className="example">
                          {dataurl.length - today - 1} day to go !!!
                        </h1>
                      ) : (
                        <h1 className="example">
                          {dataurl.length - today - 1} days to go !!!
                        </h1>
                      )}
                    </center>
                    <div class="row">
                      <div style={{ paddingLeft: "5px" }} class="col-lg-6">
                        {" "}
                        <center>
                          <SlidePuzzle
                            handlescore={handlescore}
                            fbimg={fbimg}
                          />
                        </center>
                      </div>
                      <div class="col-lg-1"></div>
                      <div style={{ paddingLeft: "5px" }} class="col-lg-5">
                        <center>
                          <SlidePuzzleAnswer fbimg={fbimg} />
                        </center>
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>

          <div class="col-lg-1"></div>
        </div>
      </div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12 col-sm-12">
              <p className="copyright">
                Copyright © 2020 Gift's Hub Company . Design:{" "}
                <a rel="nofollow" href="/">
                  Gift's Hub
                </a>
              </p>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12">
              <ul className="social">
                <li>
                  <a href="#">
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-rss" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-dribbble" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ScheduledLiveSlidePuzzle;
