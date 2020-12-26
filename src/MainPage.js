import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import $ from "jquery";
export default function App() {
  $(document).ready(function () {
    $(".card").hover(
      function () {
        $(this).removeClass("shadow-none");
        $(this).addClass("shadow").css("cursor", "pointer");
      },
      function () {
        $(this).removeClass("shadow");
        $(this).addClass("shadow-none");
      }
    );

    // document ready
  });

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
                  Gifts manifest our emotions and transform them into meaningful
                  forms of love! In a digital age of fast paced lifestyle, we at
                  Gift’s Hub aim to stand apart in providing you the old-school
                  way of wishing your loved ones in several ways and bringing
                  you closer.
                </p>
                {/* <Link to="/home"> */}
                <button className="main-button"> Know More</button>
                {/* </Link> */}
                {/* <a href="#about" class="main-button-slider">
                  Use recommended pack
                </a> */}
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

      <section class="section" id="about2">
        <div class="container">
          <div class="row">
            <div class="left-text col-lg-5 col-md-12 col-sm-12 mobile-bottom-fix">
              <div class="left-heading">
                <h5>Curabitur aliquam eget tellus id porta</h5>
              </div>
              <p>
                Proin justo sapien, posuere suscipit tortor in, fermentum mattis
                elit. Aenean in feugiat purus.
              </p>
              <ul>
                <li>
                  <img src="assets/images/about-icon-01.png" alt="" />
                  <div class="text">
                    <h6>Nulla ultricies risus quis risus</h6>
                    <p>
                      You can use this website template for commercial or
                      non-commercial purposes.
                    </p>
                  </div>
                </li>
                {/* <li>
                  <img src="assets/images/about-icon-02.png" alt="" />
                  <div class="text">
                    <h6>Donec consequat commodo purus</h6>
                    <p>
                      You have no right to re-distribute this template as a
                      downloadable ZIP file on any website.
                    </p>
                  </div>
                </li> */}
                <li>
                  <img src="assets/images/about-icon-03.png" alt="" />
                  <div class="text">
                    <h6>Sed placerat sollicitudin mauris</h6>
                    <p>
                      If you have any question or comment, please{" "}
                      <a rel="nofollow" href="">
                        contact
                      </a>{" "}
                      us on TemplateMo.
                    </p>
                  </div>
                </li>
                <Link to="/home">
                  <button className="main-button">n-Day Pack</button>
                </Link>
              </ul>
            </div>
            <div
              class="right-image col-lg-7 col-md-12 col-sm-12 mobile-bottom-fix-big"
              data-scroll-reveal="enter right move 30px over 0.6s after 0.4s"
            >
              <img
                src="assets/images/right-image.png"
                class="rounded img-fluid d-block mx-auto"
                alt="App"
              />
            </div>
          </div>
        </div>
      </section>
      <section style={{ color: "#ffffff" }} className="section" id="services">
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
                <h5 style={{ color: "#ffffff" }}>
                  Vivamus sodales nisi id ante molestie venenatis
                </h5>
              </div>
              <div className="left-text">
                <p style={{ color: "#ffffff" }}>
                  This template is{" "}
                  <a style={{ color: "#ffffff" }} href="#">
                    last updated on 20 August 2019{" "}
                  </a>
                  for main menu drop-down arrow and sub menu text color. Duis
                  auctor dolor eu scelerisque vestibulum. Vestibulum lacinia,
                  nisl sit amet tristique condimentum. <br />
                  <br />
                  Sed a consequat velit. Morbi lectus sapien, vestibulum et
                  sapien sit amet, ultrices malesuada odio. Donec non quam
                  euismod, mattis dui a, ultrices nisi.
                </p>
                <Link to="/sevendayhome">
                  {" "}
                  <button className="main-button">recommended pack</button>{" "}
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
      <section className="section" id="about">
        <h1
          style={{
            fontSize: "70px",
            marginTop: "-25px",
            color: "#ffd353",
            fontFamily: "Merriweather",
            letterSpacing: "3px",
          }}
        >
          Components
        </h1>
        <div class=" container">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3  m-3">
            <ScrollAnimation
              duration={20}
              animateIn="animate__lightSpeedInRight"
            >
              <Link className="productCard" to="/cubespage">
                <div class="col mb-4 ">
                  <div class="card shadow-none componentcards">
                    <img
                      src="https://dummyimage.com/600x400/000/fff.jpg"
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body shadow-none componentcards">
                      <p class="card-text ">
                        The heart symbol is known to be the patent of love and
                        affection for about 300+ years now. Discover this
                        feature of a dynamic heart spinning about a point,
                        around a cube with pictures on all its faces! Experience
                        the compassion in the pictures fueling the heart to grow
                        and spin forever.
                      </p>
                      <button className="main-button">3D Heart</button>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollAnimation>
            <Link className="productCard" to="/memorygamepage">
              <div class="col mb-4 ">
                <div class="card shadow-none componentcards">
                  <img
                    src="https://dummyimage.com/600x400/000/fff.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body shadow-none componentcards">
                    <p class="card-text ">
                      “We do not stop playing because we are old, we grow old
                      because we stop playing” Get those grey cells to work and
                      create a challenge to match all the like pictures within
                      the lowest number of moves and bash the scoreboard!
                    </p>
                    <button className="main-button">Memory Game</button>
                  </div>
                </div>
              </div>
            </Link>
            <Link className="productCard" to="/slidepuzzlepage">
              <div class="col mb-4 ">
                <div class="card shadow-none componentcards">
                  <img
                    src="https://dummyimage.com/600x400/000/fff.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body shadow-none componentcards">
                    <p class="card-text ">
                      Our research tells us that puzzle lovers are 1000%
                      attractive, just like you! So if you and your special
                      someone love puzzles too, what are you even waiting for?
                      Go ahead and personalize your own 15-tile puzzle and
                      record your best scores. Maybe the one with the highest
                      can have the last slice of pizza!
                    </p>
                    <button className="main-button">15 tile puzzle</button>
                  </div>
                </div>
              </div>
            </Link>{" "}
            <Link className="productCard" to="/threedimagepage">
              <div class="col mb-4 ">
                <div class="card shadow-none componentcards">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/imp%2F3d.png?alt=media&token=2c5a87f5-5573-4e56-8d7d-79ecad846234"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body shadow-none componentcards">
                    <p class="card-text ">
                      “Love is made up of three unconditional properties in
                      equal measure : Acceptance, Understanding and
                      Appreciation”. A symbolic component allowing you to
                      project your favorite picture onto 3D tiles and bring life
                      to the image.
                    </p>
                    <button className="main-button">3D Photo Frame</button>
                  </div>
                </div>
              </div>
            </Link>
            <Link className="productCard" to="/newspaperpage">
              <div class="col mb-4 ">
                <div class="card shadow-none componentcards">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/imp%2Fpersonalised-rakhi-newspaper-9918857eg.jpg?alt=media&token=57382869-c91c-4043-95b0-77b05f17e871"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body shadow-none componentcards">
                    <p class="card-text ">
                      What better way to express greetings than to announce it
                      as the newspaper headlines! Simply select an image,
                      customize a two liner message and behold the magic to be
                      the news next day morning!
                    </p>
                    <button className="main-button">News Papers</button>
                  </div>
                </div>
              </div>
            </Link>
            <Link className="productCard" to="/collagepage">
              <div class="col mb-4 ">
                <div class="card shadow-none componentcards">
                  <img
                    src="https://dummyimage.com/600x400/000/fff.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body shadow-none componentcards">
                    <p class="card-text ">
                      Photographs are the stories that we fail to put in words.
                      Explore this feature to design a collage of pictures and
                      write a story of your own!
                    </p>
                    <button className="main-button">Collage</button>
                  </div>
                </div>
              </div>
            </Link>
            <Link className="productCard" to="/animatedframePage">
              <div class="col mb-4 ">
                <div class="card shadow-none componentcards">
                  <img
                    src="https://dummyimage.com/600x400/000/fff.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body shadow-none componentcards">
                    <p class="card-text ">
                      Create an animated effect of two pictures with an
                      underlying text which surprises you everytime you hover on
                      it!
                    </p>
                    <button className="main-button">Animated Frames</button>
                  </div>
                </div>
              </div>
            </Link>
            <Link className="productCard" to="/opengreetingcardpage">
              <div class="col mb-4 ">
                <div class="card shadow-none componentcards">
                  <img
                    src="https://dummyimage.com/600x400/000/fff.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body shadow-none componentcards">
                    <p class="card-text ">
                      The cliche’ greeting cards never go out of style and is
                      the classic form to express your feelings. Make a
                      customized greeting card with a background music of your
                      choice and win the hearts of your special person
                    </p>
                    <button className="main-button">Greeting Card</button>
                  </div>
                </div>
              </div>
            </Link>
            <Link className="productCard" to="/specialcardpage">
              <div class="col mb-4 ">
                <div class="card shadow-none componentcards">
                  <img
                    src="https://dummyimage.com/600x400/000/fff.jpg"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body shadow-none componentcards">
                    <p class="card-text ">
                      A pleasant surprise is always welcome and your special
                      someone definitely deserves it more than anyone! Check out
                      this feature to spread affection and delight******
                    </p>
                    <button className="main-button">Surprise card</button>
                  </div>
                </div>
              </div>
            </Link>
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
