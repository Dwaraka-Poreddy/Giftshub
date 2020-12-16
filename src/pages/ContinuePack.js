import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import firebase from "../firebase";
function ContinuePack({ match }) {
  const database = firebase.firestore();
  const { user } = useSelector((state) => ({ ...state }));
  const [FolderData, setFolderData] = useState("");
  const [url1, seturl1] = useState("");

  const EditPack = (e) => {
    e.preventDefault();
    database
      .collection("7-day-pack")
      .doc(`${user.uid}`)
      .collection("giftshub")
      .doc(match.params.slug)
      .update({
        url1: url1,
      });
    database
      .collection("Livelinks")

      .doc(match.params.slug)
      .update({
        url1: url1,
      });
  };
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
      Secret :<p> {FolderData.Secret_name}</p>
      *********************
      <form onSubmit={EditPack}>
        <label>
          URL1:
          <input
            onChange={(e) => seturl1(e.target.value)}
            type="text"
            name="url1"
          />
        </label>
        <input type="submit" value="Add url1" />
      </form>
    </div>
  );
}

export default ContinuePack;
