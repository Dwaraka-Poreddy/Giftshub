import React, { useState, useEffect } from "react";
import ThreeDImage from "../ThreeDImage/ThreeDImage";
import Loader from "react-loader-spinner";
import firebase from "../firebase";
import ScheduledLiveNav from "./SchdeuledLiveNav";
export default function ScheduledLiveThreeDImage({ match }) {
  const database = firebase.firestore();
  const [fbimg, setfbimg] = useState("");
  const [firstcol, setfirstcol] = useState("");
  const [secondcol, setsecondcol] = useState("");
  const [Livelinks, setLivelinks] = useState("");
  const [loading, setloading] = useState(false);
  const [dataurl, setdataurl] = useState([]);
  async function getDoc() {
    const snapshot = await database
      .collection("Livelinks")
      .doc(match.params.slug)
      .get();
    const data = await snapshot.data();
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
      .ref("/ThreeDImage/" + match.params.id)
      .once("value")
      .then((snapshot) => {
        var img = snapshot.val().url;
        setfbimg(img);
        var col1 = snapshot.val().firstcol;
        setfirstcol(col1);
        var col2 = snapshot.val().secondcol;
        setsecondcol(col2);
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
    <div style={{ backgroundColor: "#70cff3", height: "100vh" }}>
      <ScheduledLiveNav slug={match.params.slug} />

      <div style={{ backgroundColor: "#70cff3" }}>
        <div style={{ display: "flex" }}>
          <div style={{ flex: "0.15" }}></div>
          <div style={{ flex: "0.7" }}>
            {loading ? (
              <Loader
                type="BallTriangle"
                color="#00BFFF"
                height={100}
                width={100}
              />
            ) : (
              <div style={{ flex: "0.7" }}>
                {timerComponents.length ? (
                  timerComponents
                ) : (
                  <div>
                    <center>
                      <h1 className="example">Six days to go !!!</h1>
                    </center>

                    <ThreeDImage
                      firstcol={firstcol}
                      secondcol={secondcol}
                      fbimg={fbimg}
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
