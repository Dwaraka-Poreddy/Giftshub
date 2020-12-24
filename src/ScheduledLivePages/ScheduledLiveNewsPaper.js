import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import NewsPaper from "../NewsPaper/NewsPaper";
import firebase from "../firebase";
import Loader from "react-loader-spinner";
import domtoimage from "dom-to-image-more";
import html2canvas from "html2canvas";
import ScheduledLiveNav from "./SchdeuledLiveNav";
function ScheduledLiveNewsPaper({ match }) {
  let dispatch = useDispatch();
  const database = firebase.firestore();
  const [fbimg, setfbimg] = useState("");
  const [head, sethead] = useState("");
  const [para, setpara] = useState("");
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
      if (item.id == "newspaper") {
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
    console.log(Livelinks, "liveData");
    console.log(match.params.slug, "slug", match.params.id, "id");
  }, []);
  useEffect(() => {
    setloading(true);
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
        setloading(false);
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
    <div>
      <ScheduledLiveNav slug={match.params.slug} />

      <div style={{ backgroundColor: "#70cff3" }} class="container-fluid pt-2">
        <div class="row">
          <div class="col-sm-1 "></div>
          <div class="col-sm-10 ">
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
                  <div>
                    <NewsPaper fbimg={fbimg} head={head} para={para} />
                  </div>
                )}
              </div>
            )}
          </div>
          <div class="col-sm-1 "></div>
        </div>
      </div>
    </div>
  );
}

export default ScheduledLiveNewsPaper;
