import React, { useEffect, useState } from "react";

import firebase from "../firebase";
import ScheduledLiveNav from "./SchdeuledLiveNav";
function ScheduledLiveMainPage({ match }) {
  const database = firebase.firestore();
  const [FolderData, setFolderData] = useState("");
  const [dataurl, setdataurl] = useState([]);
  async function getDoc() {
    const snapshot = await database
      .collection("Livelinks")

      .doc(match.params.slug)
      .get();
    const data = snapshot.data();
    data.array_data.map((item, index) => {
      dataurl[index] = item.url;
    });
    setFolderData(data);
  }
  useEffect(() => {
    getDoc();
  }, []);
  return (
    <div>
      <ScheduledLiveNav slug={match.params.slug} />
      <br />
      <br />
      <br />
      Secret :<p> {FolderData.Secret_name}</p>
      *********************
      <br />
      <strong>
        <p>Folder_name: {FolderData.Folder_name}</p>
        <p>From_name: {FolderData.From_name}</p>
        <p>To_name: {FolderData.To_name}</p>
        <p>Bday_date: {FolderData.Bday_date}</p>
        <img src={FolderData.fbimg} alt="sender" />
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
