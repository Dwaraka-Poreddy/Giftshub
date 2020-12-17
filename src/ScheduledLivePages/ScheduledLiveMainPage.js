import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import firebase from "../firebase";

function ScheduledLiveMainPage({ match }) {
  const database = firebase.firestore();
  const [FolderData, setFolderData] = useState("");

  async function getDoc() {
    const snapshot = await database
      .collection("Livelinks")

      .doc(match.params.slug)
      .get();
    const data = snapshot.data();

    setFolderData(data);
  }
  useEffect(() => {
    getDoc();
  }, []);
  return (
    <div>
      <nav class="navbar navbar-expand-md bg-dark navbar-dark">
        <Link
          class="navbar-brand"
          to={`/scheduledlive/main/${match.params.slug}`}
        >
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
            <li class="nav-item">
              <a class="nav-link" href={FolderData.url1}>
                Day 1
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href={FolderData.url2}>
                Day 2
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href={FolderData.url3}>
                Day 3
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href={FolderData.url4}>
                Day 4
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href={FolderData.url5}>
                Day 5
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href={FolderData.url6}>
                Day 6
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href={FolderData.url7}>
                Day 7
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <br />
      <br />
      <br />
      Secret :<p> {FolderData.Secret_name}</p>
      *********************
      <br />
      <strong>
        <p>Folder_name: {FolderData.Folder_name}</p>
        <p>Secret_name: {FolderData.Secret_name}</p>
        <p>Bday_date: {FolderData.Bday_date}</p>
        <p>url1: {FolderData.url1}</p>
        <p>url2: {FolderData.url2}</p>
        <p>url3: {FolderData.url3}</p>
        <p>url4: {FolderData.url4}</p>
        <p>url5: {FolderData.url5}</p>
        <p>url6: {FolderData.url6}</p>
        <p>url7: {FolderData.url7}</p>
      </strong>
    </div>
  );
}

export default ScheduledLiveMainPage;
