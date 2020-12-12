import React, { useState, useRef, useEffect } from "react";
import Draggable from "react-draggable";
import InputBase from "@material-ui/core/InputBase";
import "./TextDisplay.css";
function TextDisplay({ rank, item, index, handleClick }) {
  const inputRef = useRef(null);
  const [isMousedOver, setMouseOver] = useState(true);
  const [inputVisible, setInputVisible] = useState(false);
  // const [title, setTitle] = useState(item.title);
  function onClickOutSide(e) {
    // Check if user is clicking outside of <input>
    if (
      inputRef.current &&
      // toggleLayerProps.isOpen &&
      !inputRef.current.contains(e.target)
    ) {
      setInputVisible(false);
      setMouseOver(false);
      // Disable title input
    }
  }

  useEffect(() => {
    // Handle outside clicks on mounted state

    if (isMousedOver) {
      document.addEventListener("mousedown", onClickOutSide);
    }
    if (inputVisible) {
      document.addEventListener("mousedown", onClickOutSide);
    }
    // This is a necessary step to "dismount" unnecessary events when we destroy the component
    return () => {
      document.removeEventListener("mousedown", onClickOutSide);
    };
  });
  return (
    <div style={{ zIndex: 1 }} ref={inputRef}>
      <Draggable>
        <div>
          <span
            className="TextDisplay"
            onMouseOver={() => setMouseOver(true)}
            onMouseOut={() => setMouseOver(false)}
            onClick={() => {
              handleClick(index);
            }}
            style={{
              fontSize: item.fontSize + "px",
              position: "absolute",
              top: index * 10,
              left: index * 10,
              padding: "3px 5px",
              display: item.isdisplay ? "inline-block" : "none",
              // display: "inline-block",
              borderRadius: "5px",
              border: isMousedOver ? "2px dashed #7b8091" : null,
              fontWeight: item.isBold ? "bold" : "normal",
              fontStyle: item.isItalic ? "italic" : "normal",
              textDecoration: item.isUnderLine ? "underline" : "none",
              color: item.color,
              fontFamily: item.fontFamily,
              backgroundColor: item.backgroundColor,
              WebkitTextStroke: "1px " + item.outlineColor,
              WebkitTextStrokeWidth: "thin"
            }}
          >
            {/* {JSON.stringify(item)} */}
            {item.title}
          </span>
        </div>
      </Draggable>
    </div>
  );
}
export default TextDisplay;
