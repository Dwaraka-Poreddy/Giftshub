import React, { useMemo, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Base64 } from "js-base64";
import Puzzle from "./Puzzle";
const GeneratePuzzle = ({ match }) => {
  const [pzlimg, setPzlimg] = useState("");
  useEffect(() => {
    setPzlimg(Base64.decode(match.params.slug));
  });

  return (
    <div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        {" "}
        <Puzzle bgimg={pzlimg} />
      </div>
    </div>
  );
};

export default GeneratePuzzle;
