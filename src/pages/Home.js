import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import firebase from "../firebase";
import CropPage from "../Utils/CropPage";
import { storage } from "../firebase";
import { v4 as uuidv4 } from "uuid";
import NpackSelect from "./NPackSelect";
import NavBar from "../NavBars/NavBar";
import Loader from "react-loader-spinner";
import Grid from "@material-ui/core/Grid";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import TextField from "@material-ui/core/TextField";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
import FolderSharedOutlinedIcon from "@material-ui/icons/FolderSharedOutlined";

const Home = ({ history }) => {
  const [loading, setloading] = useState(false);

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
  const [Bday_date, setBday_date] = useState(Date.now());

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async function (user) {
      if (!user) {
        history.push("/login");
      }
    });
  }, []);
  const setpackfunc = (selected) => {
    setnpackorder(selected);
  };

  const onSelectFile = (e) => {
    setsend(window.URL.createObjectURL(e.target.files[0]));

    setopencrop(true);
  };
  const CreatePack = (e) => {
    setloading(true);

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
                  timestamp: firebase.firestore.FieldValue.serverTimestamp(),
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
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
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
    <div>
      <NavBar />
      <br />
      <br /> <br />
      <br />
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-lg-3"></div>
        </div>
      </div>
      <div>
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
          <center>
            <div>
              <div
                style={{ backgroundColor: "#ffffff" }}
                class="container-fluid pt-3"
              >
                <div>
                  <center>
                    <form onSubmit={CreatePack}>
                      {" "}
                      <div class="row">
                        <div class="col-md-4 col-lg-3 p-0 pt-3">
                          <div>
                            <Grid
                              container
                              spacing={1}
                              alignItems="flex-end"
                              style={{ width: "250px" }}
                            >
                              <Grid item>
                                <FolderSharedOutlinedIcon
                                  style={{ fill: "#0196de" }}
                                />
                              </Grid>
                              <Grid style={{ width: "210px" }} item>
                                <TextField
                                  required
                                  InputLabelProps={{
                                    style: { color: "#0196de" },
                                  }}
                                  id="input-with-icon-grid"
                                  label="Folder Name"
                                  value={Folder_name}
                                  onChange={(e) =>
                                    setFolder_name(e.target.value)
                                  }
                                />
                              </Grid>
                            </Grid>
                          </div>
                          <br />
                          <div>
                            <Grid
                              container
                              spacing={1}
                              alignItems="flex-end"
                              style={{ width: "250px" }}
                            >
                              <Grid item>
                                <AccountCircleOutlinedIcon
                                  style={{ fill: "#0196de" }}
                                />
                              </Grid>
                              <Grid style={{ width: "210px" }} item>
                                <TextField
                                  InputLabelProps={{
                                    style: { color: "#0196de" },
                                  }}
                                  id="input-with-icon-grid"
                                  label="Your Name"
                                  value={From_name}
                                  onChange={(e) => setFrom_name(e.target.value)}
                                  required
                                />
                              </Grid>
                            </Grid>
                          </div>
                          <br />
                          <div>
                            <Grid
                              container
                              spacing={1}
                              alignItems="flex-end"
                              style={{ width: "250px" }}
                            >
                              <Grid item>
                                <AccountCircleOutlinedIcon
                                  style={{ fill: "#0196de" }}
                                />
                              </Grid>
                              <Grid style={{ width: "210px" }} item>
                                <TextField
                                  InputLabelProps={{
                                    style: { color: "#0196de" },
                                  }}
                                  id="input-with-icon-grid"
                                  label="Receivers Name"
                                  value={To_name}
                                  onChange={(e) => setTo_name(e.target.value)}
                                  required
                                />
                              </Grid>
                            </Grid>
                          </div>
                          <br />
                          <center>
                            <div>
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
                                <div
                                  style={{
                                    height: "45px",
                                    width: "250px",
                                    display: "flex",
                                    alignItems: "center",
                                    border: "1px solid #0196de",
                                    cursor: "pointer",
                                    borderRadius: "5px",
                                  }}
                                >
                                  {send ? (
                                    <CheckBoxOutlinedIcon
                                      style={{
                                        fill: "#0196de",
                                        marginLeft: "7px",
                                      }}
                                    />
                                  ) : (
                                    <ImageOutlinedIcon
                                      style={{
                                        fill: "#0196de",
                                        marginLeft: "7px",
                                      }}
                                    />
                                  )}
                                  <h2
                                    style={{
                                      fontSize: "18px",
                                      color: "#0196de",
                                      marginLeft: "8px",
                                      marginBottom: "0",
                                    }}
                                  >
                                    {send ? "Image added" : "Add your image *"}{" "}
                                  </h2>{" "}
                                </div>
                              </label>
                            </div>
                          </center>
                          <br />
                          <TextField
                            style={{}}
                            id="date"
                            label="Event Date"
                            type="date"
                            value={Bday_date}
                            defaultValue={Bday_date}
                            onChange={(e) =>
                              setBday_date(e.target.value.toLocaleString())
                            }
                            InputLabelProps={{
                              shrink: true,
                              style: { color: "#0196de" },
                            }}
                          />{" "}
                          <br />
                          <br />
                        </div>
                        <div class="col-md-8 col-lg-9 ml-0 mr-0">
                          <center>
                            <NpackSelect setpackfunc={setpackfunc} />
                          </center>
                        </div>
                      </div>
                      <br />
                      <center>
                        {npackorder.length == 0 || !Bday_date ? (
                          <>
                            <input
                              disabled
                              style={{ display: "none" }}
                              id="submit"
                              type="submit"
                              value="Create 7 day pack"
                            />
                            <label style={{ opacity: "0.4" }} htmlFor="submit">
                              <button
                                disabled
                                style={{ cursor: "default" }}
                                className="main-button"
                              >
                                {" "}
                                Create {npackorder.length} day pack
                              </button>
                            </label>
                          </>
                        ) : (
                          <>
                            <input
                              style={{ display: "none" }}
                              id="submit"
                              type="submit"
                              value="Create 7 day pack"
                            />
                            <label htmlFor="submit">
                              <button className="main-button">
                                {" "}
                                Create {npackorder.length} day pack
                              </button>
                            </label>
                          </>
                        )}{" "}
                      </center>
                    </form>
                  </center>
                </div>

                <br />
              </div>
            </div>
          </center>
        )}
      </div>
      {loading ? (
        <Loader type="BallTriangle" color="#00BFFF" height={100} width={100} />
      ) : (
        <div>{error ? <p>Ops, there is an error :(</p> : null}</div>
      )}
    </div>
  );
};

export default Home;
