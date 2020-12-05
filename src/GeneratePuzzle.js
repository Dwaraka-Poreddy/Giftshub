import React, { useMemo, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Base64 } from "js-base64";
import Puzzle from "./Puzzle";
import PuzzleAnswer from "./SlidePuzzleAnswer";
const GeneratePuzzle = ({ match }) => {
  const [pzlimg, setPzlimg] = useState("");
  useEffect(() => {
    setPzlimg(Base64.decode(match.params.slug));
  });

  return (
    <div>
      <div
        style={{
          display: "flex",
          width: "60%",
          marginLeft: "20%",
          // justifyContent: "space-evenly",
          marginTop: "5vh",
        }}
      >
        {" "}
        <Puzzle bgimg={pzlimg} />
        <PuzzleAnswer bgimg={pzlimg} />
      </div>
    </div>
  );
};

export default GeneratePuzzle;
