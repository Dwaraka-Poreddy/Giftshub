import React, { useState } from "react";
import HeaderBtn from "./HeaderBtn";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AnimatedFrame from "./AnimatedFrame";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import firebase from "./firebase";
import ShareIcon from "@material-ui/icons/Share";
import { storage } from "./firebase";
import { v4 as uuidv4 } from "uuid";
import CropPage from "./CropPage";
import InputBase from "@material-ui/core/InputBase";
import CreateIcon from "@material-ui/icons/Create";
import LinkIcon from "@material-ui/icons/Link";
import Copy from "./Copy";
import Share from "./Share";
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

export default function AnimatedFramePage() {
  const [showshare, setshowshare] = useState(false);
  const [livelink, setlivelink] = useState();
  const [previewlink, setpreviewlink] = useState("");
  const [fireurl, setFireUrl] = useState("");
  const [imageAsFile, setImageAsFile] = useState("");
  // const [fbimg1, setfbimg1] = useState();
  const [image_url1, setimage_url1] = useState();
  const [opencrop1, setopencrop1] = useState(false);
  const [send1, setsend1] = useState();
  // const [fbimg2, setfbimg2] = useState();
  const [image_url2, setimage_url2] = useState();
  const [opencrop2, setopencrop2] = useState(false);
  const [send2, setsend2] = useState();
  const [title, settitle] = useState("Stop hovering");
  const secclasses = secuseStyles();

  const [fbimg2, setfbimg2] = useState(
    "https://unsplash.imgix.net/reserve/PPE2xapKRNyy2DlTt89F_Gutman_island.jpg?fit=crop&fm=jpg&h=1500&q=75&w=2400"
  );
  const [fbimg1, setfbimg1] = useState(
    "http://unsplash.imgix.net/reserve/de9uL9L7RSmzV4SAoAO5_Lauren%20and%20Winona%20Under%20a%20pass-1.jpg?fit=crop&fm=jpg&h=1500&q=75&w=2400"
  );
  const onSelectFile1 = (e) => {
    setsend1(window.URL.createObjectURL(e.target.files[0]));

    setopencrop1(true);
  };

  const onSelectFile2 = (e) => {
    setsend2(window.URL.createObjectURL(e.target.files[0]));

    setopencrop2(true);
  };

  const handleFireBaseUpload = () => {
    var ud1 = uuidv4();
    console.log(ud1);
    var ud2 = uuidv4();
    console.log(ud2);

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
        console.log(image_url1);
        storage
          .ref("images")
          .child(ud1)
          .putString(image_url1, "base64", { contentType: "image/jpg" })
          .then((savedImage) => {
            savedImage.ref.getDownloadURL().then((downUrl1) => {
              console.log(downUrl1);
              setFireUrl(downUrl1);
              storage
                .ref("images")
                .child(ud2)
                .putString(image_url2, "base64", { contentType: "image/jpg" })
                .then((savedImage) => {
                  savedImage.ref.getDownloadURL().then((downUrl2) => {
                    console.log(downUrl2);
                    setFireUrl(downUrl2);
                    const todoRef = firebase.database().ref("AnimatedFrame");
                    const todo = {
                      url1: downUrl1,
                      url2: downUrl2,
                      title: title,
                    };
                    var newKey = todoRef.push(todo).getKey();
                    setlivelink(
                      "http://localhost:3000/live/animatedframe/" + newKey
                    );
                    console.log(livelink);
                    setpreviewlink("/live/animatedframe/" + newKey);
                  });
                });
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
      <div style={{ display: "flex" }}>
        <div style={{ flex: "0.05" }}></div>
        <div style={{ flex: "0.7", width: "70%" }}>
          <AnimatedFrame fbimg1={fbimg1} fbimg2={fbimg2} title={title} />
        </div>
        <div style={{ flex: "0.05" }}></div>
        <div
          style={{
            backgroundColor: "#009dd9",
            justifyContent: "center",
            alignItems: "center",
            flex: "0.2",
            height: "80vh",
          }}
        >
          <div style={{ marginTop: "50%", justifyContent: "center" }}>
            <input
              style={{ display: "none" }}
              accept="image/* "
              className={secclasses.input}
              id="LocalfileInput1"
              name="LocalfileInput1"
              multiple
              type="file"
              accept="image/*"
              onChange={onSelectFile1}
            />
            {opencrop1 ? (
              <CropPage
                send={send1}
                setfbimg={setfbimg1}
                setimage_url={setimage_url1}
                aspect_ratio={16 / 9}
                opencrop={opencrop1}
                setopencrop={setopencrop1}
              />
            ) : null}
            <label htmlFor="LocalfileInput1">
              <HeaderBtn Icon={ViewModuleIcon} title="Change  image 1" />
            </label>
            <input
              style={{ display: "none" }}
              accept="image/* "
              className={secclasses.input}
              id="LocalfileInput2"
              name="LocalfileInput2"
              multiple
              type="file"
              accept="image/*"
              onChange={onSelectFile2}
            />
            {opencrop2 ? (
              <CropPage
                send={send2}
                setfbimg={setfbimg2}
                setimage_url={setimage_url2}
                aspect_ratio={16 / 9}
                opencrop={opencrop2}
                setopencrop={setopencrop2}
              />
            ) : null}
            <label htmlFor="LocalfileInput2">
              <HeaderBtn Icon={ViewModuleIcon} title="Change  Image 2" />
            </label>
            <div
              style={{ width: "80%", marginLeft: "10%" }}
              className="RightSideBar2__Btn"
            >
              <CreateIcon
                style={{
                  margin: "0 10px 0 5px",
                  color: "#ffffff",
                  fontSize: "large",
                }}
              />
              <InputBase
                className="RightSideBar2__Btn"
                multiline
                style={{
                  color: "#068dc0",
                  margin: "0",
                  backgroundColor: "#ffffff",
                  width: "100%",
                }}
                value={title}
                onChange={(e) => {
                  settitle(e.target.value);
                }}
              />
            </div>
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
      <footer style={{ backgroundColor: "#70cff3", color: "#ffffff" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12 col-sm-12">
              <p className="copyright">
                Copyright © 2020 Gift's Hub Company . Design:{" "}
                <a rel="nofollow" href="/">
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
