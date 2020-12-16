import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import firebase from "../firebase";
function LiveLinksPage({ match }) {
  const database = firebase.firestore();

  const [Livelinks, setLivelinks] = useState("");
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
  }, []);

  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    var difference = +new Date(Livelinks.Bday_date) - +new Date() - 86400000;

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
      Navbar
      <strong>
        <p>Folder_name: {Livelinks.Folder_name}</p>
        <p>Secret_name: {Livelinks.Secret_name}</p>
        <p>Bday_date: {Livelinks.Bday_date}</p>
        <p>url1: {Livelinks.url1}</p>
        <p>url2: {Livelinks.ur2}</p>
        <p>url3: {Livelinks.url3}</p>
        <p>url4: {Livelinks.url4}</p>
        <p>url5: {Livelinks.ur2}</p>
        <p>url6: {Livelinks.url3}</p>
        <p>url7: {Livelinks.url4}</p>
      </strong>
      Component <br />
      <strong>
        {timerComponents.length ? (
          timerComponents
        ) : (
          <span>Belated happy birthday!</span>
        )}{" "}
      </strong>
      <br />
      footer
    </div>
  );
}

export default LiveLinksPage;
