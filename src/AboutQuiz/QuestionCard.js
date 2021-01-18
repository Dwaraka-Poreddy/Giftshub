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
  const [name, setname] = useState("srinivas");
  const setQuestion = (e) => {
    var res = e.replace("$_$", name);
    return <h1>{res}</h1>;
  };
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
      <div className="contaier-fluid">
        <div className="row">
          {JSON.stringify(quesArray)}
          {JSON.stringify(answersArray)}
          <div className="col-lg-10">
            {!isselectcomplete ? (
              <div class="container">
                <div class="card p-3">
                  {quesArray.length ? (
                    <h4> {quesArray.length} Questions Selected. </h4>
                  ) : null}
                  <button
                    style={{ margin: "auto", width: "300px" }}
                    type="button"
                    class="btn btn-primary "
                    onClick={() => {
                      setquesnumber(quesnumber + 1);
                    }}
                  >
                    SKIP THIS QUESTION
                  </button>
                  <div
                    style={{
                      color: "#3e6ef3",
                      fontSize: "1.5rem",
                      fontWeight: "500",
                      lineHeight: "1.2",
                    }}
                  >
                    {setQuestion(items[quesnumber].question)}
                  </div>

                  <center>
                    <div
                      className="questions row"
                      style={{ maxWidth: "400px" }}
                    >
                      {items[quesnumber].options.map((item, index) => {
                        return (
                          <div class=" col-6 mb-2">
                            <div
                              class="card"
                              onClick={() => {
                                handleoptionclick(index);
                                console.log(
                                  items[quesArray[quesnumber]],
                                  "clicked"
                                );
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
                    <button
                      style={{ margin: "auto", width: "200px" }}
                      type="button"
                      class="btn btn-primary "
                      onClick={() => {
                        setisselectcomplete(true);
                      }}
                    >
                      Complete Selection
                    </button>
                  </center>
                </div>
              </div>
            ) : (
              <>
                <h4
                  style={{
                    color: "#3e6ef3",
                    fontSize: "1.5rem",
                    fontWeight: "500",
                    lineHeight: "1.2",
                  }}
                >
                  {quesArray.length} Questions selected successfully!
                </h4>
                <button
                  style={{ margin: "auto", width: "200px" }}
                  type="button"
                  class="btn btn-primary "
                  onClick={() => {
                    setisselectcomplete(false);
                    setquesArray([]);
                    setanswersArray([]);
                    setquesnumber(0);
                  }}
                >
                  Select Again
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
