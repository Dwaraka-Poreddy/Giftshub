import React, { useEffect, useState } from "react";
import firebase from "../firebase";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
function SchdeuledLiveNav({ slug }) {
  const { daystep } = useSelector((state) => ({ ...state }));
  const database = firebase.firestore();
  const [dataurl, setdataurl] = useState([]);
  const [daycounter, setdaycounter] = useState();
  async function getDoc() {
    const snapshot = await database.collection("Livelinks").doc(slug).get();
    const data = await snapshot.data().array_data;
    // setdaycounter(data.length - daystep.day - 1);
    data.map((item, index) => {
      dataurl[index] = item.url;
    });
  }
  useEffect(async () => {
    await getDoc();
  }, []);

  return (
    <div>
      <nav class="navbar navbar-expand-md bg-dark navbar-dark">
        <Link class="navbar-brand" to={`/scheduledlive/main/${slug}`}>
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
            {dataurl.map((item, index) => {
              if (item != "") {
                if (index == daystep.day - 1) {
                  return (
                    <li class="nav-item active">
                      <a class="nav-link" href={item}>
                        Day {index + 1}
                      </a>
                    </li>
                  );
                }
                return (
                  <li class="nav-item ">
                    <a class="nav-link" href={item}>
                      Day {index + 1}
                    </a>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </nav>
      {/* <center>
        {" "}
        {dataurl.length - daystep.day == 0 ? (
          <h1 className="example">The Big day is here !!!</h1>
        ) : dataurl.length - daystep.day == 1 ? (
          <h1 className="example">
            {dataurl.length - daystep.day} day to go !!!
          </h1>
        ) : (
          <h1 className="example">
            {dataurl.length - daystep.day} days to go !!!
          </h1>
        )}
      </center> */}
    </div>
  );
}

export default SchdeuledLiveNav;
