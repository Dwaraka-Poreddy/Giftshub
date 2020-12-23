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
import "./ContinuePack.css";
function ContinuePack({ match }) {
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
      label: "greetingcard",
    },
    {
      label: "puzzle",
    },
    {
      label: "memorygame",
    },
    {
      label: "cubes",
    },
    {
      label: "collage",
    },
    {
      label: "Unknown",
    },
  ];
  const database = firebase.firestore();
  let dispatch = useDispatch();
  const { user } = useSelector((state) => ({ ...state }));

  const [loading, setloading] = useState(true);
  const [slag, setslag] = useState(match.params.slug);
  const [livelink, setlivelink] = useState();
  const [showshare, setshowshare] = useState(false);
  const [data1, setdata1] = useState();

  const [datacontent, setdatacontent] = useState([]);
  const [dataid, setdataid] = useState([]);
  const [dataurl, setdataurl] = useState([]);
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
  }

  async function getDoc() {
    setloading(true);

    const snapshot = await database
      .collection("n-day-pack")
      .doc(`${user.uid}`)
      .collection("giftshub")
      .doc(match.params.slug)
      .get();
    const data = await snapshot.data().array_data;
    data.map((item, index) => {
      datacontent.push(item.content);
      dataid.push(item.id);
      dataurl.push(item.url);
    });

    await getDocnew();
    setloading(false);

    setlivelink(
      "http://localhost:3000/scheduledlive/main/" + `${match.params.slug}`
    );

    await getDocnew();
    setloading(false);
  }
  useEffect(async () => {
    await getDoc();
    setloading(false);
  }, []);

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
      return <ScheduledSlidePuzzlePage slug={slag} getDoc={getDoc} />;
    }
    if (dataid[step] === "memorygame") {
      return <ScheduledMemoryGamePage slug={slag} getDoc={getDoc} />;
    }
    if (dataid[step] === "collage") {
      return <ScheduledCollagePage slug={slag} getDoc={getDoc} />;
    }
    if (dataid[step] === "cubes") {
      return <ScheduledCubesPage slug={slag} getDoc={getDoc} />;
    }
    if (dataid[step] === "newspaper") {
      return <ScheduledNewsPaperPage slug={slag} getDoc={getDoc} />;
    }
    if (dataid[step] === "threedimage") {
      return <ScheduledThreeDImagePage slug={slag} getDoc={getDoc} />;
    }
    if (dataid[step] === "greetingcard") {
      return <ScheduledOpenGreetingCardPage slug={slag} getDoc={getDoc} />;
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
                  {!loading && getStepContent(activeStep)}
                </Typography>
              </div>
            ) : (
              <div>
                <Typography className={Stepperclasses.instructions}>
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
          <div class="col-sm-4">
            <center>
              {" "}
              <img
                style={{ width: "50%" }}
                src="https://cdn.shopify.com/s/files/1/0255/9121/8229/files/shareLogo.png"
                alt=""
              />
            </center>
          </div>

          <div class="col-sm-4 ">
            <h2>Share</h2>
            <h6>
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </h6>
          </div>
          <div class="col-sm-4">
            <center>
              {!showshare ? (
                <div style={{ marginTop: "20px" }}>
                  <HeaderBtn
                    handleClick={() => {
                      setshowshare(true);
                    }}
                    Icon={ShareIcon}
                    title="Share "
                  />
                </div>
              ) : (
                <div>
                  <Share
                    livelink={livelink}
                    to={data1.To_name}
                    from={data1.From_name}
                  />
                  <center style={{ width: "200px" }}>
                    <Copy livelink={livelink} />
                  </center>
                </div>
              )}
            </center>
          </div>
        </div>
      </div>
      {horizontalStepper()}
    </div>
  );
}

export default ContinuePack;
