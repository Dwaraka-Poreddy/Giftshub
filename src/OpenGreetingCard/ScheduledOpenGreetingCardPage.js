import React, { useState } from "react";
import HeaderBtn from "../Studio/HeaderBtn";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import OpenGreetingCard from "./OpenGreetingCard";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import firebase from "../firebase";
import ShareIcon from "@material-ui/icons/Share";
import { storage } from "../firebase";
import { v4 as uuidv4 } from "uuid";

import InputBase from "@material-ui/core/InputBase";
import CreateIcon from "@material-ui/icons/Create";
import LinkIcon from "@material-ui/icons/Link";
import CropPage from "../Utils/CropPage";
import Copy from "../Utils/Copy";
import Share from "../Utils/Share";
import { toast } from "react-toastify";
import Loader from "react-loader-spinner";
import { useSelector } from "react-redux";
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

function ScheduledOpenGreetingCardPage({ slug, getDoc }) {
  const [loading, setloading] = useState(false);
  const database = firebase.firestore();
  const secclasses = secuseStyles();
  const [showshare, setshowshare] = useState(false);
  const [livelink, setlivelink] = useState();
  const [previewlink, setpreviewlink] = useState("");
  const [fireurl, setFireUrl] = useState("");
  const [imageAsFile, setImageAsFile] = useState("");
  const [image_url, setimage_url] = useState();
  const [opencrop, setopencrop] = useState(false);
  const [send, setsend] = useState();
  const { user } = useSelector((state) => ({ ...state }));

  const [text1, settext1] = useState("Here are some CSS");
  const [text2, settext2] = useState("hearts for you");
  const [maintext, setmaintext] = useState("Roses are");
  const [fbimg, setfbimg] = useState(
    "https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/images%2F1b8f3a18-4680-4580-aca0-c87651df6faf?alt=media&token=4c5d9aae-7acc-40bc-beb8-7292c893f7a4"
  );

  const onSelectFile = (e) => {
    setsend(window.URL.createObjectURL(e.target.files[0]));

    setopencrop(true);
  };

  const handleFireBaseUpload = () => {
    setloading(true);
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
              const todoRef = firebase.database().ref("OpenGreetingCard");
              const todo = {
                url: downUrl,
                text1: text1,
                text2: text2,
                maintext: maintext,
              };
              var newKey = todoRef.push(todo).getKey();
              setlivelink(
                "http://localhost:3000/scheduledlive/opengreetingcard/" +
                  newKey +
                  "/" +
                  slug
              );
              setpreviewlink(
                "/scheduledlive/opengreetingcard/" + newKey + "/" + slug
              );
            });
            setloading(false);
          });
      }
    );
  };
  async function EditPack() {
    await database
      .collection("7-day-pack")
      .doc(`${user.uid}`)
      .collection("giftshub")
      .doc(slug)
      .update({
        url3: livelink,
      });
    await database.collection("Livelinks").doc(slug).update({
      url3: livelink,
    });
    toast.success("Greeting Card successfully added to your pack");
    getDoc();
  }
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
          <center>
            <h1 className="example">Four days to go !!!</h1>
          </center>
          <OpenGreetingCard
            fbimg={fbimg}
            text1={text1}
            text2={text2}
            maintext={maintext}
          />
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
              id="LocalfileInput"
              name="LocalfileInput"
              multiple
              type="file"
              accept="image/*"
              onChange={onSelectFile}
              onClick={(event) => {
                event.target.value = null;
              }}
            />
            {opencrop ? (
              <CropPage
                send={send}
                setfbimg={setfbimg}
                setimage_url={setimage_url}
                aspect_ratio={2 / 3}
                opencrop={opencrop}
                setopencrop={setopencrop}
              />
            ) : null}
            <label htmlFor="LocalfileInput">
              <HeaderBtn Icon={ViewModuleIcon} title="Change  image " />
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
                value={text1}
                onChange={(e) => {
                  settext1(e.target.value);
                }}
              />
            </div>
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
                value={text2}
                onChange={(e) => {
                  settext2(e.target.value);
                }}
              />
            </div>
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
                value={maintext}
                onChange={(e) => {
                  setmaintext(e.target.value);
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
            {loading ? (
              <Loader
                type="BallTriangle"
                color="#00BFFF"
                height={100}
                width={100}
              />
            ) : null}
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
                  <div style={{ width: "55%", marginTop: "20px" }}>
                    <HeaderBtn
                      handleClick={() => {
                        EditPack();
                      }}
                      Icon={ShareIcon}
                      title="Add to Pack "
                    />
                  </div>
                  {/* {!showshare ? (
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
                  )} */}
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
                <a rel="nofollow" href="https://templatemo.com">
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

export default ScheduledOpenGreetingCardPage;
