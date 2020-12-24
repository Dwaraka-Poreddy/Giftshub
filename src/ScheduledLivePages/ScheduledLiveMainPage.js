import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import firebase from "../firebase";
import ScheduledLiveNav from "./SchdeuledLiveNav";
function ScheduledLiveMainPage({ match }) {
  const database = firebase.firestore();
  const [FolderData, setFolderData] = useState("");
  const [dataurl, setdataurl] = useState([]);
  const [loading, setloading] = useState(false);

  const [Livelinks, setLivelinks] = useState("");
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
  }, []);

  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    var difference =
      +new Date(Livelinks.Bday_date) - +new Date() - 19800000 - 86400000;

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

      {loading ? (
        <Loader type="BallTriangle" color="#00BFFF" height={100} width={100} />
      ) : (
        <div>
          {new Date(Livelinks.Bday_date) - +new Date() - 19800000 - 86400000 >
          0 ? (
            <center>
              {" "}
              <h1 className="example">The Big day is in {timerComponents}</h1>
            </center>
          ) : (
            <center>
              {" "}
              <h1 className="example">The Big day is here !!!</h1>
            </center>
          )}
          <strong>
            <p>Folder_name: {FolderData.Folder_name}</p>
            <p>From_name: {FolderData.From_name}</p>
            <p>To_name: {FolderData.To_name}</p>
            <p>Bday_date: {FolderData.Bday_date}</p>
            <img
              style={{ width: "250px" }}
              src={FolderData.fbimg}
              alt="sender"
            />
          </strong>
        </div>
      )}
    </div>
  );
}

export default ScheduledLiveMainPage;
