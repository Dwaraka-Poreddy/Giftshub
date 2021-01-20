import React, { useEffect, lazy, Suspense } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const UserPacksPage = lazy(() => import("./UserPages/UserPacksPage"));
const ThreeDCarouselPage = lazy(() =>
  import("./ThreeDCarousel/ThreeDCarouselPage")
);
const AboutQuizPage = lazy(() => import("./AboutQuiz/AboutQuizPage"));
const JourneyPage = lazy(() => import("./Journey/JourneyPage"));
const SwatchBookPage = lazy(() => import("./SwatchBook/SwatchBookPage"));
const CalandarPage = lazy(() => import("./Calandar/CalandarPage"));
const AboutUs = lazy(() => import("./AboutUs"));
const LandingPage = lazy(() => import("./LandingPage"));
const Studio = lazy(() => import("./Studio/Studio.js"));
const Header = lazy(() => import("./Studio/Header"));
const MainPage = lazy(() => import("./MainPage"));
const MagazinePage = lazy(() => import("./Magazine/MagazinePage"));
const NewsPaperPage = lazy(() => import("./NewsPaper/NewsPaperPage"));
const CollagePage = lazy(() => import("./Collage/CollagePage"));
const CubesPage = lazy(() => import("./Cubes/CubesPage"));
const OpenGreetingCardPage = lazy(() =>
  import("./OpenGreetingCard/OpenGreetingCardPage")
);
const LiveOpenGreetingCard = lazy(() =>
  import("./LivePages/LiveOpenGreetingCard")
);
const AnimatedFrame = lazy(() => import("./AnimatedFrames/AnimatedFrame"));
const AnimatedFramePage = lazy(() =>
  import("./AnimatedFrames/AnimatedFramePage")
);
const SpecialCardPage = lazy(() => import("./SpecialCard/SpecialCardPage"));
const MemoryGamePage = lazy(() => import("./MemoryGame/MemoryGamePage"));
const SplitWallImagePage = lazy(() =>
  import("./SplitWallImage/SplitWallImagePage.js")
);
const LiveCalandar = lazy(() => import("./LivePages/LiveCalandar"));
const LiveThreeDCarousel = lazy(() => import("./LivePages/LiveThreeDCarousel"));
const LiveJourney = lazy(() => import("./LivePages/LiveJourney"));
const LiveAboutQuiz = lazy(() => import("./LivePages/LiveAboutQuiz"));
const LiveSwatchBook = lazy(() => import("./LivePages/LiveSwatchBook"));
const LiveSplitWall = lazy(() => import("./LivePages/LiveSplitWall.js"));
const LiveThreeDImage = lazy(() => import("./LivePages/LiveThreeDImage"));
const LiveSlidePuzzle = lazy(() => import("./LivePages/LiveSlidePuzzle"));
const LiveSpecialCard = lazy(() => import("./LivePages/LiveSpecialCard"));
const SlidePuzzlePage = lazy(() => import("./SlidePuzzle/SlidePuzzlePage"));
const ThreeDImagePage = lazy(() => import("./ThreeDImage/ThreeDImagePage"));
const LiveCubesPage = lazy(() => import("./LivePages/LiveCubesPage"));
const LiveNewsPaper = lazy(() => import("./LivePages/LiveNewsPaper"));
const LiveAnimatedFramePage = lazy(() =>
  import("./LivePages/LiveAnimatedFramePage")
);
const LiveMagazine = lazy(() => import("./LivePages/LiveMagazine"));
const LiveMemoryGamePage = lazy(() => import("./LivePages/LiveMemoryGamePage"));
const LiveCollagePage = lazy(() => import("./LivePages/LiveCollagePage"));
const SevenDayHome = lazy(() => import("./pages/SevenDayHome"));
const Login = lazy(() => import("./pages/auth/Login"));
const Register = lazy(() => import("./pages/auth/Register"));
const Home = lazy(() => import("./pages/Home"));
const RegisterComplete = lazy(() => import("./pages/auth/RegisterComplete"));
const ForgotPassword = lazy(() => import("./pages/auth/ForgotPassword"));
const ContinuePack = lazy(() => import("./pages/ContinuePack"));
const SoundRecorder = lazy(() => import("./SoundRecorder"));
const ScheduledLiveMagazine = lazy(() =>
  import("./ScheduledLivePages/ScheduledLiveMagazine")
);
const ScheduledLiveThreeDCarousel = lazy(() =>
  import("./ScheduledLivePages/ScheduledLiveThreeDCarousel")
);
const ScheduledLiveJourney = lazy(() =>
  import("./ScheduledLivePages/ScheduledLiveJourney")
);
const ScheduledLiveSwatchBook = lazy(() =>
  import("./ScheduledLivePages/ScheduledLiveSwatchBook")
);
const ScheduledLiveAnimatedFrame = lazy(() =>
  import("./ScheduledLivePages/ScheduledLiveAnimatedFrame")
);
const ScheduledLiveSpecialCard = lazy(() =>
  import("./ScheduledLivePages/ScheduledLiveSpecialCard")
);
const ScheduledLiveCollage = lazy(() =>
  import("./ScheduledLivePages/ScheduledLiveCollage")
);
const ScheduledLiveMemoryGame = lazy(() =>
  import("./ScheduledLivePages/ScheduledLiveMemoryGame")
);
const ScheduledLiveSlidePuzzle = lazy(() =>
  import("./ScheduledLivePages/ScheduledLiveSlidePuzzle")
);
const ScheduledLiveNewsPaper = lazy(() =>
  import("./ScheduledLivePages/ScheduledLiveNewsPaper")
);
const ScheduledLiveThreeDImagePage = lazy(() =>
  import("./ScheduledLivePages/ScheduledLiveThreeDImage")
);
const ScheduledLiveOpenGreetCard = lazy(() =>
  import("./ScheduledLivePages/ScheduledLiveOpenGreetCard")
);
const ScheduledLiveCubes = lazy(() =>
  import("./ScheduledLivePages/ScheduledLiveCubes")
);
const ScheduledLiveMainPage = lazy(() =>
  import("./ScheduledLivePages/ScheduledLiveMainPage")
);

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
            profilepic: user.photoURL,
          },
        });
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="App">
      <Suspense
        fallback={
          <div className="col text-center p-5">
            <h1> Gifts' Hub Website On The Way...</h1>
            {/* <LoadingOutlined /> */}
          </div>
        }
      >
        <ToastContainer />
        <Switch>
          <Route
            exact
            path="/threedcarouselpage"
            component={ThreeDCarouselPage}
          />
          <Route exact path="/aboutus" component={AboutUs} />
          <Route exact path="/aboutquizpage" component={AboutQuizPage} />
          <Route exact path="/journeypage" component={JourneyPage} />
          <Route exact path="/calandarpage" component={CalandarPage} />
          <Route exact path="/swatchbookpage" component={SwatchBookPage} />
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/sound" component={SoundRecorder} />
          <Route exact path="/animatedframe" component={AnimatedFrame} />
          <Route exact path="/userpackspage" component={UserPacksPage} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/studio" component={Studio} />
          <Route exact path="/recommendedhome" component={SevenDayHome} />

          <Route exact path="/ContinuePack/:slug" component={ContinuePack} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/register/complete" component={RegisterComplete} />
          <Route exact path="/forgot/password" component={ForgotPassword} />

          <Route exact path="/mainpage" component={MainPage} />
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
          <Route
            exact
            path="/animatedframePage"
            component={AnimatedFramePage}
          />
          <Route
            exact
            path="/live/threedcarousel/:slug"
            component={LiveThreeDCarousel}
          />
          <Route exact path="/live/aboutquiz/:slug" component={LiveAboutQuiz} />
          <Route exact path="/live/journey/:slug" component={LiveJourney} />
          <Route exact path="/live/calandar/:slug" component={LiveCalandar} />
          <Route
            exact
            path="/live/swatchbook/:slug"
            component={LiveSwatchBook}
          />
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
          <Route exact path="/live/newspaper/:slug" component={LiveNewsPaper} />
          <Route
            exact
            path="/live/opengreetingcard/:slug"
            component={LiveOpenGreetingCard}
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
          <Route exact path="/live/magazine/:slug" component={LiveMagazine} />
          <Route
            exact
            path="/scheduledlive/magazine/:id/:slug"
            component={ScheduledLiveMagazine}
          />
          <Route
            exact
            path="/scheduledlive/threedcarousel/:id/:slug"
            component={ScheduledLiveThreeDCarousel}
          />
          <Route
            exact
            path="/scheduledlive/threedimage/:id/:slug"
            component={ScheduledLiveThreeDImagePage}
          />
          <Route
            exact
            path="/scheduledlive/animatedframe/:id/:slug"
            component={ScheduledLiveAnimatedFrame}
          />
          <Route
            exact
            path="/scheduledlive/specialcard/:id/:slug"
            component={ScheduledLiveSpecialCard}
          />
          <Route
            exact
            path="/scheduledlive/swatchbook/:id/:slug"
            component={ScheduledLiveSwatchBook}
          />
          <Route
            exact
            path="/scheduledlive/journey/:id/:slug"
            component={ScheduledLiveJourney}
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
        </Switch>
      </Suspense>
    </div>
  );
}
