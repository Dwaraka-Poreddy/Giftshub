import React, { useEffect, useState } from "react";
import firebase from "../firebase";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
function SchdeuledLiveNav({ slug }) {
  const { daystep } = useSelector((state) => ({ ...state }));
  const database = firebase.firestore();
  const [dataurl, setdataurl] = useState([]);

  async function getDoc() {
    const snapshot = await database.collection("Livelinks").doc(slug).get();
    const data = await snapshot.data().array_data;

    data.map((item, index) => {
      dataurl[index] = item.url;
    });
  }
  useEffect(async () => {
    await getDoc();
  }, []);

  return (
    <div>
      <nav class="navbar navbar-expand-md bg-light navbar-light ">
        <a class=" navbar-brand text-primary" href={`/`}>
          Gifts Hub
        </a>
        <a class=" navbar-item" href={`/scheduledlive/main/${slug}`}>
          Main Page
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <ul class="nav navbar-nav navbar-centre.">
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
    </div>
  );
}

export default SchdeuledLiveNav;
