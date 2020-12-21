import React, { useState, useEffect } from "react";
import HeaderBtn from "../Studio/HeaderBtn";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { toast } from "react-toastify";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import firebase from "../firebase";
import ShareIcon from "@material-ui/icons/Share";
import { storage } from "../firebase";
import { v4 as uuidv4 } from "uuid";
import Loader from "react-loader-spinner";
import Collage from "./Collage";
import LinkIcon from "@material-ui/icons/Link";
import CropPage from "../Utils/CropPage";
import Copy from "../Utils/Copy";
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

function ScheduledCollagePage({ slug, getDoc }) {
  const [loading, setloading] = useState(false);
  const database = firebase.firestore();
  const secclasses = secuseStyles();
  const [showshare, setshowshare] = useState(false);
  const [livelink, setlivelink] = useState();
  const [previewlink, setpreviewlink] = useState("");
  const [imageAsFile, setImageAsFile] = useState("");
  const { user } = useSelector((state) => ({ ...state }));
  const [fbimg1, setfbimg1] = useState(
    "https://source.unsplash.com/2ShvY8Lf6l0/800x599"
  );
  const [image_url1, setimage_url1] = useState();
  const [opencrop1, setopencrop1] = useState(false);
  const [send1, setsend1] = useState();

  const [fbimg2, setfbimg2] = useState(
    "https://source.unsplash.com/Dm-qxdynoEc/800x799"
  );
  const [image_url2, setimage_url2] = useState();
  const [opencrop2, setopencrop2] = useState(false);
  const [send2, setsend2] = useState();

  const [fbimg3, setfbimg3] = useState(
    "https://source.unsplash.com/qDkso9nvCg0/600x799"
  );
  const [image_url3, setimage_url3] = useState();
  const [opencrop3, setopencrop3] = useState(false);
  const [send3, setsend3] = useState();

  const [fbimg4, setfbimg4] = useState(
    "https://source.unsplash.com/iecJiKe_RNg/600x799"
  );
  const [image_url4, setimage_url4] = useState();
  const [opencrop4, setopencrop4] = useState(false);
  const [send4, setsend4] = useState();

  const [fbimg5, setfbimg5] = useState(
    "https://source.unsplash.com/epcsn8Ed8kY/600x799"
  );
  const [image_url5, setimage_url5] = useState();
  const [opencrop5, setopencrop5] = useState(false);
  const [send5, setsend5] = useState();

  const [fbimg6, setfbimg6] = useState(
    "https://source.unsplash.com/NQSWvyVRIJk/800x599"
  );
  const [image_url6, setimage_url6] = useState();
  const [opencrop6, setopencrop6] = useState(false);
  const [send6, setsend6] = useState();

  const [fbimg7, setfbimg7] = useState(
    "https://source.unsplash.com/zh7GEuORbUw/600x799"
  );
  const [image_url7, setimage_url7] = useState();
  const [opencrop7, setopencrop7] = useState(false);
  const [send7, setsend7] = useState();

  const [fbimg8, setfbimg8] = useState(
    "https://source.unsplash.com/PpOHJezOalU/800x599"
  );
  const [image_url8, setimage_url8] = useState();
  const [opencrop8, setopencrop8] = useState(false);
  const [send8, setsend8] = useState();

  const [fbimg9, setfbimg9] = useState(
    "https://source.unsplash.com/I1ASdgphUH4/800x599"
  );
  const [image_url9, setimage_url9] = useState();
  const [opencrop9, setopencrop9] = useState(false);
  const [send9, setsend9] = useState();

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
  const onSelectFile7 = (e) => {
    setsend7(window.URL.createObjectURL(e.target.files[0]));
    setopencrop7(true);
  };
  const onSelectFile8 = (e) => {
    setsend8(window.URL.createObjectURL(e.target.files[0]));
    setopencrop8(true);
  };
  const onSelectFile9 = (e) => {
    setsend9(window.URL.createObjectURL(e.target.files[0]));
    setopencrop9(true);
  };
  useEffect(() => {
    func();
    console.log("img changed");
  }, [fbimg1]);

  const func = () => {
    return (
      <Collage
        fbimg1={fbimg1}
        fbimg2={fbimg2}
        fbimg3={fbimg3}
        fbimg4={fbimg4}
        fbimg5={fbimg5}
        fbimg6={fbimg6}
        fbimg7={fbimg7}
        fbimg8={fbimg8}
        fbimg9={fbimg9}
      />
    );
  };

  const handleFireBaseUpload = () => {
    setloading(true);
    var ud1 = uuidv4();
    var ud2 = uuidv4();
    var ud3 = uuidv4();
    var ud4 = uuidv4();
    var ud5 = uuidv4();
    var ud6 = uuidv4();
    var ud7 = uuidv4();
    var ud8 = uuidv4();
    var ud9 = uuidv4();
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
                                                  storage
                                                    .ref("images")
                                                    .child(ud7)
                                                    .putString(
                                                      image_url7,
                                                      "base64",
                                                      {
                                                        contentType:
                                                          "image/jpg",
                                                      }
                                                    )
                                                    .then((savedImage) => {
                                                      savedImage.ref
                                                        .getDownloadURL()
                                                        .then((downUrl7) => {
                                                          storage
                                                            .ref("images")
                                                            .child(ud8)
                                                            .putString(
                                                              image_url8,
                                                              "base64",
                                                              {
                                                                contentType:
                                                                  "image/jpg",
                                                              }
                                                            )
                                                            .then(
                                                              (savedImage) => {
                                                                savedImage.ref
                                                                  .getDownloadURL()
                                                                  .then(
                                                                    (
                                                                      downUrl8
                                                                    ) => {
                                                                      storage
                                                                        .ref(
                                                                          "images"
                                                                        )
                                                                        .child(
                                                                          ud9
                                                                        )
                                                                        .putString(
                                                                          image_url9,
                                                                          "base64",
                                                                          {
                                                                            contentType:
                                                                              "image/jpg",
                                                                          }
                                                                        )
                                                                        .then(
                                                                          (
                                                                            savedImage
                                                                          ) => {
                                                                            savedImage.ref
                                                                              .getDownloadURL()
                                                                              .then(
                                                                                (
                                                                                  downUrl9
                                                                                ) => {
                                                                                  const todoRef = firebase
                                                                                    .database()
                                                                                    .ref(
                                                                                      "Collage"
                                                                                    );
                                                                                  const todo = {
                                                                                    url1: downUrl1,
                                                                                    url2: downUrl2,
                                                                                    url3: downUrl3,
                                                                                    url4: downUrl4,
                                                                                    url5: downUrl5,
                                                                                    url6: downUrl6,
                                                                                    url7: downUrl7,
                                                                                    url8: downUrl8,
                                                                                    url9: downUrl9,
                                                                                  };
                                                                                  var newKey = todoRef
                                                                                    .push(
                                                                                      todo
                                                                                    )
                                                                                    .getKey();
                                                                                  setlivelink(
                                                                                    "http://localhost:3000/scheduledlive/collage/" +
                                                                                      newKey +
                                                                                      "/" +
                                                                                      slug
                                                                                  );
                                                                                  console.log(
                                                                                    livelink,
                                                                                    "livelink"
                                                                                  );
                                                                                  setpreviewlink(
                                                                                    "scheduledlive/collage/" +
                                                                                      newKey +
                                                                                      "/" +
                                                                                      slug
                                                                                  );
                                                                                }
                                                                              );
                                                                            setloading(
                                                                              false
                                                                            );
                                                                          }
                                                                        );
                                                                    }
                                                                  );
                                                              }
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
                  });
                });
            });
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
        url7: livelink,
      });
    await database.collection("Livelinks").doc(slug).update({
      url7: livelink,
    });
    toast.success("Collage successfully added to your pack");
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
        <div style={{ flex: "0.1" }}></div>
        <div style={{ flex: "0.7" }}>
          <center>
            <h1 className="example">One day to go !!!</h1>
          </center>
          {func()}
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
          <div style={{ marginTop: "10%", justifyContent: "center" }}>
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
                opencrop={opencrop1}
                aspect_ratio={4 / 3}
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
                aspect_ratio={3 / 4}
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
                aspect_ratio={3 / 4}
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
                aspect_ratio={3 / 4}
                opencrop={opencrop5}
                setopencrop={setopencrop5}
              />
            ) : null}
            <label htmlFor="LocalfileInput5">
              <HeaderBtn Icon={ViewModuleIcon} title="Change  image 5" />
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
            />
            {opencrop6 ? (
              <CropPage
                send={send6}
                setfbimg={setfbimg6}
                setimage_url={setimage_url6}
                aspect_ratio={4 / 3}
                opencrop={opencrop6}
                setopencrop={setopencrop6}
              />
            ) : null}
            <label htmlFor="LocalfileInput6">
              <HeaderBtn Icon={ViewModuleIcon} title="Change  image 6" />
            </label>
            <input
              style={{ display: "none" }}
              accept="image/* "
              className={secclasses.input}
              id="LocalfileInput7"
              name="LocalfileInput7"
              multiple
              type="file"
              accept="image/*"
              onChange={onSelectFile7}
            />
            {opencrop7 ? (
              <CropPage
                send={send7}
                setfbimg={setfbimg7}
                setimage_url={setimage_url7}
                aspect_ratio={3 / 4}
                opencrop={opencrop7}
                setopencrop={setopencrop7}
              />
            ) : null}
            <label htmlFor="LocalfileInput7">
              <HeaderBtn Icon={ViewModuleIcon} title="Change  image 7" />
            </label>
            <input
              style={{ display: "none" }}
              accept="image/* "
              className={secclasses.input}
              id="LocalfileInput8"
              name="LocalfileInput8"
              multiple
              type="file"
              accept="image/*"
              onChange={onSelectFile8}
            />
            {opencrop8 ? (
              <CropPage
                send={send8}
                setfbimg={setfbimg8}
                setimage_url={setimage_url8}
                aspect_ratio={4 / 3}
                opencrop={opencrop8}
                setopencrop={setopencrop8}
              />
            ) : null}
            <label htmlFor="LocalfileInput8">
              <HeaderBtn Icon={ViewModuleIcon} title="Change  image 8" />
            </label>
            <input
              style={{ display: "none" }}
              accept="image/* "
              className={secclasses.input}
              id="LocalfileInput9"
              name="LocalfileInput9"
              multiple
              type="file"
              accept="image/*"
              onChange={onSelectFile9}
            />
            {opencrop9 ? (
              <CropPage
                send={send9}
                setfbimg={setfbimg9}
                setimage_url={setimage_url9}
                aspect_ratio={1 / 1}
                opencrop={opencrop9}
                setopencrop={setopencrop9}
              />
            ) : null}
            <label htmlFor="LocalfileInput9">
              <HeaderBtn Icon={ViewModuleIcon} title="Change  image 9" />
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
            {loading ? (
              <Loader
                type="BallTriangle"
                color="#00BFFF"
                height={100}
                width={100}
                // timeout={3000} //3 secs
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

export default ScheduledCollagePage;
