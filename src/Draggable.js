import React, { useState, useEffect } from "react";

export default function Draggable() {
  const [x, setX] = useState(null);
  const [y, setY] = useState(null);
  const [x1, setX1] = useState(20);
  const [y1, setY1] = useState(20);
  const updateMousePosition = (ev) => {
    setX1(ev.clientX);
    setY1(ev.clientY);
    console.log("Do resize stuff", ev.clientY);
  };
  useEffect(() => {
    function handleResize() {
      setX1(x);
      setY1(y);
      // console.log("Do resize stuff", x);
    }
    const updateMousePosition = (ev) => {
      setX(ev.clientX);
      setY(ev.clientY);
    };
    // window.addEventListener("mousemove", handleResize, updateMousePosition);

    return function cleanupListener() {
      window.removeEventListener(
        "mousemove",
        // handleResize,
        updateMousePosition
      );
    };
  });
  // useEffect(() => {
  //   window.addEventListener("mousemove", updateMousePosition);

  //   return () => window.removeEventListener("mousemove", updateMousePosition);
  // }, []);
  // const [pos1, setPos1] = useState("0");
  // const [pos2, setPos2] = useState("0");
  // const [pos3, setPos3] = useState("0");
  // const [pos4, setPos4] = useState("0");
  // var dragElement = document.getElementById("mydiv");
  // var finele = document.getElementById("mydivheader");
  // var info = dragElement.style.border;

  return (
    <div
      onMouseDown={() => {
        window.addEventListener("mousemove", updateMousePosition);
      }}
      // onMouseMove={() => {}}
      onMouseUp={() => {
        window.removeEventListener("mousemove", updateMousePosition);
        // console.log("mouse up");
        // setX1(x);
        // setY1(y);
        // dragElement.style.top = x1;
        // dragElement.style.left = y1;
        // finele.style.backgroundColor = "red";
        // console.log(finele.style.backgroundColor);
      }}
      id="mydiv"
      style={{
        resize: "both",
        position: "absolute",
        zIndex: "9",
        top: y1 - 20,
        left: x1 - 20,

        // backgroundColor: "#f1f1f1",
        textAlign: "center",
        border: "1px solid red",
      }}
    >
      <div
        style={{
          resize: "both",
          padding: "10px",
          cursor: "move",
          zIndex: "10",
          margin: "5px",
          backgroundColor: "#2196F3",
          color: "#fff",
        }}
        id="mydivheader"
      >
        Click here to move {x1},{y1}
      </div>
    </div>
  );
}

// function App() {
// const [x, setX] = useState(null);
// const [y, setY] = useState(null);

// const updateMousePosition = (ev) => {
//   setX(ev.clientX);
//   setY(ev.clientY);
// };

// useEffect(() => {
//   window.addEventListener("mousemove", updateMousePosition);

//   return () => window.removeEventListener("mousemove", updateMousePosition);
// }, []);

//   return (
//     <div className="App">
//       <h1>
//         Your cursor is at {x}, {y}.
//       </h1>
//     </div>
//   );
