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
import HeaderBtn from "./HeaderBtn";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import InputBase from "@material-ui/core/InputBase";
import CreateIcon from "@material-ui/icons/Create";
import Copy from "./Copy";
import firebase from "./firebase";

import { storage } from "./firebase";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import VisibilityIcon from "@material-ui/icons/Visibility";
import MuiAlert from "@material-ui/lab/Alert";
import ShareIcon from "@material-ui/icons/Share";
import CloseIcon from "@material-ui/icons/Close";
import Share from "./Share";
import LinearProgress from "@material-ui/core/LinearProgress";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import LinkIcon from "@material-ui/icons/Link";
import Fab from "@material-ui/core/Fab";

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

const useSnackStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));
const useStylesBut = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const activeStyle = {
  // borderColor: "#2196f3"
};

const acceptStyle = {
  // borderColor: "#00e676"
};

const rejectStyle = {
  // borderColor: "#ff1744"
};

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
  const [Snackopen, setSnackopen] = React.useState(false);
  const [infoSnackopen, setinfoSnackopen] = React.useState(false);
  const classes = useStyles();
  const [imageAsFile, setImageAsFile] = useState("");
  const [progress, setProgress] = useState(0);
  const [Modopen, setModopen] = React.useState(false);
  const classesBut = useStylesBut();
  const [isMousedOver, setMouseOver] = useState(false);
  const [head1, sethead1] = useState("My Worst Friend");
  const [head2, sethead2] = useState("Srinivas K");
  const [para, setpara] = useState(
    "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"
  );
  const [image_url, setimage_url] = useState("");
  const [cropmodal, setCropmodal] = useState(false);
  const [showshare, setshowshare] = useState(false);
  const [previewlink, setpreviewlink] = useState("");
  const [fbimg, setfbimg] = useState("https://picsum.photos/360/360?image=0");

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
    var ud = uuidv4();
    console.log(ud);

    const uploadTask = storage
      .ref(`/images/${imageAsFile.name}`)
      .put(imageAsFile);

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
        console.log(image_url);
        var s = storage
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
          });
      }
    );
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

  return (
    <div>
      <header class="header-area header-sticky">
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
                <a class="menu-trigger">
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <div
        style={{
          display: "flex",
          flex: "1",
          backgroundColor: "#70cff3",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
        className="App"
      >
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
                      <br />
                      <br />
                      <br />

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
                              Icon={ViewModuleIcon}
                              title=" Download cropped image"
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

        <SpecialCard fbimg={fbimg} head2={head2} head1={head1} para={para} />
        <div
          style={{
            backgroundColor: "#009dd9",
            justifyContent: "center",
            alignItems: "center",
            flex: "0.2",
            height: "100vh",
          }}
        >
          <div style={{ marginTop: "50%", justifyContent: "center" }}>
            {" "}
            <input
              accept="image/* "
              className={secclasses.input}
              id="LocalfileInput"
              name="LocalfileInput"
              multiple
              type="file"
              accept="image/*"
              onChange={onSelectFile}
            />
            <label htmlFor="LocalfileInput">
              <HeaderBtn Icon={ViewModuleIcon} title="Background Image" />
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
                value={head1}
                onChange={(e) => {
                  sethead1(e.target.value);
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
                value={head2}
                onChange={(e) => {
                  sethead2(e.target.value);
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
                value={para}
                onChange={(e) => {
                  setpara(e.target.value);
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
    </div>
  );
}
