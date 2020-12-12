import React, { useState, useEffect } from "react";
import SpecialCard from "../SpecialCard/SpecialCard";
import Nav from "./Nav";
import firebase from "../firebase";

export default function LiveSpecialCard({ match }) {
  const [fbimg, setfbimg] = useState("");
  const [head1, sethead1] = useState("");
  const [head2, sethead2] = useState("");
  const [para, setpara] = useState("");

  useEffect(() => {
    const todoRef = firebase
      .database()
      .ref("/SpecialCard/" + match.params.slug)
      .once("value")
      .then((snapshot) => {
        var img = snapshot.val().url;
        setfbimg(img);
        var head1 = snapshot.val().head1;
        sethead1(head1);
        var head2 = snapshot.val().head2;
        sethead2(head2);
        var para = snapshot.val().para;
        setpara(para);
      });
  }, []);
  return (
    <div>
      <Nav />
      <div>
        <SpecialCard fbimg={fbimg} head2={head2} head1={head1} para={para} />
      </div>
    </div>
  );
}
