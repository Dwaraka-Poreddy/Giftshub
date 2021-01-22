import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import firebase from "firebase";
import { useHistory } from "react-router-dom";
import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
export default function DummyNavBar() {
  const [navstate, setnavstate] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);
  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setnavstate(true);
    } else {
      setnavstate(false);
    }
  };
  let dispatch = useDispatch();
  let history = useHistory();
  // spread operater
  let { user } = useSelector((state) => ({ ...state }));

  const logout = () => {
    firebase.auth().signOut();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    history.push("/login");
  };
  return (
    <div style={{ color: "red" }}>
      <nav
        class={
          !navstate
            ? "navbar navbar-expand-lg navbar-dark fixed-top"
            : "navbar navbar-expand-lg navbar-dark fixed-top navbar-shrink"
        }
        id="mainNav"
      >
        <div class="container">
          <a class="navbar-brand js-scroll-trigger" href={`/`}>
            <img src={require("../Images/navbar-logo.svg")} alt="" />
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
          <div
            class="collapse navbar-collapse"
            id="navbarSupportedContent-rasedul"
          >
            <ul class="navbar-nav ml-auto nav-flex-icons">
              <li class="nav-item active">
                <a class="nav-link js-scroll-trigger" href={`/`}>
                  HOME
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href={`/aboutus`}>
                  ABOUT US
                </a>
              </li>
              {!user ? (
                <>
                  <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" href={`/login`}>
                      LOGIN
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" href={`/register`}>
                      REGISTER
                    </a>
                  </li>
                </>
              ) : (
                <>
                  {" "}
                  <li class="nav-item">
                    <a
                      class="nav-link js-scroll-trigger"
                      href={`/userpackspage`}
                    >
                      MY PACKS
                    </a>
                  </li>
                  <li class="nav-item avatar dropdown">
                    <a
                      class="nav-link dropdown-toggle p-0"
                      id="navbarDropdownMenuLink-5"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {user.email.split("@")[0]}
                      {user.profilepic ? (
                        <img
                          width="40"
                          src={user.profilepic}
                          class="md-avatar rounded-circle ml-3"
                          alt="avatar image"
                        />
                      ) : (
                        <img
                          width="40"
                          src="https://banner2.cleanpng.com/20180327/ssq/kisspng-computer-icons-user-profile-avatar-profile-5ab9e3b05772c0.6947928615221318883582.jpg"
                          class="md-avatar rounded-circle ml-3"
                          alt="avatar image"
                        />
                      )}{" "}
                    </a>

                    <div
                      class="dropdown-menu dropdown-menu-right dropdown-secondary"
                      aria-labelledby="navbarDropdownMenuLink-5"
                    >
                      <li class="nav-item ">
                        <a class="nav-link" href="">
                          Your Profile
                        </a>
                      </li>
                      <li class="nav-item ">
                        {user && (
                          <a class="nav-link" href={`/userpackspage`}>
                            My Packs
                          </a>
                        )}
                      </li>
                      <li class="nav-item ">
                        {user && (
                          <a onClick={logout} class="nav-link" href={`/login`}>
                            Logout
                          </a>
                        )}
                      </li>
                    </div>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
