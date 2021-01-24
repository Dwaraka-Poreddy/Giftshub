import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import firebase from "../firebase";
import CropPage from "../Utils/CropPage";
import { storage } from "../firebase";
import { v4 as uuidv4 } from "uuid";
import NpackSelect from "./NPackSelect";
import NpackSelectMobile from "./NPackSelectMobile";
import NavBar from "../NavBars/NavBar";
import Loader from "react-loader-spinner";
import Grid from "@material-ui/core/Grid";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import TextField from "@material-ui/core/TextField";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
import FolderSharedOutlinedIcon from "@material-ui/icons/FolderSharedOutlined";
import { isMobileOnly, isTablet } from "react-device-detect";
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
  const browview = () => {
    return <NpackSelect setpackfunc={setpackfunc} />;
  };
  const mobview = () => {
    return <NpackSelectMobile setpackfunc={setpackfunc} />;
  };
  return (
    <div>
      <NavBar />
      <br />
      <br /> <br />
      <br />
      <div class="container">
        <div className="row">
          <div className="col-sm-6 col-md-4 col-lg-3 pt-3">
            <Grid
              container
              spacing={1}
              alignItems="flex-end"
              style={{ width: "250px" }}
              className="mx-auto"
            >
              <Grid item>
                <FolderSharedOutlinedIcon style={{ fill: "rgb(66 66 66)" }} />
              </Grid>
              <Grid style={{ width: "210px" }} item>
                <TextField
                  required
                  InputLabelProps={{
                    style: { color: "rgb(66 66 66)" },
                  }}
                  id="input-with-icon-grid"
                  label="Folder Name"
                  value={Folder_name}
                  onChange={(e) => setFolder_name(e.target.value)}
                />
              </Grid>
            </Grid>
          </div>
          <div className="col-sm-6  col-md-4 col-lg-3 pt-3">
            <Grid
              container
              spacing={1}
              alignItems="flex-end"
              style={{ width: "250px" }}
              className="mx-auto"
            >
              <Grid item>
                <AccountCircleOutlinedIcon style={{ fill: "rgb(66 66 66)" }} />
              </Grid>
              <Grid style={{ width: "210px" }} item>
                <TextField
                  InputLabelProps={{
                    style: { color: "rgb(66 66 66)" },
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
          <div className="col-sm-6  col-md-4 col-lg-3 pt-3">
            <Grid
              container
              spacing={1}
              alignItems="flex-end"
              style={{ width: "250px" }}
              className="mx-auto"
            >
              <Grid item>
                <AccountCircleOutlinedIcon style={{ fill: "rgb(66 66 66)" }} />
              </Grid>
              <Grid style={{ width: "210px" }} item>
                <TextField
                  InputLabelProps={{
                    style: { color: "rgb(66 66 66)" },
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
          <div className="col-sm-6  col-md-4 col-lg-3 pt-3">
            <center>
              <TextField
                style={{ width: "210px" }}
                id="date"
                label="Event Date"
                type="date"
                value={Bday_date}
                defaultValue={Bday_date}
                onChange={(e) => setBday_date(e.target.value.toLocaleString())}
                InputLabelProps={{
                  shrink: true,
                  style: { color: "rgb(66 66 66)" },
                }}
              />
            </center>
          </div>{" "}
          <br />
          <div className="col-sm-6  col-md-4 col-lg-3 pt-3 mx-auto">
            <center>
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
                    width: "210px",
                    display: "flex",
                    alignItems: "center",
                    border: "1px solid rgb(66 66 66)",
                    cursor: "pointer",
                    borderRadius: "5px",
                  }}
                >
                  {send ? (
                    <CheckBoxOutlinedIcon
                      style={{
                        fill: "rgb(66 66 66)",
                        marginLeft: "7px",
                      }}
                    />
                  ) : (
                    <ImageOutlinedIcon
                      style={{
                        fill: "rgb(66 66 66)",
                        marginLeft: "7px",
                      }}
                    />
                  )}
                  <h2
                    style={{
                      fontSize: "18px",
                      color: "rgb(66 66 66)",
                      marginLeft: "8px",
                      marginBottom: "0",
                    }}
                  >
                    {send ? "Image added" : "Add your image *"}{" "}
                  </h2>{" "}
                </div>
              </label>
            </center>
          </div>
          <br />
          <br />
        </div>
      </div>
      <br />
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
          <div className="container">
            <form onSubmit={CreatePack}>
              <div>
                <center>
                  {isMobileOnly ? mobview() : isTablet ? mobview() : browview()}

                  {/* <NpackSelectMobile setpackfunc={setpackfunc} />
                  <NpackSelect setpackfunc={setpackfunc} /> */}
                </center>
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
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
