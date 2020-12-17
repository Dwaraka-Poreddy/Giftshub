import React, { useState, useEffect } from "react";
import MemoryGame from "../MemoryGame/MemoryGame";
import firebase from "../firebase";
import { Link } from "react-router-dom";
export default function ScheduledLiveMemoryGame({ match }) {
  const database = firebase.firestore();
  const [Livelinks, setLivelinks] = useState("");
  const [fbimg1, setfbimg1] = useState("");
  const [fbimg2, setfbimg2] = useState("");
  const [fbimg3, setfbimg3] = useState("");
  const [fbimg4, setfbimg4] = useState("");
  const [fbimg5, setfbimg5] = useState("");
  const [fbimg6, setfbimg6] = useState("");
  const [loading, setloading] = useState(true);
  async function getDoc() {
    const snapshot = await database
      .collection("Livelinks")
      .doc(match.params.slug)
      .get();
    const data = snapshot.data();
    setLivelinks(data);
  }
  useEffect(() => {
    getDoc();
    console.log(Livelinks, "liveData");
    console.log(match.params.slug, "slug", match.params.id, "id");
  }, []);

  useEffect(() => {
    const todoRef = firebase
      .database()
      .ref("/MemoryGame/" + match.params.id)
      .once("value")
      .then((snapshot) => {
        var img1 = snapshot.val().url1;
        setfbimg1(img1);
        var img2 = snapshot.val().url2;
        setfbimg2(img2);
        var img3 = snapshot.val().url3;
        setfbimg3(img3);
        var img4 = snapshot.val().url4;
        setfbimg4(img4);
        var img5 = snapshot.val().url5;
        setfbimg5(img5);
        var img6 = snapshot.val().url6;
        setfbimg6(img6);
      });
  }, []);
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    var difference = +new Date(Livelinks.Bday_date) - +new Date() - 86400000;
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
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 5000);
  });
  return (
    <div style={{ backgroundColor: "#70cff3", height: "100vh" }}>
      <nav class="navbar navbar-expand-md bg-dark navbar-dark">
        <Link
          class="navbar-brand"
          to={`/scheduledlive/main/${match.params.slug}`}
        >
          {" "}
          Main Page
        </Link>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href={Livelinks.url1}>
                Day 1
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href={Livelinks.url2}>
                Day 2
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href={Livelinks.url3}>
                Day 3
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href={Livelinks.url4}>
                Day 4
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href={Livelinks.url5}>
                Day 5
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href={Livelinks.url6}>
                Day 6
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href={Livelinks.url7}>
                Day 7
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <br />
      <br />
      <div>
        <div style={{ display: "flex" }}>
          <div style={{ flex: "0.15" }}></div>
          <div style={{ flex: "0.7" }}>
            {loading ? null : (
              <div style={{ flex: "0.7" }}>
                {timerComponents.length ? (
                  timerComponents
                ) : (
                  <div>
                    <center>
                      <h1 className="example">Six days to go !!!</h1>
                    </center>
                    <MemoryGame
                      fbimg1={fbimg1}
                      fbimg2={fbimg2}
                      fbimg3={fbimg3}
                      fbimg4={fbimg4}
                      fbimg5={fbimg5}
                      fbimg6={fbimg6}
                    />
                  </div>
                )}
              </div>
            )}
          </div>
          <div style={{ flex: "0.15" }}></div>
        </div>
      </div>
    </div>
  );
}
