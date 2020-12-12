import React from "react";
import "./Btn.css";

function Btn({ selected, title, handleClick }) {
  return (
    <div onClick={handleClick} className={`Btn ${selected && "selected"}`}>
      <h2 className="Btn__title"> {title} </h2>{" "}
    </div>
  );
}

export default Btn;
