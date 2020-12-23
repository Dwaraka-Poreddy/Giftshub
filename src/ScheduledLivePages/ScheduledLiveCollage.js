import React, { useState, useEffect } from "react";
import Collage from "../Collage/Collage";
import Loader from "react-loader-spinner";
import firebase from "../firebase";
import ScheduledLiveNav from "./SchdeuledLiveNav";
export default function LiveCollagePage({ match }) {
  const [loading, setloading] = useState(false);
  const database = firebase.firestore();
  const [dataurl, setdataurl] = useState([]);
  const [Livelinks, setLivelinks] = useState("");
  const [fbimg1, setfbimg1] = useState("");
  const [fbimg2, setfbimg2] = useState("");
  const [fbimg3, setfbimg3] = useState("");
  const [fbimg4, setfbimg4] = useState("");
  const [fbimg5, setfbimg5] = useState("");
  const [fbimg6, setfbimg6] = useState("");
  const [fbimg7, setfbimg7] = useState("");
  const [fbimg8, setfbimg8] = useState("");
  const [fbimg9, setfbimg9] = useState("");
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
      .ref("/Collage/" + match.params.id)
      .once("value")
      .then((snapshot) => {
        var img1 = snapshot.val().url1;
        console.log(img1);
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
        var img7 = snapshot.val().url7;
        setfbimg7(img7);
        var img8 = snapshot.val().url8;
        setfbimg8(img8);
        var img9 = snapshot.val().url9;
        setfbimg9(img9);
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
      <ScheduledLiveNav dataurl={dataurl} slug={match.params.slug} />
      <br />
      <br />
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
              <div>
                {timerComponents.length ? (
                  timerComponents
                ) : (
                  <div>
                    <center>
                      <h1 className="example">One day to go !!!</h1>
                    </center>
                    <Collage
                      fbimg1={fbimg1}
                      fbimg2={fbimg2}
                      fbimg3={fbimg3}
                      fbimg4={fbimg4}
                      fbimg5={fbimg5}
                      fbimg6={fbimg6}
                      fbimg7={fbimg7}
                      fbimg8={fbimg8}
                      fbimg9={fbimg9}
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
