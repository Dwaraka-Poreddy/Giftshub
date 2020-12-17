import React, { useState, useEffect } from "react";
import NewsPaper from "../NewsPaper/NewsPaper";
import firebase from "../firebase";

import domtoimage from "dom-to-image-more";
import html2canvas from "html2canvas";
import { Link } from "react-router-dom";

function ScheduledLiveNewsPaper({ match }) {
  const database = firebase.firestore();
  const [fbimg, setfbimg] = useState("");
  const [head, sethead] = useState("");
  const [para, setpara] = useState("");
  const [Livelinks, setLivelinks] = useState("");
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
      .ref("/NewsPaper/" + match.params.id)
      .once("value")
      .then((snapshot) => {
        var img = snapshot.val().url;
        setfbimg(img);
        var head = snapshot.val().head;
        sethead(head);
        var para = snapshot.val().para;
        setpara(para);
      });
  }, []);
  function handleMemeDownlod(el) {
    var canvas = document.getElementById("newspaper");
    html2canvas(canvas).then(function (canvas) {
      domtoimage
        .toBlob(document.getElementById("newspaper"))

        .then(function (base64image) {
          console.log();
          window.saveAs(base64image, "NewsPaper");
        });
    });
  }
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
    <div>
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
      <div style={{ display: "flex" }}>
        <div style={{ flex: "0.1" }}></div>
        {loading ? null : (
          <div style={{ flex: "0.7" }}>
            {timerComponents.length ? (
              timerComponents
            ) : (
              <div>
                <center>
                  <h1 className="example">Five days to go !!!</h1>
                </center>
                <NewsPaper fbimg={fbimg} head={head} para={para} />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default ScheduledLiveNewsPaper;
