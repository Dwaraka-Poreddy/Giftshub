import React, { useEffect } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./Studio/Header";
import MainPage from "./MainPage";
import N_Day_Home from "./N_Day_pages/N_Day_Home";
import N_Day_ContinuePack from "./N_Day_pages/N_Day_ContinuePack";
import MagazinePage from "./Magazine/MagazinePage";
import NewsPaperPage from "./NewsPaper/NewsPaperPage";
import CollagePage from "./Collage/CollagePage";
import CubesPage from "./Cubes/CubesPage";
import OpenGreetingCardPage from "./OpenGreetingCard/OpenGreetingCardPage";
import LiveOpenGreetingCardPage from "./LivePages/LiveOpenGreetingCardPage";
import AnimatedFramePage from "./AnimatedFrames/AnimatedFramePage";
import SpecialCardPage from "./SpecialCard/SpecialCardPage";

import MemoryGamePage from "./MemoryGame/MemoryGamePage";
import SplitWallImagePage from "./SplitWallImage/SplitWallImagePage.js";
import LiveSplitWall from "./LivePages/LiveSplitWall.js";
import LiveThreeDImage from "./LivePages/LiveThreeDImage";
import LiveSlidePuzzle from "./LivePages/LiveSlidePuzzle";
import LiveSpecialCard from "./LivePages/LiveSpecialCard";
import SlidePuzzlePage from "./SlidePuzzle/SlidePuzzlePage";
import ThreeDImagePage from "./ThreeDImage/ThreeDImagePage";
import LiveCubesPage from "./LivePages/LiveCubesPage";
import LiveNewsPaperPage from "./LivePages/LiveNewsPaperPage";
import LiveAnimatedFramePage from "./LivePages/LiveAnimatedFramePage";
import LiveMagazinePage from "./LivePages/LiveMagazinePage";
import LiveMemoryGamePage from "./LivePages/LiveMemoryGamePage";
import LiveCollagePage from "./LivePages/LiveCollagePage";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/Home";
import AuthHeader from "./components/nav/Header";
import RegisterComplete from "./pages/auth/RegisterComplete";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ContinuePack from "./pages/ContinuePack";
import LiveLinksPage from "./pages/LiveLinksPage";
import ScheduledLiveCollage from "./ScheduledLivePages/ScheduledLiveCollage";
import ScheduledLiveMemoryGame from "./ScheduledLivePages/ScheduledLiveMemoryGame";
import ScheduledLiveSlidePuzzle from "./ScheduledLivePages/ScheduledLiveSlidePuzzle";
import ScheduledLiveNewsPaper from "./ScheduledLivePages/ScheduledLiveNewsPaper";
import ScheduledLiveThreeDImagePage from "./ScheduledLivePages/ScheduledLiveThreeDImage";
import ScheduledLiveOpenGreetCard from "./ScheduledLivePages/ScheduledLiveOpenGreetCard";
import ScheduledLiveCubes from "./ScheduledLivePages/ScheduledLiveCubes";
import ScheduledLiveMainPage from "./ScheduledLivePages/ScheduledLiveMainPage";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const idTokenResult = await user.getIdTokenResult();
        dispatch({
          type: "LOGGED_IN_USER",
          payload: {
            email: user.email,
            token: idTokenResult.token,
            uid: user.uid,
          },
        });
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="App">
      <AuthHeader />
      <ToastContainer />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/ndaycontinuepack" component={N_Day_ContinuePack} />
        <Route exact path="/ndayhome" component={N_Day_Home} />
        <Route exact path="/ContinuePack/:slug" component={ContinuePack} />
        <Route exact path="/LiveLinksPage/:slug" component={LiveLinksPage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/register/complete" component={RegisterComplete} />
        <Route exact path="/forgot/password" component={ForgotPassword} />

        <Route exact path="/" component={MainPage} />
        <Route exact path="/memorygamepage" component={MemoryGamePage} />
        <Route exact path="/collagepage" component={CollagePage} />
        <Route exact path="/newspaperpage" component={NewsPaperPage} />
        <Route exact path="/cubespage" component={CubesPage} />
        <Route exact path="/slidepuzzlepage" component={SlidePuzzlePage} />
        <Route exact path="/magazinepage" component={MagazinePage} />
        <Route exact path="/greet" component={Header} />

        <Route
          exact
          path="/opengreetingcardpage"
          component={OpenGreetingCardPage}
        />
        <Route exact path="/specialcardpage" component={SpecialCardPage} />
        <Route
          exact
          path="/splitwallimagePage"
          component={SplitWallImagePage}
        />
        <Route exact path="/threedimagepage" component={ThreeDImagePage} />
        <Route exact path="/animatedframePage" component={AnimatedFramePage} />

        <Route exact path="/live/splitwall/:slug" component={LiveSplitWall} />
        <Route
          exact
          path="/live/specialcard/:slug"
          component={LiveSpecialCard}
        />
        <Route
          exact
          path="/live/slidepuzzle/:slug"
          component={LiveSlidePuzzle}
        />
        <Route
          exact
          path="/live/threedimage/:slug"
          component={LiveThreeDImage}
        />
        <Route
          exact
          path="/scheduledlive/threedimage/:id/:slug"
          component={ScheduledLiveThreeDImagePage}
        />
        <Route
          exact
          path="/scheduledlive/newspaper/:id/:slug"
          component={ScheduledLiveNewsPaper}
        />
        <Route
          exact
          path="/scheduledlive/cubes/:id/:slug"
          component={ScheduledLiveCubes}
        />
        <Route
          exact
          path="/scheduledlive/main/:slug"
          component={ScheduledLiveMainPage}
        />
        <Route
          exact
          path="/scheduledlive/opengreetingcard/:id/:slug"
          component={ScheduledLiveOpenGreetCard}
        />
        <Route
          exact
          path="/scheduledlive/slidepuzzle/:id/:slug"
          component={ScheduledLiveSlidePuzzle}
        />
        <Route
          exact
          path="/scheduledlive/memorygame/:id/:slug"
          component={ScheduledLiveMemoryGame}
        />
        <Route
          exact
          path="/scheduledlive/collage/:id/:slug"
          component={ScheduledLiveCollage}
        />
        <Route
          exact
          path="/live/newspaper/:slug"
          component={LiveNewsPaperPage}
        />
        <Route
          exact
          path="/live/opengreetingcard/:slug"
          component={LiveOpenGreetingCardPage}
        />
        <Route exact path="/live/cubes/:slug" component={LiveCubesPage} />
        <Route
          exact
          path="/live/memorygame/:slug"
          component={LiveMemoryGamePage}
        />
        <Route exact path="/live/collage/:slug" component={LiveCollagePage} />
        <Route
          exact
          path="/live/animatedframe/:slug"
          component={LiveAnimatedFramePage}
        />
        <Route exact path="/live/magazine/:slug" component={LiveMagazinePage} />
      </Switch>
    </div>
  );
}
