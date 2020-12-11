import React, { useState, useEffect, useRef } from "react";

import "./styles.css";

const useInterval = (callback, delay, duration) => {
  const durationRef = useRef(duration);
  const durationIntervalRef = useRef();

  const handler = () => {
    callback(durationRef);
  };

  useEffect(() => {
    const durationInterval = setInterval(handler, delay);
    durationIntervalRef.current = durationInterval;
    return () => {
      clearInterval(durationInterval);
    };
  }, [delay]);

  return durationIntervalRef;
};

function MemoryGame({ fbimg1, fbimg2, fbimg3, fbimg4, fbimg5, fbimg6 }) {
  const [newGame, setNewGame] = useState(false);

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
  const [duration, setDuration] = useState(0);
  const [finishedItems, setFinishedItems] = useState([]);
  const [winner, setWinner] = useState(false);

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
  }, [newGame]);

  const durationIntervalRef = useInterval(
    (durationRef) => {
      durationRef.current++;
      setDuration(durationRef.current);
    },
    1000,
    duration
  );

  useEffect(() => {
    if (finishedItems.length > 0 && finishedItems.length === list.length) {
      setWinner(true);
      clearInterval(durationIntervalRef.current);
    }
  }, [finishedItems]);

  return (
    <div>
      <div className="text-center p-4 d-flex flex-column">
        <center>
          <h1 className="example">Happy Birthday !!!</h1>
        </center>

        {list.length === 0 ? (
          <div>...Loading</div>
        ) : (
          <div>
            <br />
            <br />
            <div
              style={{ width: "1000px", height: "750px" }}
              className="container"
            >
              <div className="row no-gutters">
                {list.map((item, index) => (
                  <div
                    className={`col-3 card ${
                      visibleItems.includes(index) ? "grid-card-show" : ""
                    } ${
                      finishedItems.includes(index)
                        ? "grid-card-show grid-card-finished"
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
            {winner && (
              <div>
                You Win !
                <br />
                Finished in {duration} seconds
              </div>
            )}
          </div>
        )}
        <br />
        <br />
        <button
          style={{
            color: "#f8d3d3",
            width: "125px",
            margin: "-10px auto 0",
            background: "-webkit-linear-gradient(59deg, #3a6073, #16222a)",
          }}
          onClick={() => {
            setNewGame(!newGame);
            setVisibleItems([]);
            setFinishedItems([]);
            setWinner(false);
          }}
          className="btn  mb-4"
        >
          New Game
        </button>
      </div>
    </div>
  );
}

export default MemoryGame;
