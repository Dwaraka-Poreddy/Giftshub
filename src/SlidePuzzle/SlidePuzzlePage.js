import React, { useState } from "react";
import HeaderBtn from "../Studio/HeaderBtn";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import SlidePuzzle from "./SlidePuzzle";
import SlidePuzzleAnswer from "./SlidePuzzleAnswer";
import ImageIcon from "@material-ui/icons/Image";
import firebase from "../firebase";
import ShareIcon from "@material-ui/icons/Share";
import { storage } from "../firebase";
import { v4 as uuidv4 } from "uuid";
import Loader from "react-loader-spinner";
import LinkIcon from "@material-ui/icons/Link";
import CropPage from "../Utils/CropPage";
import Copy from "../Utils/Copy";
import Share from "../Utils/Share";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Tour from "reactour";
import AuthHeader from "../components/nav/Header";
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

function OpenGreetingCardPage() {
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [accentColor, setaccentColor] = useState("#5cb7b7");
  const secclasses = secuseStyles();
  const [showshare, setshowshare] = useState(false);
  const [livelink, setlivelink] = useState();
  const [previewlink, setpreviewlink] = useState("");
  const [fireurl, setFireUrl] = useState("");
  const [imageAsFile, setImageAsFile] = useState("");
  const [image_url, setimage_url] = useState();
  const [opencrop, setopencrop] = useState(false);
  const [send, setsend] = useState();
  const [loading, setloading] = useState(false);
  const [fbimg, setfbimg] = useState(
    "https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/imp%2Ftom-and-jerry-hd-background.jpg?alt=media&token=a5fb8323-7899-46d7-8119-16b69e1e2531"
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
    if (!livelink) {
      const todoRef = firebase.database().ref("SlidePuzzle");
      const todo = {
        url: fbimg,
      };
      var newKey = todoRef.push(todo).getKey();
      setlivelink("http://localhost:3000/live/slidepuzzle/" + newKey);
      setpreviewlink("/live/slidepuzzle/" + newKey);

      setloading(false);
    } else {
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
                const todoRef = firebase.database().ref("SlidePuzzle");
                const todo = {
                  url: downUrl,
                };
                var newKey = todoRef.push(todo).getKey();
                setlivelink("http://localhost:3000/live/slidepuzzle/" + newKey);
                setpreviewlink("/live/slidepuzzle/" + newKey);
              });
              setloading(false);
            });
        }
      );
    }
  };
  const tourConfig = [
    {
      selector: '[data-tut="reactour__changeImage"]',
      content: `“It is always the small pieces that make the big picture”
      Select the image you want to generate a puzzle out of :
      `,
    },

    {
      selector: '[data-tut="reactour__generatelink"]',
      content: `Tada! Almost done, do generate the link for enabling the various sharing options`,
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
      <AuthHeader />
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

      <br />
      <br />
      <br />
      <br />
      <div style={{ backgroundColor: "#70cff3" }} class="container-fluid pt-3">
        <div class="row">
          <div class="col-md-1 "></div>
          <div class="col-md-6 col-xl-4 p-0">
            <center>
              <SlidePuzzle fbimg={fbimg} />
            </center>
          </div>
          <div class="col-md-6 col-xl-4  p-0">
            <div>
              <center>
                <SlidePuzzleAnswer fbimg={fbimg} />
              </center>
            </div>
          </div>

          <div
            className="threedrnav col-xl-3"
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
                {/* {livelink ? null : ( */}
                <span style={{ color: "#ffffff" }}>
                  {" "}
                  Hello! Allow us to give you a small tour on how to generate
                  this special gift. We are sure you wouldn't need one the next
                  time you are back.
                  <br /> P.S : Its that easy
                </span>
                <HeaderBtn
                  handleClick={() => {
                    setIsTourOpen(true);
                    setlivelink("123");
                  }}
                  Icon={FlightTakeoffIcon}
                  title=" Start Tour "
                />
                {/* )} */}
              </div>
            </center>
            <hr />
            <div style={{ padding: "20px 0 0 0 ", justifyContent: "center" }}>
              <div data-tut="reactour__changeImage">
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
                    aspect_ratio={1 / 1}
                    opencrop={opencrop}
                    setopencrop={setopencrop}
                  />
                ) : null}
                <label htmlFor="LocalfileInput">
                  <HeaderBtn Icon={ImageIcon} title="Change  image " />
                </label>
              </div>
              <center data-tut="reactour__generatelink">
                <div style={{ marginTop: "20px" }}>
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
              ) : (
                <center>
                  {livelink ? (
                    <div>
                      <div
                        data-tut="reactour__copylink"
                        style={{ marginTop: "20px", width: "200px" }}
                      >
                        <Copy livelink={livelink} />
                      </div>

                      <div
                        data-tut="reactour__preview"
                        style={{ marginTop: "20px" }}
                      >
                        <Link class="logo" to={previewlink} target="_blank">
                          <HeaderBtn Icon={VisibilityIcon} title="Preview " />
                        </Link>
                      </div>

                      {!showshare ? (
                        <div
                          data-tut="reactour__sharelink"
                          style={{ marginTop: "20px" }}
                        >
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
              )}
            </div>
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

export default OpenGreetingCardPage;
