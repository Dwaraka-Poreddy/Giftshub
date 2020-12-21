import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import firebase from "../firebase";
import { makeStyles } from "@material-ui/core/styles";
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
function ContinuePack({ match }) {
  const database = firebase.firestore();
  const { user } = useSelector((state) => ({ ...state }));
  const [FolderData, setFolderData] = useState("");
  const [loading, setloading] = useState(true);
  const [slag, setslag] = useState(match.params.slug);
  const [livelink, setlivelink] = useState();
  const [showshare, setshowshare] = useState(false);
  async function getDocnew(data) {
    console.log("getdocnew started");
    if (data.url1 != "") {
      const newCompleted = completed;
      newCompleted[0] = true;
      setCompleted(newCompleted);
    }
    if (data.url2 != "") {
      const newCompleted = completed;
      newCompleted[1] = true;
      setCompleted(newCompleted);
    }
    if (data.url3 != "") {
      const newCompleted = completed;
      newCompleted[2] = true;
      setCompleted(newCompleted);
    }
    if (data.url4 != "") {
      const newCompleted = completed;
      newCompleted[3] = true;
      setCompleted(newCompleted);
    }
    if (data.url5 != "") {
      const newCompleted = completed;
      newCompleted[4] = true;
      setCompleted(newCompleted);
    }
    if (data.url6 != "") {
      const newCompleted = completed;
      newCompleted[5] = true;
      setCompleted(newCompleted);
    }
    if (data.url7 != "") {
      const newCompleted = completed;
      newCompleted[6] = true;
      setCompleted(newCompleted);
    }
    if (data.url1 == "") {
      setActiveStep(0);
    } else if (data.url2 == "") {
      setActiveStep(1);
    } else if (data.url3 == "") {
      setActiveStep(2);
    } else if (data.url4 == "") {
      setActiveStep(3);
    } else if (data.url5 == "") {
      setActiveStep(4);
    } else if (data.url6 == "") {
      setActiveStep(5);
      console.log(data.url6, "cubes");
    } else if (data.url7 == "") {
      setActiveStep(6);
    } else {
      setActiveStep(7);
    }
    console.log("getdocnew ended");
  }
  async function getDoc() {
    console.log(loading, "1");
    setloading(true);
    console.log(loading, "2");
    console.log("getdoc running");
    const snapshot = await database
      .collection("7-day-pack")
      .doc(`${user.uid}`)
      .collection("giftshub")
      .doc(match.params.slug)
      .get();
    const data = snapshot.data();
    setlivelink(
      "http://localhost:3000/scheduledlive/main/" + `${match.params.slug}`
    );
    console.log(loading, "3");
    setFolderData(data);
    console.log("calling getdocnew");
    await getDocnew(data);
    console.log("finished getdocnew");
    setloading(false);
    console.log(match.params.slug, "newslug");
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
    return [
      "ThreeDImage",
      "NewsPaper",
      "Greeting Card",
      "Slide Puzzle",
      "Memory Game",
      "Cubes in Heart",
      "Collage",
    ];
  }

  function getStepContent(step) {
    console.log("getstep");
    switch (step) {
      case 0:
        return <ScheduledThreeDImagePage slug={slag} getDoc={getDoc} />;
      case 1:
        return <ScheduledNewsPaperPage slug={slag} getDoc={getDoc} />;
      case 2:
        return <ScheduledOpenGreetingCardPage slug={slag} getDoc={getDoc} />;
      case 3:
        return <ScheduledSlidePuzzlePage slug={slag} getDoc={getDoc} />;
      case 4:
        return <ScheduledMemoryGamePage slug={slag} getDoc={getDoc} />;
      case 5:
        return <ScheduledCubesPage slug={slag} getDoc={getDoc} />;
      case 6:
        return <ScheduledCollagePage slug={slag} getDoc={getDoc} />;
      default:
        return "Unknown step";
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
    console.log(activeStep, "qwert");
    // console.log(step, completed, "qwert");
    // if (completed[step] == true) {
    //   console.log("inside if", "qwert");
    // }
    // console.log("after if", "qwert");
  };

  const horizontalStepper = () => {
    return (
      <div className={Stepperclasses.root}>
        {!loading ? (
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
    );
  };

  return (
    <div>
      <br />
      <br />
      <br />
      {!loading ? (
        <div style={{ float: "right" }}>
          {!showshare ? (
            <div style={{ width: "150px", marginTop: "20px" }}>
              <HeaderBtn
                handleClick={() => {
                  setshowshare(true);
                }}
                Icon={ShareIcon}
                title="Share "
              />
            </div>
          ) : (
            <Share livelink={livelink} />
          )}
        </div>
      ) : null}

      {horizontalStepper()}
    </div>
  );
}

export default ContinuePack;
