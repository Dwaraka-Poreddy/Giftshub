import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import firebase from "../firebase";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Fab from "@material-ui/core/Fab";
import CloseIcon from "@material-ui/icons/Close";
import HeaderBtn from "../Studio/HeaderBtn";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import CropPage from "../Utils/CropPage";
const useStyles = makeStyles((theme) => ({
  paper: {
    borderRadius: "15px",
    position: "absolute",

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

const Home = ({ history }) => {
  const classes = useStyles();
  const [openModal, setopenModal] = useState(false);
  const { user } = useSelector((state) => ({ ...state }));

  const database = firebase.firestore();
  const [Folder_name, setFolder_name] = useState();
  const [From_name, setFrom_name] = useState();
  const [To_name, setTo_name] = useState();
  const [gifts, setGifts] = useState([]);
  const [error, setError] = useState();
  const [opencrop, setopencrop] = useState(false);
  const [send, setsend] = useState();
  const [fbimg, setfbimg] = useState();

  const [image_url, setimage_url] = useState();
  const [Bday_date, setBday_date] = useState(new Date("December 10, 1815"));
  useEffect(() => {
    var user = firebase.auth().currentUser;
    console.log(user);
    if (!user) {
      history.push("/login");
    }
    getPrevious();
  }, []);
  const getPrevious = () => {
    database
      .collection("7-day-pack")
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
    console.log(Folder_name);
    var sevendayPack = firebase.firestore().collection("/7-day-pack");
    var sevendayPackPack = sevendayPack
      .doc(`${user.uid}`)
      .collection("giftshub");
    sevendayPackPack
      .add({
        Folder_name: Folder_name,
        fbimg: fbimg,
        Bday_date: Bday_date,
        From_name: From_name,
        To_name: To_name,
        url1: "",
        url2: "",
        url3: "",
        url4: "",
        url5: "",
        url6: "",
        url7: "",
      })
      .then(function (docRef) {
        var LivelinkPack = firebase.firestore().collection("/Livelinks");
        var LivelinkPackPack = LivelinkPack.doc(docRef.id).set({
          Folder_name: Folder_name,
          fbimg: fbimg,
          From_name: From_name,
          Bday_date: Bday_date,
          To_name: To_name,
          url1: "",
          url2: "",
          url3: "",
          url4: "",
          url5: "",
          url6: "",
          url7: "",
        });
        console.log("Tutorial created with ID: ", docRef.id);
        history.push(`/ContinuePack/${docRef.id}`);
      })
      .catch(function (error) {
        console.error("Error adding Tutorial: ", error);
      });
  };
  return (
    <>
      <p>Home</p>
      <button
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
            <div>
              <div>
                <div>
                  <div>
                    <br />
                    <br />
                    <br />
                    <form onSubmit={CreatePack}>
                      <label>
                        FOLDER Name:
                        <input
                          onChange={(e) => setFolder_name(e.target.value)}
                          type="text"
                          name="Folder_name"
                        />
                      </label>

                      <label>
                        From_name Name:
                        <input
                          onChange={(e) => setFrom_name(e.target.value)}
                          type="text"
                          name="From_name"
                        />
                      </label>
                      <label>
                        To_name Name:
                        <input
                          onChange={(e) => setTo_name(e.target.value)}
                          type="text"
                          name="To_name"
                        />
                      </label>
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
                          title="Change  image "
                        />
                      </label>
                      <label>
                        Date:
                        <input
                          type="date"
                          id="birthday"
                          name="Bday_date"
                          onChange={(e) => setBday_date(e.target.value)}
                        />
                      </label>

                      <input type="submit" value="Create 7 day pack" />
                    </form>
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
          </div>
        }
      </Modal>

      {/* <button onClick={getPrevious}>Get Previous</button> */}
      <div>
        {error ? <p>Ops, there is an error :(</p> : null}
        <ul>
          {gifts.map((gift) => (
            <li key={gift.id}>
              <Link to={`/ContinuePack/${gift.id}`}>
                <button>
                  {gift.Folder_name}|{gift.id}
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
