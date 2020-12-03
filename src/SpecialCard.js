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
  // borderColor: "#000",
  // borderStyle: "dashed",
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
    maxWidth: "1000px",
    minWidth: "400px",
    marginTop: "20vh",
    border: null,
    backgroundColor: "#303030",
    // border: "2px solid #000",
    // boxShadow: theme.shadows[5],
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
  // const [img, setimg] = useState(props.src);
  const [progress, setProgress] = useState(0);
  const [Modopen, setModopen] = React.useState(false);
  const classesBut = useStylesBut();
  const [isMousedOver, setMouseOver] = useState(false);
  const [head1, sethead1] = useState("My Worst Friend");
  const [head2, sethead2] = useState("Srinivas K");
  const [para, setpara] = useState(
    "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley"
  );
  const [img1, setImg1] = useState("https://picsum.photos/360/360?image=0");
  const [upImg, setUpImg] = useState();
  const imgRef = useRef(null);
  const previewCanvasRef = useRef(null);
  const [crop, setCrop] = useState({ unit: "%", width: 30, aspect: 1 / 1 });
  const [completedCrop, setCompletedCrop] = useState(null);
  const secclasses = secuseStyles();
  const onSelectFile = (e) => {
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
      // console.log(imageAsFile);
    },
  });

  const files = acceptedFiles.map((file) => <p key={file.path}>{file.path}</p>);

  const handleFireBaseUpload = (e) => {
    e.preventDefault();
    // console.log("start of upload");
    // async magic goes here...
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
        storage
          .ref("images")
          .child(imageAsFile.name)
          .getDownloadURL()
          .then((fireBaseUrl) => {
            setImg1(fireBaseUrl);
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

  function generateDownload(previewCanvas, crop) {
    if (!crop || !previewCanvas) {
      return;
    }

    const canvas = getResizedCanvas(previewCanvas, crop.width, crop.height);
    console.log(canvas, "entra, canvas");

    canvas.toBlob(
      (blob) => {
        const previewUrl = window.URL.createObjectURL(blob);

        const anchor = document.createElement("a");
        anchor.download = "cropPreview.png";
        anchor.href = URL.createObjectURL(blob);
        setImg1(anchor.href);
        anchor.click();

        window.URL.revokeObjectURL(previewUrl);
      },
      "image/png",
      1
    );
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
        <React.Fragment>
          {Modopen ? (
            <Modal
              style={{
                display: "flex",
                justifyContent: "center",
                marginRight: "auto",
              }}
              open={Modopen}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
            >
              {
                <div className={classes.paper}>
                  <div>
                    <div className="container">
                      <div {...getRootProps({ style })}>
                        <input {...getInputProps()} />
                        <p>Drag 'n' drop some files here</p>
                        {/* <button type="button" onClick={open}>
                        Upload From Device
                      </button> */}
                        <Button
                          onClick={open}
                          variant="contained"
                          color="primary"
                          size="small"
                          className={classesBut.button}
                          startIcon={<ImportantDevicesIcon />}
                        >
                          Upload From Local Device
                        </Button>
                      </div>
                    </div>
                    <aside>
                      <center>
                        <h4>Selected File {files[0]}</h4>
                      </center>
                    </aside>
                    <div className={Snackclasses.root}>
                      <Portal>
                        <Snackbar
                          open={progress === 100}
                          autoHideDuration={1500}
                          onClose={handleSnackClose}
                        >
                          <Alert severity="success">
                            <strong>Image Uploaded Succesfully :) </strong>
                          </Alert>
                        </Snackbar>
                        <Snackbar
                          open={infoSnackopen}
                          autoHideDuration={4000}
                          onClose={handle2SnackClose}
                        >
                          <Alert
                            severity="info"
                            open={infoSnackopen}
                            autoHideDuration={4000}
                            onClose={handle2SnackClose}
                          >
                            <strong>
                              It might take a few seconds for the image to get
                              reflected in the website.
                            </strong>
                          </Alert>
                        </Snackbar>
                      </Portal>
                    </div>
                    <div>
                      <center>
                        <form onSubmit={handleFireBaseUpload}>
                          {/* <button>SUBMIT</button> */}
                          <Button
                            variant="contained"
                            color="default"
                            type="submit"
                            // onSubmit={handleFireBaseUpload}
                            className={classesBut.button}
                            startIcon={<CloudUploadIcon />}
                          >
                            Upload
                          </Button>
                        </form>
                        <LinearProgressWithLabel
                          variant="determinate"
                          value={progress}
                        />
                        {/* <progress value={progress} max="100" /> */}
                      </center>
                    </div>
                    <Fab
                      onClick={handleFinalClose}
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
          ) : (
            <span
              // style={{
              //   border: !Modopen && isMousedOver ? "1.25px dashed " : null
              // }}
              onMouseOver={() => setMouseOver(true)}
              onMouseOut={() => setMouseOver(false)}
              onClick={() => setModopen(true)}
            >
              <img
                // onClick={() => setModopen(true)}
                style={{
                  width: "100%",
                  height: "80",
                  border: !Modopen && isMousedOver ? "2px dashed " : null,
                }}
                src={img1}
                alt="Hi"
              />
            </span>
          )}
        </React.Fragment>
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
                <span style={{ backgroundImage: "url(" + img1 + ")" }}></span>
                <span style={{ backgroundImage: "url(" + img1 + ")" }}></span>
                <span style={{ backgroundImage: "url(" + img1 + ")" }}></span>
                <span style={{ backgroundImage: "url(" + img1 + ")" }}></span>
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
            <div>
              {" "}
              <button data-toggle="modal" data-target="#myModal">
                crop
              </button>
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
          </div>
        </div>

        <div class="modal fade" id="myModal">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
              </div>

              <div
                style={{ color: "#000", overflow: "hidden" }}
                class="modal-body"
              >
                <ReactCrop
                  src={upImg}
                  onImageLoaded={onLoad}
                  crop={crop}
                  onChange={(c) => setCrop(c)}
                  onComplete={(c) => setCompletedCrop(c)}
                />
                <div>
                  <canvas
                    ref={previewCanvasRef}
                    // Rounding is important so the canvas width and height matches/is a multiple for sharpness.
                    style={{
                      width: Math.round(completedCrop?.width ?? 0),
                      height: Math.round(completedCrop?.height ?? 0),
                    }}
                  />
                </div>

                <button
                  type="button"
                  disabled={!completedCrop?.width || !completedCrop?.height}
                  onClick={() => {
                    generateDownload(previewCanvasRef.current, completedCrop);
                  }}
                >
                  Download cropped image
                </button>
              </div>

              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
