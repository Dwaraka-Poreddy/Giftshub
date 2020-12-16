import React, { useState } from "react";
import HeaderBtn from "../Studio/HeaderBtn";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ThreeDImage from "./ThreeDImage";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import firebase from "../firebase";
import ShareIcon from "@material-ui/icons/Share";
import { storage } from "../firebase";
import { v4 as uuidv4 } from "uuid";
import "./ThreeDImagePage.css";
import LinkIcon from "@material-ui/icons/Link";
import CropPage from "../Utils/CropPage";
import Copy from "../Utils/Copy";
import Share from "../Utils/Share";
import VisibilityIcon from "@material-ui/icons/Visibility";
const secuseStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(0),
    },
  },
  input: {
    display: "none",
  },
}));

function OpenGreetingCardPage() {
  const secclasses = secuseStyles();
  const [showshare, setshowshare] = useState(false);
  const [livelink, setlivelink] = useState();
  const [previewlink, setpreviewlink] = useState("");
  const [fireurl, setFireUrl] = useState("");
  const [imageAsFile, setImageAsFile] = useState("");
  const [image_url, setimage_url] = useState();
  const [opencrop, setopencrop] = useState(false);
  const [send, setsend] = useState();

  const [fbimg, setfbimg] = useState(
    "https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/images%2Fmain.jpg?alt=media&token=2cb59a10-237a-450f-995d-d52f52188e22"
  );

  const onSelectFile = (e) => {
    setsend(window.URL.createObjectURL(e.target.files[0]));

    setopencrop(true);
  };

  const handleFireBaseUpload = () => {
    var ud = uuidv4();
    console.log(ud);

    const uploadTask = storage
      .ref(`/images/${imageAsFile.name}`)
      .put(imageAsFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (err) => {
        //catches the errors
        console.log(err);
      },
      () => {
        console.log(image_url);
        var s = storage
          .ref("images")
          .child(ud)
          .putString(image_url, "base64", { contentType: "image/jpg" })
          .then((savedImage) => {
            savedImage.ref.getDownloadURL().then((downUrl) => {
              console.log(downUrl);
              setFireUrl(downUrl);
              const todoRef = firebase.database().ref("ThreeDImage");
              const todo = {
                url: downUrl,
              };
              var newKey = todoRef.push(todo).getKey();
              setlivelink("http://localhost:3000/live/threedimage/" + newKey);
              setpreviewlink("/live/threedimage/" + newKey);
            });
          });
      }
    );
  };

  return (
    <div style={{ backgroundColor: "#70cff3" }}>
      <header
        style={{ backgroundColor: "#70cff3", color: "#ffffff" }}
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

      <br />
      <br />
      <br />
      <br />
      <div style={{ backgroundColor: "#70cff3" }} class="container-fluid pt-3">
        <div class="row">
          <div class="col-sm-1 "></div>
          <div class="col-sm-8 ">
            <ThreeDImage fbimg={fbimg} />
          </div>

          <div
            className="threedrnav col-sm-3"
            style={{
              backgroundColor: "#009dd9",
              justifyContent: "center",
              alignItems: "center",
              position: "sticky",
              top: "0",
              right: "0",
            }}
          >
            <div style={{ justifyContent: "center", padding: "20px 0" }}>
              <input
                style={{ display: "none" }}
                accept="image/* "
                className={secclasses.input}
                id="LocalfileInput"
                name="LocalfileInput"
                multiple
                type="file"
                accept="image/*"
                onChange={onSelectFile}
              />
              {opencrop ? (
                <CropPage
                  send={send}
                  setfbimg={setfbimg}
                  setimage_url={setimage_url}
                  aspect_ratio={16 / 9}
                  opencrop={opencrop}
                  setopencrop={setopencrop}
                />
              ) : null}
              <label htmlFor="LocalfileInput">
                <HeaderBtn Icon={ViewModuleIcon} title="Change  image " />
              </label>

              <center>
                <div style={{ width: "55%", marginTop: "20px" }}>
                  <HeaderBtn
                    handleClick={() => {
                      handleFireBaseUpload();
                    }}
                    Icon={LinkIcon}
                    title="Generate Link"
                  />
                </div>
              </center>
              <center>
                {livelink ? (
                  <div>
                    <div style={{ width: "55%", marginTop: "20px" }}>
                      <Copy livelink={livelink} />
                    </div>

                    <div style={{ width: "55%", marginTop: "20px" }}>
                      <Link class="logo" to={previewlink}>
                        <HeaderBtn Icon={VisibilityIcon} title="Preview " />
                      </Link>
                    </div>

                    {!showshare ? (
                      <div style={{ width: "55%", marginTop: "20px" }}>
                        <HeaderBtn
                          handleClick={() => {
                            setshowshare(true);
                          }}
                          Icon={ShareIcon}
                          title="Share "
                        />
                      </div>
                    ) : (
                      <Share livelink={livelink} />
                    )}
                  </div>
                ) : null}
              </center>
            </div>
          </div>
        </div>
      </div>

      {/* <div style={{ display: "flex" }}>
        
      </div> */}
      <footer style={{ backgroundColor: "#70cff3", color: "#ffffff" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12 col-sm-12">
              <p className="copyright">
                Copyright © 2020 Gift's Hub Company . Design:{" "}
                <a rel="nofollow" href="0">
                  Gift's Hub
                </a>
              </p>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12">
              <ul className="social">
                <li>
                  <a href="#">
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-rss" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-dribbble" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default OpenGreetingCardPage;