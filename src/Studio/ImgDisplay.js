import { BorderColor } from "@material-ui/icons";
import React, { useState } from "react";
import Draggable from "react-draggable";
import ResizableContent from "./ResizableContent";
function ImgDisplay({ item, index, handleClick }) {
  const [isMousedOver, setMouseOver] = useState(true);

  return (
    !item.isImgdisplay && (
      <div
        onClick={() => {
          handleClick(index);
          console.log("ImgDisplay");
        }}
      >
        <ResizableContent
          top={100}
          left={100}
          width={100}
          height={100}
          rotateAngle={0}
          url={item.ImgSource}
          index={index}
          handleClick={handleClick}
          opacity={item.opacity}
          blur={item.blur}
          grayscale={item.grayscale}
          contrast={item.contrast}
          invert={item.invert}
          borderRadius={item.borderRadius}
          borderColor={item.borderColor}
        >
          {/* <img
            onMouseOver={() => setMouseOver(true)}
            onMouseOut={() => setMouseOver(false)}
            style={{
              opacity: item.opacity,
              display: !item.isImgdisplay ? "inline-block" : "none",
              width: "100px",
              height: "100px",

              // objectFit: "cover",
              top: index * 50,
              left: index * 50,
              margin: "auto",
              // borderRadius: item.borderRadius,
              // border: "1px solid ",
              filter:
                "blur(" +
                item.blur +
                "px) grayscale(" +
                item.grayscale +
                ") contrast(" +
                item.contrast +
                ") invert(" +
                item.invert +
                ")",

              borderColor: item.borderColor
            }}
            src={item.ImgSource}
            alt={index}
          />  {JSON.stringify(item)} */}
        </ResizableContent>
      </div>
    )
  );
}
export default ImgDisplay;
