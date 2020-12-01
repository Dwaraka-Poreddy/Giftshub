import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Btn from "./Btn";
import HeaderBtn from "./HeaderBtn";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import { Avatar } from "@material-ui/core";
import Canvas from "react-canvas-js";
import domtoimage from "dom-to-image-more";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import EditableText from "./EditableText";
import { makeStyles } from "@material-ui/core/styles";
import Puzzle from "./Puzzle";
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

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useModalStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

var TinyURL = require("tinyurl");
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

export default function PuzzlePage() {
  const [tinyImgUrl, setTinyImgUrl] = useState("");
  const Snackclasses = useSnackStyles();
  const [imgurl, setImgurl] = useState(
    "aHR0cHM6Ly9maXJlYmFzZXN0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vdjAvYi91cGRhdGUtaW1hZ2UuYXBwc3BvdC5jb20vby9pbWFnZXMlMkZ3YWxscGFwZXIxLmpwZz9hbHQ9bWVkaWEmdG9rZW49MTRmZjgzNzUtZGMwNS00ZDE5LTlhZDEtMTE0MmNlM2EyZGUx"
  );
  const [Snackopen, setSnackopen] = React.useState(false);
  const [infoSnackopen, setinfoSnackopen] = React.useState(false);
  const classes = useStyles();
  const [imageAsFile, setImageAsFile] = useState("");
  const [img, setimg] = useState(
    "https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/images%2Fwallpaper1.jpg?alt=media&token=14ff8375-dc05-4d19-9ad1-1142ce3a2de1"
  );
  const [progress, setProgress] = useState(0);
  const [Modopen, setModopen] = React.useState(false);
  const classesBut = useStylesBut();
  const [isMousedOver, setMouseOver] = useState(false);

  const Modalclasses = useModalStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [Mopen, setOpen] = React.useState(false);

  //   const [imgSource, setImgSource] = useState(
  //     require("../src/Images/Magazine.png")
  //   );
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
            setimg(fireBaseUrl);
            setImgurl(Base64.encode(fireBaseUrl));
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

  const [bgimg, setBgimg] = useState(
    "https://image.shutterstock.com/image-illustration/image-flu-covid19-virus-cell-260nw-1661849266.jpg"
  );

  const handleCreateLink = () => {
    TinyURL.shorten(
      `http://localhost:8000.com/live/puzzle/${imgurl}`,
      function (res, err) {
        if (err) console.log(err);
        // console.log("sri hi ");
        // console.log(res);
        setTinyImgUrl(res);
      }
    );
  };
  return (
    <div>
      <div className="allheader">
        <div className="header">
          <div className="header__left">
            <Link to="/">
              {/* <Avatar className="header__logo" alt="logo" src="" /> */}
              <Btn className="header__leftStepper" title="Main page" />
            </Link>
            {/* handleClick={() => handleMemeDownlod(this)} */}
            {/* <Link to={`/live/puzzle/${imgurl}`}> */}
            {/* <Btn
              handleClick={() => handleCreateLink()}
              className="header__leftStepper"
              title="Generate"
            /> */}
            <div class="modal fade" id="myModal">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-header">
                    <h4 style={{ color: "#000" }} class="modal-title">
                      Generated Game Link
                    </h4>
                    <button type="button" class="close" data-dismiss="modal">
                      &times;
                    </button>
                  </div>

                  <div style={{ color: "#000" }} class="modal-body">
                    <a style={{ color: "#000" }} href={tinyImgUrl}>
                      {tinyImgUrl}
                    </a>
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
            <button
              type="button"
              className="btn btn-primary"
              data-toggle="modal"
              data-target="#myModal"
              onClick={() => handleCreateLink()}
            >
              Generate
            </button>

            {/* </Link> */}
          </div>

          <p style={{ color: "#ffffff" }}>GiftCard Generator</p>
        </div>
      </div>

      {/* <Puzzle bgimg={img} /> */}
      <div>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {" "}
          <div
            style={{
              position: "absolute",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
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
                                  It might take a few seconds for the image to
                                  get reflected in the website.
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
                  onMouseOver={() => setMouseOver(true)}
                  onMouseOut={() => setMouseOver(false)}
                  onClick={() => setModopen(true)}
                >
                  <button
                    style={{
                      display: "flex",
                      alignItems: "center",
                      padding: "8px 12px",
                      marginTop: "5px",
                      borderRadius: "5px",
                      marginRight: "5px",
                      backgroundColor: "#252935",
                      color: "#fff",
                    }}
                  >
                    Upload Image
                  </button>
                </span>
              )}
            </React.Fragment>
          </div>
          <br />
          <br />
          <Puzzle bgimg={img} />
        </div>
      </div>
    </div>
  );
}
