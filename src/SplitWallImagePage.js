import React, { useState } from "react";
import { Link } from "react-router-dom";
import SplitWallImage from "./SplitWallImage";
import HeaderBtn from "./HeaderBtn";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import { makeStyles } from "@material-ui/core/styles";
import Firebaseimageinput from "./Firebaseimageinput";
import firebase from "./firebase";
import Modal from "@material-ui/core/Modal";
import CloseIcon from "@material-ui/icons/Close";
import Fab from "@material-ui/core/Fab";
import MailIcon from "@material-ui/icons/Mail";
import Share from "./Share";
import Copy from "./Copy";
import ShareIcon from "@material-ui/icons/Share";
import VisibilityIcon from "@material-ui/icons/Visibility";
import LinkIcon from "@material-ui/icons/Link";

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
export default function SplitWallImagePage() {
  const classes = useStyles();
  const [showshare, setshowshare] = useState(false);
  const [previewlink, setpreviewlink] = useState("");
  const [livelink, setlivelink] = useState();
  const [fbimg, setFbimg] = useState(
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/portrait.jpg"
  );
  const [modopen, setmodopen] = useState(false);
  const genLink = () => {
    const todoRef = firebase.database().ref("SplitWall");
    const todo = {
      url: fbimg,
      // title: "Srinivas",
    };
    var newKey = todoRef.push(todo).getKey();
    setlivelink("localhost:3000/live/splitwall/" + newKey);
    setpreviewlink("/live/splitwall/" + newKey);
    console.log("localhost:3000/live/splitwall/" + newKey);
  };

  return (
    <div>
      <div>
        <header
          style={{ backgroundColor: "#70cff3" }}
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
      </div>
      <div
        style={{
          display: "flex",
          flex: "1",
          backgroundColor: "#ffffff",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <div style={{ flex: "0.8", alignItems: "center" }}>
          <SplitWallImage image={fbimg} />
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
          <Firebaseimageinput setFbimg={setFbimg} />
          <div>
            <center>
              <div style={{ width: "55%", marginTop: "20px" }}>
                <HeaderBtn
                  handleClick={genLink}
                  Icon={LinkIcon}
                  title="Generate Link "
                />
              </div>
            </center>
            <center>
              <Modal
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginRight: "auto",

                  alignItems: "center",
                }}
                open={modopen}
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
                              <a href={livelink}>{livelink}</a>
                            </div>
                            <br />
                            <br />
                            <br />

                            <a href={fbimg}></a>
                          </div>
                        </div>
                      </div>

                      <Fab
                        onClick={() => {
                          setmodopen(false);
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
