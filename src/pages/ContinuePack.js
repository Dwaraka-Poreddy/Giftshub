import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import firebase from "../firebase";
import ScheduledThreeDImagePage from "../ThreeDImage/ScheduledThreeDImagePage";
function ContinuePack({ match }) {
  const database = firebase.firestore();
  const { user } = useSelector((state) => ({ ...state }));
  const [FolderData, setFolderData] = useState("");

  const [slag, setslag] = useState(match.params.slug);
  async function getDoc() {
    const snapshot = await database
      .collection("7-day-pack")
      .doc(`${user.uid}`)
      .collection("giftshub")
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
      <br />
      <br />
      <br />
      Secret :<p> {FolderData.Secret_name}</p>
      *********************
      <ScheduledThreeDImagePage slug={slag} />
    </div>
  );
}

export default ContinuePack;
