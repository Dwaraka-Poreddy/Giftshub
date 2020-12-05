import React, { useState } from "react";
import HeaderBtn from "./HeaderBtn";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import firebase from "./firebase";
import { storage } from "./firebase";
import { v4 as uuidv4 } from "uuid";
import CropPage from "./CropPage";
import LinkIcon from "@material-ui/icons/Link";
export default function App() {
  const [livelink, setlivelink] = useState();
  const [previewlink, setpreviewlink] = useState("");
  const [fireurl, setFireUrl] = useState("");
  const [imageAsFile, setImageAsFile] = useState("");
  const [fbimg, setfbimg] = useState();
  const [image_url, setimage_url] = useState();
  const [opencrop, setopencrop] = useState(false);
  const [send, setsend] = useState();
  const onSelectFile = (e) => {
    setsend(window.URL.createObjectURL(e.target.files[0]));

    setopencrop(true);
  };

  const handleFireBaseUpload = () => {
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
              const todoRef = firebase.database().ref("SpecialCard");
              const todo = {
                url: downUrl,
              };
              var newKey = todoRef.push(todo).getKey();
              setlivelink("http://localhost:3000/live/specialcard/" + newKey);
              console.log(livelink);
              setpreviewlink("/live/specialcard/" + newKey);
            });
          });
      }
    );
  };

  return (
    <div style={{ color: "#ffffff" }} className="honeycomb">
      <input
        accept="image/* "
        // className={secclasses.input}
        id="LocalfileInput"
        name="LocalfileInput"
        multiple
        type="file"
        accept="image/*"
        onChange={onSelectFile}
      />
      {opencrop ? (
        <CropPage send={send} setfbimg={setfbimg} setimage_url={setimage_url} />
      ) : (
        "qwert"
      )}
      <center>
        <div style={{ width: "55%", marginTop: "20px" }}>
          <HeaderBtn
            handleClick={() => {
              handleFireBaseUpload();
            }}
            Icon={LinkIcon}
            title="Generate Link"
          />
        </div>
      </center>
      <h3>{livelink}</h3>
      <img src={fbimg} alt="" />
      {/* {image_url} */}
    </div>
  );
}
