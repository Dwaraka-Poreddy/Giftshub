import React, { useEffect, useState } from "react";
import firebase from "../firebase";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ScheduledCollagePage from "../Collage/ScheduledCollagePage";
import ScheduledCubesPage from "../Cubes/ScheduledCubesPage";
import ScheduledMemoryGamePage from "../MemoryGame/ScheduledMemoryGamePage";
import ScheduledThreeDImagePage from "../ThreeDImage/ScheduledThreeDImagePage";
import ScheduledNewsPaperPage from "../NewsPaper/ScheduledNewsPaperPage";
import ScheduledSlidePuzzlePage from "../SlidePuzzle/ScheduledSlidePuzzlePage";
import ScheduledOpenGreetingCardPage from "../OpenGreetingCard/ScheduledOpenGreetingCardPage";
import Loader from "react-loader-spinner";
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

function N_Day_ContinuePack() {
  const [loading, setloading] = useState(true);
  const database = firebase.firestore();
  const [data, setdata] = useState([]);
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
  }

  async function getDoc() {
    console.log("getdoc running");
    const snapshot = await database
      .collection("n-day-pack")
      .doc("srinivas")
      .collection("giftshub")
      .doc("OL1s4lgY3hjzXZT7LpnS")
      .get();
    const data = snapshot.data().srini;
    data.map((item, index) => {
      datacontent.push(item.content);
      dataid.push(item.id);
      dataurl.push(item.url);
    });
    setdata(snapshot.data().srini);
    await getDocnew();
    setloading(false);
  }
  useEffect(async () => {
    await getDoc();
  }, []);
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const steps = getSteps();

  function getSteps() {
    return datacontent;
  }

  function getStepContent(step) {
    if (dataid[step] === "puzzle") {
      return <h1>Puzzle</h1>;
    }
    if (dataid[step] === "memorygame") {
      return <h1>Memory Game</h1>;
    }
    if (dataid[step] === "collage") {
      return <h1>Collage</h1>;
    }
    if (dataid[step] === "cubes") {
      return <h1>Cubes in Heart</h1>;
    }
    if (dataid[step] === "newspaper") {
      return <h1>NewsPaper</h1>;
    }
    if (dataid[step] === "threedimage") {
      return <h1>3D Image </h1>;
    }
    if (dataid[step] === "greetingcard") {
      return <h1>Greeting Card</h1>;
    }
  }

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <div>
      {loading ? null : (
        <div>
          {JSON.stringify(data[0].id)}
          {JSON.stringify(dataid)}
          <div className={classes.root}>
            <Stepper nonLinear activeStep={activeStep}>
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
            <div>
              {allStepsCompleted() ? (
                <div>
                  <Typography className={classes.instructions}>
                    All steps completed - you&apos;re finished
                  </Typography>
                  <Button onClick={handleReset}>Reset</Button>
                </div>
              ) : (
                <div>
                  <Typography className={classes.instructions}>
                    {getStepContent(activeStep)}
                  </Typography>
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className={classes.button}
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      Next
                    </Button>
                    {activeStep !== steps.length &&
                      (completed[activeStep] ? (
                        <Typography
                          variant="caption"
                          className={classes.completed}
                        >
                          Step {activeStep + 1} already completed
                        </Typography>
                      ) : (
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={handleComplete}
                        >
                          {completedSteps() === totalSteps() - 1
                            ? "Finish"
                            : "Complete Step"}
                        </Button>
                      ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default N_Day_ContinuePack;
