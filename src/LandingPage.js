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

export default function LandingPage() {
  const dispatch = useDispatch();
  const [navstate, setnavstate] = useState(false);
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
  return (
    <div className="App">
      {isMobileOnly ? null : isTablet ? null : browview()}
      <body id="page-top">
        <nav
          class={
            !navstate
              ? "navbar navbar-expand-lg navbar-dark fixed-top"
              : "navbar navbar-expand-lg navbar-dark fixed-top navbar-shrink"
          }
          id="mainNav"
        >
          <div class="container">
            <a class="navbar-brand js-scroll-trigger" href="#page-top">
              <img src={require("./Images/navbar-logo.svg")} alt="" />
            </a>
            <button
              class="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Menu
              <i class="fas fa-bars ml-1"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav text-uppercase ml-auto">
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#1services">
                    Services
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#Process">
                    Process
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#about">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#team">
                    Team
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link js-scroll-trigger" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* <!-- Masthead--> */}
        <header class="masthead" data-aos="zoom-in">
          <div class="crossfade">
            <figure></figure>
            <figure></figure>
            <figure></figure>
            <figure></figure>
            <figure></figure>
          </div>
        </header>

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

        <header class="hiro-header home-header" id="1services">
          <div class="container wow fadeInUp">
            <div
              id="hiroHeaderCarousel"
              class="hiro-header-carousel carousel slide"
              data-ride="carousel"
              data-interval="4000"
            >
              <div class="carousel-inner" role="listbox">
                <div class="carousel-item active">
                  <div class="row">
                    <div
                      class="col-md-6 "
                      data-aos="fade-up"
                      data-aos-duration="3000"
                    >
                      <h1
                        class="carousel-item-title"
                        data-animation="animated fadeInRight"
                        data-number="01"
                      >
                        <span>Remarkable Digital Products</span>
                      </h1>
                      <p
                        class="carousel-item-description"
                        data-animation="animated fadeInRight"
                      >
                        Lorem ipsum is placeholder text commonly used in the
                        graphic, print, and publishing industries for.
                      </p>
                      <a
                        href="#!"
                        class="carousel-item-link link-hover-fx"
                        data-animation="animated fadeInRight"
                      >
                        READ MORE
                      </a>
                      <ul
                        class="carousel-item-social-links nav"
                        data-animation="animated fadeInRight"
                      >
                        <li>
                          <a href="#!" class="link-hover-fx">
                            FACEBOOK
                          </a>
                        </li>
                        <li>
                          <a href="#!" class="link-hover-fx">
                            TWITTER
                          </a>
                        </li>
                        <li>
                          <a href="#!" class="link-hover-fx">
                            BEHANCE
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-md-6">
                      <img
                        src={require("./Images/avatar.jpg")}
                        alt="Remarkable Digital Products"
                        class="img-fluid w-100 rounded"
                        width="372px"
                      />
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="row">
                    <div class="col-md-6">
                      <h1
                        class="carousel-item-title"
                        data-animation="animated fadeInRight"
                        data-number="02"
                      >
                        <span>Remarkable Digital Products</span>
                      </h1>
                      <p
                        class="carousel-item-description"
                        data-animation="animated fadeInRight"
                      >
                        Lorem ipsum is placeholder text commonly used in the
                        graphic, print, and publishing industries for.
                      </p>
                      <a
                        href="#!"
                        class="carousel-item-link link-hover-fx"
                        data-animation="animated fadeInRight"
                      >
                        READ MORE
                      </a>
                      <ul
                        class="carousel-item-social-links nav"
                        data-animation="animated fadeInRight"
                      >
                        <li>
                          <a href="#!" class="link-hover-fx">
                            FACEBOOK
                          </a>
                        </li>
                        <li>
                          <a href="#!" class="link-hover-fx">
                            TWITTER
                          </a>
                        </li>
                        <li>
                          <a href="#!" class="link-hover-fx">
                            BEHANCE
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-md-6">
                      <img
                        src={require("./Images/avatar.jpg")}
                        alt="<span>Remarkable Digital Products</span>"
                        class="img-fluid w-100 rounded"
                        width="372px"
                      />
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div class="row">
                    <div class="col-md-6">
                      <h1
                        class="carousel-item-title"
                        data-animation="animated fadeInRight"
                        data-number="03"
                      >
                        <span>Remarkable Digital Products</span>
                      </h1>
                      <p
                        class="carousel-item-description"
                        data-animation="animated fadeInRight"
                      >
                        Lorem ipsum is placeholder text commonly used in the
                        graphic, print, and publishing industries for.
                      </p>
                      <a
                        href="#!"
                        class="carousel-item-link link-hover-fx"
                        data-animation="animated fadeInRight"
                      >
                        READ MORE
                      </a>
                      <ul
                        class="carousel-item-social-links nav"
                        data-animation="animated fadeInRight"
                      >
                        <li>
                          <a href="#!" class="link-hover-fx">
                            FACEBOOK
                          </a>
                        </li>
                        <li>
                          <a href="#!" class="link-hover-fx">
                            TWITTER
                          </a>
                        </li>
                        <li>
                          <a href="#!" class="link-hover-fx">
                            BEHANCE
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="col-md-6">
                      <img
                        src={require("./Images/avatar.jpg")}
                        alt="Remarkable Digital Products"
                        class="img-fluid w-100 rounded"
                        width="372px"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <ol class="carousel-indicators">
                <li
                  data-target="#hiroHeaderCarousel"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li data-target="#hiroHeaderCarousel" data-slide-to="1"></li>
                <li data-target="#hiroHeaderCarousel" data-slide-to="2"></li>
              </ol>
            </div>
          </div>
        </header>

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
      </body>
    </div>
  );
}
