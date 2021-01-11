import React, { useState, useEffect } from "react";
import HeaderBtn from "../Studio/HeaderBtn";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Magazine from "./Magazine";
import ImageIcon from "@material-ui/icons/Image";
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
import Tour from "reactour";
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

function ScheduledMagazinePage({
  step,
  slug,
  getDoc,
  isTourOpen,
  setTourOpend,
}) {
  const [accentColor, setaccentColor] = useState("#70cff3");
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

  const [text, settext] = useState("BEST EVER CAPTAIN");
  const [name, setname] = useState("M S Dhoni");
  const [fbimg, setfbimg] = useState(
    "https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/imp%2FMagazine.jpg?alt=media&token=cb5e38c6-9f9d-4a4f-b338-a70a707e6091"
  );

  const [showoptions, setshowoptions] = useState(false);
  useEffect(() => {
    setCLoading(true);
    if (edit.text != "") {
      const todoRef = firebase
        .database()
        .ref("/Magazine/" + edit.text)
        .once("value")
        .then((snapshot) => {
          var img = snapshot.val().url;
          setfbimg(img);
          var text = snapshot.val().text;
          settext(text);
          var name = snapshot.val().name;
          setname(name);
          setCLoading(false);
        });
    } else {
      setCLoading(false);
    }
  }, []);
  const onSelectFile = (e) => {
    setsend(window.URL.createObjectURL(e.target.files[0]));
    setshowoptions(false);
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
      const todoRef = firebase.database().ref("Magazine/" + edit.text);
      const todo = {
        url: fbimg,
        name: name,
        text: text,
      };
      todoRef.update(todo);
      setlivelink(
        "http://localhost:3000/scheduledlive/magazine/" + edit.text + "/" + slug
      );
      setpreviewlink("/scheduledlive/magazine/" + edit.text + "/" + slug);

      setloading(false);
    } else if (!livelink) {
      const todoRef = firebase.database().ref("Magazine");
      const todo = {
        url: fbimg,
        name: name,
        text: text,
      };
      var newKey = todoRef.push(todo).getKey();
      setlivelink(
        "http://localhost:3000/scheduledlive/magazine/" + newKey + "/" + slug
      );
      setpreviewlink("/scheduledlive/magazine/" + newKey + "/" + slug);

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
                const todoRef = firebase.database().ref("Magazine");
                const todo = {
                  url: fbimg,
                  name: name,
                  text: text,
                };
                var newKey = todoRef.push(todo).getKey();
                setlivelink(
                  "http://localhost:3000/scheduledlive/magazine/" +
                    newKey +
                    "/" +
                    slug
                );
                setpreviewlink(
                  "/scheduledlive/magazine/" + newKey + "/" + slug
                );
              });
              setloading(false);
            });
        }
      );
    }
    {
      edit.text != "" && toast.success("Greeting Card updated successfully");
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
    toast.success("Magazine successfully added to your pack");
    getDoc();
  }

  const tourConfig = [
    {
      selector: '[data-tut="reactour__changeImage"]',
      content: `Choose the image from you local device to be  printed onto the magazine`,
    },

    {
      selector: '[data-tut="reactour__to"]',
      content: ` Enter the special person’s name `,
    },
    {
      selector: '[data-tut="reactour__from"]',
      content: ` Enter your name
      `,
    },
    {
      selector: '[data-tut="reactour__message"]',
      content: `We all love short and cute messages, so pour your heart but pay attention to the word limit!`,
    },
    {
      selector: '[data-tut="reactour__occasion"]',
      content: `Wishings for the special occasion`,
    },

    {
      selector: '[data-tut="reactour__generatelink"]',
      content: `Tada! Almost done, do generate the link for enabling the various sharing options.`,
    },

    {
      selector: '[data-tut="reactour__preview"]',
      content: `Previews the component  created in a new page.`,
    },
    {
      selector: '[data-tut="reactour__copylink"]',
      content: `Copies the generated live link to clipboard.`,
    },
    {
      selector: '[data-tut="reactour__addtopack"]',
      content: `Adds this component to the n-day pack you created`,
    },
    {
      selector: '[data-tut="reactour__updatepack"]',
      content: `Updates this component with the changes you made in the n-day pack.`,
    },
    {
      selector: '[data-tut="reactour__sharelink"]',
      content: `Displays options to share the live link on Facebook, WhatsApp, Twitter and Email.`,
    },
  ];

  return (
    <div style={{ backgroundColor: "#70cff3" }}>
      <Tour
        onRequestClose={() => {
          setTourOpend(false);
        }}
        steps={tourConfig}
        isOpen={isTourOpen}
        maskClassName="mask"
        className="helper"
        rounded={5}
        accentColor={accentColor}
      />

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
                <Magazine fbimg={fbimg} text={text} name={name} />
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
                    aspect_ratio={2 / 3}
                    opencrop={opencrop}
                    setopencrop={setopencrop}
                  />
                ) : null}
                <label htmlFor="LocalfileInput">
                  <HeaderBtn Icon={ImageIcon} title="Change  image " />
                </label>
              </div>
              <center>
                <div
                  data-tut="reactour__to"
                  style={{ width: "200px" }}
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
                      width: "200px",
                    }}
                    value={name}
                    onChange={(e) => {
                      setname(e.target.value);
                      setshowoptions(false);
                    }}
                  />
                </div>
                <div
                  data-tut="reactour__from"
                  style={{ width: "200px" }}
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
                      width: "200px",
                    }}
                    value={text}
                    onChange={(e) => {
                      settext(e.target.value);
                      setshowoptions(false);
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
                    {edit.text == "" || isTourOpen ? (
                      <button
                        className="main-button"
                        onClick={() => {
                          handleFireBaseUpload();
                          setshowoptions(true);
                        }}
                        data-tut="reactour__generatelink"
                      >
                        Generate Link
                      </button>
                    ) : null}
                    {edit.text != "" || isTourOpen ? (
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
                    ) : null}
                  </div>
                )}
              </center>
              <center>
                {(livelink && showoptions && !loading) || isTourOpen ? (
                  <div>
                    <div
                      data-tut="reactour__preview"
                      style={{ marginTop: "20px" }}
                    >
                      <Link class="logo" to={previewlink} target="_blank">
                        <HeaderBtn Icon={VisibilityIcon} title="Preview " />
                      </Link>
                    </div>
                    <div
                      data-tut="reactour__copylink"
                      style={{ width: "200px", marginTop: "20px" }}
                    >
                      <Copy livelink={livelink} />
                    </div>
                    {edit.text == "" || isTourOpen ? (
                      <div
                        data-tut="reactour__addtopack"
                        style={{ marginTop: "20px" }}
                      >
                        <HeaderBtn
                          handleClick={() => {
                            EditPack();
                          }}
                          Icon={ShareIcon}
                          title="Add to Pack "
                        />
                      </div>
                    ) : null}
                  </div>
                ) : null}
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScheduledMagazinePage;
