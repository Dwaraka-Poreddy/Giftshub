import React, { useEffect, useState } from "react";
import "./LandingPage.css";
import "./Swiper.css";
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
import NavBar from "./NavBars/NavBar";
import firebase from "./firebase";

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
        <Particles
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
        />
      </div>
    );
  };
  const mobviewMainCarousel = () => {
    return (
      <>
        <br />

        <div
          style={{ overflow: "hidden" }}
          id="carouselExampleControls"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner zoomcarousel">
            <div class="carousel-item active">
              <img
                class="d-block w-100"
                src={require("./Images/zoomcarouselsquare.jpg")}
                alt="First slide"
              />
            </div>
            <div class="carousel-item zoomcarousel">
              <img
                class="d-block w-100"
                src={require("./Images/zoomcarousel0square.jpg")}
                jpg
                alt="Second slide"
              />
            </div>
            <div class="carousel-item zoomcarousel">
              <img
                class="d-block w-100"
                src={require("./Images/zoomcarousel2square.jpg")}
                jpg
                alt="Second slide"
              />
            </div>
          </div>
        </div>
      </>
    );
  };
  const browviewMainCarousel = () => {
    return (
      <div
        style={{ overflow: "hidden" }}
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner zoomcarousel">
          <div class="carousel-item active">
            <img
              class="d-block w-100"
              src={require("./Images/zoomcarousel.jpg")}
              alt="First slide"
            />
          </div>
          <div class="carousel-item zoomcarousel">
            <img
              class="d-block w-100"
              src={require("./Images/zoomcarousel0.jpg")}
              jpg
              alt="Second slide"
            />
          </div>
          <div class="carousel-item zoomcarousel">
            <img
              class="d-block w-100"
              src={require("./Images/zoomcarousel2.jpg")}
              jpg
              alt="Second slide"
            />
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="App">
      {/* {isMobileOnly ? null : isTablet ? null : browview()} */}
      <body id="page-top">
        <NavBar />
        {isMobileOnly
          ? mobviewMainCarousel()
          : isTablet
          ? browviewMainCarousel()
          : browviewMainCarousel()}
        <section class="partners mt-n5">
          <div class="container py-0">
            <div class="card shadow-lg ">
              <div class="card-body p-3">
                <div class="swiper-container">
                  <OwlCarousel
                    style={{ zIndex: "5" }}
                    dots={false}
                    loop
                    margin={0}
                    autoplayTimeout={3000}
                    items={5}
                    responsive={responsive}
                    autoplay
                    // autoplayHoverPause
                  >
                    <div class="swiper-wrapper align-items-center">
                      <div class="swiper-slide">
                        <img
                          src={require("./Images/logos/animatedframes.png")}
                          alt=""
                          // style={{ maxHeight: "60px" }}
                        />
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <img
                        src={require("./Images/logos/journey.png")}
                        alt=""
                        // style={{ maxHeight: "60px" }}
                      />
                    </div>
                    <div class="swiper-slide">
                      <img
                        src={require("./Images/logos/memorygame.png")}
                        alt=""
                        // style={{ maxHeight: "60px" }}
                      />
                    </div>
                    <div class="swiper-slide">
                      <img
                        src={require("./Images/logos/newspaper.png")}
                        alt=""
                        // style={{ maxHeight: "60px" }}
                      />
                    </div>
                    <div class="swiper-slide">
                      <img
                        src={require("./Images/logos/collage.png")}
                        alt=""
                        // style={{ maxHeight: "60px" }}
                      />
                    </div>
                    <div class="swiper-slide">
                      <img
                        src={require("./Images/logos/threedcarousel.png")}
                        alt=""
                        // style={{ maxHeight: "60px" }}
                      />
                    </div>
                    <div class="swiper-slide">
                      <img
                        src={require("./Images/logos/calender.png")}
                        alt=""
                        // style={{ maxHeight: "60px" }}
                      />
                    </div>
                    <div class="swiper-slide">
                      <img
                        src={require("./Images/logos/threedheart.png")}
                        alt=""
                        // style={{ maxHeight: "60px" }}
                      />
                    </div>
                    <div class="swiper-slide">
                      <img
                        src={require("./Images/logos/slidepuzzle.png")}
                        alt=""
                        // style={{ maxHeight: "60px" }}
                      />
                    </div>
                    <div class="swiper-slide">
                      <img
                        src={require("./Images/logos/greetingcard.png")}
                        alt=""
                        // style={{ maxHeight: "60px" }}
                      />
                    </div>
                    <div class="swiper-slide">
                      <img
                        src={require("./Images/logos/magazine.png")}
                        alt=""
                        // style={{ maxHeight: "60px" }}
                      />
                    </div>
                    <div class="swiper-slide">
                      <img
                        src={require("./Images/logos/surprisecard.png")}
                        alt=""
                        // style={{ maxHeight: "60px" }}
                      />
                    </div>
                    <div class="swiper-slide">
                      <img
                        src={require("./Images/logos/threedframe.png")}
                        alt=""
                        // style={{ maxHeight: "60px" }}
                      />
                    </div>
                    {/* </div> */}
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </div>
        </section>
        <br />
        <br />
        <div className="container">
          <div class="card-deck">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>
                <p class="card-text">
                  <small>Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>{" "}
        <br />
        <br />
        <section id="team" class="pb-5">
          <div class="container">
            <div className="row equal">
              {LandingPageCardsData.map((item, index) => {
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
        </section>
        <center>
          <Link to="/home">
            <button
              onClick={() => {
                dispatch({
                  type: "REDIRECT_USER",
                  payload: {
                    days_redirect: "n",
                  },
                });
              }}
              className="main-button"
            >
              n-Day Pack
            </button>
          </Link>
          <Link to="/recommendedhome">
            <button
              onClick={() => {
                dispatch({
                  type: "REDIRECT_USER",
                  payload: {
                    days_redirect: "r",
                  },
                });
              }}
              className="main-button"
            >
              Recommended pack
            </button>{" "}
          </Link>
        </center>
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
              <h4>
                <span>Our</span> Process
              </h4>
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
                    src={require("./Images/arrow.png")}
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
                  <img src={require("./Images/arrow.png")} alt="" />
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
                    src={require("./Images/arrow.png")}
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
    </div>
  );
}
