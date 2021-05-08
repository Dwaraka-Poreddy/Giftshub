import React, { lazy, Suspense } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LandingPageCard.css";
import sample from "../Images/gift-removebg-preview.png";
import { Link } from "react-router-dom";

function LandingPageCard({ img, gif, link, title, text, badge1, badge2 }) {
  return (
    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 mt-3">
      <Link to={link}>
        <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
          <div class="mainflip">
            <div class="frontside">
              <div class="card">
                <div class="card-body text-center">
                  <img
                    style={{ width: "100%", height: "auto" }}
                    class=" img-fluid"
                    src={img}
                    alt="card"
                  />
                  <br />
                  <h4 class="card-title">{title}</h4>
                </div>
              </div>
            </div>
            <div class="backside">
              <div class="card">
                <div class="card-body text-center ">
                  <img
                    style={{ width: "70%", height: "auto" }}
                    class=" img-fluid"
                    src={sample}
                    alt="card"
                  />

                  <br />
                  <h5>
                    {badge1 && (
                      <p>
                        Good for {badge1} {badge2 && <>and {badge2}</>}{" "}
                      </p>
                    )}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default LandingPageCard;
