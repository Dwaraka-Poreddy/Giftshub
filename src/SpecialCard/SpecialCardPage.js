import React, {
  useMemo,
  useState,
  useCallback,
  useRef,
  useEffect,
} from "react";
import SpecialCard from "./SpecialCard";
import { v4 as uuidv4 } from "uuid";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import HeaderBtn from "../Studio/HeaderBtn";
import ImageIcon from "@material-ui/icons/Image";
import InputBase from "@material-ui/core/InputBase";
import CreateIcon from "@material-ui/icons/Create";
import AuthHeader from "../components/nav/Header";
import firebase from "../firebase";
import { storage } from "../firebase";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import VisibilityIcon from "@material-ui/icons/Visibility";
import MuiAlert from "@material-ui/lab/Alert";
import ShareIcon from "@material-ui/icons/Share";
import CloseIcon from "@material-ui/icons/Close";
import CropPage from "../Utils/CropPage";
import Copy from "../Utils/Copy";
import Share from "../Utils/Share";
import Tour from "reactour";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import { BrowserView } from "react-device-detect";
import LinkIcon from "@material-ui/icons/Link";
import Fab from "@material-ui/core/Fab";
import Loader from "react-loader-spinner";
import "../Buttons.css";
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#5f5f5f",
  borderRadius: "15px",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out",
};

const useStyles = makeStyles((theme) => ({
  paper: {
    borderRadius: "15px",
    position: "absolute",
    width: "70vw",
    height: "97vh",
    maxWidth: "1000px",
    // minWidth: "400px",
    marginTop: "0vh",
    border: null,
    backgroundColor: "#303030",
    padding: theme.spacing(2, 4, 3),
  },
  DelBut: {
    position: "sticky",
    bottom: theme.spacing(142),
    left: theme.spacing(200),
  },
}));

const useStylesBut = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const pixelRatio = 1;
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
export default function SpecialCardPage() {
  const [showoptions, setshowoptions] = useState(false);
  const [loading, setloading] = useState(false);
  const [Snackopen, setSnackopen] = React.useState(false);
  const [infoSnackopen, setinfoSnackopen] = React.useState(false);
  const classes = useStyles();
  const [imageAsFile, setImageAsFile] = useState("");
  const [progress, setProgress] = useState(0);
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [accentColor, setaccentColor] = useState("#5cb7b7");
  const classesBut = useStylesBut();

  const [head1, sethead1] = useState("My Best Friend");
  const [head2, sethead2] = useState("Toph Beifong");
  const [para, setpara] = useState(
    " Thanks for being a great friend You are our special friend . You are my special friend, I have never met a person like you. You have such a great personality. You are just the best"
  );
  const [image_url, setimage_url] = useState("");
  const [cropmodal, setCropmodal] = useState(false);
  const [showshare, setshowshare] = useState(false);
  const [previewlink, setpreviewlink] = useState("");
  const [fbimg, setfbimg] = useState(
    "https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/imp%2Fwwoman.jpg?alt=media&token=6c7031d9-6519-45c5-8256-44a52a4c1b20"
  );

  const [livelink, setlivelink] = useState();
  const [fireurl, setFireUrl] = useState("");
  const [upImg, setUpImg] = useState();
  const imgRef = useRef(null);
  const previewCanvasRef = useRef(null);
  const [crop, setCrop] = useState({ unit: "%", width: 30, aspect: 1 / 1 });
  const [completedCrop, setCompletedCrop] = useState(null);
  const secclasses = secuseStyles();

  useEffect(() => {
    if (!completedCrop || !previewCanvasRef.current || !imgRef.current) {
      return;
    }

    const image = imgRef.current;
    const canvas = previewCanvasRef.current;
    const crop = completedCrop;

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const ctx = canvas.getContext("2d");

    canvas.width = crop.width * pixelRatio;
    canvas.height = crop.height * pixelRatio;

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = "high";

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );
  }, [completedCrop]);

  const onSelectFile = (e) => {
    setCropmodal(true);
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => setUpImg(reader.result));
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleFireBaseUpload = () => {
    setloading(true);
    var ud = uuidv4();

    const uploadTask = storage
      .ref(`/images/${imageAsFile.name}`)
      .put(imageAsFile);
    if (!livelink) {
      const todoRef = firebase.database().ref("SpecialCard");
      const todo = {
        url: fbimg,
        head1: head1,
        head2: head2,
        para: para,
      };
      var newKey = todoRef.push(todo).getKey();
      setlivelink("http://localhost:3000/live/specialcard/" + newKey);
      setpreviewlink("/live/specialcard/" + newKey);

      setloading(false);
    } else {
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (err) => {
          //catches the errors
          console.log(err);
        },
        () => {
          storage
            .ref("images")
            .child(ud)
            .putString(image_url, "base64", { contentType: "image/jpg" })
            .then((savedImage) => {
              savedImage.ref.getDownloadURL().then((downUrl) => {
                console.log(downUrl);
                setFireUrl(downUrl);
                const todoRef = firebase.database().ref("SpecialCard");
                const todo = {
                  url: downUrl,
                  head1: head1,
                  head2: head2,
                  para: para,
                };
                var newKey = todoRef.push(todo).getKey();
                setlivelink("http://localhost:3000/live/specialcard/" + newKey);
                setpreviewlink("/live/specialcard/" + newKey);
              });
              setloading(false);
            });
        }
      );
    }
  };

  const onLoad = useCallback((img) => {
    imgRef.current = img;
  }, []);

  function getResizedCanvas(canvas, newWidth, newHeight) {
    const tmpCanvas = document.createElement("canvas");
    tmpCanvas.width = newWidth;
    tmpCanvas.height = newHeight;

    const ctx = tmpCanvas.getContext("2d");
    ctx.drawImage(
      canvas,
      0,
      0,
      canvas.width,
      canvas.height,
      0,
      0,
      newWidth,
      newHeight
    );

    return tmpCanvas;
  }

  function generateDownload(previewCanvas, crop) {
    if (!crop || !previewCanvas) {
      return;
    }

    const canvas = getResizedCanvas(previewCanvas, crop.width, crop.height);
    var base64Image = canvas.toDataURL("image/jpeg", 1.0);
    setfbimg(base64Image);
    setCropmodal(true);
    var base64Img = base64Image.replace("data:image/jpeg;base64,", "");
    setimage_url(base64Img);
    canvas.toBlob(
      (blob) => {
        const previewUrl = window.URL.createObjectURL(blob);

        window.URL.revokeObjectURL(previewUrl);
      },
      "image/png",
      1
    );
    setCropmodal(false);
  }
  const tourConfig = [
    {
      selector: '[data-tut="reactour__changeImage"]',
      content: `Choose an image from you local device to be displayed on the Special Card.`,
    },
    {
      selector: '[data-tut="reactour__head1"]',
      content: `How are you and this special someone related?`,
    },
    {
      selector: '[data-tut="reactour__head2"]',
      // content: `Enter the special person’s name.`,
      content: `An optional one-liner to make this person giggle maybe?`,
    },
    {
      selector: '[data-tut="reactour__para"]',
      content: `Words have the power to transform the deepest thoughts into a beautiful poem. Type away your heartfelt message and tell them how much they mean to you.`,
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
      selector: '[data-tut="reactour__sharelink"]',
      content: `Displays options to share the live link on Facebook, WhatsApp, Twitter and Email.`,
    },
  ];
  return (
    <div style={{ backgroundColor: "#70cff3" }}>
      <AuthHeader />
      <Tour
        onRequestClose={() => {
          setIsTourOpen(false);
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
            <SpecialCard
              fbimg={fbimg}
              head2={head2}
              head1={head1}
              para={para}
            />
          </div>
          <div class="col-lg-1"></div>
          <div
            className="threedrnav   col-lg-3"
            style={{
              backgroundColor: "#009dd9",
              justifyContent: "center",
              alignItems: "center",
              position: "sticky",
              top: "0",
              right: "0",
            }}
          >
            <BrowserView>
              <center>
                <div
                  style={{
                    justifyContent: "center",
                    padding: "20px 0 0 0 ",
                  }}
                >
                  <span style={{ color: "#ffffff" }}>
                    {" "}
                    Hello! Allow us to give you a small tour on how to generate
                    this special gift. We are sure you wouldn't need one the
                    next time you are back.
                    <br /> P.S : Its that easy
                  </span>
                  <HeaderBtn
                    handleClick={() => {
                      setIsTourOpen(true);
                    }}
                    Icon={FlightTakeoffIcon}
                    title=" Start Tour "
                  />
                </div>
              </center>
              <hr />
            </BrowserView>
            <Modal
              style={{
                display: "flex",
                justifyContent: "center",
                marginRight: "auto",

                alignItems: "center",
              }}
              open={cropmodal}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
            >
              {
                <div className={classes.paper}>
                  <div>
                    <div>
                      <div>
                        <div>
                          <ReactCrop
                            src={upImg}
                            onImageLoaded={onLoad}
                            crop={crop}
                            onChange={(c) => setCrop(c)}
                            onComplete={(c) => setCompletedCrop(c)}
                          />
                          <div style={{ display: "none" }}>
                            <canvas
                              ref={previewCanvasRef}
                              style={{
                                width: Math.round(completedCrop?.width ?? 0),
                                height: Math.round(completedCrop?.height ?? 0),
                              }}
                            />
                          </div>
                          <div>
                            <center>
                              <div style={{ width: "40%" }}>
                                {" "}
                                <HeaderBtn
                                  handleClick={() => {
                                    generateDownload(
                                      previewCanvasRef.current,
                                      completedCrop
                                    );
                                  }}
                                  Icon={ImageIcon}
                                  title=" Use cropped image"
                                />
                              </div>
                            </center>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Fab
                      onClick={() => {
                        setCropmodal(false);
                      }}
                      className={classes.DelBut}
                      color="primary"
                      aria-label="add"
                    >
                      <CloseIcon />
                    </Fab>
                  </div>
                </div>
              }
            </Modal>

            <div style={{ justifyContent: "center", padding: "20px 0" }}>
              {" "}
              <div data-tut="reactour__changeImage">
                <input
                  style={{ display: "none" }}
                  accept="image/* "
                  className={secclasses.input}
                  id="LocalfileInput"
                  name="LocalfileInput"
                  // multiple
                  type="file"
                  accept="image/*"
                  onChange={onSelectFile}
                  onClick={(event) => {
                    event.target.value = null;
                  }}
                />
                <label htmlFor="LocalfileInput">
                  <HeaderBtn Icon={ImageIcon} title="Background Image" />
                </label>
              </div>
              <center>
                <div data-tut="reactour__head1">
                  <div
                    style={{
                      width: "200px",
                      marginTop: "10px",
                    }}
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
                      value={head1}
                      onChange={(e) => {
                        sethead1(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div data-tut="reactour__head2">
                  <div
                    style={{
                      width: "200px",

                      marginTop: "20px",
                    }}
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
                      value={head2}
                      onChange={(e) => {
                        sethead2(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div data-tut="reactour__para">
                  <div
                    style={{
                      width: "200px",

                      marginTop: "20px",
                    }}
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
                      value={para}
                      onChange={(e) => {
                        setpara(e.target.value);
                      }}
                    />
                  </div>
                </div>
              </center>
              <center>
                <div
                  data-tut="reactour__generatelink"
                  style={{ marginTop: "20px" }}
                >
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
              ) : (
                <center>
                  {livelink || isTourOpen ? (
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
                        style={{ marginTop: "20px", width: "200px" }}
                      >
                        <Copy livelink={livelink} />
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
      <footer>
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
