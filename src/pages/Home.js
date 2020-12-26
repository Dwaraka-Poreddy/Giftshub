import React, { useEffect, useState } from "react";
import Background from "../Images/the.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import firebase from "../firebase";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Fab from "@material-ui/core/Fab";
import CloseIcon from "@material-ui/icons/Close";
import HeaderBtn from "../Studio/HeaderBtn";
import ImageIcon from "@material-ui/icons/Image";
import CropPage from "../Utils/CropPage";
import { storage } from "../firebase";
import { v4 as uuidv4 } from "uuid";
import InputBase from "@material-ui/core/InputBase";
import CreateIcon from "@material-ui/icons/Create";
import NpackSelect from "./NPackSelect";
import Loader from "react-loader-spinner";
import DateRangeIcon from "@material-ui/icons/DateRange";
const useStyles = makeStyles((theme) => ({
  paper: {
    borderRadius: "5px",
    width: "70vw",
    height: "80vh",
    minWidth: "280px",
    maxWidth: "900px",
    position: "absolute",
    color: "#ffffff",
    marginTop: "0vh",
    border: null,
    backgroundColor: "#ffffff",
    overflow: "auto",
    padding: theme.spacing(0, 0, 0),
  },
  DelBut: {
    position: "sticky",
    bottom: theme.spacing(142),
    left: theme.spacing(250),
  },
}));

const Home = ({ history }) => {
  const [loading, setloading] = useState(false);
  const classes = useStyles();
  const [openModal, setopenModal] = useState(false);
  const { user } = useSelector((state) => ({ ...state }));
  const [npackorder, setnpackorder] = useState([]);
  const database = firebase.firestore();
  const [Folder_name, setFolder_name] = useState();
  const [From_name, setFrom_name] = useState();
  const [To_name, setTo_name] = useState();
  const [gifts, setGifts] = useState([]);
  const [error, setError] = useState();
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
  const setpackfunc = (selected) => {
    setnpackorder(selected);
  };
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
  return (
    <div
      style={{
        background:
          "linear-gradient( 135deg, rgba(0, 136, 232, 1) 0%, rgba(0, 182, 198, 1) 0%, rgba(0, 136, 232, 1) 100% )",
        height: "80vh",
      }}
    >
      <p>Home</p>
      <button
        className="main-button"
        onClick={() => {
          setopenModal(true);
        }}
      >
        Create New Pack
      </button>

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
                {/* <Fab
                  onClick={() => {
                    setopenModal(false);
                  }}
                  // className={classes.DelBut}
                  color="primary"
                  aria-label="add"
                >
                  <CloseIcon />
                </Fab> */}

                <div
                  style={{ backgroundColor: "#ffffff" }}
                  class="container-fluid pt-3"
                >
                  <div class="row">
                    <div class="col-xl-4 pt-3">
                      <center style={{ marginTop: "50px" }}>
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
                                  Icon={ImageIcon}
                                  title="Create 7 day pack "
                                />
                              </label>
                            </>
                          )}
                        </form>
                      </center>
                    </div>
                    <div class="col-xl-7">
                      <center>
                        <NpackSelect setpackfunc={setpackfunc} />
                      </center>
                    </div>
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
      {loading ? (
        <Loader type="BallTriangle" color="#00BFFF" height={100} width={100} />
      ) : (
        <div>
          {error ? <p>Ops, there is an error :(</p> : null}
          <ul>
            {gifts.map((gift) => (
              <li key={gift.id}>
                <Link to={`/ContinuePack/${gift.id}`}>
                  <button className="main-button">
                    {gift.Folder_name}|{gift.id}
                  </button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Home;
