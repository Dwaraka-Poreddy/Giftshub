import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import firebase from "../firebase";
import NpackSelect from "./NPackSelect";
function NpackSelectPage({ history }) {
  const { user } = useSelector((state) => ({ ...state }));
  const [npackorder, setnpackorder] = useState([]);
  const database = firebase.firestore();
  useEffect(() => {
    var user = firebase.auth().currentUser;
    if (!user) {
      history.push("/login");
    }
  }, []);
  const setpackfunc = (selected) => {
    setnpackorder(selected);
  };
  const CreateNDayPack = (e) => {
    npackorder.map((item, index) => {});
    var sevendayPack = firebase.firestore().collection("/n-day-pack");
    var sevendayPackPack = sevendayPack
      .doc(`${user.uid}`)
      .collection("giftshub");
    sevendayPackPack.add({
      array_data: npackorder,
    });
  };
  return (
    <div>
      {JSON.stringify(npackorder)}
      <NpackSelect setpackfunc={setpackfunc} />
      <button
        onClick={() => {
          CreateNDayPack();
        }}
      >
        Click me
      </button>
    </div>
  );
}

export default NpackSelectPage;
