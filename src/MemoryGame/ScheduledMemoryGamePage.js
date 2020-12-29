import React, { useState, useEffect } from "react";
import HeaderBtn from "../Studio/HeaderBtn";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import ImageIcon from "@material-ui/icons/Image";
import firebase from "../firebase";
import ShareIcon from "@material-ui/icons/Share";
import { storage } from "../firebase";
import { v4 as uuidv4 } from "uuid";

import MemoryGame from "./MemoryGame";
import LinkIcon from "@material-ui/icons/Link";
import CropPage from "../Utils/CropPage";
import Copy from "../Utils/Copy";
import { useSelector } from "react-redux";
import VisibilityIcon from "@material-ui/icons/Visibility";
import Loader from "react-loader-spinner";
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

function ScheduledMemoryGamePage({ step, slug, getDoc }) {
  let { edit } = useSelector((state) => ({ ...state }));
  const [Cloading, setCLoading] = useState(false);
  const [loading, setloading] = useState(false);
  const database = firebase.firestore();
  const { user } = useSelector((state) => ({ ...state }));
  const secclasses = secuseStyles();
  const [showshare, setshowshare] = useState(false);
  const [livelink, setlivelink] = useState();
  const [previewlink, setpreviewlink] = useState("");
  const [imageAsFile, setImageAsFile] = useState("");

  const [fbimg1, setfbimg1] = useState(
    "https://images.unsplash.com/photo-1549021179-127b81585b60?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8MSUyMDF8ZW58MHwyfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  );
  const [image_url1, setimage_url1] = useState();
  const [opencrop1, setopencrop1] = useState(false);
  const [send1, setsend1] = useState();

  const [fbimg2, setfbimg2] = useState(
    "https://images.unsplash.com/photo-1561113275-8c092fce13c3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8MSUyMDF8ZW58MHwyfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  );
  const [image_url2, setimage_url2] = useState();
  const [opencrop2, setopencrop2] = useState(false);
  const [send2, setsend2] = useState();

  const [fbimg3, setfbimg3] = useState(
    "https://images.unsplash.com/photo-1597489420377-e23d4a080346?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8MSUyMDF8ZW58MHwyfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  );
  const [image_url3, setimage_url3] = useState();
  const [opencrop3, setopencrop3] = useState(false);
  const [send3, setsend3] = useState();

  const [fbimg4, setfbimg4] = useState(
    "https://images.unsplash.com/photo-1597314040740-5836f612a030?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8MSUyMDF8ZW58MHwyfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  );
  const [image_url4, setimage_url4] = useState();
  const [opencrop4, setopencrop4] = useState(false);
  const [send4, setsend4] = useState();

  const [fbimg5, setfbimg5] = useState(
    "https://images.unsplash.com/photo-1600433880575-c8eb9363bc9c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fDElMjAxfGVufDB8MnwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  );
  const [image_url5, setimage_url5] = useState();
  const [opencrop5, setopencrop5] = useState(false);
  const [send5, setsend5] = useState();

  const [fbimg6, setfbimg6] = useState(
    "https://images.unsplash.com/photo-1588214479734-a256a12abb37?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8MSUzQTF8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  );
  const [image_url6, setimage_url6] = useState();
  const [opencrop6, setopencrop6] = useState(false);
  const [send6, setsend6] = useState();
  const [score, setscore] = useState(Number.MAX_VALUE);
  const onSelectFile1 = (e) => {
    setsend1(window.URL.createObjectURL(e.target.files[0]));
    setopencrop1(true);
  };
  const onSelectFile2 = (e) => {
    setsend2(window.URL.createObjectURL(e.target.files[0]));
    setopencrop2(true);
  };
  const onSelectFile3 = (e) => {
    setsend3(window.URL.createObjectURL(e.target.files[0]));
    setopencrop3(true);
  };
  const onSelectFile4 = (e) => {
    setsend4(window.URL.createObjectURL(e.target.files[0]));
    setopencrop4(true);
  };
  const onSelectFile5 = (e) => {
    setsend5(window.URL.createObjectURL(e.target.files[0]));
    setopencrop5(true);
  };
  const onSelectFile6 = (e) => {
    setsend6(window.URL.createObjectURL(e.target.files[0]));
    setopencrop6(true);
  };

  useEffect(() => {
    setCLoading(true);
    if (edit.text != "") {
      const todoRef = firebase
        .database()
        .ref("/MemoryGame/" + edit.text)
        .once("value")
        .then((snapshot) => {
          var img1 = snapshot.val().url1;
          setfbimg1(img1);
          var img2 = snapshot.val().url2;
          setfbimg2(img2);
          var img3 = snapshot.val().url3;
          setfbimg3(img3);
          var img4 = snapshot.val().url4;
          setfbimg4(img4);
          var img5 = snapshot.val().url5;
          setfbimg5(img5);
          var img6 = snapshot.val().url6;
          setfbimg6(img6);
          setCLoading(false);
        });
    } else {
      setCLoading(false);
    }
  }, []);
  useEffect(() => {
    func();
  }, [fbimg1]);

  const func = () => {
    return (
      <MemoryGame
        fbimg1={fbimg1}
        fbimg2={fbimg2}
        fbimg3={fbimg3}
        fbimg4={fbimg4}
        fbimg5={fbimg5}
        fbimg6={fbimg6}
      />
    );
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
    toast.success("Memory Game successfully added to your pack");
    getDoc();
  }
  const handleFireBaseUpload = () => {
    setloading(true);
    var ud1 = uuidv4();
    var ud2 = uuidv4();
    var ud3 = uuidv4();
    var ud4 = uuidv4();
    var ud5 = uuidv4();
    var ud6 = uuidv4();
    const uploadTask = storage
      .ref(`/images/${imageAsFile.name}`)
      .put(imageAsFile);
    if (edit.text != "") {
      const todoRef = firebase.database().ref("MemoryGame/" + edit.text);
      const todo = {
        url1: fbimg1,
        url2: fbimg2,
        url3: fbimg3,
        url4: fbimg4,
        url5: fbimg5,
        url6: fbimg6,
        score: score,
      };
      todoRef.update(todo);
      setlivelink(
        "http://localhost:3000/scheduledlive/memorygame/" +
          edit.text +
          "/" +
          slug
      );
      console.log(livelink, "livelink");
      setpreviewlink("/scheduledlive/memorygame/" + edit.text + "/" + slug);
      setloading(false);
    } else if (!livelink) {
      const todoRef = firebase.database().ref("MemoryGame");
      const todo = {
        url1: fbimg1,
        url2: fbimg2,
        url3: fbimg3,
        url4: fbimg4,
        url5: fbimg5,
        url6: fbimg6,
        score: score,
      };
      var newKey = todoRef.push(todo).getKey();
      setlivelink(
        "http://localhost:3000/scheduledlive/memorygame/" + newKey + "/" + slug
      );

      setpreviewlink("/scheduledlive/memorygame/" + newKey + "/" + slug);
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
          console.log(image_url1);
          storage
            .ref("images")
            .child(ud1)
            .putString(image_url1, "base64", { contentType: "image/jpg" })
            .then((savedImage) => {
              savedImage.ref.getDownloadURL().then((downUrl1) => {
                storage
                  .ref("images")
                  .child(ud2)
                  .putString(image_url2, "base64", { contentType: "image/jpg" })
                  .then((savedImage) => {
                    savedImage.ref.getDownloadURL().then((downUrl2) => {
                      storage
                        .ref("images")
                        .child(ud3)
                        .putString(image_url3, "base64", {
                          contentType: "image/jpg",
                        })
                        .then((savedImage) => {
                          savedImage.ref.getDownloadURL().then((downUrl3) => {
                            storage
                              .ref("images")
                              .child(ud4)
                              .putString(image_url4, "base64", {
                                contentType: "image/jpg",
                              })
                              .then((savedImage) => {
                                savedImage.ref
                                  .getDownloadURL()
                                  .then((downUrl4) => {
                                    storage
                                      .ref("images")
                                      .child(ud5)
                                      .putString(image_url5, "base64", {
                                        contentType: "image/jpg",
                                      })
                                      .then((savedImage) => {
                                        savedImage.ref
                                          .getDownloadURL()
                                          .then((downUrl5) => {
                                            storage
                                              .ref("images")
                                              .child(ud6)
                                              .putString(image_url6, "base64", {
                                                contentType: "image/jpg",
                                              })
                                              .then((savedImage) => {
                                                savedImage.ref
                                                  .getDownloadURL()
                                                  .then((downUrl6) => {
                                                    const todoRef = firebase
                                                      .database()
                                                      .ref("MemoryGame");
                                                    const todo = {
                                                      url1: downUrl1,
                                                      url2: downUrl2,
                                                      url3: downUrl3,
                                                      url4: downUrl4,
                                                      url5: downUrl5,
                                                      url6: downUrl6,
                                                      score: score,
                                                    };
                                                    var newKey = todoRef
                                                      .push(todo)
                                                      .getKey();
                                                    setlivelink(
                                                      "http://localhost:3000/scheduledlive/memorygame/" +
                                                        newKey +
                                                        "/" +
                                                        slug
                                                    );
                                                    console.log(
                                                      livelink,
                                                      "livelink"
                                                    );
                                                    setpreviewlink(
                                                      "/scheduledlive/memorygame/" +
                                                        newKey +
                                                        "/" +
                                                        slug
                                                    );
                                                  });
                                                setloading(false);
                                              });
                                          });
                                      });
                                  });
                              });
                          });
                        });
                    });
                  });
              });
            });
        }
      );
    }
    {
      edit.text != "" && toast.success("Memory Game updated successfully");
    }
  };

  return (
    <div style={{ backgroundColor: "#70cff3" }}>
      <div style={{ backgroundColor: "#70cff3" }} class="container-fluid pt-3">
        <div class="row">
          <div class="col-lg-1"></div>
          <div class="  col-lg-6">
            {Cloading ? (
              <Loader
                type="BallTriangle"
                color="#00BFFF"
                height={100}
                width={100}
              />
            ) : (
              <div>{func()}</div>
            )}
          </div>
          <div class="col-lg-1"></div>
          <div
            className=" col-lg-4"
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
                id="LocalfileInput1"
                name="LocalfileInput1"
                multiple
                type="file"
                accept="image/*"
                onChange={onSelectFile1}
                onClick={(event) => {
                  event.target.value = null;
                }}
              />
              {opencrop1 ? (
                <CropPage
                  send={send1}
                  setfbimg={setfbimg1}
                  setimage_url={setimage_url1}
                  opencrop={opencrop1}
                  aspect_ratio={1 / 1}
                  setopencrop={setopencrop1}
                />
              ) : null}
              <label htmlFor="LocalfileInput1">
                <HeaderBtn Icon={ImageIcon} title="Change  image 1" />
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
                onClick={(event) => {
                  event.target.value = null;
                }}
              />
              {opencrop2 ? (
                <CropPage
                  send={send2}
                  setfbimg={setfbimg2}
                  setimage_url={setimage_url2}
                  aspect_ratio={1 / 1}
                  opencrop={opencrop2}
                  setopencrop={setopencrop2}
                />
              ) : null}
              <label htmlFor="LocalfileInput2">
                <HeaderBtn Icon={ImageIcon} title="Change  image 2" />
              </label>
              <input
                style={{ display: "none" }}
                accept="image/* "
                className={secclasses.input}
                id="LocalfileInput3"
                name="LocalfileInput3"
                multiple
                type="file"
                accept="image/*"
                onChange={onSelectFile3}
                onClick={(event) => {
                  event.target.value = null;
                }}
              />
              {opencrop3 ? (
                <CropPage
                  send={send3}
                  setfbimg={setfbimg3}
                  setimage_url={setimage_url3}
                  aspect_ratio={1 / 1}
                  opencrop={opencrop3}
                  setopencrop={setopencrop3}
                />
              ) : null}
              <label htmlFor="LocalfileInput3">
                <HeaderBtn Icon={ImageIcon} title="Change  image 3" />
              </label>
              <input
                style={{ display: "none" }}
                accept="image/* "
                className={secclasses.input}
                id="LocalfileInput4"
                name="LocalfileInput4"
                multiple
                type="file"
                accept="image/*"
                onChange={onSelectFile4}
                onClick={(event) => {
                  event.target.value = null;
                }}
              />
              {opencrop4 ? (
                <CropPage
                  send={send4}
                  setfbimg={setfbimg4}
                  setimage_url={setimage_url4}
                  aspect_ratio={1 / 1}
                  opencrop={opencrop4}
                  setopencrop={setopencrop4}
                />
              ) : null}
              <label htmlFor="LocalfileInput4">
                <HeaderBtn Icon={ImageIcon} title="Change  image 4" />
              </label>
              <input
                style={{ display: "none" }}
                accept="image/* "
                className={secclasses.input}
                id="LocalfileInput5"
                name="LocalfileInput5"
                multiple
                type="file"
                accept="image/*"
                onChange={onSelectFile5}
                onClick={(event) => {
                  event.target.value = null;
                }}
              />
              {opencrop5 ? (
                <CropPage
                  send={send5}
                  setfbimg={setfbimg5}
                  setimage_url={setimage_url5}
                  aspect_ratio={1 / 1}
                  opencrop={opencrop5}
                  setopencrop={setopencrop5}
                />
              ) : null}
              <label htmlFor="LocalfileInput5">
                <HeaderBtn Icon={ImageIcon} title="Change  image 5" />
              </label>
              <input
                style={{ display: "none" }}
                accept="image/* "
                className={secclasses.input}
                id="LocalfileInput6"
                name="LocalfileInput6"
                multiple
                type="file"
                accept="image/*"
                onChange={onSelectFile6}
                onClick={(event) => {
                  event.target.value = null;
                }}
              />
              {opencrop6 ? (
                <CropPage
                  send={send6}
                  setfbimg={setfbimg6}
                  setimage_url={setimage_url6}
                  aspect_ratio={1 / 1}
                  opencrop={opencrop6}
                  setopencrop={setopencrop6}
                />
              ) : null}
              <label htmlFor="LocalfileInput6">
                <HeaderBtn Icon={ImageIcon} title="Change  image 6" />
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
                  <div style={{ width: "200px", marginTop: "20px" }}>
                    <HeaderBtn
                      handleClick={() => {
                        handleFireBaseUpload();
                      }}
                      Icon={LinkIcon}
                      title={edit.text != "" ? "Update pack" : "Generate Link"}
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

export default ScheduledMemoryGamePage;
