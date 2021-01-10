import React, { useState, useEffect } from "react";
import LiveQuestionCard from "../AboutQuiz/LiveQuestionCard";
import items from "../AboutQuiz/questions";
import Loader from "react-loader-spinner";
import firebase from "../firebase";
export default function LiveThreeDImage({ match }) {
  const [fbimg, setfbimg] = useState("");
  const [quesArray, setquesArray] = useState([]);
  const [answersArray, setanswersArray] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(async () => {
    setloading(true);
    const todoRef = await firebase
      .database()
      .ref("/AboutQuiz/" + match.params.slug)
      .once("value")
      .then((snapshot) => {
        var img = snapshot.val().url;
        setfbimg(img);
        var quesArray = snapshot.val().quesArray;
        setquesArray(quesArray);
        var answersArray = snapshot.val().answersArray;
        setanswersArray(answersArray);
      });
    setloading(false);
  }, []);
  return (
    <div style={{ backgroundColor: "#70cff3", height: "100vh" }}>
      <div style={{ backgroundColor: "#70cff3" }}>
        <div style={{ display: "flex" }}>
          <div style={{ flex: "0.15" }}></div>
          <div style={{ flex: "0.7" }}>
            {loading ? (
              <Loader
                type="BallTriangle"
                color="#00BFFF"
                height={100}
                width={100}
              />
            ) : (
              <>
                {console.log(items[quesArray[0]].question, "livepage ofnum")}
                <LiveQuestionCard
                  quesArray={quesArray}
                  answersArray={answersArray}
                  fbimg={fbimg}
                />
              </>
            )}
          </div>
          <div style={{ flex: "0.15" }}></div>
        </div>
      </div>
    </div>
  );
}
