import React, { useState } from "react";
import "./AnimatedFrame.css";
import "../Buttons.css";
export default function AnimatedFrame({}) {
  const [title, settitle] = useState("Stop hovering");
  const [fbimg2, setfbimg2] = useState(
    "https://unsplash.imgix.net/reserve/PPE2xapKRNyy2DlTt89F_Gutman_island.jpg?fit=crop&fm=jpg&h=1500&q=75&w=2400"
  );
  const [fbimg1, setfbimg1] = useState(
    "https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/imp%2FAnimatedFramesImg1.jpg?alt=media&token=557aba90-f822-42de-b552-8e5299a9f102"
  );
  return (
    <div className="AnimatedApp" style={{ backgroundColor: "#70cff3" }}>
      <center style={{ marginTop: "13px" }}>
        <div
          style={{
            backgroundImage: "url(" + fbimg2 + ")",
          }}
          class="w"
        >
          <div class="k">
            <span
              style={{ backgroundImage: "url(" + fbimg1 + ")" }}
              class="i"
            ></span>
            <span
              style={{ backgroundImage: "url(" + fbimg1 + ")" }}
              class="i"
            ></span>
            <span
              style={{ backgroundImage: "url(" + fbimg1 + ")" }}
              class="i"
            ></span>
            <span
              style={{ backgroundImage: "url(" + fbimg1 + ")" }}
              class="i"
            ></span>
            <span
              style={{ backgroundImage: "url(" + fbimg1 + ")" }}
              class="i"
            ></span>
            <span
              style={{ backgroundImage: "url(" + fbimg1 + ")" }}
              class="i"
            ></span>
            <span
              style={{ backgroundImage: "url(" + fbimg1 + ")" }}
              class="i"
            ></span>
            <span
              style={{ backgroundImage: "url(" + fbimg1 + ")" }}
              class="i"
            ></span>
            <span
              style={{ backgroundImage: "url(" + fbimg1 + ")" }}
              class="i"
            ></span>
            <span
              style={{ backgroundImage: "url(" + fbimg1 + ")" }}
              class="i"
            ></span>
            <span
              style={{ backgroundImage: "url(" + fbimg1 + ")" }}
              class="i"
            ></span>
            <span
              style={{ backgroundImage: "url(" + fbimg1 + ")" }}
              class="i"
            ></span>
            <span
              style={{ backgroundImage: "url(" + fbimg1 + ")" }}
              class="i"
            ></span>
            <span
              style={{ backgroundImage: "url(" + fbimg1 + ")" }}
              class="i"
            ></span>
            <span
              style={{ backgroundImage: "url(" + fbimg1 + ")" }}
              class="i"
            ></span>
            <span
              style={{ backgroundImage: "url(" + fbimg1 + ")" }}
              class="i"
            ></span>
            <span
              style={{ backgroundImage: "url(" + fbimg1 + ")" }}
              class="i"
            ></span>
            <span
              style={{ backgroundImage: "url(" + fbimg1 + ")" }}
              class="i"
            ></span>
            <span
              style={{ backgroundImage: "url(" + fbimg1 + ")" }}
              class="i"
            ></span>
            <span
              style={{ backgroundImage: "url(" + fbimg1 + ")" }}
              class="i"
            ></span>
            <span
              style={{ backgroundImage: "url(" + fbimg1 + ")" }}
              class="i"
            ></span>
            <span
              style={{ backgroundImage: "url(" + fbimg1 + ")" }}
              class="i"
            ></span>
            <span
              style={{ backgroundImage: "url(" + fbimg1 + ")" }}
              class="i"
            ></span>
            <span
              style={{ backgroundImage: "url(" + fbimg1 + ")" }}
              class="i"
            ></span>
            <span
              style={{ backgroundImage: "url(" + fbimg1 + ")" }}
              class="i"
            ></span>{" "}
            <span
              style={{ backgroundImage: "url(" + fbimg1 + ")" }}
              class="i"
            ></span>
            <span
              style={{ backgroundImage: "url(" + fbimg1 + ")" }}
              class="i"
            ></span>
            <span
              style={{ backgroundImage: "url(" + fbimg1 + ")" }}
              class="i"
            ></span>
            <span
              style={{ backgroundImage: "url(" + fbimg1 + ")" }}
              class="i"
            ></span>
            <span
              style={{ backgroundImage: "url(" + fbimg1 + ")" }}
              class="i"
            ></span>{" "}
            <span
              style={{ backgroundImage: "url(" + fbimg1 + ")" }}
              class="i"
            ></span>
            <span
              style={{ backgroundImage: "url(" + fbimg1 + ")" }}
              class="i"
            ></span>
            <span
              style={{ backgroundImage: "url(" + fbimg1 + ")" }}
              class="i"
            ></span>
            <span
              style={{ backgroundImage: "url(" + fbimg1 + ")" }}
              class="i"
            ></span>
            <span
              style={{ backgroundImage: "url(" + fbimg1 + ")" }}
              class="i"
            ></span>{" "}
            <span
              style={{ backgroundImage: "url(" + fbimg1 + ")" }}
              class="i"
            ></span>
            <span
              style={{ backgroundImage: "url(" + fbimg1 + ")" }}
              class="i"
            ></span>
            <span
              style={{ backgroundImage: "url(" + fbimg1 + ")" }}
              class="i"
            ></span>
            <span
              style={{ backgroundImage: "url(" + fbimg1 + ")" }}
              class="i"
            ></span>
            <span
              style={{ backgroundImage: "url(" + fbimg1 + ")" }}
              class="i"
            ></span>
          </div>
          <div class="h">
            <h1>{title}</h1>
          </div>
        </div>
      </center>
    </div>
  );
}
