import React, { useState } from "react";
import "./AboutQuiz.css";
import items from "./questions";
import "bootstrap/dist/css/bootstrap.min.css";
export default function AboutQuiz({ quesArray, answersArray }) {
  const [showplayAgain, setshowPlayagain] = useState(false);
  const [correct, setcorrect] = useState(0);
  const [quesnumber, setquesnumber] = useState(0);
  const handleoptionclick = (index) => {
    console.log(answersArray[quesnumber], "success", index, "success");
    if (answersArray[quesnumber] == index) {
      setcorrect(correct + 1);
    }
    if (quesnumber + 1 == quesArray.length) {
      setshowPlayagain(true);
    }
    if (quesnumber + 1 < quesArray.length) {
      setquesnumber(quesnumber + 1);
    }
  };
  return (
    <div className="App">
      {!showplayAgain ? (
        <div class="container">
          <div class="card p-3">
            {quesnumber > 0 ? (
              <h4>
                {correct} Correct out of {quesnumber}
              </h4>
            ) : null}

            <h4
              style={{
                color: "#3e6ef3",
                fontSize: "1.5rem",
                fontWeight: "500",
                lineHeight: "1.2",
              }}
            >
              {items[quesArray[quesnumber]].question}
            </h4>
            <center>
              <div className="questions row" style={{ maxWidth: "400px" }}>
                {items[quesArray[quesnumber]].options.map((item, index) => {
                  return (
                    <div class=" col-6 mb-2">
                      <div
                        class="card"
                        onClick={() => {
                          handleoptionclick(index);
                        }}
                      >
                        <img
                          style={{ width: "100%" }}
                          src={items[quesArray[quesnumber]].images[index]}
                          alt=""
                        />
                        {item}
                      </div>
                    </div>
                  );
                })}
              </div>
            </center>
          </div>
        </div>
      ) : (
        <div>
          <h4
            style={{
              color: "#3e6ef3",
              fontSize: "1.5rem",
              fontWeight: "500",
              lineHeight: "1.2",
            }}
          >
            Total Score {correct} out of {quesArray.length}
          </h4>
          <button
            class="btn btn-success"
            onClick={() => {
              setshowPlayagain(false);
              setcorrect(0);
              setquesnumber(0);
            }}
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
}
