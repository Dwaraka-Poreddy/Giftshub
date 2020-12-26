import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import firebase from "../firebase";
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Share from "../Utils/Share";
import HeaderBtn from "../Studio/HeaderBtn";
import ShareIcon from "@material-ui/icons/Share";
import ScheduledCollagePage from "../Collage/ScheduledCollagePage";
import ScheduledCubesPage from "../Cubes/ScheduledCubesPage";
import ScheduledMemoryGamePage from "../MemoryGame/ScheduledMemoryGamePage";
import ScheduledThreeDImagePage from "../ThreeDImage/ScheduledThreeDImagePage";
import ScheduledNewsPaperPage from "../NewsPaper/ScheduledNewsPaperPage";
import ScheduledSlidePuzzlePage from "../SlidePuzzle/ScheduledSlidePuzzlePage";
import ScheduledOpenGreetingCardPage from "../OpenGreetingCard/ScheduledOpenGreetingCardPage";
import Loader from "react-loader-spinner";
import Copy from "../Utils/Copy";
import Paper from "@material-ui/core/Paper";
import MobileStepper from "@material-ui/core/MobileStepper";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

import Modal from "@material-ui/core/Modal";
import Fab from "@material-ui/core/Fab";
import CloseIcon from "@material-ui/icons/Close";
import "./ContinuePack.css";
const usemodStyles = makeStyles((theme) => ({
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

function ContinuePack({ match, history }) {
  const theme = useTheme();

  const maxSteps = 7;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const tutorialSteps = [
    {
      label: "3D Image",
    },
    {
      label: "Newspaper",
    },
    {
      label: "Greetingcard",
    },
    {
      label: "Puzzle",
    },
    {
      label: "Memory Game",
    },
    {
      label: "3D Heart",
    },
    {
      label: "Collage",
    },
    {
      label: "Unknown",
    },
  ];
  const database = firebase.firestore();
  let dispatch = useDispatch();
  const { user } = useSelector((state) => ({ ...state }));
  const modclasses = usemodStyles();
  const [loading, setloading] = useState(true);
  const [slag, setslag] = useState(match.params.slug);
  const [livelink, setlivelink] = useState();
  const [showshare, setshowshare] = useState(false);
  const [data1, setdata1] = useState();
  const [daycounter, setdaycounter] = useState();
  const [datacontent, setdatacontent] = useState([]);
  const [dataid, setdataid] = useState([]);
  const [dataurl, setdataurl] = useState([]);
  const [openModal, setopenModal] = useState(false);
  const [isTourOpen, setIsTourOpen] = useState(false);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(async function (user) {
      if (!user) {
        history.push("/login");
      } else {
        await getDoc(user.uid);

        setloading(false);
      }
    });
  }, []);

  async function getDocnew() {
    dataurl.map((item, index) => {
      if (item != "") {
        const newCompleted = completed;
        newCompleted[index] = true;
        setCompleted(newCompleted);
      }
    });
    for (var i = 0; i < dataurl.length; i++) {
      if (dataurl[i] == "") {
        setActiveStep(i);
        break;
      }
    }

    dispatch({
      type: "EDIT_SCHEDULED",
      payload: { text: "" },
    });
    if (allStepsCompleted()) {
      var splits = dataurl[activeStep].split("/");
      dispatch({
        type: "EDIT_SCHEDULED",
        payload: { text: splits[5] },
      });
    }
  }

  async function getDoc(useruid) {
    setloading(true);
    if (!useruid) {
      useruid = user.uid;
    }
    console.log(useruid, "useridif");
    const snapshot = await database
      .collection("n-day-pack")
      .doc(useruid)
      .collection("giftshub")
      .doc(match.params.slug)
      .get();
    const datanew = snapshot.data();
    setdata1(datanew);
    const data = await snapshot.data().array_data;
    setdaycounter(data.length - activeStep - 1);
    data.map((item, index) => {
      datacontent[index] = item.content;
      dataid[index] = item.id;
      dataurl[index] = item.url;
    });

    await getDocnew();
    setloading(false);

    setlivelink(
      "http://localhost:3000/scheduledlive/main/" + `${match.params.slug}`
    );

    await getDocnew();
    setloading(false);
  }
  const setTourOpend = (e) => {
    setIsTourOpen(e);
  };
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
    },
    button: {
      marginRight: theme.spacing(1),
    },
    completed: {
      display: "inline-block",
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }));

  function getSteps() {
    return datacontent;
  }

  function getStepContent(step) {
    if (dataid[step] === "puzzle") {
      return (
        <ScheduledSlidePuzzlePage step={step} slug={slag} getDoc={getDoc} />
      );
    }
    if (dataid[step] === "memorygame") {
      return (
        <ScheduledMemoryGamePage step={step} slug={slag} getDoc={getDoc} />
      );
    }
    if (dataid[step] === "collage") {
      return <ScheduledCollagePage step={step} slug={slag} getDoc={getDoc} />;
    }
    if (dataid[step] === "cubes") {
      return <ScheduledCubesPage step={step} slug={slag} getDoc={getDoc} />;
    }
    if (dataid[step] === "newspaper") {
      return <ScheduledNewsPaperPage step={step} slug={slag} getDoc={getDoc} />;
    }
    if (dataid[step] === "threedimage") {
      return (
        <ScheduledThreeDImagePage
          step={step}
          slug={slag}
          getDoc={getDoc}
          isTourOpen={isTourOpen}
          setTourOpend={setTourOpend}
        />
      );
    }
    if (dataid[step] === "greetingcard") {
      return (
        <ScheduledOpenGreetingCardPage
          step={step}
          slug={slag}
          getDoc={getDoc}
        />
      );
    }
  }
  const Stepperclasses = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const steps = getSteps();

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
    setdaycounter(dataurl.length - step - 1);
    dispatch({
      type: "EDIT_SCHEDULED",
      payload: { text: "" },
    });
    if (completed[step] == true) {
      var splits = dataurl[step].split("/");
      dispatch({
        type: "EDIT_SCHEDULED",
        payload: { text: splits[5] },
      });
    }
  };

  const horizontalStepper = () => {
    return (
      <div>
        <div className={Stepperclasses.root}>
          {!loading ? (
            <div>
              <div className="Laptopstepper">
                <Stepper alternativeLabel nonLinear activeStep={activeStep}>
                  {steps.map((label, index) => (
                    <Step key={label}>
                      <StepButton
                        onClick={handleStep(index)}
                        completed={completed[index]}
                      >
                        {label}
                      </StepButton>
                    </Step>
                  ))}
                </Stepper>
              </div>
              <div className="mobilestepper">
                <Paper square elevation={0}>
                  <Typography>{tutorialSteps[activeStep].label}</Typography>
                </Paper>
                <MobileStepper
                  steps={maxSteps}
                  position="static"
                  variant="text"
                  activeStep={activeStep}
                  nextButton={
                    <Button
                      size="small"
                      onClick={handleNext}
                      disabled={activeStep === maxSteps - 1}
                    >
                      Next
                      {theme.direction === "rtl" ? (
                        <KeyboardArrowLeft />
                      ) : (
                        <KeyboardArrowRight />
                      )}
                    </Button>
                  }
                  backButton={
                    <Button
                      size="small"
                      onClick={handleBack}
                      disabled={activeStep === 0}
                    >
                      {theme.direction === "rtl" ? (
                        <KeyboardArrowRight />
                      ) : (
                        <KeyboardArrowLeft />
                      )}
                      Back
                    </Button>
                  }
                />
              </div>
            </div>
          ) : (
            <Loader
              type="BallTriangle"
              color="#00BFFF"
              height={100}
              width={100}
            />
          )}

          <div>
            {allStepsCompleted() && !loading ? (
              <div>
                <Typography className={Stepperclasses.instructions}>
                  All Componenets completed - you&apos;re finished
                  <center>
                    {" "}
                    {daycounter == 0 ? (
                      <h1 className="example">The Big day is here !!!</h1>
                    ) : daycounter == 1 ? (
                      <h1 className="example">{daycounter} day to go !!!</h1>
                    ) : (
                      <h1 className="example">{daycounter} days to go !!!</h1>
                    )}
                  </center>
                  {!loading && getStepContent(activeStep)}
                </Typography>
              </div>
            ) : (
              <div>
                <Typography className={Stepperclasses.instructions}>
                  <center>
                    {" "}
                    {daycounter == 0 ? (
                      <h1 className="example">The Big day is here !!!</h1>
                    ) : daycounter == 1 ? (
                      <h1 className="example">{daycounter} day to go !!!</h1>
                    ) : (
                      <h1 className="example">{daycounter} days to go !!!</h1>
                    )}
                  </center>
                  {!loading && getStepContent(activeStep)}
                </Typography>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <br />
      <br />
      <br />
      <div style={{ backgroundColor: "#d3d3d3" }} class="container-fluid">
        <div class="row">
          <div class="col-sm-3">
            <center>
              <img
                className=" bannerimg"
                onClick={() => {
                  setshowshare(true);
                  setopenModal(true);
                }}
                src="https://cdn.shopify.com/s/files/1/0255/9121/8229/files/shareLogo.png"
                alt=""
              />
            </center>
          </div>

          <div class="col-sm-3 ">
            {/* <h2>Share</h2> */}
            <p>
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information. <br />{" "}
              only one link for all components
            </p>
          </div>
          <div class="col-sm-3">
            {!showshare ? null : (
              // <div
              //   style={{
              //     margin: "auto",
              //     // position: "absolute",
              //     // top: "50%",
              //     // left: "50%",
              //     // MsTransform: "translateY(-50%) translateX(-50%)",
              //     // transform: "translateY(-50%) translateX(-50%)",
              //   }}
              // >
              //   <HeaderBtn
              //     handleClick={() => {
              //       setshowshare(true);
              //       setopenModal(true);
              //     }}
              //     Icon={ShareIcon}
              //     title="Share "
              //   />
              // </div>
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
                  <div className={modclasses.paper}>
                    <div>
                      <div
                        style={{ backgroundColor: "#ffffff" }}
                        class="container-fluid p-4"
                      >
                        <div>
                          <div>
                            <center>
                              <div style={{ width: "200px" }}>
                                <Copy livelink={livelink} />
                              </div>
                            </center>
                            <Share
                              livelink={livelink}
                              to={data1.To_name}
                              from={data1.From_name}
                            />
                          </div>
                        </div>
                      </div>
                      <Fab
                        onClick={() => {
                          setopenModal(false);
                          setshowshare(false);
                        }}
                        className={modclasses.DelBut}
                        color="primary"
                        aria-label="add"
                      >
                        <CloseIcon />
                      </Fab>
                    </div>
                  </div>
                }
              </Modal>
            )}
            <center>
              <img
                className=" bannerimg"
                style={{ height: "150px" }}
                onClick={() => {
                  setIsTourOpen(true);
                }}
                src="https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/imp%2Ftravel1-removebg-preview.png?alt=media&token=0d8e9f6c-943a-4afa-9515-bc1c14d87226"
                alt=""
              />
            </center>
          </div>
          <div class="col-md-3">
            {" "}
            <p>
              {" "}
              Hello! Allow us to give you a small tour on how to generate this
              special gift. We are sure you wouldn't need one the next time you
              are back.
              <br /> P.S : Its that easy
            </p>
          </div>
        </div>
      </div>
      {horizontalStepper()}
    </div>
  );
}

export default ContinuePack;
