import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
export default function App() {
  return (
    <div className="App">
      {/* <div id="preloader">
        <div class="jumper">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div> */}
      <header class="header-area header-sticky">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <nav class="main-nav">
                <Link class="logo" to="/">
                  Gifts Hub
                </Link>

                <ul class="nav">
                  <li class="scroll-to-section">
                    <a href="#welcome" class="active">
                      Home
                    </a>
                  </li>
                  <li class="scroll-to-section">
                    <a href="#about">Combo</a>
                  </li>
                  <li class="scroll-to-section">
                    <a href="#services">Services</a>
                  </li>
                </ul>
                <a class="menu-trigger">
                  <span>Menu</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <div class="welcome-area" id="welcome">
        <div class="header-text">
          <div class="container">
            <div class="row">
              <div
                class="left-text col-lg-6 col-md-6 col-sm-12 col-xs-12"
                data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
              >
                <h1>
                  Gift's Hub is free <strong>for YOU</strong>
                </h1>
                <p>
                  This template is available for 100% free of charge on
                  TemplateMo. Download, modify and use this for your business
                  website.
                </p>
                <a href="#about" class="main-button-slider">
                  Find Out More
                </a>
              </div>
              <div
                class="col-lg-6 col-md-6 col-sm-12 col-xs-12"
                data-scroll-reveal="enter right move 30px over 0.6s after 0.4s"
              >
                <img
                  src="assets/images/slider-icon.png"
                  class="rounded img-fluid d-block mx-auto"
                  alt="First Vector Graphic"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="section" id="about">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-7 col-md-12 col-sm-12"
              data-scroll-reveal="enter left move 30px over 0.6s after 0.4s"
            >
              <img
                src="assets/images/left-image.png"
                className="rounded img-fluid d-block mx-auto"
                alt="App"
              />
            </div>
            <div className="right-text col-lg-5 col-md-12 col-sm-12 mobile-top-fix">
              <div className="left-heading">
                <h5>Vivamus sodales nisi id ante molestie venenatis</h5>
              </div>
              <div className="left-text">
                <p>
                  This template is{" "}
                  <a href="#">last updated on 20 August 2019 </a>for main menu
                  drop-down arrow and sub menu text color. Duis auctor dolor eu
                  scelerisque vestibulum. Vestibulum lacinia, nisl sit amet
                  tristique condimentum. <br />
                  <br />
                  Sed a consequat velit. Morbi lectus sapien, vestibulum et
                  sapien sit amet, ultrices malesuada odio. Donec non quam
                  euismod, mattis dui a, ultrices nisi.
                </p>
                <Link to="/home">
                  <button className="main-button">7-Day Pack</button>
                  {/* <a href="#about2" className="main-button">
                    7-Day Pack
                  </a> */}
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="hr" />
            </div>
          </div>
        </div>
      </section>
      <section className="section" id="services">
        <h1
          style={{
            fontSize: "70px",
            marginTop: "-25px",
            color: "#ffd353",
            fontFamily: "Merriweather",
            letterSpacing: "3px",
          }}
        >
          Customize
        </h1>
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-theme"
              loop
              margin={20}
              // center
              mergeFit
              autoplayTimeout={3000}
              nav
              items={4}
              responsive
              autoplay
              autoplayHoverPause
            >
              <Link className="productCard" to="/collagepage">
                <div className="productCardDiv">
                  <div>
                    <img
                      className="productCardImg"
                      src="assets/images/magazine.png"
                      alt=""
                    />
                  </div>
                  <div className="productCardTextDiv">
                    <h1>Collage</h1>
                  </div>
                </div>
              </Link>
              <Link className="productCard" to="/memorygamepage">
                <div className="productCardDiv">
                  <div>
                    <img
                      className="productCardImg"
                      src="assets/images/right-image.png"
                      alt=""
                    />
                  </div>
                  <div className="productCardTextDiv">
                    <h1>Memory Game</h1>
                  </div>
                </div>
              </Link>
              <Link className="productCard" to="/slidepuzzlepage">
                <div className="productCardDiv">
                  <div>
                    <img
                      className="productCardImg"
                      src="assets/images/right-image.png"
                      alt=""
                    />
                  </div>
                  <div className="productCardTextDiv">
                    <h1>Puzzles</h1>
                  </div>
                </div>
              </Link>
              <Link className="productCard" to="/newspaperpage">
                <div className="productCardDiv">
                  <div>
                    <img
                      className="productCardImg"
                      src="assets/images/newspaper_alit.png"
                      alt=""
                    />
                  </div>
                  <div className="productCardTextDiv">
                    <h1>News Papers</h1>
                  </div>
                </div>
              </Link>
              <Link className="productCard" to="/magazinepage">
                <div className="productCardDiv">
                  <div>
                    <img
                      className="productCardImg"
                      src="assets/images/magazine.png"
                      alt=""
                    />
                  </div>
                  <div className="productCardTextDiv">
                    <h1>Magazine Covers</h1>
                  </div>
                </div>
              </Link>
              <Link className="productCard" to="/greet">
                <div
                  className="productCardDiv"
                  // style={{
                  //   color: "#000",
                  //   height: "500px",
                  //   backgroundColor: "red",
                  // }}
                >
                  <div>
                    <img
                      className="productCardImg"
                      src="https://images-na.ssl-images-amazon.com/images/I/7110MeewakL._SL1500_.jpg"
                      alt=""
                    />
                  </div>
                  <div className="productCardTextDiv">
                    <h1>Greeting Cards</h1>
                  </div>
                </div>
              </Link>
              <Link className="productCard" to="/cubespage">
                <div className="productCardDiv">
                  <div>
                    <img
                      className="productCardImg"
                      src="assets/images/newspaper_alit.png"
                      alt=""
                    />
                  </div>
                  <div className="productCardTextDiv">
                    <h1>Cubes</h1>
                  </div>
                </div>
              </Link>
              <Link className="productCard" to="/animatedframepage">
                <div className="productCardDiv">
                  <div>
                    <img
                      className="productCardImg"
                      src="assets/images/magazine.png"
                      alt=""
                    />
                  </div>
                  <div className="productCardTextDiv">
                    <h1>Animation Frames</h1>
                  </div>
                </div>
              </Link>
              <Link className="productCard" to="/opengreetingcardpage">
                <div className="productCardDiv">
                  <div>
                    <img
                      className="productCardImg"
                      src="assets/images/magazine.png"
                      alt=""
                    />
                  </div>
                  <div className="productCardTextDiv">
                    <h1>Greeting Card</h1>
                  </div>
                </div>
              </Link>
              <Link className="productCard" to="/specialcardpage">
                <div className="productCardDiv">
                  <div>
                    <img
                      className="productCardImg"
                      src="assets/images/magazine.png"
                      alt=""
                    />
                  </div>
                  <div className="productCardTextDiv">
                    <h1>Special Card</h1>
                  </div>
                </div>
              </Link>
              <Link className="productCard" to="/splitwallimagePage">
                <div className="productCardDiv">
                  <div>
                    <img
                      className="productCardImg"
                      src="assets/images/magazine.png"
                      alt=""
                    />
                  </div>
                  <div className="productCardTextDiv">
                    <h1>Split WallFrame</h1>
                  </div>
                </div>
              </Link>

              <Link className="productCard" to="/threedimagepage">
                <div className="productCardDiv">
                  <div>
                    <img
                      className="productCardImg"
                      src="assets/images/magazine.png"
                      alt=""
                    />
                  </div>
                  <div className="productCardTextDiv">
                    <h1>3D Image Frame</h1>
                  </div>
                </div>
              </Link>
            </OwlCarousel>
            {/* <div className="owl-carousel owl-theme"></div> */}
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12 col-sm-12">
              <p className="copyright">
                Copyright © 2020 Gift's Hub Company . Design:{" "}
                <a rel="nofollow" href="/">
                  Gift's Hub
                </a>
              </p>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12">
              <ul className="social">
                <li>
                  <a href="#">
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-rss" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-dribbble" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* /////////// */}
    </div>
  );
}
