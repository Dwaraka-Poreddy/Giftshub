import React, { useState } from "react";
import { ReactMic } from "react-mic";
import firebase from "./firebase";
import { storage } from "./firebase";
export default function SoundRecorder() {
  const [record, setRecord] = useState(false);

  const startRecording = () => {
    setRecord(true);
  };

  const stopRecording = () => {
    setRecord(false);
  };

  const onData = (recordedBlob) => {
    console.log("chunk of real-time data is: ", recordedBlob);
  };

  const onStop = (recordedBlob) => {
    console.log("recordedBlob is: ", recordedBlob);
  };

  //   const uploadToStorage = async (imageURL) => {
  //     console.log("upload audio");
  //     let blob = await fetch(imageURL).then((imageURL) => imageURL.blob());
  //     console.log(blob, "blob00");
  //   };
  const fetchAsBlob = (url) => fetch(url).then((response) => response.blob());
  const convertBlobToBase64 = (blob) =>
    new Promise((resolve, reject) => {
      console.log(blob, "convert");
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.readAsDataURL(blob);
      console.log(reader.readAsDataURL(blob), "read as blob");
    });

  return (
    <div>
      <ReactMic
        record={record}
        className="sound-wave"
        onStop={onStop}
        onData={onData}
        strokeColor="#000000"
        backgroundColor="#FF4081"
      />
      <button
        onClick={() => {
          startRecording();
        }}
        type="button"
      >
        Start
      </button>
      <button
        onClick={() => {
          stopRecording();
        }}
        type="button"
      >
        Stop
      </button>
      <button
        onClick={() => {
          fetchAsBlob(
            `blob:https://e3wtk.csb.app/5883424f-c32e-4116-a554-008658e083d7`
          )
            .then(convertBlobToBase64)
            .then(console.log("blobqwert"));
          //   uploadToStorage(
          //     "blob:https://e3wtk.csb.app/5883424f-c32e-4116-a554-008658e083d7"
          //   );
        }}
      >
        upload
      </button>
    </div>
  );
}
