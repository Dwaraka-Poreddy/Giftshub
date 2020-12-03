import React, {
  useMemo,
  useState,
  useCallback,
  useRef,
  useEffect,
} from "react";

import "./SpecialCard.css";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import HeaderBtn from "./HeaderBtn";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import InputBase from "@material-ui/core/InputBase";
import CreateIcon from "@material-ui/icons/Create";
import { Base64 } from "js-base64";
import firebase from "./firebase";
import { useDropzone } from "react-dropzone";
import { storage } from "./firebase";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import Portal from "@material-ui/core/Portal";
import CloseIcon from "@material-ui/icons/Close";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import ImportantDevicesIcon from "@material-ui/icons/ImportantDevices";
import LinearProgress from "@material-ui/core/LinearProgress";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

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
    width: "50vw",
    maxWidth: "600px",
    minWidth: "400px",
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

const pixelRatio = window.devicePixelRatio || 1;
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
export default function SpecialCard() {
  const Snackclasses = useSnackStyles();
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
  const [liveImg, setLiveImg] = useState(
    "https://picsum.photos/360/360?image=0"
  );
  const [img1, setImg1] = useState("https://picsum.photos/360/360?image=0");
  const [fireurl, setFireUrl] = useState("");
  const [upImg, setUpImg] = useState();
  const imgRef = useRef(null);
  const previewCanvasRef = useRef(null);
  const [crop, setCrop] = useState({ unit: "%", width: 30, aspect: 1 / 1 });
  const [completedCrop, setCompletedCrop] = useState(null);
  const secclasses = secuseStyles();
  const onSelectFile = (e) => {
    setCropmodal(true);
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => setUpImg(reader.result));
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  function LinearProgressWithLabel(props) {
    return (
      <Box display="flex" alignItems="center">
        <Box width="100%" mr={1}>
          <LinearProgress variant="determinate" {...props} />
        </Box>
        <Box minWidth={35}>
          <Typography variant="body2" color="Default">{`${Math.round(
            props.value
          )}%`}</Typography>
        </Box>
      </Box>
    );
  }
  const handleSnackClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackopen(false);
    setinfoSnackopen(true);
  };
  const handle2SnackClose = () => {
    setModopen(false);
    setProgress(0);
    setinfoSnackopen(false);
  };

  const handleFinalClose = () => {
    setProgress(0);
    setSnackopen(false);
    setinfoSnackopen(false);
    setModopen(false);
  };

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    acceptedFiles,
    open,
  } = useDropzone({
    accept: "image/*",
    noClick: true,
    noKeyboard: true,
    onDrop: (acceptedFiles) => {
      setImageAsFile(acceptedFiles[0]);
    },
  });

  const files = acceptedFiles.map((file) => <p key={file.path}>{file.path}</p>);

  const handleFireBaseUpload = () => {
    if (imageAsFile === "") {
      console.error(`not an image, the image file is a ${typeof imageAsFile}`);
    }
    const uploadTask = storage
      .ref(`/images/${imageAsFile.name}`)
      .put(imageAsFile);
    //initiates the firebase side uploading
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
          .child("srinivas")
          .putString(image_url, "base64", { contentType: "image/jpg" })
          .then((savedImage) => {
            savedImage.ref.getDownloadURL().then((downUrl) => {
              console.log(downUrl);
              setFireUrl(downUrl);
              const todoRef = firebase.database().ref("SpecialCard");
              const todo = {
                url: downUrl,
                title: head1,
                name: head2,
                description: para,
              };
              var newKey = todoRef.push(todo).getKey();
              console.log("http://localhost:3000/getting/" + newKey);
            });
          });
      }
    );
  };

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isDragActive, isDragReject, isDragAccept]
  );

  const onLoad = useCallback((img) => {
    imgRef.current = img;
  }, []);

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

  const genSpecialCard = () => {
    handleFireBaseUpload();
  };

  function generateDownload(previewCanvas, crop) {
    if (!crop || !previewCanvas) {
      return;
    }

    const canvas = getResizedCanvas(previewCanvas, crop.width, crop.height);
    var base64Image = canvas.toDataURL("image/jpeg", 1.0);
    setLiveImg(base64Image);
    setCropmodal(true);
    var base64Img = base64Image.replace("data:image/jpeg;base64,", "");
    setimage_url(base64Img);
    canvas.toBlob(
      (blob) => {
        const previewUrl = window.URL.createObjectURL(blob);

        // const anchor = document.createElement("a");
        // anchor.download = "cropPreview.png";
        // anchor.href = URL.createObjectURL(blob);
        // setImg1(anchor.href);
        // anchor.click();

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
                      <div>
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                        >
                          &times;
                        </button>
                      </div>
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
                          // Rounding is important so the canvas width and height matches/is a multiple for sharpness.
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

        <div style={{ flex: "0.8", alignItems: "center" }}>
          <center>
            <div
              style={{
                backgroundImage: "url(" + img1 + ")",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",

                overflow: "hidden",
              }}
              class="card"
            >
              <div class="img">
                {" "}
                <span
                  style={{ backgroundImage: "url(" + liveImg + ")" }}
                ></span>
                <span
                  style={{ backgroundImage: "url(" + liveImg + ")" }}
                ></span>
                <span
                  style={{ backgroundImage: "url(" + liveImg + ")" }}
                ></span>
                <span
                  style={{ backgroundImage: "url(" + liveImg + ")" }}
                ></span>
              </div>
              <div class="content">
                <h2>{head1}</h2>
                <h2>{head2} </h2>
                <h4>{para}</h4>
              </div>
            </div>
          </center>
        </div>
        <div
          style={{
            backgroundColor: "#009dd9",
            justifyContent: "center",
            alignItems: "center",
            flex: "0.2",
            height: "100vh",
          }}
        >
          {/* <input type="file" accept="image/*" onChange={onSelectFile} /> */}
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
            <HeaderBtn
              handleClick={genSpecialCard}
              Icon={ViewModuleIcon}
              title="Generate Link"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
