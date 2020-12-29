import React, { useEffect, useState } from "react";
import firebase from "../firebase";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { storage } from "../firebase";
import { v4 as uuidv4 } from "uuid";
import InputBase from "@material-ui/core/InputBase";
import CreateIcon from "@material-ui/icons/Create";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Fab from "@material-ui/core/Fab";
import CloseIcon from "@material-ui/icons/Close";
import HeaderBtn from "../Studio/HeaderBtn";
import ImageIcon from "@material-ui/icons/Image";
import CropPage from "../Utils/CropPage";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Loader from "react-loader-spinner";
import DateRangeIcon from "@material-ui/icons/DateRange";
import AuthHeader from "../components/nav/Header";
const useStyles = makeStyles((theme) => ({
  paper: {
    borderRadius: "5px",
    width: "70vw",
    height: "80vh",
    maxWidth: "840px",
    minWidth: "280px",
    position: "absolute",
    color: "#ffffff",
    marginTop: "0vh",
    border: null,
    // backgroundColor: "#009dd9",
    overflow: "auto",
    padding: theme.spacing(0, 0, 0),
  },
  DelBut: {
    position: "sticky",
    bottom: theme.spacing(142),
    left: theme.spacing(250),
  },
}));

function SevenDayHome({ history }) {
  const [loading, setloading] = useState(false);
  const classes = useStyles();
  const { user } = useSelector((state) => ({ ...state }));
  const [npackorder, setnpackorder] = useState([
    { id: "threedimage", content: "3D Image", url: "" },
    { id: "newspaper", content: "NewsPaper", url: "" },
    { id: "puzzle", content: "Slide Puzzle", url: "" },
    {
      id: "memorygame",
      content: "Memory Game",
      // score: Number.MAX_VALUE,
      url: "",
    },
    { id: "cubes", content: "Cubes in 3D Heart", url: "" },
    { id: "collage", content: "Collage", url: "" },
    { id: "greetingcard", content: "Greeting Card", url: "" },
  ]);
  const database = firebase.firestore();
  const [Folder_name, setFolder_name] = useState();
  const [From_name, setFrom_name] = useState();
  const [To_name, setTo_name] = useState();
  const [gifts, setGifts] = useState([]);
  const [error, setError] = useState();
  const [openModal, setopenModal] = useState(false);
  const [opencrop, setopencrop] = useState(false);
  const [send, setsend] = useState();
  const [fbimg, setfbimg] = useState();
  const [imageAsFile, setImageAsFile] = useState("");
  const [image_url, setimage_url] = useState();
  const [Bday_date, setBday_date] = useState(new Date());
  useEffect(() => {
    firebase.auth().onAuthStateChanged(async function (user) {
      if (!user) {
        history.push("/login");
      } else {
        await getPrevious(user.uid);
      }
    });
  }, []);

  const getPrevious = async (useruid) => {
    setloading(true);
    await database
      .collection("n-day-pack")
      .doc(useruid)
      .collection("giftshub")
      .get()
      .then((response) => {
        const fetchedGifts = [];
        response.forEach((document) => {
          const fetchedMovie = {
            id: document.id,
            ...document.data(),
          };
          fetchedGifts.push(fetchedMovie);
        });
        setGifts(fetchedGifts);
        setloading(false);
      })
      .catch((error) => {
        setError(error);
      });
  };
  const onSelectFile = (e) => {
    setsend(window.URL.createObjectURL(e.target.files[0]));

    setopencrop(true);
  };

  const CreatePack = (e) => {
    setloading(true);
    e.preventDefault();
    var ud = uuidv4();
    const uploadTask = storage
      .ref(`/images/${imageAsFile.name}`)
      .put(imageAsFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (err) => {
        console.log(err);
      },
      () => {
        var s = storage
          .ref("images")
          .child(ud)
          .putString(image_url, "base64", { contentType: "image/jpg" })
          .then((savedImage) => {
            savedImage.ref.getDownloadURL().then((downUrl) => {
              var sevendayPack = firebase.firestore().collection("/n-day-pack");
              var sevendayPackPack = sevendayPack
                .doc(`${user.uid}`)
                .collection("giftshub");
              sevendayPackPack
                .add({
                  Folder_name: Folder_name,
                  fbimg: downUrl,
                  Bday_date: Bday_date,
                  From_name: From_name,
                  To_name: To_name,
                  array_data: npackorder,
                })
                .then(function (docRef) {
                  var LivelinkPack = firebase
                    .firestore()
                    .collection("/Livelinks");
                  var LivelinkPackPack = LivelinkPack.doc(docRef.id).set({
                    Folder_name: Folder_name,
                    fbimg: downUrl,
                    From_name: From_name,
                    Bday_date: Bday_date,
                    To_name: To_name,
                    array_data: npackorder,
                  });

                  history.push(`/ContinuePack/${docRef.id}`);
                  setloading(false);
                })
                .catch(function (error) {
                  console.error("Error adding Tutorial: ", error);
                });
            });
          });
      }
    );
  };
  var responsive = {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 4,
    },
  };
  const handleDelete = (id) => {
    setGifts((prevgifts) => {
      return prevgifts.filter((giftitem) => {
        return giftitem.id !== id;
      });
    });
    database
      .collection("n-day-pack")
      .doc(user.uid)
      .collection("giftshub")
      .doc(id)
      .delete()
      .then(function () {
        console.log("Document successfully deleted from ndaypack!");
      })
      .catch(function (error) {
        console.error("Error removing document: ", error);
      });
    database
      .collection("Livelinks")
      .doc(id)
      .delete()
      .then(function () {
        console.log("Document successfully deleted friom libe!");
      })
      .catch(function (error) {
        console.error("Error removing document: ", error);
      });
  };
  return (
    <div
      style={{
        background:
          "linear-gradient( 135deg, rgba(0, 136, 232, 1) 0%, rgba(0, 182, 198, 1) 0%, rgba(0, 136, 232, 1) 100% )",
        height: "80vh",
      }}
    >
      <AuthHeader />
      <section className="section" id="services">
        <h1
          style={{
            fontSize: "70px",
            marginTop: "-25px",
            color: "#ffd353",
            fontFamily: "Merriweather",
            letterSpacing: "3px",
          }}
        >
          Customize
        </h1>
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-theme"
              loop
              margin={20}
              // center
              mergeFit
              autoplayTimeout={3000}
              nav
              items={4}
              responsive={responsive}
              autoplay
              autoplayHoverPause
            >
              {" "}
              <div className="productCardDiv">
                <div>
                  <img
                    className="productCardImg"
                    src="assets/images/magazine.png"
                    alt=""
                  />
                </div>
                <div className="productCardTextDiv">
                  <h1>3D Image </h1>
                </div>
              </div>
              <div className="productCardDiv">
                <div>
                  <img
                    className="productCardImg"
                    src="assets/images/newspaper_alit.png"
                    alt=""
                  />
                </div>
                <div className="productCardTextDiv">
                  <h1>News Papers</h1>
                </div>
              </div>
              <div className="productCardDiv">
                <div>
                  <img
                    className="productCardImg"
                    src="assets/images/right-image.png"
                    alt=""
                  />
                </div>
                <div className="productCardTextDiv">
                  <h1>Puzzles</h1>
                </div>
              </div>
              <div className="productCardDiv">
                <div>
                  <img
                    className="productCardImg"
                    src="assets/images/right-image.png"
                    alt=""
                  />
                </div>
                <div className="productCardTextDiv">
                  <h1>Memory Game</h1>
                </div>
              </div>
              <div className="productCardDiv">
                <div>
                  <img
                    className="productCardImg"
                    src="assets/images/newspaper_alit.png"
                    alt=""
                  />
                </div>
                <div className="productCardTextDiv">
                  <h1>Cubes</h1>
                </div>
              </div>
              <div className="productCardDiv">
                <div>
                  <img
                    className="productCardImg"
                    src="assets/images/magazine.png"
                    alt=""
                  />
                </div>
                <div className="productCardTextDiv">
                  <h1>Collage</h1>
                </div>
              </div>
              <div className="productCardDiv">
                <div>
                  <img
                    className="productCardImg"
                    src="assets/images/magazine.png"
                    alt=""
                  />
                </div>
                <div className="productCardTextDiv">
                  <h1>Greeting Card</h1>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <hr />
      <button
        className="main-button"
        onClick={() => {
          setopenModal(true);
        }}
      >
        Create Recommended Pack
      </button>
      <hr />
      <Modal
        style={{
          display: "flex",
          justifyContent: "center",
          marginRight: "auto",
          overflow: "hidden",
          alignItems: "center",
        }}
        open={openModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {
          <div className={classes.paper}>
            {loading ? (
              <center>
                {" "}
                <Loader
                  type="BallTriangle"
                  color="#00BFFF"
                  height={300}
                  width={300}
                />
              </center>
            ) : (
              <div>
                <div
                  style={{ backgroundColor: "#ffffff" }}
                  class="container-fluid pt-3"
                >
                  <div class="p-3">
                    <center>
                      <form onSubmit={CreatePack}>
                        <div
                          style={{
                            width: "200px",
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
                            required
                            className="RightSideBar2__Btn"
                            multiline
                            placeholder="Folder Name"
                            style={{
                              color: "#068dc0",
                              margin: "0",
                              backgroundColor: "#ffffff",
                              width: "200px",
                            }}
                            value={Folder_name}
                            onChange={(e) => setFolder_name(e.target.value)}
                          />
                        </div>

                        <div
                          style={{
                            width: "200px",
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
                            required
                            className="RightSideBar2__Btn"
                            multiline
                            placeholder="Your Name"
                            style={{
                              color: "#068dc0",
                              margin: "0",
                              backgroundColor: "#ffffff",
                              width: "200px",
                            }}
                            value={From_name}
                            onChange={(e) => setFrom_name(e.target.value)}
                          />
                        </div>

                        <div
                          style={{
                            width: "200px",
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
                            required
                            className="RightSideBar2__Btn"
                            multiline
                            placeholder="Receivers Name"
                            style={{
                              color: "#068dc0",
                              margin: "0",
                              backgroundColor: "#ffffff",
                              width: "200px",
                            }}
                            value={To_name}
                            onChange={(e) => setTo_name(e.target.value)}
                          />
                        </div>

                        <div style={{ height: "45px" }}>
                          <input
                            required
                            style={{ display: "none" }}
                            accept="image/* "
                            id="ImageInput"
                            name="ImageInput"
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
                              aspect_ratio={1 / 1}
                              opencrop={opencrop}
                              setopencrop={setopencrop}
                            />
                          ) : null}
                          <label htmlFor="ImageInput">
                            <HeaderBtn
                              Icon={ImageIcon}
                              title="Add your  image "
                            />
                          </label>
                        </div>

                        <div
                          style={{
                            width: "200px",
                          }}
                          className="RightSideBar2__Btn"
                        >
                          <DateRangeIcon
                            style={{
                              margin: "0 10px 0 5px",
                              color: "#ffffff",
                              fontSize: "large",
                            }}
                          />
                          <input
                            required
                            className="RightSideBar2__Btn"
                            type="date"
                            style={{
                              color: "#068dc0",
                              margin: "0",
                              backgroundColor: "#ffffff",
                              width: "150px",
                            }}
                            value={Bday_date}
                            onChange={(e) =>
                              setBday_date(e.target.value.toLocaleString())
                            }
                          />
                        </div>
                        <br />

                        <input
                          style={{ display: "none" }}
                          id="submit"
                          type="submit"
                          value="Create 7 day pack"
                        />
                        <label htmlFor="submit">
                          <button className="main-button">
                            {" "}
                            Create 7 day pack
                          </button>
                        </label>
                      </form>
                    </center>
                  </div>
                </div>
                <Fab
                  onClick={() => {
                    setopenModal(false);
                  }}
                  className={classes.DelBut}
                  color="primary"
                  aria-label="add"
                >
                  <CloseIcon />
                </Fab>
              </div>
            )}
          </div>
        }
      </Modal>
      <hr />
      <center>
        {loading ? (
          <Loader
            type="BallTriangle"
            color="#00BFFF"
            height={100}
            width={100}
          />
        ) : (
          <div
            style={{
              width: "200px",
            }}
          >
            {error ? <p>Ops, there is an error :(</p> : null}
            <ul>
              {gifts.map((gift) => (
                <li key={gift.id}>
                  <Link to={`/ContinuePack/${gift.id}`}>
                    <button className="main-button">
                      {gift.Folder_name}|{gift.id}
                    </button>
                  </Link>
                  <button
                    onClick={() => {
                      handleDelete(gift.id);
                    }}
                  >
                    Delete
                  </button>
                  <br />
                </li>
              ))}
            </ul>
          </div>
        )}
      </center>
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

export default SevenDayHome;
