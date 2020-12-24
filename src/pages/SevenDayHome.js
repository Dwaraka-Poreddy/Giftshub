import React, { useEffect, useState } from "react";
import firebase from "../firebase";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { storage } from "../firebase";
import { v4 as uuidv4 } from "uuid";
import NpackSelect from "./NPackSelect";
import InputBase from "@material-ui/core/InputBase";
import CreateIcon from "@material-ui/icons/Create";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Fab from "@material-ui/core/Fab";
import CloseIcon from "@material-ui/icons/Close";
import HeaderBtn from "../Studio/HeaderBtn";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import CropPage from "../Utils/CropPage";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const useStyles = makeStyles((theme) => ({
  paper: {
    borderRadius: "5px",
    width: "70vw",
    height: "80vh",
    minWidth: "280px",
    position: "absolute",
    color: "#ffffff",
    marginTop: "0vh",
    border: null,
    backgroundColor: "#009dd9",
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
  const classes = useStyles();
  const { user } = useSelector((state) => ({ ...state }));
  const [npackorder, setnpackorder] = useState([
    { id: "threedimage", content: "3D Image", url: "" },
    { id: "newspaper", content: "NewsPaper", url: "" },
    { id: "puzzle", content: "Slide Puzzle", url: "" },
    { id: "memorygame", content: "Memory Game", url: "" },
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
    var user = firebase.auth().currentUser;

    if (!user) {
      history.push("/");
    }
    getPrevious();
  }, []);
  const setpackfunc = (selected) => {
    setnpackorder(selected);
  };
  const getPrevious = () => {
    database
      .collection("n-day-pack")
      .doc(`${user.uid}`)
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
        console.log("gifts", gifts);
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
                })
                .catch(function (error) {
                  console.error("Error adding Tutorial: ", error);
                });
            });
          });
      }
    );
  };

  return (
    <div>
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
              responsive
              autoplay
              autoplayHoverPause
            >
              {" "}
              <Link className="productCard" to="/threedimagepage">
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
              </Link>
              <Link className="productCard" to="/newspaperpage">
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
              </Link>
              <Link className="productCard" to="/slidepuzzlepage">
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
              </Link>
              <Link className="productCard" to="/memorygamepage">
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
              </Link>
              <Link className="productCard" to="/cubespage">
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
              </Link>
              <Link className="productCard" to="/collagepage">
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
              </Link>
              <Link className="productCard" to="/opengreetingcardpage">
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
              </Link>
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
            <div>
              <br />
              <br />
              <br />
              <div
                style={{ backgroundColor: "#70cff3" }}
                class="container-fluid pt-3"
              >
                <div>
                  <center>
                    <form onSubmit={CreatePack}>
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

                      <div>
                        <input
                          style={{ display: "none" }}
                          accept="image/* "
                          // className={secclasses.input}
                          id="ImageInput"
                          name="ImageInput"
                          // multiple
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
                            Icon={ViewModuleIcon}
                            title="Add your  image "
                          />
                        </label>
                      </div>

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
                        <input
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
                      {npackorder.length == 0 ? null : (
                        <>
                          <input
                            style={{ display: "none" }}
                            id="submit"
                            type="submit"
                            value="Create 7 day pack"
                          />
                          <label htmlFor="submit">
                            <HeaderBtn
                              Icon={ViewModuleIcon}
                              title="Create 7 day pack "
                            />
                          </label>
                        </>
                      )}
                    </form>
                  </center>
                  {/* <div class="col-xl-7">
                    <NpackSelect setpackfunc={setpackfunc} />
                  </div> */}
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
          </div>
        }
      </Modal>
      <hr />
      <center>
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
                  <div>
                    <div
                      style={{
                        height: "50px",
                        borderRadius: "5px",
                        marginTop: "5px",
                        border: "0",
                      }}
                      className="productCardTextDiv"
                    >
                      <h1 style={{ padding: "0", marginBottom: "0" }}>
                        {gift.Folder_name}
                      </h1>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </center>
    </div>
  );
}

export default SevenDayHome;
