import React, { useState, useEffect } from "react";
import Countdown from "react-countdown";
import "./memory.css";

function MemoryGame({ fbimg1, fbimg2, fbimg3, fbimg4, fbimg5, fbimg6 }) {
  const [newGame, setNewGame] = useState(false);

  const [isstarted, setisstarted] = useState(false);
  const [list, setList] = useState([
    fbimg1,
    fbimg4,
    fbimg3,
    fbimg4,
    fbimg2,
    fbimg1,
    fbimg3,
    fbimg6,
    fbimg6,
    fbimg5,
    fbimg5,
    fbimg2,
  ]);
  const [visibleItems, setVisibleItems] = useState([]);

  const [finishedItems, setFinishedItems] = useState([]);
  const [winner, setWinner] = useState(false);
  const [starttime, setstarttime] = useState(Date.now());
  useEffect(() => {
    setList([
      fbimg1,
      fbimg4,
      fbimg3,
      fbimg4,
      fbimg2,
      fbimg1,
      fbimg3,
      fbimg6,
      fbimg6,
      fbimg5,
      fbimg5,
      fbimg2,
    ]);
  }, [fbimg1, fbimg2, fbimg3, fbimg4, fbimg5, fbimg6]);

  const maincontent = () => {
    return <Countdown date={starttime + 5000} renderer={renderer} />;
  };

  const Completionist = () => {
    return (
      <div>
        {winner && (
          <div>
            {" "}
            <div>
              You Win !
              <br />
              Finished in n seconds
            </div>
          </div>
        )}
        <button
          className="main-button"
          onClick={() => {
            setNewGame(!newGame);
            setVisibleItems([]);
            setFinishedItems([]);
            setWinner(false);
            setstarttime(Date.now());
          }}
        >
          New Game
        </button>
      </div>
    );
  };
  const checkItems = (firstIndex, secondIndex) => {
    if (firstIndex !== secondIndex && list[firstIndex] === list[secondIndex]) {
      setFinishedItems([...finishedItems, firstIndex, secondIndex]);
    } else {
      setTimeout(() => {
        setVisibleItems([]);
      }, 600);
    }
  };

  useEffect(() => {
    setList(
      list.sort(() => {
        return 0.5 - Math.random();
      })
    );
    maincontent();
  }, [newGame]);

  useEffect(() => {
    if (finishedItems.length > 0 && finishedItems.length === list.length) {
      {
        setWinner(true);
      }
    }
  }, [finishedItems]);
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      return <Completionist />;
    } else {
      return (
        <div>
          <span>
            {hours}:{minutes}:{seconds}
          </span>
          {isstarted ? (
            <div className="text-center p-2 d-flex flex-column">
              {list.length === 0 ? (
                <div>...Loading</div>
              ) : (
                <div>
                  <br />
                  <br />

                  <div style={{ padding: "0" }} className="container">
                    <div className="row no-gutters">
                      {list.map((item, index) => (
                        <div
                          className={`col-3 memcard ${
                            visibleItems.includes(index)
                              ? "grid-memcard-show"
                              : ""
                          } ${
                            finishedItems.includes(index)
                              ? "grid-memcard-show grid-memcard-finished"
                              : ""
                          }`}
                          key={item.id}
                          onClick={() => {
                            if (!finishedItems.includes(index)) {
                              switch (visibleItems.length) {
                                case 0:
                                  setVisibleItems([index]);
                                  break;
                                case 1:
                                  if (visibleItems[0] !== index) {
                                    setVisibleItems(visibleItems.concat(index));
                                    checkItems(visibleItems[0], index);
                                  }
                                  break;
                                case 2:
                                  setVisibleItems([index]);
                                  break;
                                default:
                                  setVisibleItems([]);
                              }
                            }
                          }}
                        >
                          <img
                            className={`img-thumbnail img-fluid grid-img`}
                            src={item}
                            alt={item.description}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              <br />
              <br />
            </div>
          ) : (
            <>
              <h6 style={{ color: "#ffffff", textAlign: "justify" }}>
                Greetings of the day and wish you many more! Welcome to a fun
                game challenging your wits and hoping to put up a big wide smile
                on your special day.
              </h6>{" "}
              <br />
              <h5 style={{ color: "#ffffff", textAlign: "justify" }}>
                Instructions -
              </h5>
              <ol>
                <li>
                  <p style={{ color: "#ffffff", textAlign: "justify" }}>
                    {" "}
                    There are 6 pictures behind these 12 tiles and finish this
                    game by matching the two tiles of the same picture together
                  </p>
                </li>
                <li>
                  <p style={{ color: "#ffffff", textAlign: "justify" }}>
                    At a given time only 2 tiles will be shown, so familiarise
                    yourself with where each picture is and finish the game to
                    beat your own personal best!
                  </p>
                </li>
              </ol>
              <br />
              <button
                className="main-button"
                onClick={() => {
                  setisstarted(true);
                  setstarttime(Date.now());
                }}
              >
                Start game
              </button>
            </>
          )}
        </div>
      );
    }
  };
  return <div>{maincontent()}</div>;
}

export default MemoryGame;
