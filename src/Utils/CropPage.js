import React, {
  useMemo,
  useState,
  useCallback,
  useRef,
  useEffect,
} from "react";
import HeaderBtn from "../Studio/HeaderBtn";
import Modal from "@material-ui/core/Modal";
import { v4 as uuidv4 } from "uuid";
import ReactCrop from "react-image-crop";
import { makeStyles } from "@material-ui/core/styles";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import Fab from "@material-ui/core/Fab";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  paper: {
    borderRadius: "5px",
    width: "70vw",
    height: "80vh",
    minWidth: "280px",
    maxWidth: "840px",
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

function CropPage({
  send,
  setfbimg,
  setimage_url,
  aspect_ratio,
  setopencrop,
  opencrop,
}) {
  const def = {
    unit: "%",
    width: 50,
    aspect: aspect_ratio,
  };

  const classes = useStyles();

  const [upImg, setUpImg] = useState(send);
  const previewCanvasRef = useRef(null);
  const imgRef = useRef(null);
  const pixelRatio = window.devicePixelRatio || 1;
  const [completedCrop, setCompletedCrop] = useState(null);
  const [crop, setCrop] = useState(def);
  useEffect(() => {
    if (!completedCrop || !previewCanvasRef.current || !imgRef.current) {
      return;
    }

    const image = imgRef.current;
    const canvas = previewCanvasRef.current;
    const crop = completedCrop;

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const ctx = canvas.getContext("2d");

    canvas.width = crop.width * pixelRatio;
    canvas.height = crop.height * pixelRatio;

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    ctx.imageSmoothingQuality = "high";

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );
  }, [completedCrop]);

  const onLoad = useCallback((img) => {
    imgRef.current = img;
  }, []);
  function getResizedCanvas(canvas, newWidth, newHeight) {
    const tmpCanvas = document.createElement("canvas");
    tmpCanvas.width = newWidth;
    tmpCanvas.height = newHeight;

    const ctx = tmpCanvas.getContext("2d");
    ctx.drawImage(
      canvas,
      0,
      0,
      canvas.width,
      canvas.height,
      0,
      0,
      newWidth,
      newHeight
    );

    return tmpCanvas;
  }
  function generateDownload(previewCanvas, crop) {
    if (!crop || !previewCanvas) {
      return;
    }

    const canvas = getResizedCanvas(previewCanvas, crop.width, crop.height);
    var base64Image = canvas.toDataURL("image/jpeg", 1.0);
    setfbimg(base64Image);

    var base64Img = base64Image.replace("data:image/jpeg;base64,", "");
    setimage_url(base64Img);
    // console.log(base64Img);
    canvas.toBlob(
      (blob) => {
        const previewUrl = window.URL.createObjectURL(blob);

        window.URL.revokeObjectURL(previewUrl);
      },
      "image/png",
      1
    );

    setopencrop(false);
  }

  return (
    <div>
      <Modal
        style={{
          display: "flex",
          justifyContent: "center",
          marginRight: "auto",
          overflow: "hidden",
          alignItems: "center",
        }}
        open={opencrop}
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
                    <center>
                      <ReactCrop
                        imageStyle={{ maxWidth: "800px", maxHeight: "450px" }}
                        src={upImg}
                        onImageLoaded={onLoad}
                        crop={crop}
                        onChange={(c) => setCrop(c)}
                        onComplete={(c) => setCompletedCrop(c)}
                      />
                    </center>
                    <div style={{ display: "none" }}>
                      <canvas
                        ref={previewCanvasRef}
                        style={{
                          width: Math.round(completedCrop?.width ?? 0),
                          height: Math.round(completedCrop?.height ?? 0),
                        }}
                      />
                    </div>
                    <div>
                      <center>
                        <div>
                          {" "}
                          <HeaderBtn
                            handleClick={() => {
                              generateDownload(
                                previewCanvasRef.current,
                                completedCrop
                              );
                            }}
                            Icon={ViewModuleIcon}
                            title=" Use cropped image"
                          />
                        </div>
                      </center>
                    </div>
                  </div>
                </div>
              </div>

              <Fab
                onClick={() => {
                  setopencrop(false);
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
    </div>
  );
}

export default CropPage;
