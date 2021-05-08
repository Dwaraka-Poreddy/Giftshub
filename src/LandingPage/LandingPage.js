import React, { useEffect, useState } from "react";
import "./LandingPage.css";
import "../Swiper.css";
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
const analytics = firebase.analytics();
export default function LandingPage() {
  const dispatch = useDispatch();
  const [navstate, setnavstate] = useState(false);
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
        {/* <Particles
          params={{
            particles: {
              number: {
                value: 100,
              },
              size: {
                value: 3,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
              },
            },
          }}
        /> */}
        <Particles
          params={{
            particles: {
              number: {
                value: 160,
                density: {
                  enable: false,
                },
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
                  size: 0,
                  opacity: 0,
                },
                repulse: {
                  distance: 400,
                  duration: 4,
                },
              },
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
                class="d-block w-100"
                // src={require("../Images/zoomcarouselsquare.jpg")}
                src={require("../Images/v22m.jpg")}
                alt="First slide"
              />
            </div>
            <div class="carousel-item zoomcarousel">
              <img
                class="d-block w-100"
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
        <ul class="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" class="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
        </ul>
        <div class="carousel-inner zoomcarousel">
          <div class="carousel-item active zoomcarousel">
            <img
              class="d-block w-100"
              src={require("../Images/v22.jpg")}
              // src={require("../Images/Picture1.png")}
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
  $(".tab_content").hide();
  $(".tab_content:first").show();

  /* if in tab mode */
  $("ul.tabs li").click(function () {
    $(".tab_content").hide();
    var activeTab = $(this).attr("rel");
    $("#" + activeTab).fadeIn();

    $("ul.tabs li").removeClass("active");
    $(this).addClass("active");

    $(".tab_drawer_heading").removeClass("d_active");
    $(".tab_drawer_heading[rel^='" + activeTab + "']").addClass("d_active");
  });
  /* if in drawer mode */
  $(".tab_drawer_heading").click(function () {
    $(".tab_content").hide();
    var d_activeTab = $(this).attr("rel");
    $("#" + d_activeTab).fadeIn();

    $(".tab_drawer_heading").removeClass("d_active");
    $(this).addClass("d_active");

    $("ul.tabs li").removeClass("active");
    $("ul.tabs li[rel^='" + d_activeTab + "']").addClass("active");
  });
  return (
    <div className="App">
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
            <div class="card shadow-lg ">
              <div class="card-body p-3">
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
                    ways and bringing you closer.
                  </p>
                  <center>
                    <button className="main-button">
                      Video Tour{" "}
                      <PlayArrowOutlinedIcon style={{ marginBottom: "3px" }} />
                    </button>
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container" id="landingpageservices">
          <center>
            <h1 className="landingservicesheading"> Services</h1>
          </center>
          <div class="card-deck mb-3 text-center">
            <div class="card mb-4 box-shadow landingpageservicescard">
              <div class="card-header landingservicescardhead">
                <h4 class="my-0 font-weight-normal">Recommended pack</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title">
                  $0 <small class="text-muted">/ mo</small>
                </h1>
                <center>
                  <ul class="list-unstyled mt-3 mb-4">
                    <li>10 users included</li>
                    <li>2 GB of storage</li>
                    <li>Email support</li>
                    <li>Help center access</li>
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
                <h1 class="card-title pricing-card-title">
                  $0 <small class="text-muted">/ mo</small>
                </h1>
                <ul class="list-unstyled mt-3 mb-4">
                  <li>20 users included</li>
                  <li>10 GB of storage</li>
                  <li>Priority email support</li>
                  <li>Help center access</li>
                </ul>
                <center>
                  <Link to="/">
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
                <h1 class="card-title pricing-card-title">
                  $0 <small class="text-muted">/ mo</small>
                </h1>
                <ul class="list-unstyled mt-3 mb-4">
                  <li>20 users included</li>
                  <li>10 GB of storage</li>
                  <li>Priority email support</li>
                  <li>Help center access</li>
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
            <ul class="tabs">
              <li class="active" rel="tab1">
                Trending
              </li>
              <li rel="tab2">Valentine</li>
              <li rel="tab3">Games</li>
              <li rel="tab4">Typographic</li>
              <li rel="tab5"> Dynamic</li>
              <li rel="tab6"> Greeting Cards</li>
            </ul>
            <div class="tab_container">
              <h3 class="d_active tab_drawer_heading" rel="tab1">
                Trending
              </h3>
              <div id="tab1" class="tab_content">
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
              </div>

              <h3 class="tab_drawer_heading" rel="tab2">
                Valentine
              </h3>
              <div id="tab2" class="tab_content">
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
              </div>

              <h3 class="tab_drawer_heading" rel="tab3">
                Games
              </h3>
              <div id="tab3" class="tab_content">
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
              </div>

              <h3 class="tab_drawer_heading" rel="tab4">
                Typographic
              </h3>
              <div id="tab4" class="tab_content">
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
              </div>
              <h3 class="tab_drawer_heading" rel="tab5">
                Dynamic
              </h3>
              <div id="tab5" class="tab_content">
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
              </div>
              <h3 class="tab_drawer_heading" rel="tab6">
                Greeting Cards
              </h3>
              <div id="tab6" class="tab_content">
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
              </div>
            </div>
          </div>
        </section>
      </body>
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
              <h1 className="landingservicesheading"> Our Process</h1>
              <p>
                We are a passionate digital design agency that specializes in
                beautiful and easy-to-use digital design & web development
                services.
              </p>
            </div>
            <div class="full-width clearfix"></div>
            <div class="row">
              <div class="col-lg-3 col-md-6">
                <div class="item first mb-md50">
                  <img
                    src={require("../Images/arrow.png")}
                    class="tobotm"
                    alt=""
                  />
                  <span class="icon fa fa-address-book"></span>

                  <div class="cont">
                    <h3>01</h3>
                    <h6>Ideas</h6>
                    <p>
                      Nulla metus metus ullamcorper vel tincidunt sed euismod
                      nibh Quisque volutpat
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6">
                <div class="item odd mb-md50">
                  <img src={require("../Images/arrow.png")} alt="" />
                  <span class="icon fa fa-address-book"></span>
                  <div class="cont">
                    <h3>02</h3>
                    <h6>Planning</h6>
                    <p>
                      Nulla metus metus ullamcorper vel tincidunt sed euismod
                      nibh Quisque volutpat
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6">
                <div class="item mb-sm50">
                  <img
                    src={require("../Images/arrow.png")}
                    class="tobotm"
                    alt=""
                  />
                  <span class="icon fa fa-address-book"></span>
                  <div class="cont">
                    <h3>03</h3>
                    <h6>Development</h6>
                    <p>
                      Nulla metus metus ullamcorper vel tincidunt sed euismod
                      nibh Quisque volutpat
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6">
                <div class="item odd">
                  <span class="icon fa fa-address-book"></span>
                  <div class="cont">
                    <h3>04</h3>
                    <h6>Testing</h6>
                    <p>
                      Nulla metus metus ullamcorper vel tincidunt sed euismod
                      nibh Quisque volutpat
                    </p>
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
                  Gifts manifest our emotions and transform them into meaningful
                  forms of love! In a digital age of fast paced lifestyle, we at
                  Gift’s Hub aim to stand apart in providing you the old-school
                  way of wishing your loved ones in several ways and bringing
                  you closer.Gift-planning can be quite a challenging task given
                  the hectic schedules we all have, currently. So to waste no
                  more time and to bid goodbyes to all the reminders and alarms,
                  we introduce our automatic gift generation feature which keeps
                  a track of the D-day and time, releasing the appropriate gift
                  component on the desired day! Lead a guilt-free life once you
                  choose your suitable package and customize them accordingly,
                  because we at Gift’s Hub promise to deliver blissful content
                  as and when you intend us to! Express love, this Valentine’s
                  Day with our free personalized virtual gifting service. Upload
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
            <h1 className="landingservicesheading"> Spread the Love</h1>
          </center>{" "}
          <div className="row">
            <div className="col-4"></div>
            <div className="col-4">
              <div className="row">
                <div className="col-4">
                  <center>
                    <img
                      style={{ width: "60px" }}
                      src={require("../Images/facebook.png")}
                      alt="First slide"
                    />
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

      <Footer />
    </div>
  );
}
