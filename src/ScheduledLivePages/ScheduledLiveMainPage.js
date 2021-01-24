import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import firebase from "../firebase";
import ScheduledLiveNavBar from "../NavBars/ScheduledLiveNavBar";
import CircleTimer from "./CircleTimer";
import "./ScheduledLiveMainPage.css";
import bgvideo from "../Images/mainpagebg.mp4";
import giftvideo from "../Images/giftgif.mp4";
import "../LandingPage/LandingPage.css";
function ScheduledLiveMainPage({ match }) {
  const database = firebase.firestore();
  const [FolderData, setFolderData] = useState("");
  const [dataurl, setdataurl] = useState([]);
  const [loading, setloading] = useState(false);
  const [navstate, setnavstate] = useState(false);
  const [Livelinks, setLivelinks] = useState("");

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setnavstate(true);
    } else {
      setnavstate(false);
    }
  };
  async function getDoc() {
    const snapshot = await database
      .collection("Livelinks")

      .doc(match.params.slug)
      .get();
    const data = snapshot.data();
    setLivelinks(data);
    data.array_data.map((item, index) => {
      dataurl[index] = item.url;
    });
    setFolderData(data);
  }
  useEffect(async () => {
    setloading(true);
    await getDoc();
    setloading(false);
    window.addEventListener("scroll", changeBackground);
  }, []);

  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    var difference = +new Date(Livelinks.Bday_date) - +new Date() - 19800000;

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
    <div>
      {" "}
      <body id="page-top">
        <ScheduledLiveNavBar slug={match.params.slug} />
        <br />
        <br />
        <br />
        <video
          style={{
            width: "100%",
            height: "auto",
            position: "fixed",
            top: "0",
            left: "0",
          }}
          className="videoTag"
          autoPlay
          loop
          muted
        >
          <source src={bgvideo} type="video/mp4" />
        </video>
        <div style={{ display: "flex" }}>
          <div style={{ flex: "0.1" }}></div>
          <div style={{ flex: "0.8" }}>
            {loading ? (
              <Loader
                type="BallTriangle"
                color="#00BFFF"
                height={100}
                width={100}
              />
            ) : (
              <div>
                {new Date(Livelinks.Bday_date) - +new Date() - 19800000 > 0 ? (
                  <center>
                    {" "}
                    <CircleTimer
                      Bday={
                        new Date(Livelinks.Bday_date) - +new Date() - 19800000
                      }
                    />
                  </center>
                ) : (
                  <center>
                    {" "}
                    <h1 className="example">The Big day is here !!!</h1>
                  </center>
                )}
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <center>
                        <img
                          style={{
                            width: "100%",
                          }}
                          src={require("../Images/giftgif.gif")}
                          alt="Heading"
                        />
                        {/* <video
                        style={{ width: "100%", height: "auto" }}
                        className="videoTag"
                        autoPlay
                        loop
                        muted
                      >
                        <source src={giftvideo} type="video/mp4" />
                      </video> */}
                      </center>
                    </div>
                    <div className="col-md-6">
                      <div translate="no">
                        <div class="livemainwrapper">
                          <div class="livemaincard">
                            <img src={FolderData.fbimg} alt="" />
                            <div class="livemaininfo">
                              <h1>{FolderData.From_name}</h1>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <br />
                <br />
              </div>
            )}
          </div>
          <br />
          <br />
          <br />
        </div>
      </body>
    </div>
  );
}

export default ScheduledLiveMainPage;
