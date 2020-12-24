import React, { useState, useEffect } from "react";
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

function ScheduledOpenGreetingCardPage({ step, slug, getDoc }) {
  let { edit } = useSelector((state) => ({ ...state }));
  const [Cloading, setCLoading] = useState(false);
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
  const [daycounter, setdaycounter] = useState();

  // useEffect(async () => {
  //   const snapshot = await database
  //     .collection("n-day-pack")
  //     .doc(`${user.uid}`)
  //     .collection("giftshub")
  //     .doc(slug)
  //     .get();
  //   const data = snapshot.data().array_data;
  //   setdaycounter(data.length - step - 1);
  // }, []);
  useEffect(() => {
    setCLoading(true);
    if (edit.text != "") {
      const todoRef = firebase
        .database()
        .ref("/OpenGreetingCard/" + edit.text)
        .once("value")
        .then((snapshot) => {
          var img = snapshot.val().url;
          setfbimg(img);

          var title1 = snapshot.val().text1;
          settext1(title1);
          var title2 = snapshot.val().text2;
          settext2(title2);
          var MainTitle = snapshot.val().maintext;
          setmaintext(MainTitle);
          setCLoading(false);
        });
    } else {
      setCLoading(false);
    }
  }, []);
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
    if (edit.text != "") {
      const todoRef = firebase.database().ref("OpenGreetingCard/" + edit.text);
      const todo = {
        url: fbimg,
        text1: text1,
        text2: text2,
        maintext: maintext,
      };
      todoRef.update(todo);
      setlivelink(
        "http://localhost:3000/scheduledlive/opengreetingcard/" +
          edit.text +
          "/" +
          slug
      );
      setpreviewlink(
        "/scheduledlive/opengreetingcard/" + edit.text + "/" + slug
      );

      setloading(false);
    } else if (!livelink) {
      const todoRef = firebase.database().ref("OpenGreetingCard");
      const todo = {
        url: fbimg,
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
      setpreviewlink("/scheduledlive/opengreetingcard/" + newKey + "/" + slug);

      setloading(false);
    } else {
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (err) => {
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
    }
  };
  async function EditPack() {
    const snapshot = await database
      .collection("n-day-pack")
      .doc(`${user.uid}`)
      .collection("giftshub")
      .doc(slug)
      .get();
    const data = snapshot.data().array_data;
    const newdata = data;
    newdata[step].url = livelink;
    await database
      .collection("n-day-pack")
      .doc(`${user.uid}`)
      .collection("giftshub")
      .doc(slug)
      .update(
        {
          array_data: newdata,
        },
        { merge: true }
      );
    await database.collection("Livelinks").doc(slug).update(
      {
        array_data: newdata,
      },
      { merge: true }
    );
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
      <div style={{ backgroundColor: "#70cff3" }} class="container-fluid pt-3">
        <div class="row">
          <div class="  col-lg-1"></div>
          <div class="  col-lg-7">
            {Cloading ? (
              <Loader
                type="BallTriangle"
                color="#00BFFF"
                height={100}
                width={100}
              />
            ) : (
              <div>
                <center>
                  <h1 className="example">{daycounter} days to go !!!</h1>
                </center>
                <OpenGreetingCard
                  fbimg={fbimg}
                  text1={text1}
                  text2={text2}
                  maintext={maintext}
                />
              </div>
            )}
          </div>
          <div class="col-lg-1"></div>
          <div
            className=" col-lg-3"
            style={{
              backgroundColor: "#009dd9",
              justifyContent: "center",
              alignItems: "center",
              position: "sticky",
              top: "0",
              right: "0",
            }}
          >
            <div style={{ padding: "20px 0", justifyContent: "center" }}>
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
              <center>
                <div style={{ width: "200px" }} className="RightSideBar2__Btn">
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
                      width: "200px",
                    }}
                    value={text1}
                    onChange={(e) => {
                      settext1(e.target.value);
                    }}
                  />
                </div>
                <div style={{ width: "200px" }} className="RightSideBar2__Btn">
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
                      width: "200px",
                    }}
                    value={text2}
                    onChange={(e) => {
                      settext2(e.target.value);
                    }}
                  />
                </div>
                <div style={{ width: "200px" }} className="RightSideBar2__Btn">
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
                      width: "200px",
                    }}
                    value={maintext}
                    onChange={(e) => {
                      setmaintext(e.target.value);
                    }}
                  />
                </div>
              </center>
              <center>
                {loading ? (
                  <Loader
                    type="BallTriangle"
                    color="#00BFFF"
                    height={100}
                    width={100}
                  />
                ) : (
                  <div style={{ marginTop: "20px" }}>
                    <HeaderBtn
                      handleClick={() => {
                        handleFireBaseUpload();
                      }}
                      Icon={LinkIcon}
                      title="Generate Link"
                    />
                  </div>
                )}
              </center>

              <center>
                {livelink ? (
                  <div>
                    <div style={{ width: "200px", marginTop: "20px" }}>
                      <Copy livelink={livelink} />
                    </div>

                    <div style={{ marginTop: "20px" }}>
                      <Link class="logo" to={previewlink} target="_blank">
                        <HeaderBtn Icon={VisibilityIcon} title="Preview " />
                      </Link>
                    </div>
                    <div style={{ marginTop: "20px" }}>
                      <HeaderBtn
                        handleClick={() => {
                          EditPack();
                        }}
                        Icon={ShareIcon}
                        title="Add to Pack "
                      />
                    </div>
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
    </div>
  );
}

export default ScheduledOpenGreetingCardPage;
