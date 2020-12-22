import React, { useState, useEffect } from "react";
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
import { useSelector } from "react-redux";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { toast } from "react-toastify";
import Loader from "react-loader-spinner";
import FormatColorFillIcon from "@material-ui/icons/FormatColorFill";
import Tour from "reactour";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
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

function ScheduledThreeDImagePage({ slug, getDoc }) {
  let { edit } = useSelector((state) => ({ ...state }));
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [accentColor, setaccentColor] = useState("#5cb7b7");
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
  const [fbimg, setfbimg] = useState(
    "https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/images%2Fmain.jpg?alt=media&token=2cb59a10-237a-450f-995d-d52f52188e22"
  );
  const [Cloading, setCLoading] = useState(false);
  const [firstcol, setfirstcol] = useState("#302015");
  const [secondcol, setsecondcol] = useState("#1c1008");
  const [color, setColor] = useState({});
  useEffect(() => {
    setCLoading(true);
    if (edit.text != "") {
      const todoRef = firebase
        .database()
        .ref("/ThreeDImage/" + edit.text)
        .once("value")
        .then((snapshot) => {
          var img = snapshot.val().url;
          setfbimg(img);
          var col1 = snapshot.val().firstcol;
          setfirstcol(col1);
          var col2 = snapshot.val().secondcol;
          setsecondcol(col2);
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
    if (edit.text != "" || !livelink) {
      const todoRef = firebase.database().ref("ThreeDImage");
      const todo = {
        url: fbimg,
        firstcol: firstcol,
        secondcol: secondcol,
      };
      var newKey = todoRef.push(todo).getKey();
      setlivelink(
        "http://localhost:3000/scheduledlive/threedimage/" + newKey + "/" + slug
      );
      setpreviewlink("/scheduledlive/threedimage/" + newKey + "/" + slug);

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
                console.log(downUrl);
                setFireUrl(downUrl);
                const todoRef = firebase.database().ref("ThreeDImage");
                const todo = {
                  url: downUrl,
                  firstcol: firstcol,
                  secondcol: secondcol,
                };
                var newKey = todoRef.push(todo).getKey();
                setlivelink(
                  "http://localhost:3000/scheduledlive/threedimage/" +
                    newKey +
                    "/" +
                    slug
                );
                setpreviewlink(
                  "/scheduledlive/threedimage/" + newKey + "/" + slug
                );
              });
              setloading(false);
            });
        }
      );
    }
  };
  async function EditPack() {
    await database
      .collection("7-day-pack")
      .doc(`${user.uid}`)
      .collection("giftshub")
      .doc(slug)
      .update({
        url1: livelink,
      });
    await database.collection("Livelinks").doc(slug).update({
      url1: livelink,
    });
    toast.success("3D image successfully added to your pack");
    getDoc();
  }

  const tourConfig = [
    {
      selector: '[data-tut="reactour__changeImage"]',
      content: `changes the image`,
    },
    {
      selector: '[data-tut="reactour__gradient"]',
      content: `choose gradient from and to colors`,
    },
    {
      selector: '[data-tut="reactour__generatelink"]',
      content: `generates a live link for this component. Once the link is generated few other options are shown`,
    },
    {
      selector: '[data-tut="reactour__copylink"]',
      content: `copies the generated live link to clipboard`,
    },

    {
      selector: '[data-tut="reactour__preview"]',
      content: `previews the component  crerated`,
    },
    {
      selector: '[data-tut="reactour__sharelink"]',
      content: `shares the live link of the component  crerated`,
    },
  ];
  return (
    <div style={{ backgroundColor: "#70cff3" }}>
      <Tour
        onRequestClose={() => {
          setIsTourOpen(false);
          setlivelink("");
        }}
        steps={tourConfig}
        isOpen={isTourOpen}
        maskClassName="mask"
        className="helper"
        rounded={5}
        accentColor={accentColor}
      />
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
                  <h1 className="example">Six days to go !!!</h1>
                </center>
                <ThreeDImage
                  firstcol={firstcol}
                  secondcol={secondcol}
                  fbimg={fbimg}
                />
              </div>
            )}
          </div>
          <div class="col-lg-1"></div>
          <div
            className="threedrnav  col-lg-3"
            style={{
              backgroundColor: "#009dd9",
              justifyContent: "center",
              alignItems: "center",
              position: "sticky",
              top: "0",
              right: "0",
            }}
          >
            <center>
              <div
                style={{
                  justifyContent: "center",
                  padding: "20px 0 0 0 ",
                }}
              >
                {livelink ? null : (
                  <HeaderBtn
                    handleClick={() => {
                      setIsTourOpen(true);
                      setlivelink("123");
                    }}
                    Icon={FlightTakeoffIcon}
                    title=" Start Tour "
                  />
                )}
              </div>
            </center>
            <hr />
            <div style={{ justifyContent: "center" }}>
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
                  aspect_ratio={4 / 3}
                  opencrop={opencrop}
                  setopencrop={setopencrop}
                />
              ) : null}
              <label htmlFor="LocalfileInput">
                <HeaderBtn Icon={ViewModuleIcon} title="Change  image " />
              </label>
              <input
                type="color"
                id="FirstColor"
                initialValue={firstcol}
                value={firstcol}
                onChange={(e) => {
                  setfirstcol(e.target.value);
                }}
                placement="right"
                autoAdjust="true"
                style={{
                  margin: "auto",
                  visibility: "hidden",
                  position: "relative",
                  display: "flex",
                  height: "5px",
                }}
              />
              <label htmlFor="FirstColor">
                <HeaderBtn
                  Icon={FormatColorFillIcon}
                  title="Gradient Left Color "
                />
              </label>
              <input
                type="color"
                id="ToColor"
                initialValue={secondcol}
                value={secondcol}
                onChange={(e) => {
                  setsecondcol(e.target.value);
                }}
                placement="right"
                autoAdjust="true"
                style={{
                  margin: "auto",
                  visibility: "hidden",
                  position: "relative",
                  display: "flex",
                  height: "5px",
                }}
              />
              <label htmlFor="ToColor">
                <HeaderBtn
                  Icon={FormatColorFillIcon}
                  title="Gradient Right Color"
                />
              </label>
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
                      <Link class="logo" to={previewlink}>
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

export default ScheduledThreeDImagePage;
