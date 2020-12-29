import React, { useState, useEffect } from "react";
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
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
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

function ScheduledSlidePuzzlePage({ step, slug, getDoc }) {
  const [showoptions, setshowoptions] = useState(false);
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
  const [fbimg, setfbimg] = useState(
    "https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/images%2F1b8f3a18-4680-4580-aca0-c87651df6faf?alt=media&token=4c5d9aae-7acc-40bc-beb8-7292c893f7a4"
  );

  useEffect(() => {
    setCLoading(true);
    if (edit.text != "") {
      const todoRef = firebase
        .database()
        .ref("/SlidePuzzle/" + edit.text)
        .once("value")
        .then((snapshot) => {
          var img = snapshot.val().url;
          setfbimg(img);
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
      const todoRef = firebase.database().ref("SlidePuzzle/" + edit.text);
      const todo = {
        url: fbimg,
      };
      todoRef.update(todo);
      setlivelink(
        "http://localhost:3000/scheduledlive/slidepuzzle/" +
          edit.text +
          "/" +
          slug
      );
      setpreviewlink("/scheduledlive/slidepuzzle/" + edit.text + "/" + slug);
      setloading(false);
    } else if (!livelink) {
      const todoRef = firebase.database().ref("SlidePuzzle");
      const todo = {
        url: fbimg,
      };
      var newKey = todoRef.push(todo).getKey();
      setlivelink(
        "http://localhost:3000/scheduledlive/slidepuzzle/" + newKey + "/" + slug
      );
      setpreviewlink("/scheduledlive/slidepuzzle/" + newKey + "/" + slug);
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
                setlivelink(
                  "http://localhost:3000/scheduledlive/slidepuzzle/" +
                    newKey +
                    "/" +
                    slug
                );
                setpreviewlink(
                  "/scheduledlive/slidepuzzle/" + newKey + "/" + slug
                );
              });
              setloading(false);
            });
        }
      );
    }
    {
      edit.text != "" && toast.success("Slide Puzzle updated successfully");
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
    toast.success("Slide Puzzle successfully added to your pack");
    getDoc();
  }
  return (
    <div style={{ backgroundColor: "#70cff3" }}>
      <div style={{ backgroundColor: "#70cff3" }} class="container-fluid pt-3">
        <div class="col-lg-1 "></div>

        <div class="row">
          <div class="col-md-1 "></div>

          <div class="col-md-6 col-xl-4">
            {Cloading ? (
              <Loader
                type="BallTriangle"
                color="#00BFFF"
                height={100}
                width={100}
              />
            ) : (
              <SlidePuzzle fbimg={fbimg} />
            )}
          </div>
          <div class="col-md-5 col-xl-4">
            {Cloading ? null : <SlidePuzzleAnswer fbimg={fbimg} />}
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
            <div style={{ padding: "20px 0 0 0 ", justifyContent: "center" }}>
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
                    {edit.text != "" ? (
                      <button
                        className="main-button"
                        onClick={() => {
                          handleFireBaseUpload();
                          setshowoptions(true);
                        }}
                        data-tut="reactour__updatepack"
                      >
                        Update pack
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          handleFireBaseUpload();
                          setshowoptions(true);
                        }}
                        className="main-button"
                        data-tut="reactour__generatelink"
                      >
                        Generate Link
                      </button>
                    )}
                  </div>
                )}
              </center>

              <center>
                {livelink ? (
                  <center>
                    <div style={{ marginTop: "20px", width: "200px" }}>
                      <Copy livelink={livelink} />
                    </div>

                    <div style={{ marginTop: "20px" }}>
                      <Link class="logo" to={previewlink} target="_blank">
                        <HeaderBtn Icon={VisibilityIcon} title="Preview " />
                      </Link>
                    </div>
                    {edit.text != "" ? null : (
                      <div style={{ marginTop: "20px" }}>
                        <HeaderBtn
                          handleClick={() => {
                            EditPack();
                          }}
                          Icon={ShareIcon}
                          title="Add to Pack "
                        />
                      </div>
                    )}
                  </center>
                ) : null}
              </center>
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

export default ScheduledSlidePuzzlePage;
