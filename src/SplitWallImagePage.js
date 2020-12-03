import React, { useState } from "react";
import { Link } from "react-router-dom";
import SplitWallImage from "./SplitWallImage";
import HeaderBtn from "./HeaderBtn";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import { makeStyles } from "@material-ui/core/styles";
import Firebaseimageinput from "./Firebaseimageinput";
import firebase from "./firebase";

export default function SplitWallImagePage() {
  const [fbimg, setFbimg] = useState(
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/portrait.jpg"
  );

  const genLink = () => {
    const todoRef = firebase.database().ref("SplitWall");
    const todo = {
      url: fbimg
    };
    var newKey = todoRef.push(todo).getKey();
    console.log("https://kstxn.csb.app/live/splitwall/" + newKey);
  };

  return (
    <div className="App">
      <div>
        <header
          style={{ backgroundColor: "#70cff3" }}
          class="header-area header-sticky"
        >
          <div class="container">
            <div class="row">
              <div class="col-12">
                <nav class="main-nav">
                  <Link class="logo" to="/">
                    Gifts Hub
                  </Link>

                  <ul class="nav">
                    <li class="scroll-to-section">
                      <a href="#welcome" class="active">
                        Home
                      </a>
                    </li>
                    <li class="scroll-to-section">
                      <a href="#about">Combo</a>
                    </li>
                    <li class="scroll-to-section">
                      <a href="#services">Services</a>
                    </li>
                  </ul>
                  <a href="#menu" class="menu-trigger">
                    <span>Menu</span>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </header>
      </div>
      <div
        style={{
          display: "flex",
          flex: "1",
          backgroundColor: "#ffffff",
          justifyContent: "center",
          alignItems: "center",
          height: "100%"
        }}
      >
        <div style={{ flex: "0.8", alignItems: "center" }}>
          <SplitWallImage image={fbimg} />
        </div>
        <div
          style={{
            backgroundColor: "#009dd9",
            justifyContent: "center",
            alignItems: "center",
            flex: "0.2",
            height: "100vh"
          }}
        >
          <Firebaseimageinput setFbimg={setFbimg} />
          <div style={{ marginTop: "50%", justifyContent: "center" }}>
            <center>
              <div style={{ width: "55%" }}>
                <HeaderBtn
                  handleClick={genLink}
                  Icon={ViewModuleIcon}
                  title="Generate Link "
                />
              </div>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
}
