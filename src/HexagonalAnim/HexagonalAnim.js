import React from "react";
import "./HexagonalAnim.css";

export default function HexagonalAnim({
  fbimg1,
  fbimg2,
  fbimg3,
  fbimg4,
  fbimg5,
  fbimg6,
  t1,
  t2,
  t3,
  t4,
  t5,
  t6,
}) {
  return (
    <body className="hexagonalAnimation" translate="no">
      <base target="_blank" />
      <ul className="hexagonalAnimationul">
        <li className="hexagonalAnimationli">
          <a href="https://update-image.web.app/">
            <img alt="1" className="hexagonalAnimationimg" src={fbimg1} />
          </a>
        </li>
        <li className="hexagonalAnimationli">
          <a href="https://update-image.web.app/">
            <img alt="1" className="hexagonalAnimationimg" src={fbimg2} />
          </a>
        </li>
        <li className="hexagonalAnimationli">
          <a href="https://update-image.web.app/">
            <img alt="1" className="hexagonalAnimationimg" src={fbimg3} />
          </a>
        </li>
        <li className="hexagonalAnimationli">
          <a href="https://update-image.web.app/">
            <img alt="1" className="hexagonalAnimationimg" src={fbimg4} />
          </a>
        </li>
        <li className="hexagonalAnimationli">
          <a href="https://update-image.web.app/">
            <img alt="1" className="hexagonalAnimationimg" src={fbimg5} />
          </a>
        </li>
        <li className="hexagonalAnimationli">
          <a href="https://update-image.web.app/">
            <img alt="1" className="hexagonalAnimationimg" src={fbimg6} />
          </a>
        </li>
      </ul>
    </body>
  );
}
