import React, { useState, useEffect } from "react";
import Journey from "../Journey/Journey";
import Loader from "react-loader-spinner";
import firebase from "../firebase";
export default function LiveCubesPage({ match }) {
  const [t1, sett1] = useState("");
  const [t2, sett2] = useState("");
  const [t3, sett3] = useState("");
  const [t4, sett4] = useState("");
  const [t5, sett5] = useState("");
  const [heading, setheading] = useState("");
  const [fbimg1, setfbimg1] = useState("");
  const [fbimg2, setfbimg2] = useState("");
  const [fbimg3, setfbimg3] = useState("");
  const [fbimg4, setfbimg4] = useState("");
  const [fbimg5, setfbimg5] = useState("");
  const [fbimg6, setfbimg6] = useState("");
  const [loading, setloading] = useState(false);
  useEffect(async () => {
    setloading(true);
    const todoRef = await firebase
      .database()
      .ref("/Journey/" + match.params.slug)
      .once("value")
      .then((snapshot) => {
        var img1 = snapshot.val().url1;
        setfbimg1(img1);
        var img2 = snapshot.val().url2;
        setfbimg2(img2);
        var img3 = snapshot.val().url3;
        setfbimg3(img3);
        var img4 = snapshot.val().url4;
        setfbimg4(img4);
        var img5 = snapshot.val().url5;
        setfbimg5(img5);
        var img6 = snapshot.val().url6;
        setfbimg6(img6);
        var t1 = snapshot.val().t1;
        sett1(t1);
        var t2 = snapshot.val().t2;
        sett2(t2);
        var t3 = snapshot.val().t3;
        sett3(t3);
        var t4 = snapshot.val().t4;
        sett4(t4);
        var t5 = snapshot.val().t5;
        sett5(t5);
        var heading = snapshot.val().heading;
        setheading(heading);
      });
    setloading(false);
  }, []);
  return (
    <div style={{ backgroundColor: "#70cff3", height: "100vh" }}>
      <nav class="navbar navbar-expand-md bg-light navbar-light">
        <div class="container">
          <a class=" navbar-brand text-primary" href={`/`}>
            Gifts Hub Page
          </a>
        </div>
      </nav>
      <br />
      <br />
      <div>
        <div style={{ display: "flex" }}>
          <div style={{ flex: "0.15" }}></div>
          <div style={{ flex: "0.7" }}>
            {loading ? (
              <Loader
                type="BallTriangle"
                color="#00BFFF"
                height={100}
                width={100}
              />
            ) : (
              <Journey
                fbimg1={fbimg1}
                fbimg2={fbimg2}
                fbimg3={fbimg3}
                fbimg4={fbimg4}
                fbimg5={fbimg5}
                fbimg6={fbimg6}
                t1={t1}
                t2={t2}
                t3={t3}
                t4={t4}
                t5={t5}
                heading={heading}
              />
            )}
          </div>
          <div style={{ flex: "0.15" }}></div>
        </div>
      </div>
      <footer style={{ marginTop: "100px", padding: "30px 0" }}>
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
    </div>
  );
}
