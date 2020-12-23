import React, { useState } from "react";
import N_Pack_Select from "./N_Pack_Select";
import firebase from "../firebase";
import { storage } from "../firebase";

function N_Day_Home() {
  const [npackorder, setnpackorder] = useState([]);
  const database = firebase.firestore();
  const setpackfunc = (selected) => {
    setnpackorder(selected);
    console.log(selected, "selected");
  };
  const CreateNDayPack = (e) => {
    npackorder.map((item, index) => {});
    var sevendayPack = firebase.firestore().collection("/n-day-pack");
    var sevendayPackPack = sevendayPack.doc("srinivas").collection("giftshub");
    sevendayPackPack.add({
      srini: npackorder,
    });
  };

  return (
    <div>
      {JSON.stringify(npackorder)}
      <N_Pack_Select setpackfunc={setpackfunc} />
      <button
        onClick={() => {
          CreateNDayPack();
        }}
      >
        Click me
      </button>
      {npackorder.map((item, index) => {
        return <p>{item.id}:""</p>;
      })}
    </div>
  );
}

export default N_Day_Home;
