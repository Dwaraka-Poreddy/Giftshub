import React, { useState, useEffect } from "react";
import OpenGreetingCard from "../OpenGreetingCard/OpenGreetingCard";
import firebase from "../firebase";
import Loader from "react-loader-spinner";
import ScheduledLiveNav from "./SchdeuledLiveNav";
function ScheduledLiveOpenGreetCard({ match }) {
  const [fbimg, setfbimg] = useState("");
  const [text1, settext1] = useState("");
  const [text2, settext2] = useState("");
  const [maintext, setmaintext] = useState("e");
  const database = firebase.firestore();
  const [Livelinks, setLivelinks] = useState("");
  const [loading, setloading] = useState(false);
  const [dataurl, setdataurl] = useState([]);
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
  }
  useEffect(() => {
    getDoc();
    console.log(Livelinks, "liveData");
    console.log(match.params.slug, "slug", match.params.id, "id");
  }, []);
  useEffect(() => {
    setloading(true);
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
        setloading(false);
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

  return (
    <div>
      <ScheduledLiveNav slug={match.params.slug} />
      <br />
      <br />
      <div style={{ display: "flex" }}>
        <div style={{ flex: "0.1" }}></div>
        <div style={{ flex: "0.7" }}>
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
    </div>
  );
}

export default ScheduledLiveOpenGreetCard;
