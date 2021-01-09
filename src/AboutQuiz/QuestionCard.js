import React, { useState } from "react";
import "./AboutQuiz.css";
import items from "./questions";
import "bootstrap/dist/css/bootstrap.min.css";
export default function AboutQuiz({
  quesArray,
  answersArray,
  setquesArray,
  setanswersArray,
}) {
  const [quesnumber, setquesnumber] = useState(0);
  const [isselectcomplete, setisselectcomplete] = useState(false);
  const handleoptionclick = (index) => {
    setquesArray([...quesArray, quesnumber]);
    setanswersArray([...answersArray, index]);
    setquesnumber(quesnumber + 1);
    if (quesnumber + 1 == items.length) {
      setisselectcomplete(true);
    }
  };
  return (
    <div className="App">
      {!isselectcomplete ? (
        <div class="container">
          <div class="card p-3">
            <h4>Question {quesArray.length + 1} of 10</h4>
            <button
              style={{ margin: "auto", width: "200px" }}
              type="button"
              class="btn btn-primary "
              onClick={() => {
                setquesnumber(quesnumber + 1);
              }}
            >
              SKIP THIS QUESTION
            </button>
            <h4
              style={{
                color: "#3e6ef3",
                fontSize: "1.5rem",
                fontWeight: "500",
                lineHeight: "1.2",
              }}
            >
              {items[quesnumber].question}
            </h4>

            <center>
              <div className="questions row" style={{ maxWidth: "400px" }}>
                {items[quesnumber].options.map((item, index) => {
                  return (
                    <div class=" col-6 mb-2">
                      <div
                        class="card"
                        onClick={() => {
                          handleoptionclick(index);
                          console.log(items[quesArray[quesnumber]], "clicked");
                        }}
                      >
                        <img
                          style={{ width: "100%" }}
                          src={items[quesnumber].images[index]}
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
        <h4
          style={{
            color: "#3e6ef3",
            fontSize: "1.5rem",
            fontWeight: "500",
            lineHeight: "1.2",
          }}
        >
          Questions selection completed!
        </h4>
      )}
    </div>
  );
}
