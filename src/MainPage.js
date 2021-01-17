import React, { useState, useEffect } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import AuthHeader from "./components/nav/Header";
import Aos from "aos";
import "aos/dist/aos.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import $ from "jquery";
import Particles from "react-particles-js";

export default function App() {
  useEffect(() => {
    Aos.init({ disable: "mobile" });
  }, []);
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

  return (
    <div className="App">
      <AuthHeader />
      {/* <Loader type="Audio" color="#00BFFF" height={80} width={80} />
      <Loader type="BallTriangle" color="#00BFFF" height={80} width={80} />
      <Loader type="Bars" color="#00BFFF" height={80} width={80} />
      <Loader type="Circles" color="#00BFFF" height={80} width={80} />
      <Loader type="Grid" color="#00BFFF" height={80} width={80} />
      <Loader type="Hearts" color="#00BFFF" height={80} width={80} />
      <Loader type="Oval" color="#00BFFF" height={80} width={80} />
      <Loader type="Puff" color="#00BFFF" height={80} width={80} />
      <Loader type="Rings" color="#00BFFF" height={80} width={80} />
      <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
      <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} /> */}

      <img
        style={{ width: "100%", height: "100%" }}
        src="https://media.emailonacid.com/wp-content/uploads/2019/03/2019-GifsInEmail.gif"
        alt=""
      />
      <div class="welcome-area" id="welcome" data-aos="fade-down">
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

      <section class="section" id="about2" data-aos="fade-down">
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
      <section
        data-aos="fade-down"
        style={{ color: "#ffffff" }}
        className="section"
        id="services"
      >
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
                  Gift-planning can be quite a challenging task given the hectic
                  schedules we all have, currently. So to waste no more time and
                  to bid goodbyes to all the reminders and alarms, we introduce
                  our automatic gift generation feature which keeps a track of
                  the D-day and time, releasing the appropriate gift component
                  on the desired day! Lead a guilt-free life once you choose
                  your suitable package and customize them accordingly, because
                  we at Gift’s Hub promise to deliver blissful content as and
                  when you intend us to!
                  <br />
                  <br />
                </p>
                <Link to="/recommendedhome">
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
          <div class="row row-cols-1  row-cols-md-2 row-cols-lg-3 m-3">
            <div class="col mb-4 " data-aos="fade-up-right">
              <div class="card shadow-none componentcards">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/imp%2Fcubes.gif?alt=media&token=8d9e3342-cb8e-4be1-9f01-7d0c42364c0a"
                  class="card-img-top"
                  alt="..."
                />
                <div className="mainpgcardtxt">
                  <h1>3D Heart</h1>
                </div>

                <div class="card-body shadow-none componentcards">
                  <p class="card-text ">
                    The heart symbol is known to be the patent of love and
                    affection for about 300+ years now. Discover this feature of
                    a dynamic heart spinning about a point, around a cube with
                    pictures on all its faces! Experience the compassion in the
                    pictures fueling the heart to grow and spin forever.
                  </p>{" "}
                  <Link className="productCard" to="/cubespage">
                    <button className="main-button">Create Gift</button>{" "}
                  </Link>
                </div>
              </div>
            </div>

            <div class="col mb-4 ">
              <div class="card shadow-none componentcards">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/imp%2Fmemorygif.gif?alt=media&token=03233413-7ce2-4da3-93f9-cdb430c2db89"
                  class="card-img-top"
                  alt="..."
                />
                <div className="mainpgcardtxt">
                  <h1>Memory Game</h1>
                </div>
                <div class="card-body shadow-none componentcards">
                  <p class="card-text ">
                    “We do not stop playing because we are old, we grow old
                    because we stop playing” Get those grey cells to work and
                    create a challenge to match all the like pictures within the
                    lowest number of moves and bash the scoreboard!
                  </p>
                  <Link className="productCard" to="/memorygamepage">
                    <button className="main-button">Create Gift</button>{" "}
                  </Link>
                </div>
              </div>
            </div>

            <div class="col mb-4 " data-aos="fade-up-left">
              <div class="card shadow-none componentcards">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/imp%2Fslidepuzz.gif?alt=media&token=94a0c8b8-d680-4113-aa63-bb89d5b0a344"
                  class="card-img-top"
                  alt="..."
                />
                <div className="mainpgcardtxt">
                  <h1>15 tile puzzle</h1>
                </div>
                <div class="card-body shadow-none componentcards">
                  <p class="card-text ">
                    Our research tells us that puzzle lovers are 1000%
                    attractive, just like you! So if you and your special
                    someone love puzzles too, what are you even waiting for? Go
                    ahead and personalize your own 15-tile puzzle and record
                    your best scores. Maybe the one with the highest can have
                    the last slice of pizza!
                  </p>
                  <Link className="productCard" to="/slidepuzzlepage">
                    <button className="main-button">Create Gift</button>{" "}
                  </Link>
                </div>
              </div>
            </div>

            <div class="col mb-4 " data-aos="fade-up-right">
              <div class="card shadow-none componentcards">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/imp%2FthreeD.PNG?alt=media&token=3ef0492e-9919-4c5d-a441-d6f1b0d8e817"
                  class="card-img-top"
                  alt="..."
                />
                <div className="mainpgcardtxt">
                  <h1>3D Photo Frame</h1>
                </div>
                <div class="card-body shadow-none componentcards">
                  <p class="card-text ">
                    “Love is made up of three unconditional properties in equal
                    measure : Acceptance, Understanding and Appreciation”. A
                    symbolic component allowing you to project your favorite
                    picture onto 3D tiles and bring life to the image.
                  </p>
                  <Link className="productCard" to="/threedimagepage">
                    <button className="main-button">Create Gift</button>{" "}
                  </Link>
                </div>
              </div>
            </div>

            <div class="col mb-4 ">
              <div class="card shadow-none componentcards">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/imp%2Fpersonalised-rakhi-newspaper-9918857eg.jpg?alt=media&token=57382869-c91c-4043-95b0-77b05f17e871"
                  class="card-img-top"
                  alt="..."
                />
                <div className="mainpgcardtxt">
                  <h1>News Papers</h1>
                </div>
                <div class="card-body shadow-none componentcards">
                  <p class="card-text ">
                    What better way to express greetings than to announce it as
                    the newspaper headlines! Simply select an image, customize a
                    two liner message and behold the magic to be the news next
                    day morning!
                  </p>
                  <Link className="productCard" to="/newspaperpage">
                    <button className="main-button">Create Gift</button>{" "}
                  </Link>
                </div>
              </div>
            </div>

            <div class="col mb-4 " data-aos="fade-up-left">
              <div class="card shadow-none componentcards">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/imp%2Fcollagegif.gif?alt=media&token=5fbcb973-36a0-4c48-a565-c5868c783022"
                  class="card-img-top"
                  alt="..."
                />
                <div className="mainpgcardtxt">
                  <h1>Collage</h1>
                </div>
                <div class="card-body shadow-none componentcards">
                  <p class="card-text ">
                    Photographs are the stories that we fail to put in words.
                    Explore this feature to design a collage of pictures and
                    write a story of your own!
                  </p>
                  <Link className="productCard" to="/collagepage">
                    <button className="main-button">Create Gift</button>{" "}
                  </Link>
                </div>
              </div>
            </div>

            <div class="col mb-4 " data-aos="fade-up-right">
              <div class="card shadow-none componentcards">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/imp%2Fanimatedframegif.gif?alt=media&token=bafa0360-c449-4c4b-8d5e-d6bcd747d61d"
                  class="card-img-top"
                  alt="..."
                />
                <div className="mainpgcardtxt">
                  <h1>Animated Frames</h1>
                </div>
                <div class="card-body shadow-none componentcards">
                  <p class="card-text ">
                    Create an animated effect of two pictures with an underlying
                    text which surprises you everytime you hover on it!
                  </p>
                  <Link className="productCard" to="/animatedframePage">
                    <button className="main-button">Create Gift</button>{" "}
                  </Link>
                </div>
              </div>
            </div>

            <div class="col mb-4 ">
              <div class="card shadow-none componentcards">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/imp%2FgreetingCardgif.gif?alt=media&token=a0cf3864-72b8-4a18-a1da-3425fd480810"
                  class="card-img-top"
                  alt="..."
                />
                <div className="mainpgcardtxt">
                  <h1>Greeting Card</h1>
                </div>
                <div class="card-body shadow-none componentcards">
                  <p class="card-text ">
                    The cliche’ greeting cards never go out of style and is the
                    classic form to express your feelings. Make a customized
                    greeting card with a background music of your choice and win
                    the hearts of your special person
                  </p>
                  <Link className="productCard" to="/opengreetingcardpage">
                    <button className="main-button">Create Gift</button>{" "}
                  </Link>
                </div>
              </div>
            </div>

            <div class="col mb-4 " data-aos="fade-up-left">
              <div class="card shadow-none componentcards">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/update-image.appspot.com/o/imp%2Fspecialcaardgif.gif?alt=media&token=e004265d-6a48-425b-808b-46fc68ebc4ea"
                  class="card-img-top"
                  alt="..."
                />
                <div className="mainpgcardtxt">
                  <h1>Special card</h1>
                </div>
                <div class="card-body shadow-none componentcards">
                  <p class="card-text ">
                    A pleasant surprise is always welcome and your special
                    someone definitely deserves it more than anyone! Check out
                    this feature to spread affection and delight******
                  </p>
                  <Link className="productCard" to="/specialcardpage">
                    <button className="main-button">Create Gift</button>{" "}
                  </Link>
                </div>
              </div>
            </div>
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
