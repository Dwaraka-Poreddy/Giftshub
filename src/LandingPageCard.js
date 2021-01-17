import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LandingPageCard.css";
import { Link } from "react-router-dom";
function LandingPageCard({ img, gif, link, title, text, badge1, badge2 }) {
  return (
    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3">
      <Link to={link}>
        <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
          <div class="mainflip">
            <div class="frontside">
              <div class="card">
                <div class="card-body text-center">
                  <p>
                    <img class=" img-fluid" src={img} alt="card" />
                  </p>
                  <h4 class="card-title">{title}</h4>
                  <h5>
                    {badge1 && (
                      <span class="badge badge-primary">{badge1}</span>
                    )}

                    {badge2 && (
                      <span class="badge badge-primary">{badge2}</span>
                    )}
                  </h5>
                  <p class="card-text">{text}</p>
                </div>
              </div>
            </div>
            <div class="backside">
              <div class="card">
                <div class="card-body text-center mt-4">
                  <img style={{ width: "100%" }} src={gif} alt="" />
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
