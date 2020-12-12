import React, { useState } from "react";
import HeaderBtn from "../Studio/HeaderBtn";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Cubes from "./Cubes";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import firebase from "../firebase";
import ShareIcon from "@material-ui/icons/Share";
import { storage } from "../firebase";
import { v4 as uuidv4 } from "uuid";

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

function CubesPage() {
  const secclasses = secuseStyles();
  const [showshare, setshowshare] = useState(false);
  const [livelink, setlivelink] = useState();
  const [previewlink, setpreviewlink] = useState("");
  const [imageAsFile, setImageAsFile] = useState("");

  const [fbimg1, setfbimg1] = useState(
    "https://images.unsplash.com/photo-1528642474498-1af0c17fd8c3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw=&auto=format&fit=crop&w=1950&q=80"
  );
  const [image_url1, setimage_url1] = useState();
  const [opencrop1, setopencrop1] = useState(false);
  const [send1, setsend1] = useState();

  const [fbimg2, setfbimg2] = useState(
    "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
  );
  const [image_url2, setimage_url2] = useState();
  const [opencrop2, setopencrop2] = useState(false);
  const [send2, setsend2] = useState();

  const [fbimg3, setfbimg3] = useState(
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60"
  );
  const [image_url3, setimage_url3] = useState();
  const [opencrop3, setopencrop3] = useState(false);
  const [send3, setsend3] = useState();

  const [fbimg4, setfbimg4] = useState(
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
  );
  const [image_url4, setimage_url4] = useState();
  const [opencrop4, setopencrop4] = useState(false);
  const [send4, setsend4] = useState();

  const [fbimg5, setfbimg5] = useState(
    "https://images.unsplash.com/photo-1473172707857-f9e276582ab6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
  );
  const [image_url5, setimage_url5] = useState();
  const [opencrop5, setopencrop5] = useState(false);
  const [send5, setsend5] = useState();

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
  const handleFireBaseUpload = () => {
    var ud1 = uuidv4();
    var ud2 = uuidv4();
    var ud3 = uuidv4();
    var ud4 = uuidv4();
    var ud5 = uuidv4();

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
                                          const todoRef = firebase
                                            .database()
                                            .ref("Cubes");
                                          const todo = {
                                            url1: downUrl1,
                                            url2: downUrl2,
                                            url3: downUrl3,
                                            url4: downUrl4,
                                            url5: downUrl5,
                                          };
                                          var newKey = todoRef
                                            .push(todo)
                                            .getKey();
                                          setlivelink(
                                            "http://localhost:3000/live/cubes/" +
                                              newKey
                                          );
                                          console.log(livelink, "livelink");
                                          setpreviewlink(
                                            "/live/cubes/" + newKey
                                          );
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
        <div style={{ flex: "0.1" }}></div>
        <div style={{ flex: "0.7" }}>
          <Cubes
            fbimg1={fbimg1}
            fbimg2={fbimg2}
            fbimg3={fbimg3}
            fbimg4={fbimg4}
            fbimg5={fbimg5}
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
                aspect_ratio={1 / 1}
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
                aspect_ratio={1 / 1}
                opencrop={opencrop2}
                setopencrop={setopencrop2}
              />
            ) : null}
            <label htmlFor="LocalfileInput2">
              <HeaderBtn Icon={ViewModuleIcon} title="Change  image 2" />
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
              <HeaderBtn Icon={ViewModuleIcon} title="Change  image 3" />
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
              <HeaderBtn Icon={ViewModuleIcon} title="Change  image 4" />
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
              <HeaderBtn Icon={ViewModuleIcon} title="Change  image 5" />
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

export default CubesPage;
