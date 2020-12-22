import React, { useState, useEffect } from "react";
import HeaderBtn from "../Studio/HeaderBtn";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import NewsPaper from "./NewsPaper";
import DatePicker from "react-datepicker";
import { jsPDF } from "jspdf";
import domtoimage from "dom-to-image-more";
import html2canvas from "html2canvas";
import * as htmlToImage from "html-to-image";
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import firebase from "../firebase";
import ShareIcon from "@material-ui/icons/Share";
import { storage } from "../firebase";
import { v4 as uuidv4 } from "uuid";
import "./NewsPaperPage.css";
import InputBase from "@material-ui/core/InputBase";
import CreateIcon from "@material-ui/icons/Create";
import LinkIcon from "@material-ui/icons/Link";
import CropPage from "../Utils/CropPage";
import Copy from "../Utils/Copy";
import { toast } from "react-toastify";
import Loader from "react-loader-spinner";
import { useSelector } from "react-redux";
import VisibilityIcon from "@material-ui/icons/Visibility";
import "react-datepicker/dist/react-datepicker.css";
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

function ScheduledNewsPaperPage({ slug, getDoc }) {
  let { edit } = useSelector((state) => ({ ...state }));
  const [Cloading, setCLoading] = useState(false);
  const database = firebase.firestore();
  let docToPrint = React.createRef();
  const secclasses = secuseStyles();
  const [loading, setloading] = useState(false);

  const [showshare, setshowshare] = useState(false);
  const [livelink, setlivelink] = useState();
  const [previewlink, setpreviewlink] = useState("");
  const [fireurl, setFireUrl] = useState("");
  const [imageAsFile, setImageAsFile] = useState("");
  const [image_url, setimage_url] = useState();
  const [opencrop, setopencrop] = useState(false);
  const [send, setsend] = useState();
  const { user } = useSelector((state) => ({ ...state }));
  const [startDate, setDate] = useState(new Date());
  const today = new Date();
  const selectDateHandler = (d) => {
    setDate(d.toString);
    console.log(startDate);
  };

  const [head, sethead] = useState(
    "Ms. Super Girl wins the coolest  friend of the year award 2020 !!!"
  );

  const [para, setpara] = useState("It's getting closer, 5 days to go !!!");
  const [fbimg, setfbimg] = useState(require("../Images/MainImage.png"));
  useEffect(() => {
    setCLoading(true);
    if (edit.text != "") {
      const todoRef = firebase
        .database()
        .ref("/NewsPaper/" + edit.text)
        .once("value")
        .then((snapshot) => {
          var img = snapshot.val().url;
          setfbimg(img);
          var head = snapshot.val().head;
          sethead(head);
          var para = snapshot.val().para;
          setpara(para);
          setCLoading(false);
        });
    } else {
      setCLoading(false);
    }
  }, []);
  const onSelectFile = (e) => {
    setsend(window.URL.createObjectURL(e.target.files[0]));
    // console.log(send);
    setopencrop(true);
  };

  const handleFireBaseUpload = () => {
    setloading(true);
    var ud = uuidv4();
    console.log(ud);

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
        console.log(image_url);
        var s = storage
          .ref("images")
          .child(ud)
          .putString(image_url, "base64", { contentType: "image/jpg" })
          .then((savedImage) => {
            savedImage.ref.getDownloadURL().then((downUrl) => {
              console.log(downUrl);
              setFireUrl(downUrl);
              const todoRef = firebase.database().ref("NewsPaper");
              const todo = {
                url: downUrl,
                head: head,
                para: para,
              };
              var newKey = todoRef.push(todo).getKey();
              setlivelink(
                "http://localhost:3000/scheduledlive/newspaper/" +
                  newKey +
                  "/" +
                  slug
              );
              setpreviewlink("/scheduledlive/newspaper/" + newKey + "/" + slug);
            });
            setloading(false);
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
        url2: livelink,
      });
    await database.collection("Livelinks").doc(slug).update({
      url2: livelink,
    });
    toast.success("NewsPaper successfully added to your pack");
    getDoc();
  }

  function handleImageDownlod(el) {
    const input = docToPrint.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "px",
        format: [600, 400],
      });
      pdf.addImage(imgData, "JPEG", 0, 0);
      // pdf.output("dataurlnewwindow");
      pdf.save("Up4-receipt.pdf");
    });
  }
  function handlePdfDownlod(e) {
    htmlToImage
      .toPng(document.getElementById("newspaper"), { quality: 1.0 })
      .then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = "my-image-name.jpeg";
        const pdf = new jsPDF();
        const imgProps = pdf.getImageProperties(dataUrl);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(dataUrl, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("download1.pdf");
      });
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
      <div style={{ backgroundColor: "#70cff3" }} class="container-fluid pt-3">
        <div class="row">
          <div class="col-sm-1 "></div>
          <div ref={docToPrint} id="newspaper" class="col-sm-8 ">
            {Cloading ? (
              <Loader
                type="BallTriangle"
                color="#00BFFF"
                height={100}
                width={100}
              />
            ) : (
              <div>
                <center>
                  <h1 className="example">Five days to go !!!</h1>
                </center>
                <NewsPaper
                  fbimg={fbimg}
                  head={head}
                  para={para}
                  startDate={startDate}
                />
              </div>
            )}
          </div>

          <div
            className="newspaperrnav col-sm-3"
            style={{
              backgroundColor: "#009dd9",
              justifyContent: "center",
              alignItems: "center",
              position: "sticky",
              top: "0",
              right: "0",
            }}
          >
            <div style={{ justifyContent: "center", padding: "20px 0" }}>
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
                  aspect_ratio={16 / 9}
                  opencrop={opencrop}
                  setopencrop={setopencrop}
                />
              ) : null}
              <label htmlFor="LocalfileInput">
                <HeaderBtn Icon={ViewModuleIcon} title="Change  image " />
              </label>

              <center>
                <div
                  style={{ width: "80%", marginLeft: "10%", marginTop: "10px" }}
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
                    value={head}
                    onChange={(e) => {
                      sethead(e.target.value);
                    }}
                  />
                </div>
                <div
                  style={{ width: "80%", marginLeft: "10%", marginTop: "20px" }}
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
                <div
                  style={{ width: "80%", marginLeft: "10%", marginTop: "20px" }}
                  className="RightSideBar2__Btn"
                >
                  <DatePicker
                    formatWeekDay={(nameOfDay) => nameOfDay.substr(0, 3)}
                    dateFormat=" MMMM dd, yyyy "
                    selected={startDate}
                    onChange={selectDateHandler}
                    minDate={today}
                    todayButton={"Today"}
                  />
                </div>
                <div style={{ width: "55%", marginTop: "20px" }}>
                  <HeaderBtn
                    handleClick={() => {
                      handleImageDownlod(this);
                    }}
                    Icon={LinkIcon}
                    title="Download as image"
                  />
                </div>
                <div style={{ width: "55%", marginTop: "20px" }}>
                  <HeaderBtn
                    handleClick={() => {
                      handlePdfDownlod(this);
                    }}
                    Icon={LinkIcon}
                    title="Download as pdf"
                  />
                </div>
                {loading ? (
                  <Loader
                    type="BallTriangle"
                    color="#00BFFF"
                    height={100}
                    width={100}
                  />
                ) : (
                  <div style={{ width: "55%", marginTop: "20px" }}>
                    <HeaderBtn
                      handleClick={() => {
                        handleFireBaseUpload();
                      }}
                      Icon={LinkIcon}
                      title="Generate Link"
                    />
                  </div>
                )}
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
                    <div style={{ width: "55%", marginTop: "20px" }}>
                      <HeaderBtn
                        handleClick={() => {
                          EditPack();
                        }}
                        Icon={ShareIcon}
                        title="Add to Pack "
                      />
                    </div>
                    {/* {!showshare ? (
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
                      <Share livelink={"livelink"} />
                    )} */}
                  </div>
                ) : null}
              </center>
            </div>
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

export default ScheduledNewsPaperPage;
