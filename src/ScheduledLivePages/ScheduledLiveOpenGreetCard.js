import React, { useState, useEffect } from "react";
import OpenGreetingCard from "../OpenGreetingCard/OpenGreetingCard";
import firebase from "../firebase";
import { Link } from "react-router-dom";
function ScheduledLiveOpenGreetCard({ match }) {
  const [fbimg, setfbimg] = useState("");
  const [text1, settext1] = useState("");
  const [text2, settext2] = useState("");
  const [maintext, setmaintext] = useState("e");
  const database = firebase.firestore();
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
      .ref("/OpenGreetingCard/" + match.params.id)
      .once("value")
      .then((snapshot) => {
        var img = snapshot.val().url;
        setfbimg(img);

        var title1 = snapshot.val().text1;
        settext1(title1);
        var title2 = snapshot.val().text2;
        settext2(title2);
        var MainTitle = snapshot.val().maintext;
        setmaintext(MainTitle);
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
    <div>
      <header
        style={{ backgroundColor: "#70cff3", color: "#ffffff" }}
        class="header-area header-sticky"
      >
        <div class="container">
          <div class="row">
            <div class="col-12">
              <nav class="main-nav">
                <Link class="logo" to="/">
                  Gifts Hub
                </Link>

                <ul class="nav">
                  <li class="scroll-to-section">
                    <a href="#welcome" class="active">
                      Home
                    </a>
                  </li>
                  <li class="scroll-to-section">
                    <a href="#about">Combo</a>
                  </li>
                  <li class="scroll-to-section">
                    <a href="#services">Services</a>
                  </li>
                </ul>
                <a href="#menu" class="menu-trigger">
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
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
                  <h1 className="example">Four days to go !!!</h1>
                </center>
                <OpenGreetingCard
                  fbimg={fbimg}
                  text1={text1}
                  text2={text2}
                  maintext={maintext}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default ScheduledLiveOpenGreetCard;
