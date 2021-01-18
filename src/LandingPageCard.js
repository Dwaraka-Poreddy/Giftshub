import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LandingPageCard.css";
import { Link } from "react-router-dom";
import sample from "./Images/bgvideo.mp4";
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
                  <br />
                  <h4 class="card-title">{title}</h4>
                </div>
              </div>
            </div>
            <div class="backside">
              <div class="card">
                <div class="card-body text-center mt-4">
                  {/* <img style={{ width: "100%" }} src={gif} alt="" /> */}
                  <video
                    style={{ width: "100%", height: "auto" }}
                    className="videoTag"
                    autoPlay
                    loop
                    muted
                  >
                    <source src={sample} type="video/mp4" />
                  </video>{" "}
                  <br />
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
