import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import firebase from "../firebase";

const Home = ({ history }) => {
  const { user } = useSelector((state) => ({ ...state }));

  const database = firebase.firestore();
  const [Folder_name, setFolder_name] = useState(false);
  const [gifts, setGifts] = useState([]);
  const [error, setError] = useState();
  const [Secret_name, setSecret_name] = useState();
  const [Bday_date, setBday_date] = useState(new Date("December 10, 1815"));
  useEffect(() => {
    var user = firebase.auth().currentUser;
    console.log(user);
    if (!user) {
      history.push("/login");
    }
  }, []);
  const getPrevious = () => {
    database
      .collection("7-day-pack")
      .doc(`${user.uid}`)
      .collection("giftshub")
      .get()
      .then((response) => {
        const fetchedGifts = [];
        response.forEach((document) => {
          const fetchedMovie = {
            id: document.id,
            ...document.data(),
          };
          fetchedGifts.push(fetchedMovie);
        });
        setGifts(fetchedGifts);
        console.log("gifts", gifts);
      })
      .catch((error) => {
        setError(error);
      });
  };

  const CreatePack = (e) => {
    e.preventDefault();
    console.log(Folder_name);
    var sevendayPack = firebase.firestore().collection("/7-day-pack");
    var sevendayPackPack = sevendayPack
      .doc(`${user.uid}`)
      .collection("giftshub");
    sevendayPackPack
      .add({
        Folder_name: Folder_name,
        Secret_name: Secret_name,
        Bday_date: Bday_date,
        url1: "",
        url2: "",
        url3: "",
        url4: "",
        url5: "",
        url6: "",
        url7: "",
      })
      .then(function (docRef) {
        var LivelinkPack = firebase.firestore().collection("/Livelinks");
        var LivelinkPackPack = LivelinkPack.doc(docRef.id).set({
          Folder_name: Folder_name,
          Secret_name: Secret_name,
          Bday_date: Bday_date,
          url1: "",
          url2: "",
          url3: "",
          url4: "",
          url5: "",
          url6: "",
          url7: "",
        });
        console.log("Tutorial created with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding Tutorial: ", error);
      });
  };
  return (
    <>
      <p>Home</p>
      <form onSubmit={CreatePack}>
        <label>
          FOLDER Name:
          <input
            onChange={(e) => setFolder_name(e.target.value)}
            type="text"
            name="Folder_name"
          />
        </label>
        <label>
          Secret_name Name:
          <input
            onChange={(e) => setSecret_name(e.target.value)}
            type="text"
            name="Secret_name"
          />
        </label>
        <label>
          Date:
          <input
            type="date"
            id="birthday"
            name="Bday_date"
            onChange={(e) => setBday_date(e.target.value)}
          />
        </label>

        <input type="submit" value="Create 7 day pack" />
      </form>
      <button onClick={getPrevious}>Get Previous</button>
      <div>
        {error ? <p>Ops, there is an error :(</p> : null}
        <ul>
          {gifts.map((gift) => (
            <li key={gift.id}>
              <Link to={`/ContinuePack/${gift.id}`}>
                <button>
                  {gift.Folder_name}|{gift.id}
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

// const Home = () => {
//   const calculateTimeLeft = () => {
//     let year = new Date().getFullYear();
//     const difference = +new Date(`${year}-12-15`) - +new Date();
//     let timeLeft = {};

//     if (difference > 0) {
//       timeLeft = {
//         days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//         hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//         minutes: Math.floor((difference / 1000 / 60) % 60),
//         seconds: Math.floor((difference / 1000) % 60),
//       };
//     }

//     return timeLeft;
//   };

//   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
//   const [year] = useState(new Date().getFullYear());

//   useEffect(() => {
//     setTimeout(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);
//   });
//   const timerComponents = [];

//   Object.keys(timeLeft).forEach((interval) => {
//     if (!timeLeft[interval]) {
//       return;
//     }

//     timerComponents.push(
//       <span>
//         {timeLeft[interval]} {interval}{" "}
//       </span>
//     );
//   });
//   return (
//     <div>
//       <h1>HacktoberFest {year} Countdown</h1>
//       <h2>With React Hooks!</h2>
//       {timerComponents.length ? timerComponents : <span>Time's up!</span>}
//     </div>
//   );
// };

export default Home;
