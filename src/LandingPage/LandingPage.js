import React, { useEffect, useState } from "react";
import "./LandingPage.css";
import "../Swiper.css";
import { Helmet } from "react-helmet";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import Aos from "aos";
import "aos/dist/aos.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import LandingPageCard from "./LandingPageCard";
import LandingPageCardsData from "./landingPageCardsData";
import Particles from "react-particles-js";
import { isMobileOnly, isTablet } from "react-device-detect";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import $ from "jquery";
import NavBar from "../NavBars/NavBar";
import Footer from "../Footers/Footer";
import firebase from "../firebase";
import "../Buttons.css";
import PlayArrowOutlinedIcon from "@material-ui/icons/PlayArrowOutlined";
import Tabs from "react-responsive-tabs";
import "react-responsive-tabs/styles.css";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
const useFAQStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));
const presidents = [
  {
    name: "Trending",
    biography: (
      <div class="container">
        <div className="row equal">
          {LandingPageCardsData[0].map((item, index) => {
            return (
              <LandingPageCard
                img={item.img}
                gif={item.gif}
                link={item.link}
                title={item.title}
                badge1={item.badge1}
                badge2={item.badge2}
                text={item.text}
              />
            );
          })}
        </div>
      </div>
    ),
  },
  {
    name: "Valentine",
    biography: (
      <div class="container">
        <div className="row equal">
          {LandingPageCardsData[0].map((item, index) => {
            return (
              <LandingPageCard
                img={item.img}
                gif={item.gif}
                link={item.link}
                title={item.title}
                badge1={item.badge1}
                badge2={item.badge2}
                text={item.text}
              />
            );
          })}
        </div>
      </div>
    ),
  },
  {
    name: " Games",
    biography: (
      <div class="container">
        <div className="row equal">
          {LandingPageCardsData[1].map((item, index) => {
            return (
              <LandingPageCard
                img={item.img}
                gif={item.gif}
                link={item.link}
                title={item.title}
                badge1={item.badge1}
                badge2={item.badge2}
                text={item.text}
              />
            );
          })}
        </div>
      </div>
    ),
  },
  {
    name: "Typographic",
    biography: (
      <div class="container">
        <div className="row equal">
          {LandingPageCardsData[2].map((item, index) => {
            return (
              <LandingPageCard
                img={item.img}
                gif={item.gif}
                link={item.link}
                title={item.title}
                badge1={item.badge1}
                badge2={item.badge2}
                text={item.text}
              />
            );
          })}
        </div>
      </div>
    ),
  },
  {
    name: "Dynamic",
    biography: (
      <div class="container">
        <div className="row equal">
          {LandingPageCardsData[3].map((item, index) => {
            return (
              <LandingPageCard
                img={item.img}
                gif={item.gif}
                link={item.link}
                title={item.title}
                badge1={item.badge1}
                badge2={item.badge2}
                text={item.text}
              />
            );
          })}
        </div>
      </div>
    ),
  },
  {
    name: "Greeting Cards",
    biography: (
      <div class="container">
        <div className="row equal">
          {LandingPageCardsData[4].map((item, index) => {
            return (
              <LandingPageCard
                img={item.img}
                gif={item.gif}
                link={item.link}
                title={item.title}
                badge1={item.badge1}
                badge2={item.badge2}
                text={item.text}
              />
            );
          })}
        </div>
      </div>
    ),
  },
];
function getTabs() {
  return presidents.map((president, index) => ({
    title: president.name,
    getContent: () => president.biography,
    /* Optional parameters */
    key: index,
    tabClassName: "tab",
    panelClassName: "panel",
  }));
}

const analytics = firebase.analytics();
export default function LandingPage() {
  const dispatch = useDispatch();
  const [navstate, setnavstate] = useState(false);
  const FAQclasses = useFAQStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  $(document).ready(function () {
    $(".card").hover(
      function () {
        $(this).removeClass("shadow-none");
        $(this).addClass("shadow");
      },
      function () {
        $(this).removeClass("shadow");
        $(this).addClass("shadow-none");
      }
    );
  });

  useEffect(() => {
    Aos.init({ disable: "mobile" });
  }, []);
  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setnavstate(true);
    } else {
      setnavstate(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  var responsive = {
    0: {
      items: 3,
    },
    600: {
      items: 4,
    },
    1000: {
      items: 5,
    },
  };
  const browview = () => {
    return (
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "20%",
          zIndex: "5",
        }}
      >
        <Particles
          params={{
            particles: {
              number: {
                value: 160,
                color: "#fb6e6e",
                density: {
                  enable: false,
                },
              },
              color: {
                value: "#fb6e6e",
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  speed: 4,
                  size_min: 0.3,
                },
              },
              line_linked: {
                enable: false,
              },
              move: {
                random: true,
                speed: 1,
                direction: "top",
                out_mode: "out",
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "bubble",
                },
                onclick: {
                  enable: true,
                  mode: "repulse",
                },
              },
              modes: {
                bubble: {
                  distance: 250,
                  duration: 2,
                  size: 5,
                  opacity: 1,
                  color: "#fb6e6e",
                },
                repulse: {
                  distance: 400,
                  duration: 4,
                  color: "#fb6e6e",
                },
              },
            },
            color: {
              value: "#fb6e6e",
            },
          }}
        />
      </div>
    );
  };
  const mobviewMainCarousel = () => {
    return (
      <>
        <br />

        <div
          id="demo"
          style={{ overflow: "hidden" }}
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner zoomcarousel">
            <div class="carousel-item active zoomcarousel">
              <img
                class="d-block w-100 mobilecarouselimg"
                // src={require("../Images/zoomcarouselsquare.jpg")}
                src={require("../Images/v22m.jpg")}
                alt="First slide"
              />
            </div>
            <div class="carousel-item zoomcarousel">
              <img
                class="d-block w-100 mobilecarouselimg"
                // src={require("../Images/zoomcarousel0square.jpg")}
                src={require("../Images/valentines1m.jpg")}
                alt="Second slide"
              />
            </div>
            {/* <div class="carousel-item zoomcarousel">
              <img
                class="d-block w-100"
                src={require("../Images/zoomcarousel2square.jpg")}
                alt="Third Slide "
              />
            </div> */}
          </div>
          <a class="carousel-control-prev" href="#demo" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </a>
          <a class="carousel-control-next" href="#demo" data-slide="next">
            <span class="carousel-control-next-icon"></span>
          </a>
        </div>
      </>
    );
  };
  const browviewMainCarousel = () => {
    return (
      <div
        id="demo"
        style={{ overflow: "hidden" }}
        class="carousel slide"
        data-ride="carousel"
      >
        {" "}
        {/* <ul class="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" class="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
        </ul> */}
        <div class="carousel-inner zoomcarousel">
          <div class="carousel-item active zoomcarousel">
            <img
              class="d-block w-100"
              //src={require("../Images/dumcarousel.jpg")}
              src={require("../Images/v22.jpg")}
              //src={require("../Images/Picture1.png")}
              alt="First slide"
            />
          </div>
          <div class="carousel-item zoomcarousel">
            <img
              class="d-block w-100"
              src={require("../Images/valentines1.jpg")}
              // src={require("../Images/Picture1.png")}
              alt="Second slide"
            />
          </div>
          <div class="carousel-item zoomcarousel">
            <img
              class="d-block w-100"
              src={require("../Images/v23.jpg")}
              alt="Third Slide "
            />
          </div>
        </div>
        <a
          class="carousel-control-prev bannercarouselcontrol bannercarouselcontrolleft"
          href="#demo"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon"></span>
        </a>
        <a
          class="carousel-control-next bannercarouselcontrol bannercarouselcontrolright"
          href="#demo"
          data-slide="next"
        >
          <span class="carousel-control-next-icon"></span>
        </a>
      </div>
    );
  };

  return (
    <div className="App">
      <Helmet>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Gifts Hub - Free Personalized Virtual Gifting</title>
        <meta
          name="description"
          content=" Gifts manifest our emotions and transform them into meaningful forms of love! 
          In a digital age of fast paced lifestyle, we at Gift’s Hub aim to stand apart in providing you the old-school way of wishing your loved ones in several ways and bringing you closer."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="valentine,greetings,gifts for all,gifs,gifthub,giftshub, personalised, gifts, customized, scheduled, virtual , free,e-gift, online gifts, online gift delivery, buy gifts online, online gift shop, send gifts, gifts to india,"
        />
        <meta name="language" content="EN" />
      </Helmet>
      <div
        style={{ display: "none" }}
        itemscope
        itemtype="http://schema.org/Person"
      >
        <span itemprop="name">DWARAKA POREDDY</span>
        <span itemprop="company">The GIFTSHUB Company</span>
        <span itemprop="tel">8367770505</span>
        <a itemprop="email" href="contact.giftshub@gmail.com">
          Contact Mail
        </a>
      </div>
      {isMobileOnly ? null : isTablet ? null : browview()}

      <body id="page-top">
        <NavBar />
        <div className="landingbannermodal">
          {isMobileOnly
            ? mobviewMainCarousel()
            : isTablet
            ? browviewMainCarousel()
            : browviewMainCarousel()}
        </div>
        <section
          class="partners"
          style={{ marginTop: "-82.5px", marginBottom: "-82.5px" }}
        >
          <div class="container py-0">
            <div class="card shadow-lg swiper-container-container">
              <div class="card-body swiper-container1">
                <div class="swiper-container">
                  <center>
                    <h4 className="mb-0">Customizable gifts</h4>
                  </center>
                  <OwlCarousel
                    style={{ zIndex: "5" }}
                    dots={false}
                    loop
                    margin={0}
                    autoplayTimeout={3000}
                    items={5}
                    responsive={responsive}
                    autoplay
                  >
                    <div class="swiper-wrapper align-items-center">
                      <div class="swiper-slide">
                        <img
                          src={require("../Images/logos/animatedframes.png")}
                          alt=""
                        />
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <img
                        src={require("../Images/logos/journey.png")}
                        alt=""
                      />
                    </div>
                    <div class="swiper-slide">
                      <img
                        src={require("../Images/logos/memorygame.png")}
                        alt=""
                      />
                    </div>
                    <div class="swiper-slide">
                      <img
                        src={require("../Images/logos/newspaper.png")}
                        alt=""
                      />
                    </div>
                    <div class="swiper-slide">
                      <img
                        src={require("../Images/logos/collage.png")}
                        alt=""
                      />
                    </div>
                    <div class="swiper-slide">
                      <img
                        src={require("../Images/logos/threedcarousel.png")}
                        alt=""
                      />
                    </div>
                    <div class="swiper-slide">
                      <img
                        src={require("../Images/logos/calender.png")}
                        alt=""
                      />
                    </div>
                    <div class="swiper-slide">
                      <img
                        src={require("../Images/logos/threedheart.png")}
                        alt=""
                      />
                    </div>
                    <div class="swiper-slide">
                      <img
                        src={require("../Images/logos/slidepuzzle.png")}
                        alt=""
                      />
                    </div>
                    <div class="swiper-slide">
                      <img
                        src={require("../Images/logos/greetingcard.png")}
                        alt=""
                      />
                    </div>
                    <div class="swiper-slide">
                      <img
                        src={require("../Images/logos/magazine.png")}
                        alt=""
                      />
                    </div>
                    <div class="swiper-slide">
                      <img
                        src={require("../Images/logos/surprisecard.png")}
                        alt=""
                      />
                    </div>
                    <div class="swiper-slide">
                      <img
                        src={require("../Images/logos/threedframe.png")}
                        alt=""
                      />
                    </div>
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div class="welcome-area" id="welcome">
          <div class="header-text">
            <div class="container">
              <center>
                <h1 className="freegifting"> Free personalised gifting</h1>
              </center>
              <div class="row">
                <div
                  class="left-text col-xs-12"
                  data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
                >
                  <p>
                    Gifts manifest our emotions and transform them into
                    meaningful forms of love! In a digital age of fast paced
                    lifestyle, we at Gift’s Hub aim to stand apart in providing
                    you the old-school way of wishing your loved ones in several
                    ways and bringing you closer.
                  </p>
                  <center>
                    <Link to="/samplegifts">
                      {" "}
                      <button className="main-button samplegiftsbtn">
                        Sample Gifts{" "}
                        <PlayArrowOutlinedIcon
                          className="samplegiftsbtnarrow"
                          style={{ marginBottom: "3px" }}
                        />
                      </button>
                    </Link>
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container" id="landingpageservices">
          <center>
            <h1 className="landingservicesheading" id="landingservicesheading">
              {" "}
              Our Packs
            </h1>
          </center>
          <div class="card-deck mb-3 text-center">
            <div class="card mb-4 box-shadow landingpageservicescard">
              <div class="card-header landingservicescardhead">
                <h4 class="my-0 font-weight-normal">Recommended pack</h4>
              </div>
              <div class="card-body">
                {/* <h1 class="card-title pricing-card-title">
                  $0 <small class="text-muted">/ mo</small>
                </h1> */}
                <center>
                  <ul class="list-unstyled mt-3 mb-4">
                    <p>
                      Choose from the recommended 3,5 & 7 day packs and free
                      yourself from the hustle of picking the best.
                    </p>
                    <p>Happy Gifting !!!</p>
                  </ul>
                </center>
                <center>
                  <Link to="/recommendedhome">
                    <div class="slidehoverbtnouter">
                      <div
                        onClick={() => {
                          dispatch({
                            type: "REDIRECT_USER",
                            payload: {
                              days_redirect: "r",
                            },
                          });
                        }}
                        class="slidehoverbtnbutton"
                      >
                        <div class="slidehoverbtntext">Recommended pack</div>
                      </div>
                    </div>
                  </Link>
                </center>
              </div>
            </div>
            <div class="card mb-4 box-shadow landingpageservicescard">
              <div class="card-header landingservicescardhead">
                <h4 class="my-0 font-weight-normal ">Valentines Pack</h4>
              </div>
              <div class="card-body">
                {/* <h1 class="card-title pricing-card-title">
                  $0 <small class="text-muted">/ mo</small>
                </h1> */}
                <ul class="list-unstyled mt-3 mb-4">
                  <p>
                    Make this valentines day special with fourteen different
                    gifts one on each day from two weeks before february 14
                  </p>

                  <p>Happy Valentine !!!</p>
                </ul>
                <center>
                  <Link to="/valentinehome">
                    <div class="slidehoverbtnouter">
                      <div
                        onClick={() => {
                          // dispatch({
                          //   type: "REDIRECT_USER",
                          //   payload: {
                          //     days_redirect: "n",
                          //   },
                          // });
                        }}
                        class="slidehoverbtnbutton"
                      >
                        <div class="slidehoverbtntext"> Valentines Pack</div>
                      </div>
                    </div>
                  </Link>
                </center>
              </div>
            </div>{" "}
            <div class="card mb-4 box-shadow landingpageservicescard">
              <div class="card-header landingservicescardhead">
                <h4 class="my-0 font-weight-normal ">N-Day Pack </h4>
              </div>
              <div class="card-body">
                {/* <h1 class="card-title pricing-card-title">
                  $0 <small class="text-muted">/ mo</small>
                </h1> */}
                <ul class="list-unstyled mt-3 mb-4">
                  <p>
                    Choose the total number of gifts necessary based on the
                    occassion and customize them in your own way.
                  </p>
                  <p>Happy Gifting !!!</p>
                </ul>
                <center>
                  <Link to="/home">
                    <div class="slidehoverbtnouter">
                      <div
                        onClick={() => {
                          dispatch({
                            type: "REDIRECT_USER",
                            payload: {
                              days_redirect: "n",
                            },
                          });
                        }}
                        class="slidehoverbtnbutton"
                      >
                        <div class="slidehoverbtntext">N-Day Pack</div>
                      </div>
                    </div>
                  </Link>
                </center>
              </div>
            </div>
          </div>
        </div>
        <section id="team" class="pb-5">
          {" "}
          <center>
            <h1 style={{ color: "#ffffff" }} className="landingservicesheading">
              {" "}
              Customizable Gifts
            </h1>
          </center>
          <div className="container">
            <Tabs
              items={getTabs()}
              showMore={false}
              transformWidth={"0"}
              selectedTabKey={1}
            />
          </div>
        </section>
        {/* <button
        onClick={() => {
          analytics.logEvent("goal_completion", { name: "lever_puzzle" });
          console.log("startuser");
        }}
      >
        Click
      </button> */}
        {/* <!-- =====================================
        ==== Start Process --> */}
        <div
          id="Process"
          class="process section-padding bg-img bg-fixed pos-re text-center"
          data-overlay-dark="7"
          data-background="assets/images/bg6.jpg"
        >
          <div class="container">
            <div class="row">
              <div class="section-head offset-md-2 col-md-8 offset-lg-3 col-lg-6">
                <h1 className="landingservicesheading mt-5"> Our Process</h1>
                <p className="landindservivestext">
                  We are a passionate gift-making agency that specializes in
                  beautiful and easy-to-make virtual personalized gifts.
                </p>
              </div>
              <div class="full-width clearfix"></div>
              <div class="row">
                <div class="col-lg-3 col-md-6">
                  <div class="item first mb-md50">
                    <img
                      src={require("../Images/arrow.png")}
                      class="tobotm processarrow"
                      alt=""
                    />
                    <span class="icon fa fa-address-book processline"></span>

                    <div class="cont">
                      <h3>01</h3>
                      <h6>Choose</h6>
                      <p>Select the pack of your choice for the occasion</p>
                    </div>
                  </div>
                </div>

                <div class="col-lg-3 col-md-6">
                  <div class="item odd mb-md50">
                    <img
                      className="processarrow"
                      src={require("../Images/arrow.png")}
                      alt=""
                    />
                    <span class="icon fa fa-address-book processline"></span>
                    <div class="cont">
                      <h3>02</h3>
                      <h6>Generate</h6>
                      <p>Input the details as you would like</p>
                    </div>
                  </div>
                </div>

                <div class="col-lg-3 col-md-6">
                  <div class="item mb-sm50">
                    <img
                      src={require("../Images/arrow.png")}
                      class="tobotm processarrow"
                      alt=""
                    />
                    <span class="icon fa fa-address-book processline"></span>
                    <div class="cont">
                      <h3>03</h3>
                      <h6>Retain</h6>
                      <p>Finish up and save the pack</p>
                    </div>
                  </div>
                </div>

                <div class="col-lg-3 col-md-6">
                  <div class="item odd">
                    <span class="icon fa fa-address-book processline"></span>
                    <div class="cont">
                      <h3>04</h3>
                      <h6>Relax</h6>
                      <p>Relax back while we schedule your package</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="curve curve-gray-t curve-top"></div>
          <div class="curve curve-bottom"></div>
        </div>
        {/* <!-- End Process ====
      ======================================= --> */}
        <div class="welcome-area1" id="welcome1">
          <div class="header-text">
            <div class="container">
              <center>
                <h1> Free personalised gifting</h1>
              </center>
              <div class="row">
                <div
                  class="left-text col-xs-12"
                  data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
                >
                  <p>
                    Gifts manifest our emotions and transform them into
                    meaningful forms of love! In a digital age of fast paced
                    lifestyle, we at Gift’s Hub aim to stand apart in providing
                    you the old-school way of wishing your loved ones in several
                    ways and bringing you closer.Gift-planning can be quite a
                    challenging task given the hectic schedules we all have,
                    currently. So to waste no more time and to bid goodbyes to
                    all the reminders and alarms, we introduce our automatic
                    gift generation feature which keeps a track of the D-day and
                    time, releasing the appropriate gift component on the
                    desired day! Lead a guilt-free life once you choose your
                    suitable package and customize them accordingly, because we
                    at Gift’s Hub promise to deliver blissful content as and
                    when you intend us to! Express love, this Valentine’s Day
                    with our free personalized virtual gifting service. Upload
                    pictures & text, create puzzles and together make memories!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="socialMedia">
          <div className="container">
            <center>
              <h1
                className="landingservicesheading"
                id="landingservicesheading"
              >
                {" "}
                Spread the Love
              </h1>
            </center>{" "}
            <div className="row">
              <div className="col-4"></div>
              <div className="col-4">
                <div className="row">
                  <div className="col-4">
                    <center>
                      <a href="https://www.facebook.com/Giftshub/">
                        {" "}
                        <img
                          style={{ width: "60px" }}
                          src={require("../Images/facebook.png")}
                          alt="First slide"
                        />
                      </a>
                    </center>
                  </div>
                  <div className="col-4">
                    <center>
                      <img
                        style={{ width: "60px" }}
                        src={require("../Images/youtube.png")}
                        alt="First slide"
                      />
                    </center>
                  </div>
                  <div className="col-4">
                    <center>
                      <img
                        style={{ width: "60px" }}
                        src={require("../Images/instagram.png")}
                        alt="First slide"
                      />
                    </center>
                  </div>
                </div>
              </div>
              <div className="col-4"></div>
            </div>
          </div>
        </div>
        <div className={FAQclasses.root} className="container mb-5">
          <center>
            <h3 className="landingservicesheading" id="landingservicesheading">
              Frequently Asked Questions
            </h3>
          </center>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className={FAQclasses.heading}>
                Is it free ?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                It is completely free. No debit/Credit card is required. Make
                personalized gifts and surprise your loved ones.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography className={FAQclasses.heading}>
                Same Day Delivery ?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                People say that we have gotten 25 years older but our creative
                think tanks are growing younger with each passing day. Inspired
                by the current trends, we keep coming up with new floral
                arrangements & gifts for almost every emotion, celebration and
                occasion.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography className={FAQclasses.heading}>
                What are virtual gifts ?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Life is full of varied experiences and experiences count. They
                help us stride through tough times and make our lives
                meaningful. We at IGP are committed to giving you and loved
                one's experiences that are sure to be cherished for a very long
                time. We are India's best online gift store wherein you will
                find amazing gift ideas for all your special relationships.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography className={FAQclasses.heading}>
                What are the categories available ?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Don’t tell that you are really thinking of waiting for the
                birthday or anniversary or some other day to provide expression
                to your love. If you want to show you care and you love and you
                adore any of your relationships there can be no better moment
                than Right Now!
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel5bh-content"
              id="panel5bh-header"
            >
              <Typography className={FAQclasses.heading}>
                What is personalized gifting ?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                The moment you enter into this world you get wrapped with
                relations. The very first relation which is closest to your
                heart and which is the epitome of selfless, patient and caring
                love is that of a mother. Then there is your father. He is and
                will always continue to be a superhero for his children. It is
                like he knows every wish of yours even before it crawls into
                your mind
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <Footer />{" "}
      </body>
    </div>
  );
}
