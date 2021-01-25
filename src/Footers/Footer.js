import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faYoutube,
  faTwitter,
  faLinkedin,
  faWhatsapp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
export default function Footer() {
  return (
    <footer>
      <div class="footer-wrap">
        <div class="container first_class">
          <div class="row">
            <div class="col-md-4 col-sm-6">
              <h3>BE THE FIRST TO KNOW</h3>
              <p>
                Get all the latest information on Triedge Services, Events, Jobs
                and Fairs. Sign up for our newsletter today.
              </p>
            </div>
            <div class="col-md-4 col-sm-6">
              <form class="newsletter">
                <input type="text" placeholder="Email Address" />
                <button class="newsletter_submit_btn" type="submit">
                  <FontAwesomeIcon icon={faPaperPlane} />
                </button>
              </form>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="col-md-12">
                <div class="standard_social_links">
                  <div>
                    <li class="round-btn btn-facebook">
                      <a href="#">
                        <FontAwesomeIcon icon={faFacebook} />
                      </a>
                    </li>
                    <li class="round-btn btn-linkedin">
                      <a href="#">
                        <FontAwesomeIcon icon={faLinkedin} />
                      </a>
                    </li>
                    <li class="round-btn btn-twitter">
                      <a href="#">
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                    </li>
                    <li class="round-btn btn-instagram">
                      <a href="#">
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                    </li>
                    <li class="round-btn btn-whatsapp">
                      <a href="#">
                        <FontAwesomeIcon icon={faWhatsapp} />
                      </a>
                    </li>
                    <li class="round-btn btn-envelop">
                      <a href="#">
                        <FontAwesomeIcon icon={faEnvelope} />
                      </a>
                    </li>
                  </div>
                </div>
              </div>
              <div class="clearfix"></div>
              <div class="col-md-12">
                <h3 style={{ textAlign: "right" }}>Stay Connected</h3>
              </div>
            </div>
          </div>
        </div>
        <div class="second_class">
          <div class="container second_class_bdr">
            <div class="row">
              <div class="col-md-4 col-sm-6">
                <div class="footer-logo">
                  <img src={require("../Images/navbar-logo.svg")} alt="logo" />
                </div>
                <p>
                  Your one-stop career platform to find Jobs, Internships,
                  Professional Trainings, Projects, and Volunteering
                  Opportunities.
                </p>
              </div>
              <div class="col-md-2 col-6">
                <h3>Quick LInks</h3>
                <ul class="footer-links">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About us</a>
                  </li>

                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
              <div class="col-md-3 col-6">
                <h3>OUR SERVICES</h3>
                <ul class="footer-category">
                  <li>
                    <a href="#">Valentines Pack</a>
                  </li>
                  <li>
                    <a href="#">Recommended pack </a>
                  </li>
                  <li>
                    <a href="#">N-Day Pack</a>
                  </li>
                </ul>
                <div class="clearfix"></div>
              </div>
              <div class="col-md-3 col-sm-6">
                <h3>Contact Us</h3>
                <ul class="footer-links">
                  <li>
                    <a href="#">+918367770505</a>
                  </li>

                  <li>
                    <a href="#">contact.giftshub@gmail.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
