import React, { Fragment, useState } from "react";
import ResizableRect from "react-resizable-rotatable-draggable";

const ResizableContent = (props) => {
  const [width, setWidth] = useState(props.width);
  const [height, setHeight] = useState(props.height);
  const [top, setTop] = useState(props.top);
  const [left, setLeft] = useState(props.left);
  const [rotateAngle, setRotateAngle] = useState(props.rotateAngle);
  const blur = { filter: "blur(" + props.blur + ")" };
  const contentStyle = {
    top,
    left,
    width,
    height,
    position: "absolute",
    transform: `rotate(${rotateAngle}deg)`
  };

  const handleResize = (style, isShiftKey, type) => {
    const { top, left, width, height } = style;
    setWidth(Math.round(width));
    setHeight(Math.round(height));
    setTop(Math.round(top));
    setLeft(Math.round(left));
  };

  const handleRotate = (rotateAngle) => {
    setRotateAngle(rotateAngle);
  };

  const handleDrag = (deltaX, deltaY) => {
    setLeft(left + deltaX);
    setTop(top + deltaY);
  };

  return (
    <Fragment>
      <div
        onClick={() => {
          props.handleClick(props.index);
          console.log("srinivas");
        }}
        style={contentStyle}
      >
        {" "}
        <img
          style={{
            blur,
            width: width,
            height: height,
            opacity: props.opacity,
            borderRadius: props.borderRadius,
            // borderColor: props.borderColor,
            // border: "5px solid ",
            // filter:
            //   "blur(" +
            //   props.blur +
            //   "px) grayscale(" +
            //   props.grayscale +
            //   ") contrast(" +
            //   props.contrast +
            //   ") invert(" +
            //   props.invert +
            //   ")"
            filter: "grayscale(" + props.grayscale + ")"
          }}
          src={props.url}
          alt=""
        />
      </div>

      <ResizableRect
        top={top}
        rotatable
        left={left}
        // aspectRatio
        // minWidth={10}
        width={width}
        // minHeight={10}
        height={height}
        onDrag={handleDrag}
        onRotate={handleRotate}
        onResize={handleResize}
        zoomable="nw, ne, se, sw"
        rotateAngle={rotateAngle}
      />
    </Fragment>
  );
};

export default ResizableContent;
