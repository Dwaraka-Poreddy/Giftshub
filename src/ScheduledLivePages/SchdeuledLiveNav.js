import React, { useEffect, useState } from "react";
import firebase from "../firebase";
import { Link } from "react-router-dom";
function SchdeuledLiveNav({ slug }) {
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
                return (
                  <li class="nav-item active">
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
