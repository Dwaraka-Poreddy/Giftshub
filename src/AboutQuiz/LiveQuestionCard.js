import React, { useState, useEffect } from "react";
import "./AboutQuiz.css";
import items from "./questions";
import "bootstrap/dist/css/bootstrap.min.css";
export default function AboutQuiz({ quesArray, answersArray, fbimg }) {
  const [showplayAgain, setshowPlayagain] = useState(false);
  const [correct, setcorrect] = useState(0);
  const [quesnumber, setquesnumber] = useState(0);
  const [bgcolrs, setbgcolrs] = useState([
    "red",
    "blue",
    "orange",
    "green",
    "yellow",
    "purple",
  ]);

  useEffect(() => {
    for (var i = 0; i <= correct; i++) {
      var sheeps = bgcolrs;
      sheeps[i] = "transparent";
      setbgcolrs(sheeps);
    }
  }, [correct]);
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
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-5">
            <div
              style={{
                backgroundImage: "url(" + fbimg + ")",
                height: "300px",
                width: "300px",
                margin: "auto",
                backgroundSize: "contain",
              }}
              src={fbimg}
              alt=""
            >
              {quesArray.map((item, index) => {
                return (
                  <div
                    style={{
                      width: "100%",
                      backgroundColor: bgcolrs[index],
                      height: "150px",
                      opacity: "0.8",
                    }}
                  ></div>
                );
              })}
            </div>
          </div>
          <div className="col-lg-7">
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
                    <div
                      className="questions row"
                      style={{ maxWidth: "400px" }}
                    >
                      {items[quesArray[quesnumber]].options.map(
                        (item, index) => {
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
                                  src={
                                    items[quesArray[quesnumber]].images[index]
                                  }
                                  alt=""
                                />
                                {item}
                              </div>
                            </div>
                          );
                        }
                      )}
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
        </div>
      </div>
    </div>
  );
}
